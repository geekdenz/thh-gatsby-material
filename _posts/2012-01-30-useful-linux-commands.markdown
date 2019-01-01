---
layout: post
status: publish
published: true
title: Useful Linux Commands
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: ''
author_login: admin
author_email: Tim@ihostnz.com
wordpress_id: 143
wordpress_url: http://www.thheuer.com/?p=143
date: '2012-01-30 12:48:18 +1300'
date_gmt: '2012-01-30 00:48:18 +1300'
categories:
- Uncategorized
tags: [Linux,Commands]
comments: []
---
<p>See here how to mount a temporary file system in memory.</p>

{% highlight bash %}
mkdir /tmp/ramdisk; chmod 777 /tmp/ramdisk
mount -t tmpfs -o size=256M tmpfs /tmp/ramdisk/
{% endhighlight %}
<p>Read more: <a target="_blank" href="http://www.linuxscrew.com/2010/03/24/fastest-way-to-create-ramdisk-in-ubuntulinux/#ixzz1ktjbieMM">Linux Screw</a></p>
