---
title: "Howto: Install XAMPP 1.7.2 on Windows 7 with XDebug and Netbeans"
cover: "1.jpg"
category: "PHP"
date: "2010-12-25"
slug: "2010/12/howto-install-xampp-1-7-2-on-windows-7-with-xdebug-and-netbeans/"
tags:
    - Howto
    - Windows
    - PHP
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
