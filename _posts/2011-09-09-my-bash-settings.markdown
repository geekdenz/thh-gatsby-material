---
layout: post
status: publish
published: true
title: My bash settings
author:
  display_name: Tim
  login: admin
  email: th.heuer@gmail.com
  url: ''
author_login: admin
author_email: th.heuer@gmail.com
wordpress_id: 109
wordpress_url: http://www.thheuer.com/?p=109
date: '2011-09-09 11:31:29 +1200'
date_gmt: '2011-09-08 23:31:29 +1200'
categories:
- Settings
tags: [Settings,BASH]
comments: []
---
<p>Here my bash settings for future reference.</p>

{% highlight bash %}
# ~/.bashrc
export PATH=$PATH:"/cygdrive/c/Program Files/Vim/vim73"
# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
{% endhighlight %}
