---
layout: post
status: publish
published: true
title: SMTP Postfix Server Setup for your home development
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: ''
author_login: admin
author_email: Tim@ihostnz.com
wordpress_id: 186
wordpress_url: http://www.thheuer.com/?p=186
date: '2012-03-18 14:23:23 +1300'
date_gmt: '2012-03-18 02:23:23 +1300'
categories:
- Linux
- Howto
tags: [Linux,Howto,Email,Programming]
comments:
- id: 4499
  author: Set Up Postfix to Solve Blocked Port 25 Issue, and Send Emails from Localhost.
    | Buzu&#8217;s Oficial Blog
  author_email: ''
  author_url: http://imbuzu.wordpress.com/2012/04/19/set-up-postfix-to-solve-blocked-port-25-issue-and-send-emails-from-localhost/
  date: '2012-04-19 22:27:09 +1200'
  date_gmt: '2012-04-19 10:27:09 +1200'
  content: ! '[...] http://www.thheuer.com/2012/03/smtp-postfix-server-setup-for-your-home-development/
    Where I found the answer to the problem. I must admit that before trying this
    out, I continued wasting time trying some other stupid things, like the aforementioned
    about localdomain as relyhost. Why? Pure lazines. I didn&#8217;t want to follow
    through the steps outlined on that post. Shame on me! [...]'
- id: 20579
  author: nemesis
  author_email: nemesis@mail.com
  author_url: ''
  date: '2012-11-25 11:46:15 +1300'
  date_gmt: '2012-11-24 23:46:15 +1300'
  content: Thanks, my institution blocked the port 25 for outgoing mail and this tutorial
    worked like a charm!
---
<p>EDIT:</p>
<p>This is much easier if not trivial to achieve with your ISP's smtp server and configuring postfix as a smart host and simply supplying your ISP's smtp server as the smart host.</p>

<p>A simple:</p>
{% highlight bash %}sudo apt-get install postfix{% endhighlight %}
<p>and then configuring you server as a smart host relaying mail to smtp.yourisp.com.</p>
<p>If you already installed postfix, you can follow the following:</p>
<h1>Note that You might not want to use dnsexit if security is a concern for you. I stumbled upon this now (28 July 2012) and realised that if you use dnsexit, you are basically giving them your credentials. So, be warned. I used my own server for this.</h1>
<div></div>
<p>Source: http://www.dnsexit.com/support/mailrelay/postfix.html</p>
<p>This document describes 5 easy steps to setup your Postfix email server as smarthost to relay on DNS Exit mail relay server for all email sending.</p>
<p>The mail relay service from dnsExit.com can be found at <strong>here</strong></p>
<pre><strong>1. Create password maps file</strong> (it assigns username/passwords to
specified mail servers). You can choose any name, let's say it
is /etc/postfix/relay_passwd. It's content should be as follows:</pre>
<pre> relay.dnsexit.com USERNAME:PASSWORD 

 <strong>Note:</strong> Replace USERNAME and PASSWORD with your DNS EXIT mail
relay username and PASSWORD.   

<strong>2. Set proper permissions for that file:</strong>
# chown root:root /etc/postfix/relay_passwd
# chmod 600 /etc/postfix/relay_passwd     

<strong>3. Create hash from maps file</strong> (remember to do it each time
you change your maps file):
#  postmap /etc/postfix/relay_passwd   

<strong>4. Configure your /etc/postfix/main.cf:</strong>
relayhost = [relay.dnsexit.com]  # this is the important line!
smtp_sasl_auth_enable = yes
smtp_sasl_password_maps = hash:/etc/postfix/relay_passwd
smtp_sasl_security_options =    

<strong>Note:</strong> If your ISP blocks outgoing port 25. You can choose to
use alternative SMTP ports by appending the port at the end:
relayhost = [relay.dnsexit.com]:26

<strong>5. Reload or restart your postfix:</strong>
# /etc/init.d/postfix restart</pre>
<p>The thing to note here is that you can easily use your ISP's smtp server as the relayhost. You can find out easily what your ISP's smtp server is by going to their support pages.</p>
