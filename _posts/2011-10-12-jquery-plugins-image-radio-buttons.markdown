---
layout: post
status: publish
published: true
title: jQuery Plugin - Image Radio buttons
author:
  display_name: Tim
  login: admin
  email: th.heuer@gmail.com
  url: 'http://thheuer.com'
author_login: tim
author_email: th.heuer@gmail.com
wordpress_id: 129
wordpress_url: http://www.thheuer.com/?p=129
date: '2011-10-12 16:38:38 +1300'
date_gmt: '2011-10-12 04:38:38 +1300'
categories:
- JavaScript
- Programming
- jQuery
- Plugins
tags: [Programming,jQuery,Plugins,JavaScript]
comments:
- id: 4604
  author: Scott
  author_email: scott@wammediagroup.com
  author_url: ''
  date: '2012-05-01 06:36:56 +1200'
  date_gmt: '2012-04-30 18:36:56 +1200'
  content: ! "Your plugin actually works better for what I am doing than the one you
    posted.\r\n\r\nIn your script how can I make it so that if one of the images are
    selected the hover will be ignored?\r\n\r\nThanks"
- id: 4605
  author: Scott
  author_email: scott@wammediagroup.com
  author_url: ''
  date: '2012-05-01 06:40:12 +1200'
  date_gmt: '2012-04-30 18:40:12 +1200'
  content: ! "Actually I answered my own question:\r\n\r\nI changed:\r\n$imgRadio.hover(function()
    {\r\n        $(this).attr('src',hov);\r\n}\r\n\r\nTo:\r\n$imgRadio.hover(function()
    {\r\n\t\tif(!$this.attr('checked')){\r\n\t\t\t$(this).attr('src',hov);\r\n\t\t}\r\n
    \     }\r\n\r\nThank you for this plugin!  Works perfect for me!"
- id: 4606
  author: Tim
  author_email: Tim@ihostnz.com
  author_url: ''
  date: '2012-05-01 09:19:28 +1200'
  date_gmt: '2012-04-30 21:19:28 +1200'
  content: Thanks! When I have a bit more time, I will revise the plugin as it has
    a few bugs. I might also put it on GitHub. Will let people know here.
- id: 7113
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2012-09-16 14:21:12 +1200'
  date_gmt: '2012-09-16 02:21:12 +1200'
  content: Please review the plugin. I have (hopefully) improved it by fixing the
    problem where when you have a radio button selected and you hover it changed the
    image to the hover image but didn't change it back when the mouse exists. Now
    it should not change when you hover, which is what I would expect. I guess this
    could be made a setting. What do you think?
- id: 13091
  author: Bruno
  author_email: brunodilhof@gmail.com
  author_url: ''
  date: '2012-10-18 17:31:31 +1300'
  date_gmt: '2012-10-18 05:31:31 +1300'
  content: Value=Metallica, kreator, slayer :D Good selection, but thanks for this,
    this is that i searched for.
- id: 13142
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2012-10-18 21:26:21 +1300'
  date_gmt: '2012-10-18 09:26:21 +1300'
  content: You're welcome. It's good to see stuff being used that I produce. :-)
- id: 22414
  author: gs
  author_email: gs@aztecsoftware.com
  author_url: ''
  date: '2012-12-13 06:59:48 +1300'
  date_gmt: '2012-12-12 18:59:48 +1300'
  content: hi, how can you select a radio using another button? Thanks
- id: 22499
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2012-12-13 19:45:19 +1300'
  date_gmt: '2012-12-13 07:45:19 +1300'
  content: Not sure what you mean. This is what the plugin does, you can replace radio
    buttons with your own and you should be able to see how from the example.
- id: 32098
  author: Brett Mitchell
  author_email: brightpixelstudios@gmail.com
  author_url: http://www.brightpixelstudio.com
  date: '2013-02-13 15:06:24 +1300'
  date_gmt: '2013-02-13 02:06:24 +1300'
  content: Great work Tim!   I appreciate it very much.  I am incorporate this into
    a phone selection website.  I would like to attach the onclick event to the radio
    buttons to redirect to another page. However I am having trouble getting this
    to work.  I tried to attach the 'change ' and 'click' event using JQuerys live
    property but it doesn't seem to be working.  Any help would be appreciated.  Thanks!
- id: 32109
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2013-02-13 22:31:02 +1300'
  date_gmt: '2013-02-13 09:31:02 +1300'
  content: You might need to change the plugin for that, because I haven't made it
    dispatch events yet. However, if you have some patience, I will have a look when
    I have half an hour or more to do so.
- id: 32110
  author: Brett Mitchell
  author_email: brightpixelstudios@gmail.com
  author_url: http://www.brightpixelstudio.com
  date: '2013-02-13 23:21:54 +1300'
  date_gmt: '2013-02-13 10:21:54 +1300'
  content: Thanks for the quick response.  I've got plenty of time!  I'll keep a look
    out for an update when you get a chance.  Thanks!
- id: 40365
  author: Axel
  author_email: persich@arcor.de
  author_url: ''
  date: '2013-06-04 10:57:59 +1200'
  date_gmt: '2013-06-03 21:57:59 +1200'
  content: ! "Hi Tim,\r\n\r\nyour work is good, but for me a little bit difficult
    to understand all. I have a Radio button and a Text in a label beside all inside
    a table.\r\nIt is possible to change the pics by click on the row of the table
    anyway?\r\nWith:\r\n\r\n  $('.classRow').click(function() {\r\n    $(this).find('input[type=radio]').prop('checked',
    true);\r\n  }\r\n\r\ncan i change the value of radio, but what can I do to change
    the pic at this place?\r\nIs there an easy way for this problem?\r\n\r\nThanks"
- id: 40367
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2013-06-04 12:45:51 +1200'
  date_gmt: '2013-06-03 23:45:51 +1200'
  content: ! "Hi Axel,\r\n\r\nAs far as I understand, you want to change the image
    when something else is clicked on.\r\n\r\nYou can achieve this by changing the
    image AND the radio buttons' data so that it still behaves correctly.\r\n\r\nThis
    however, is reasonably complicated and should maybe be part of the library.\r\n\r\nFor
    the mean time you could try doing something like:\r\n\r\nvar $el = $('#heuer4');
    // selector for your radio button\r\neval('var json = '+ $el.attr('class') +';');\r\njson.src
    = 'accept.png';\r\n$el.attr('class',JSON.stringify(json));\r\n$img=$el.prev();\r\n$img.attr('src',json.src);"
- id: 40368
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2013-06-04 12:48:16 +1200'
  date_gmt: '2013-06-03 23:48:16 +1200'
  content: ! "Oh, and you need to re-initialize the group but that won't work...\r\n\r\nSorry,
    this is not an easy fix."
- id: 49921
  author: Lewis
  author_email: lewis.howe@twiz.co.uk
  author_url: ''
  date: '2013-10-24 06:53:38 +1300'
  date_gmt: '2013-10-23 17:53:38 +1300'
  content: ! "Hi there,\r\n\r\nI'm trying to use several sets of radio buttons on
    the same page, for example\r\n\r\nGROUP 1 - Button 1 - Button 2 - Button 3\r\nGROUP
    2 - Button 1 - Button 2 - Button 3\r\n\r\nBut, for some reason there is confliction
    in the sense that if I select any button in GROUP 1, and then select a button
    in GROUP 2, it deselects my option in GROUP 1.\r\n\r\nI've made sure the 'name'
    tag for each section is the same (as it would be normally in standard radio buttons),
    but still doesn't work.\r\n\r\nAny ideas?"
- id: 49939
  author: Christopher
  author_email: hohesc.s@web.de
  author_url: ''
  date: '2013-10-25 01:17:26 +1300'
  date_gmt: '2013-10-24 12:17:26 +1300'
  content: ! "This script works very fine. I love it cause you can set different images
    for each bullet.\r\n\r\nWhat do I have to change to have this with checkboxes?
    So that the image won't change when I click on an other image but it change when
    i click another one?"
- id: 50784
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2013-11-19 13:07:11 +1300'
  date_gmt: '2013-11-19 00:07:11 +1300'
  content: ! "Hi Lewis,\r\n\r\nThanks for your comment.\r\n\r\nSorry for the late
    reply, but I was pretty busy.\r\n\r\nCould you maybe provide an example, for example
    on js fiddle or so, so I can debug your example?\r\n\r\nhttp://jsfiddle.net/TA6JQ/\r\n\r\nThere
    may be a bug in this plugin that you have discovered, but maybe it's just something
    else that went wrong."
- id: 50974
  author: Tim
  author_email: th.heuer@gmail.com
  author_url: http://www.ihostnz.com
  date: '2013-11-22 09:39:41 +1300'
  date_gmt: '2013-11-21 20:39:41 +1300'
  content: The plugin would need to be extended to cater for that functionality. At
    the moment only radio buttons are supported. However, if there is demand I can
    probably do this.
- id: 164683
  author: 15+ jQuery Radio Button &amp; Checkbox Style Plugins | jQuery4U | No.1 Resource
    for jQuery Developers
  author_email: ''
  author_url: http://www.jquery4u.net/15-jquery-radio-button-checkbox-style-plugins/
  date: '2014-04-23 16:42:23 +1200'
  date_gmt: '2014-04-23 03:42:23 +1200'
  content: ! '[...] SourceDemo [...]'
---
<p>At work I've written this jQuery plugin. It's only 2KB big and turns your normal radio buttons into images, you can set any images you like for src, checked and hover. Simply attach the configuration to your html input field as the class attribute as a JavaScript like object. I know you might want to attach a class to your radio buttons, but this is how far it currently is.</p>

<p>Here an example:</p>
<p><iframe width="600" height="300" src="/jquery-plugins/imageradio/"></iframe></p>
<p><a href="/jquery-plugins/imageradio/jquery.imageradio.js" title="Download Source" target="_blank">Get the JavaScript code</a><br />
<a href="/jquery-plugins/imageradio/" title="Download Source" target="_blank">Get the HTML/JavaScript code</a></p>
<p>Edit: Just found <a href="http://screwdefaultbuttons.com/" target="_blank">this</a> which seems to make this plugin obsolete. :-( Wish I would have found this earlier...</p>
