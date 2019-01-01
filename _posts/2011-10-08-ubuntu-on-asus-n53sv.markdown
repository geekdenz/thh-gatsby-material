---
layout: post
status: publish
published: true
title: Ubuntu on Asus N53S(V)
author:
  display_name: Tim
  login: admin
  email: th.heuer@gmail.com
  url: ''
author_login: admin
author_email: Tim@ihostnz.com
wordpress_id: 122
wordpress_url: http://www.thheuer.com/?p=122
date: '2011-10-08 16:10:36 +1300'
date_gmt: '2011-10-08 04:10:36 +1300'
categories:
- Linux
- Howto
- Settings
tags: [Linux,Howto,Settings,Ubuntu,Laptop]
comments: []
---
<p>To install Ubuntu with a working NVIDIA card on this laptop. Follow these instructions:</p>

<ol>
<li>Follow <a href="https://help.ubuntu.com/community/Asus_N53" target="_blank">https://help.ubuntu.com/community/Asus_N53</a></li>
<li>Add this to your modules blacklist in /etc/modprobe.d/blacklist.conf:
<pre lang="bash">blacklist nouveau
blacklist fbcon
blacklist vga16fb</pre>
</li>
<li>Run 3D Graphics intensive applications like Google Earth with
<pre lang="bash">optirun google-earth</pre>
</li>
<li>Optional: Mount Windows NTFS partition in /etc/fstab:
<pre lang="bash">
/dev/sda5       /d      ntfs    noexec,nosuid   0       0</pre>
</li>
</ol>
<p>Edit: You might not need to add the blacklist. I've just setup 11.04 64 bit and did not black list the drivers and it works! Remember to NOT enable the additional drivers in this setup because it will override your Intel Drivers, which are good because you can still run 3D apps but with less power consumption.</p>
