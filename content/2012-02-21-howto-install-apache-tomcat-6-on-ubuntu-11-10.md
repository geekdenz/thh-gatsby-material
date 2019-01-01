---
title: "Howto: Install Apache Tomcat 6 on Ubuntu 11.10"
cover: "1.jpg"
category: "Linux"
date: "2012-02-21"
slug: "2012/02/howto-install-apache-tomcat-6-on-ubuntu-11-10/"
tags:
    - Linux
    - Howto
    - Java
    - Programming
---
<p>This post describes how to instal Apache Tomcat 6 on Ubuntu 11.10.</p>

<ol style="margin-top:40px">
<li>Download Tomcat 6 from http://tomcat.apache.org/download-60.cgi or a mirror listed there.</li>
<li>Extract it in the /usr/local directory:<br/>
{% highlight bash %}
cd /usr/local/
sudo tar xvfz ~/apache-tomcat-6.0.35.tar.gz # or wherever you downloaded tomcat to
sudo ln -s apache-tomcat-6.0.35 apache-tomcat-6 # or whatever your tomcat version is
{% endhighlight %}
</li>
</ol>
<p>This post is incomplete, but might get you going. More docs can be found @ <a href="http://www.eclipse.org/forums/index.php/t/272457/" target="_blank">http://www.eclipse.org/forums/index.php/t/272457/</a></p>
