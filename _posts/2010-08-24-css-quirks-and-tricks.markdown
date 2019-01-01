---
layout: post
status: publish
published: true
title: CSS Quirks And Tricks
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: http://www.ihostnz.com
author_login: Tim
author_email: th.heuer@gmail.com
author_url: http://www.ihostnz.com
wordpress_id: 41
wordpress_url: http://www.ihostnz.com/blog/?p=41
date: '2010-08-24 09:56:22 +1200'
date_gmt: '2010-08-23 21:56:22 +1200'
categories:
- CSS
tags: [CSS,Tricks]
comments: []
---
<p>This is to document some CSS tricks and quirks that can be used to optimize a site's look. This post aims at documenting all the little tricks that I found out through the Internet or by myself for easy reference.</p>

<h2>Avoid overflow effect</h2>
<p>The best way to fix this seems to be to force the scrollbar to be on in Firefox (and other browsers). You simply add the following to your CSS:</p>
{% highlight css %}
/* CSS */
html {
  /* needed for it not to jump pixels */
  height: 100%; 
  margin-bottom: 1px;
}
body {
  /* needed for it not to jump pixels */
  height: 100%; 
  margin-bottom: 1px;
}
{% endhighlight %}
<p>Avoiding overflow in the body to move the content to the left when a scrollbar is shown is done by giving the body a slightly smaller width. This is not a beautiful solution but should work in most scenarios. E.g.</p>
{% highlight css %}
/* CSS */
body {
  width: 95%;
}
{% endhighlight %}
<h2>Internet Explorer clear fix</h2>
<p>It took me a while to figure out how to fix this in IE. The problem is that IE does not render a div on the next line if you do a clear: right on the last div in a line.<br />
To fix this issue, you need to create another element after the last element in a row:</p>
{% highlight css %}
/* CSS */
.col1 {
  float: left;
}
.col2 {
  float: left;
}
br {
  clear: both;
  display: inline;
}
{% endhighlight %}
{% highlight html %}
<!-- HTML -->
<div class="col1">some content</div>
<div class="col2">other content</div>
<div class="col1">some more content</div>
<div class="col2">more other content</div>
<div class="col1">even more content</div>
<div class="col2">even more other content</div>
<div class="col1">some content</div>
<div class="col2">other content</div>
<div class="col1">some more content</div>
<div class="col2">more other content</div>
<div class="col1">even more content</div>
<div class="col2">even more other content</div>
{% endhighlight %}
