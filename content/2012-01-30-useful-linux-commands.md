---
title: "Useful Linux Commands"
cover: "1.jpg"
category: "Uncategorized"
date: "2012-01-30"
slug: "2012/01/useful-linux-commands/"
tags:
    - Linux
    - Commands
---
<p>See here how to mount a temporary file system in memory.</p>

{% highlight bash %}
mkdir /tmp/ramdisk; chmod 777 /tmp/ramdisk
mount -t tmpfs -o size=256M tmpfs /tmp/ramdisk/
{% endhighlight %}
<p>Read more: <a target="_blank" href="http://www.linuxscrew.com/2010/03/24/fastest-way-to-create-ramdisk-in-ubuntulinux/#ixzz1ktjbieMM">Linux Screw</a></p>
