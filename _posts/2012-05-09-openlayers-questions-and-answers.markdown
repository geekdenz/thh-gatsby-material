---
layout: post
status: publish
published: true
title: OpenLayers - Questions and Answers
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: ''
author_login: admin
author_email: Tim@ihostnz.com
wordpress_id: 203
wordpress_url: http://www.thheuer.com/?p=203
date: '2012-05-09 19:35:55 +1200'
date_gmt: '2012-05-09 07:35:55 +1200'
categories:
- JavaScript
- HTML5
- OpenLayers
tags: [JavaScript,HTML5,Programming,GIS]
comments:
- id: 4675
  author: ismetb
  author_email: ismetbahadir@gmail.com
  author_url: ''
  date: '2012-05-09 19:47:22 +1200'
  date_gmt: '2012-05-09 07:47:22 +1200'
  content: ! "hello,\r\n\r\ni was wondering:\r\n\r\n1) how to enable animated zooming
    as in http://www.tomtom.com/livetraffic/ (though it seems they implemented their
    own method)\r\n\r\n2) how to restrict the map to a certain area by giving lon
    and lat values.\r\n\r\ncan you please give me examples?\r\n\r\nthank you,\r\n\r\n-
    ismet"
---
<p>Here I would like to try to answer questions about OpenLayers. Please ask in a comment.</p>

<ol>
<li>How to enable animated zooming as in <a href="http://www.tomtom.com/livetraffic/" target="_blank">http://www.tomtom.com/livetraffic/</a> (though it seems they implemented their own method)
<p>View <a href="http://openlayers.org/dev/examples/google-v3.html" target="_blank">http://openlayers.org/dev/examples/google-v3.html</a> or <a href="http://dev.openlayers.org/sandbox/emanuel/animatedZooming/demo.html">http://dev.openlayers.org/sandbox/emanuel/animatedZooming/demo.html</a>. The performance of those sites might not be as good as Tomtom's because they might not have as fast WMS servers or the tiles are not cached efficiently. If you need fast tile seeding/caching, have a look at MapServer and in particular MapCache on the server side. Both of which are CGI programs implementing WMS.</li>
<li>How to restrict the map to a certain area by giving lon and lat values.
<p>View <a href="http://openlayers.org/dev/examples/restricted-extent.html" target="_blank">http://openlayers.org/dev/examples/restricted-extent.html</a> or <a href="http://openlayers.org/dev/examples/all-overlays.html" target="_blank">http://openlayers.org/dev/examples/all-overlays.html</a> (line 18; view source). Generally, I think the maxExtent property of the Map class will do the trick.</li>
</ol>
