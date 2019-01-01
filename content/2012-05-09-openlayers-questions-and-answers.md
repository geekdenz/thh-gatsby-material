---
title: "OpenLayers - Questions and Answers"
cover: "1.jpg"
category: "JavaScript"
date: "2012-05-09"
slug: "2012/05/openlayers-questions-and-answers/"
tags:
    - JavaScript
    - HTML5
    - Programming
    - GIS
---
<p>Here I would like to try to answer questions about OpenLayers. Please ask in a comment.</p>

<ol>
<li>How to enable animated zooming as in <a href="http://www.tomtom.com/livetraffic/" target="_blank">http://www.tomtom.com/livetraffic/</a> (though it seems they implemented their own method)
<p>View <a href="http://openlayers.org/dev/examples/google-v3.html" target="_blank">http://openlayers.org/dev/examples/google-v3.html</a> or <a href="http://dev.openlayers.org/sandbox/emanuel/animatedZooming/demo.html">http://dev.openlayers.org/sandbox/emanuel/animatedZooming/demo.html</a>. The performance of those sites might not be as good as Tomtom's because they might not have as fast WMS servers or the tiles are not cached efficiently. If you need fast tile seeding/caching, have a look at MapServer and in particular MapCache on the server side. Both of which are CGI programs implementing WMS.</li>
<li>How to restrict the map to a certain area by giving lon and lat values.
<p>View <a href="http://openlayers.org/dev/examples/restricted-extent.html" target="_blank">http://openlayers.org/dev/examples/restricted-extent.html</a> or <a href="http://openlayers.org/dev/examples/all-overlays.html" target="_blank">http://openlayers.org/dev/examples/all-overlays.html</a> (line 18; view source). Generally, I think the maxExtent property of the Map class will do the trick.</li>
</ol>
