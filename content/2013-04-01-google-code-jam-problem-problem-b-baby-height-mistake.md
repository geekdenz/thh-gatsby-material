---
title: "Google Code Jam Problem - Problem B. Baby Height - Mistake?"
cover: "1.jpg"
category: "Programming"
date: "2013-04-01"
slug: "2013/04/google-code-jam-problem-problem-b-baby-height-mistake/"
tags:
    - Programming
    - Google
    - Competition
---
<p>Just having a couple of training sessions on Google Code Jam problems I noticed the following.  I tried my luck with this problem: <a href="http://code.google.com/codejam/contest/2334486/dashboard#s=p1">http://code.google.com/codejam/contest/2334486/dashboard#s=p1</a> .</p>

<p>I got it wrong quite a few times. Mostly because of the fact that I misread one sentence: "If the algorithm produces a range whose endpoints fall on fractional inches, your program should shrink the range until both endpoints can be expressed in whole inches.".</p>
<p>I misread this and ended up using ints instead and letting truncation take care of the rounding down. However, this means that the lower end of the range should be rounded up. Admittedly, my mistake.</p>
<p>However!  I still couldn't get it right after correcting my mistake.  Why?  Because I believe there is an error in the question. It also states:<br />
"Each integer denoting feet will be at least 1 and at most <strong>9</strong>.<br />
Each integer denoting inches will be at least 0 and at most 11.".</p>
<p>This, to me, means that we cannot have more than 9'11".  I implemented this range, 1'0" to 9'11" in my program but still got "wrong" results.  I then took out the logic to enforce this limit and voila, my output succeeded!  So, obviously the question rather than my final answer is wrong.</p>
<p>I think it's really bad to have a wrong question like this up.  It was frustrating for me, because I doubted my reading of the question before even thinking about the possibility of Google making such a mistake.  Sure, mistakes happen, but has no one noticed this yet?</p>
