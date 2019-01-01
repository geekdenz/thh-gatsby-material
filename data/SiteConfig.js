module.exports = {
  siteTitle: "Teal Hat Hacker", // Site title.
  siteTitleShort: "THH", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Tim-Hinnerk Heuer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://thheuer.com", // Domain of your website without pathPrefix.
  pathPrefix: "/thh", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Teal Hat Hacker works on making the web a better place for spiders.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "dcoder.nz", // FB Application ID for using app insights
  siteGATrackingID: "UA-29153949-1", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Tim", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Antarctica, Earth", // User location to display in the author segment.
  userAvatar: "https://en.gravatar.com/userimage/17459642/2a4467b198b6feda4fce7343d8227cf4.jpeg", // User avatar to display in the author segment.
  userDescription:
    "I like who I like, when I like.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/geekdenz/",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/geekdenz",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:th.heuer@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Teal Hat Hacker" // Copyright string for the footer of the website and RSS feed.
};
