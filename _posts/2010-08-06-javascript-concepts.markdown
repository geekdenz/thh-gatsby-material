---
layout: post
status: publish
published: true
title: JavaScript Concepts
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: http://www.ihostnz.com
author_login: Tim
author_email: th.heuer@gmail.com
author_url: http://www.ihostnz.com
wordpress_id: 31
wordpress_url: http://www.ihostnz.com/blog/?p=31
date: '2010-08-06 22:03:13 +1200'
date_gmt: '2010-08-06 10:03:13 +1200'
categories:
- JavaScript
- Programming
tags: [JavaScript,Programming]
comments: []
---
<p>Having learned JavaScript mainly by doing, it was quite late that I figured out some important details. Please comment if you think or know that I'm wrong.</p>

<p>The arguments array as well as the caller instance are universal variables inside every JavaScript function. The names are self-explanatory.<br />
An anonymous function inside another function keeps the variables in scope as in:</p>
{% highlight javascript %}
// javascript
var somefunction = function(arg1) {
  var avar1 = 10;  
  object.onclick = function() {
    alert('arg1=' + arg1 + ' avar1=' + avar1);
  }
}
somefunction('Foo');
// "arg1=Foo avar1=10" when object is clicked on
{% endhighlight %}
<p>So this means that the scope of the function defines what variables can be accessed within it, even after the function call has finished.</p>
<p>Another part I always found confusing in JavaScript is the "this"-keyword, but that might have to be the topic of another post.</p>
