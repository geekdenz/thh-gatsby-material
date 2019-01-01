---
layout: post
status: publish
published: true
title: ! 'Howto: Postfix aliases setup email account'
author:
  display_name: Tim
  login: tim
  email: th.heuer@gmail.com
  url: ''
author_login: admin
author_email: Tim@ihostnz.com
wordpress_id: 59
wordpress_url: http://www.ihostnz.com/blog/?p=59
date: '2010-12-25 17:24:34 +1300'
date_gmt: '2010-12-25 05:24:34 +1300'
categories:
- Linux
- Howto
tags: [Howto,Linux,Email]
comments: []
---
<p>See here how to setup an email account with Postfix, the popular email server.</p>

<p>Edit /etc/postfix/virtual.cf .</p>
{% highlight bash %}vim /etc/postfix/virtual.cf{% endhighlight %}
<p>Add line:</p>
{% highlight bash %}user@example.com localusername{% endhighlight %}
{% highlight bash %}postmap /etc/postfix/virtual.cf{% endhighlight %}
{% highlight bash %}vim /etc/aliases{% endhighlight %}
<p>Add line:</p>
{% highlight bash %}localusername: someother@othersite.com{% endhighlight %}
{% highlight bash %} {% endhighlight %}
{% highlight bash %}newaliases{% endhighlight %}
