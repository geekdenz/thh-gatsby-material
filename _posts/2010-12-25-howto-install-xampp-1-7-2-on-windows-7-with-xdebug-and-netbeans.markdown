---
layout: post
status: publish
published: true
title: ! 'Howto: Install XAMPP 1.7.2 on Windows 7 with XDebug and Netbeans'
author:
  display_name: Tim
  login: tim
  email: th.heuer@gmail.com
  url: ''
author_login: admin
author_email: Tim@ihostnz.com
wordpress_id: 62
wordpress_url: http://www.ihostnz.com/blog/?p=62
date: '2010-12-25 17:26:46 +1300'
date_gmt: '2010-12-25 05:26:46 +1300'
categories:
- PHP
- Programming
tags: [Howto,Windows,PHP]
comments:
- id: 2101
  author: ksho
  author_email: swat_2005_@hotmail.com
  author_url: ''
  date: '2011-08-09 22:18:51 +1200'
  date_gmt: '2011-08-09 10:18:51 +1200'
  content: Can you explain step 5 again? I dont get the add:zend_extention part. where
    am I suppose to add that to?
- id: 2102
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2011-08-09 22:41:48 +1200'
  date_gmt: '2011-08-09 10:41:48 +1200'
  content: ! 'Good point! You need to add those lines to the php.ini file. I edited
    it now so you can at least copy/paste it and it''s a bit more understandable.
    I will need to revise these pages...

    Thanks!'
- id: 4872
  author: Noname Noshame
  author_email: kachrapethi@gmail.com
  author_url: http://mhief.com
  date: '2012-06-02 16:34:28 +1200'
  date_gmt: '2012-06-02 04:34:28 +1200'
  content: ! "If Netweaver fails to connect to XDebug, you may wish to check the Apache
    logs for occurrences of something like: Cannot load Xdebug - it was built with
    configuration API220090626,TS,VC6, whereas running engine is API220090626,TS,VC9\r\n[Fri
    Jun 01 18:38:05 2012] [notice] Child 3404: Child process is running\r\n\r\nTo
    remedy this, pick the right version of the XDebug binary from the XDebug website
    (try a few combinations till you get it working)"
---
<p>Hi,</p>
<p>Just for my own reference and some other poor people out there trying to get this to work:</p>

<ol>
<li>Download XAMPP 1.7.2 from <a href="http://sourceforge.net/projects/xampp/files/XAMPP%20Windows/1.7.2/xampp-win32-1.7.2.exe/download">sourceforge.net/projects/xampp/files/XAMPP%20Windows/1.7.2/xampp-win32-1.7.2.exe/download</a></li>
<li>Install</li>
<li>Download php_xdebug-2.0.5-5.3-vc6.dll from <a href="http://xdebug.org/download.php">xdebug.org/download.php</a></li>
<li>Place it in C:\xampp\php\ext</li>
<li>Edit C:\xampp\php\php.ini add:<br/>zend_extension = "C:\xampp\php\ext\php_xdebug-2.0.5-5.3-vc6.dll"[xdebug]
<p>xdebug.remote_enable=on</p>
<p>xdebug.remote_host=127.0.0.1</p>
<p>xdebug.remote_port=9000</p>
<p>xdebug.remote_handler="dbgp"</li>
<li>Enjoy!</li>
</ol>
