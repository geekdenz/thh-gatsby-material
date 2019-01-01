---
title: "SMTP Postfix Server Setup for your home development"
cover: "1.jpg"
category: "Linux"
date: "2012-03-18"
slug: "2012/03/smtp-postfix-server-setup-for-your-home-development/"
tags:
    - Linux
    - Howto
    - Email
    - Programming
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
