---
layout: post
status: publish
published: true
title: Micro-Optimization For High-Level-Language Programmers
author:
  display_name: Tim
  login: tim
  email: th.heuer@gmail.com
  url: ''
author_login: tim
author_email: th.heuer@gmail.com
wordpress_id: 47
wordpress_url: http://www.ihostnz.com/blog/?p=47
date: '2010-10-01 19:50:04 +1300'
date_gmt: '2010-10-01 07:50:04 +1300'
categories:
- Programming
tags: [Programming]
comments:
- id: 491
  author: admin
  author_email: Tim@ihostnz.com
  author_url: ''
  date: '2011-01-21 15:07:15 +1300'
  date_gmt: '2011-01-21 03:07:15 +1300'
  content: ! "Added:\r\nfor (var i = -1, leni = somevar.length; ++i < leni;) {\r\n
    \ // do something with somevar[i]\r\n  // THIS SAVES 20% PERFORMANCE FOR EACH
    LOOP!\r\n}\r\nbecause I tested it with a PHP script."
---
<p>In this post I would like to point out some optimizations that seem to be fairly generic. Every average to advanced level programmer should be able to use these little tricks quite effectively. Code that is well written and thought of can be called great code if it takes advantage of every byte available.</p>

<p>However, one should also not overdo optimization, because the gain of 1ms cannot make up for half an hour that you spend more on programming it. But if you get used to using these techniques from now on, you should be good. So lets get to it.</p>
<h2>Choosing the right algorithm</h2>
<p>... is probably the best optimization you can be doing when writing code. Before you think of saving at the register level, think about how efficient the algorithm is that you are using. For example using quick sort for sorting elements is probably a good idea, rather than using slower algorithms like bubble or insertion sort. If you are using a high-level-language (HLL) like PHP, you would probably want to use the internal *sort() functions. They use quick sort on a low level (written in C). For example, suppose you have an array with 1000 variables (which can be objects, primitives or arrays) and you want to sort it by your own sorting order algorithm. Instead of going through great lengths of searching for an implementation of a sort algorithm online or even writing your own, in PHP, for example, you should use the usort() function and be passing in your compare function. Like this you can sort dates, strings or numbers in any order that you like, you just need to define when item A is smaller than item B and return a negative number in that case, and in the converse return a positive number as well as 0 when they are equal. You get the idea. If you find a good algorithm and need to implement it yourself, it might be hard and challenging but it can be well-worth the time spent on it, because you can save the user of your application time and your application server number crunching resources.</p>
<h2>Saving on the byte or even bit level</h2>
<p>Now to the more generic optimisations that you can think of when you have chosen the right algorithm for your implementation. When you know that the algorithm you are using is good or even could not be better, great. You can go on implementing it. When you do so, you should think of every expression you use more than once as a variable and also reserve the necessary space for it. For example, you could have an expression like (a &lt; b &amp;&amp; b &lt; c &amp;&amp; b+2 == d). If you use this expression in only one if statement, it is probably a good idea to use the expression as is. As soon as you use the expression more than once, make a variable that describes the purpose of the expression. For example:</p>
{% highlight javascript %}
// javascript
aGreaterBAndBLessCAndBPlus2EqualD = a > b && b < c && b+2 == d;
{% endhighlight %}
<p>Remember that code readability and understanding of it after the initial implementation is more important than saving a few bytes for the variable name. In compiled languages the length of a variable name does not matter usually. Only in higher level, interpreted languages it can make a difference, but again only nano seconds or so. It is still more important to have an efficient algorithm which is easier to achieve when the code is readable, at least when you later come back to it.</p>
<p>Another trick, which actually follows from the above is to optimise loops in a generic way. A simple for loop like:</p>
{% highlight javascript %}
// javascript
for (var i = 0; i < somevar.length; i++) {
  // do something with somevar[i]
}
{% endhighlight %}
<p>(in JavaScript) can simply be rewritten as</p>
{% highlight javascript %}
// javascript
for (var i = -1, leni = somevar.length; ++i < leni;) {
  // do something with somevar[i]
  // THIS SAVES 20% PERFORMANCE FOR EACH LOOP
  // (ASSUMING YOU HAVE ONE MACHINE INSTRUCTION
  // IN THE LOOP)!
}
{% endhighlight %}
<p>This only works if you know ahead of time, that somevar.length will not and need not change inside of the loop, which is mostly the case. This runs faster because somevar.length is re-evaluated every time it is called in every iteration of the top-most for-loop. If you give it a temporary variable the CPU can cache the leni variable in a register and check much quicker if i is smaller than that. I read also that ++i can be faster than i++ in some implementations of programming languages such as JavaScript in some browsers. It depends on how the low-level assembly for that is written. I have seen arguments that i++ and ++i have exactly the same amount of machine instructions, but also ++i is not less readable than i++ and it does not hurt to write it that way if it can cut down the number of instructions by one or two in each iteration.</p>
<p>Edit:<br />
You can use the same concepts in C(++). Actually the book "Write Great Code" talks about C and other lower level languages mainly. In C++ it would look like so, if you want to output a string char by char:</p>
{% highlight cpp %}
// C++
char cstring[10] = "My String";
for (int i = -1, leni = strlen(cstring); ++i < leni; ) {
  cout << cstring[i];
}
{% endhighlight %}
<p>Also, if you want to improve your low-level knowlege, even as a high-level programmer like me, it might pay to read the 'Write Great Code' series by Randall Hyde. But in essence these tips here should be sufficient for some improvement of your code and should be simple enough to implement for any level programmer. Just remember that the best compiler or interpreter cannot replace a skilled programmer and I think this will stay that way for a long time if not forever. This is also a good thing and will keep us employed.</p>
<p>I hope someone could learn something from this and you think it was worthwhile to read this short article.</p>
