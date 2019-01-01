---
layout: post
status: publish
published: true
title: Google Code Jam Problem - Problem B. Baby Height - Mistake?
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: http://www.ihostnz.com
author_login: Tim
author_email: th.heuer@gmail.com
author_url: http://www.ihostnz.com
wordpress_id: 234
wordpress_url: http://www.thheuer.com/?p=234
date: '2013-04-01 15:23:00 +1300'
date_gmt: '2013-04-01 02:23:00 +1300'
categories:
- Programming
tags: [Programming,Google,Competition]
comments:
- id: 39628
  author: Igor Naverniouk
  author_email: abednego@gmail.com
  author_url: http://code.google.com/codejam
  date: '2013-05-21 06:07:48 +1200'
  date_gmt: '2013-05-20 17:07:48 +1200'
  content: ! "Hello there.\r\n\r\nI am the author of the Baby Height problem, so this
    is all entirely my fault. I'm sorry that you had such a tough time with this problem.
    I agree that the words \"each integer\" in the Limits section can be misinterpreted
    to mean \"each integer in the output\", but that's not what those words mean.
    \r\n\r\nThe Limits section is talking about the input file. It lists a set of
    guarantees about the input which your program can assume to always be true. In
    this case, all input heights are indeed between 1'0\" and 9'11\", but some output
    heights can exceed that limit.\r\n\r\nI hope you're not too frustrated to give
    up on Code Jam. We have much more interesting problems that I hope you 'll try."
- id: 39675
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2013-05-21 22:25:23 +1200'
  date_gmt: '2013-05-21 09:25:23 +1200'
  content: ! "Hi Igor,\n\nThanks for your comment! In fact I feel privileged to get
    a comment on my website by a Google Code Jam problem creator. GCJ problems are
    generally far from trivial to solve and even harder to come up with. So, I am
    not dismissing GCJ because of something that can easily happen like a slight mis-wording
    which leads to a mis-understanding. \n\nI'm not dismissing GCJ because of that
    at all. I tried my luck in Round 1A and C, but unfortunately did not succeed.\n\nI
    believe even trying makes me a better programmer and since I enjoy solving complex
    problems with computers I won't give up on GCJ. I'll try again next year most
    likely, but it seems I need a lot more practice."
---
<p>Just having a couple of training sessions on Google Code Jam problems I noticed the following.  I tried my luck with this problem: <a href="http://code.google.com/codejam/contest/2334486/dashboard#s=p1">http://code.google.com/codejam/contest/2334486/dashboard#s=p1</a> .</p>

<p>I got it wrong quite a few times. Mostly because of the fact that I misread one sentence: "If the algorithm produces a range whose endpoints fall on fractional inches, your program should shrink the range until both endpoints can be expressed in whole inches.".</p>
<p>I misread this and ended up using ints instead and letting truncation take care of the rounding down. However, this means that the lower end of the range should be rounded up. Admittedly, my mistake.</p>
<p>However!  I still couldn't get it right after correcting my mistake.  Why?  Because I believe there is an error in the question. It also states:<br />
"Each integer denoting feet will be at least 1 and at most <strong>9</strong>.<br />
Each integer denoting inches will be at least 0 and at most 11.".</p>
<p>This, to me, means that we cannot have more than 9'11".  I implemented this range, 1'0" to 9'11" in my program but still got "wrong" results.  I then took out the logic to enforce this limit and voila, my output succeeded!  So, obviously the question rather than my final answer is wrong.</p>
<p>I think it's really bad to have a wrong question like this up.  It was frustrating for me, because I doubted my reading of the question before even thinking about the possibility of Google making such a mistake.  Sure, mistakes happen, but has no one noticed this yet?</p>
