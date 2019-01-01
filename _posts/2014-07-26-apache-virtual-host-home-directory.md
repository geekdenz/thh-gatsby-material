---
layout: post
status: publish
published: true
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: http://www.thheuer.com
author_login: Tim
author_email: th.heuer@gmail.com
author_url: http://www.thheuer.com
categories:
- Howto
tags: [Howto,HTTP,Apache2,Web,Server,Configuration,VirtualHost]
comments: []
---
Apache configuration is not always easy. So, this post is dedicated to
Apache the VirtualHost Directive. For now I will keep it simple and
just show you how to set up a VirtualHost in your home directory
since that has changed with the new version and it is not obvious
what you need to do.

{% highlight xml linenos %}

<VirtualHost *:80>
     ServerName www.example.com
     ServerAlias example.com
     DocumentRoot "/var/www/example.com"
     <Directory   "/var/www/example.com">
         Order allow,deny
         Allow from all
         Require all granted
         Options +FollowSymLinks +Includes +Multiviews
         AllowOverride All
     </Directory>
</VirtualHost>

{% endhighlight %}

To explain
===========

Line 1: Opening tag for a XML-like configuration object, \*:80 just means on
every IP address (\*) and :80 port 80 which is the default for HTTP.

Line 2: ServerName is pretty self-explanatory. It means the host name you want
to choose.

Line 3: ServerAlias is an alternative name.

Line 4: DocumentRoot is you path to where your HTML documents live. Of course
you could have PHP and other dynamic scripts there too.

Line 5: <Directory ${PATH}> This can usually be the same as DocumentRoot
but gives more control over the directory's configuration.

Line 6: Prioritises allowing access.

Line 7: Allows access from all hosts which is probably what you want, since it's
a public site, but here you can restrict hosts.

Line 8: This is new. To be honest, I'm not sure what this means, but it made the
VirtualHost work in my home directory, which prompted me to write this post.

Line 9:
{% highlight xml %}Options
+FollowSymlinks means to allow symbolic links
+Includes       means to allow SSIs (Server Side Includes)
+MultiViews     means to allow sample/index.html
                to be viewed as sample/
                This makes for nicer URLs.
{% endhighlight %}

Line 11 & 12: XML closing tags.
