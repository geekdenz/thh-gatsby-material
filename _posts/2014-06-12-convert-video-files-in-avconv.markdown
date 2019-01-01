---
layout: post
status: publish
published: true
title: Convert Video Files with avconv
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: http://www.ihostnz.com
author_login: Tim
author_email: th.heuer@gmail.com
author_url: http://www.ihostnz.com
wordpress_id: 273
wordpress_url: http://www.thheuer.com/?p=273
date: '2014-06-12 15:30:42 +1200'
date_gmt: '2014-06-12 02:30:42 +1200'
categories:
- Howto
tags: [Howto,Video]
comments: []
---
<p>It's always frustrating to find out how to convert video files from one format to another or resize your videos that you want to upload to youtube at maximum quality but minimal file size.</p>

<p>So, here some avconv settings to remember or use to convert an mkv file to avi (stereo):</p>
{% highlight bash %}
avconv -i input.mkv -b:v 4000k -c:a \
libmp3lame -b:a 320k -ac 2 -s 720x480 out.avi
{% endhighlight %}
<ul>
<li>-i = input file</li>
<li>-b:v = bitrate video (4000k = 4MBit/s = 4000KBit/s)</li>
<li>-c:a = codec audio (libmp3lame = mp3)</li>
<li>-b:a = bitrate audio (320k = 320KBit/s)</li>
<li>-ac 2 = audio channels 2</li>
<li>-s 720x480 = size 480p</li>
</ul>
