---
layout: post
status: publish
published: true
title: Install PostGIS on Ubuntu 14.04
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: http://www.ihostnz.com
author_login: Tim
author_email: th.heuer@gmail.com
author_url: http://www.ihostnz.com
wordpress_id: 267
wordpress_url: http://www.thheuer.com/?p=267
date: '2014-05-27 14:22:54 +1200'
date_gmt: '2014-05-27 01:22:54 +1200'
categories:
- Howto
tags: [Howto,Ubuntu,GIS,PostGIS]
comments: []
---
<p>I ran into this error after installing just the package postgis on Ubuntu 14.04:<br />
<strong><br />
ERROR: could not open extension control file "/usr/share/postgres/9.1/extension/postgis.control": No such file or directory<br />
</strong>

<br />
To resolve this, just install the other necessary packages:</p>
{% highlight bash %}
sudo apt-get install postgresql-9.3-postgis-2.1 \
postgresql-9.3-postgis-2.1-scripts postgis
{% endhighlight %}
