---
title: "Install PostGIS on Ubuntu 14.04"
cover: "1.jpg"
category: "Howto"
date: "2014-05-27"
slug: "2014/05/install-postgis-on-ubuntu-14-04/"
tags:
    - Howto
    - Ubuntu
    - GIS
    - PostGIS
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
