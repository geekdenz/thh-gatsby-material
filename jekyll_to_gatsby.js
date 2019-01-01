const fm = require('front-matter')
const fs = require('fs')

const base = filename => {
    const f = filename.split('/').slice(-1)[0]
    return f
}

const getDate = filename => {
    const f = base(filename)
    return f.substring(0, '2019-01-01'.length)
}

const writeBlogPost = jekyllPostFile => {
    const content = fs.readFileSync(jekyllPostFile, 'utf8')
    const matter = fm(content)
    const {
        title,
        tags
    } = matter.attributes
    const category = matter.attributes.categories[0]
    const date = getDate(jekyllPostFile)
    const cover = '1.jpg'
    const part1 = date.split('-').slice(0, 2).join('/')
    const part2 = base(jekyllPostFile).substring(11).split('.').slice(0, -1).join('')
    const slug = `${part1}/${part2}/`
    // slug
    const gatsbyAtt = {
        title,
        cover,
        category,
        date,
        slug,
    }
    const tagsStr = tags.map(t => `    - ${t}`).join('\n')
    const withoutTags = Object.keys(gatsbyAtt).map(key => `${key}: "${gatsbyAtt[key]}"`).join('\n')
    const result = `---\n${withoutTags}\ntags:\n${tagsStr}\n---\n${matter.body}`
    const b = base(jekyllPostFile).split('.')[0]
    const targetFile = `content/${b}.md`
    fs.writeFileSync(targetFile, result, 'utf8')
}

const posts = fs.readdirSync('_posts').map(f => `_posts/${f}`)
posts.map(writeBlogPost)