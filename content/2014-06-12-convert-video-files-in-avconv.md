---
title: "Convert Video Files with avconv"
cover: "1.jpg"
category: "Howto"
date: "2014-06-12"
slug: "2014/06/convert-video-files-in-avconv/"
tags:
    - Howto
    - Video
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
