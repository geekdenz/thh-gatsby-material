---
title: "Howto: Solving problem with logrotate"
cover: "1.jpg"
category: "Linux"
date: "2010-12-25"
slug: "2010/12/howto-solving-problem-with-logrotate/"
tags:
    - Howto
    - Linux
---
<p>Here you can find out how to solve a common problem with logrotate</p>

<pre lang="bash">/etc/cron.daily/logrotate:

error: error running shared postrotate script for /var/log/mysql.log
/var/log/mysql/mysql.log /var/log/mysql/mysql-slow.log

run-parts: /etc/cron.daily/logrotate exited with return code 1</pre>
<p>Have you been getting this cryptic error message before?</p>
<p>Here is how to get rid of it:</p>
<p>View /etc/mysql/debian.cnf. Look for</p>
<pre lang="bash">user     = debian-sys-maint
password = newpass</pre>
<p>Log into mysql as root</p>
<pre lang="bash">mysql -uroot -p</pre>
<pre lang="mysql">SET PASSWORD FOR `debian-sys-maint`@`localhost` = PASSWORD('newpass');
SET PASSWORD FOR `debian-sys-maint`@`%` = PASSWORD('newpass');
FLUSH PRIVILEGES;</pre>
<p>Log out and it should be fixed.</p>
