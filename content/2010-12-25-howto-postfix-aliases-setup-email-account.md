---
title: "Howto: Postfix aliases setup email account"
cover: "1.jpg"
category: "Linux"
date: "2010-12-25"
slug: "2010/12/howto-postfix-aliases-setup-email-account/"
tags:
    - Howto
    - Linux
    - Email
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
