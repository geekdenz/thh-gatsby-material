---
layout: post
status: publish
published: true
title: Thoughts on JavaScript compilers
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: http://www.ihostnz.com
author_login: Tim
author_email: th.heuer@gmail.com
author_url: http://www.ihostnz.com
wordpress_id: 13
wordpress_url: http://www.ihostnz.com/blog/?p=13
date: '2010-07-25 21:35:14 +1200'
date_gmt: '2010-07-25 09:35:14 +1200'
categories:
- JavaScript
- Programming
tags: [JavaScript,Programming,Thoughts]
comments:
- id: 3
  author: Jevon
  author_email: jevon@jevon.org
  author_url: http://www.jevon.org
  date: '2010-07-26 00:47:22 +1200'
  date_gmt: '2010-07-25 12:47:22 +1200'
  content: ! "What do you mean by \"Javascript compiler\"? It seems you are mixing
    a number of terms together. There are Javascript recompilers, which remove unused
    methods and variables; Javascript reformatters, which remove comments and whitespace;
    Javascript generators, which take some source (of any language) and generates
    Javascript; and Javascript compilers, which are compilers written in Javascript
    (emulators, for example).\r\n\r\nRemember that not every browser implements Javascript
    the same. HTML5 Javascript is different to HTML4+Google Gears Javascript, for
    example. Generating Javascript at server request time allows for a more efficient
    script to be sent to the server, and you wouldn't have to maintain multiple versions
    for each platform.\r\n\r\nGenerating Javascript isn't useful for all situations,
    of course. But it's not useless for all situations, either."
- id: 4
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2010-07-26 08:50:42 +1200'
  date_gmt: '2010-07-25 20:50:42 +1200'
  content: ! 'By JavaScript compiler I meant something like this: http://pyjs.org/
    .


    And yes, you have a point. Haven''t thought about this: "Remember that not every
    browser implements Javascript the same. HTML5 Javascript is different to HTML4+Google
    Gears Javascript, for example. Generating Javascript at server request time allows
    for a more efficient script to be sent to the server, and you wouldn’t have to
    maintain multiple versions for each platform.". I assume you meant client and
    not server here.'
- id: 6
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2010-08-06 18:57:50 +1200'
  date_gmt: '2010-08-06 06:57:50 +1200'
  content: Just had a look again at a particular compiler for OpenLayers. In this
    case it is very useful because you can declare the classes you need from OpenLayers
    and it compiles a minified version of it. Compile might be the wrong word here
    as it is merely minified or built with the help of a python script. You have to
    declare your classes in a separate file. It would be nice to be able to give it
    simply another JavaScript file which it examines for classes used, then one woudln't
    have to do the analysis any more.
---
<p>I think JavaScript compilers sort of defeat the purpose of a programming language. I can understand that you would want to compress JavaScript to save download time on the client side. 

However, it seems strange to me that another programming language writes code in another, higher level language. If the JavaScript you write is good and not highly redundant, another PL wont be able to generate it. The only place where it seems useful to me is when creating variables' values like a count or an array of file names or similar. However, generating JavaScript from PHP or any other server side language seems to defeat the purpose of reusable code. You can in fact write highly re-usable code in JavaScript, it supports inheritance etc and libraries like jQuery make it highly compact. When it comes to deployment though, it is beneficial to have a script running that compresses the JavaScript.</p>
<p>Anyway, let me know your thoughts in a comment.</p>
