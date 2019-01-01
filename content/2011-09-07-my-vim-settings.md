---
title: "My VIM Settings"
cover: "1.jpg"
category: "Uncategorized"
date: "2011-09-07"
slug: "2011/09/my-vim-settings/"
tags:
    - Editor
    - VIM
    - Settings
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
