---
title: "Thoughts on JavaScript compilers"
cover: "1.jpg"
category: "JavaScript"
date: "2010-07-25"
slug: "2010/07/thoughts-on-javascript-compilers/"
tags:
    - JavaScript
    - Programming
    - Thoughts
---
<p>I think JavaScript compilers sort of defeat the purpose of a programming language. I can understand that you would want to compress JavaScript to save download time on the client side. 

However, it seems strange to me that another programming language writes code in another, higher level language. If the JavaScript you write is good and not highly redundant, another PL wont be able to generate it. The only place where it seems useful to me is when creating variables' values like a count or an array of file names or similar. However, generating JavaScript from PHP or any other server side language seems to defeat the purpose of reusable code. You can in fact write highly re-usable code in JavaScript, it supports inheritance etc and libraries like jQuery make it highly compact. When it comes to deployment though, it is beneficial to have a script running that compresses the JavaScript.</p>
<p>Anyway, let me know your thoughts in a comment.</p>
