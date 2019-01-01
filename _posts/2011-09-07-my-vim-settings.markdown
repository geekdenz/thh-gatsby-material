---
layout: post
status: publish
published: true
title: My VIM Settings
author:
  display_name: Tim 
  login: tim
  email: th.heuer@gmail.com
  url: ''
author_login: tim
author_email: th.heuer@gmail.com
wordpress_id: 99
wordpress_url: http://www.thheuer.com/?p=99
date: '2011-09-07 16:25:48 +1200'
date_gmt: '2011-09-07 04:25:48 +1200'
categories:
- Uncategorized
tags: [Editor,VIM,Settings]
comments: []
---
<p>Here my vim Settings.</p>

{% highlight bash %}
# ~/.vimrc
set ignorecase
set tabstop=2
set shiftwidth=2
set autoindent
set expandtab
imap <c-space> <c-x><c-o>
autocmd FileType php set omnifunc=phpcomplete#CompletePHP
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType php set omnifunc=phpcomplete#CompletePHP
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
{% endhighlight %}
<p><a href="http://shang-liang.com/blog/using-vim-as-actionscript-editor/" target="_blank">http://shang-liang.com/blog/using-vim-as-actionscript-editor/</a></p>
