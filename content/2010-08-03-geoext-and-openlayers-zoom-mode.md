---
title: "GeoExt and OpenLayers - Zoom Mode"
cover: "1.jpg"
category: "JavaScript"
date: "2010-08-03"
slug: "2010/08/geoext-and-openlayers-zoom-mode/"
tags:
    - JavaScript
    - Programming
    - GIS
---
<p>Just playing around with GeoExt and OpenLayers, I figured out how to easily change the control to a zoom rectangle with minimal changes:</p>

<p>First create the normal and the custom control with:</p>
{% highlight javascript %}
// javascript
var inZoom = false;
var navigation = new OpenLayers.Control.Navigation();
var ZoomBoxNav = OpenLayers.Class(OpenLayers.Control.Navigation, {
 zoomBoxKeyMask: null // this ensures that a box is always drawn
});
var zoomBox = new ZoomBoxNav();
{% endhighlight %}
<p>Then all you need is a button or better Action object, which adds the appropriate control to the map:</p>
{% highlight javascript %}
// javascript
var toggleRectZoom = function() {
  if (inZoom) {
    map.addControl(navigation);
    map.removeControl(zoomBox);
    inZoom = false;
  } else {
    map.addControl(zoomBox);
    map.removeControl(navigation);
    inZoom = true;
  }
}

zoomButton = new GeoExt.Action({
  text: 'Zoom Mode',
  handler: function() {
    if (inZoom) {
      zoomButton.setText('Zoom Mode');
    } else {
      zoomButton.setText('Pan Mode');
    }
    toggleRectZoom();
  }
});

toolBar = new Ext.Toolbar({
  items: [ zoomButton ]
});
mapPanel = new GeoExt.MapPanel({
  border: true,
  region: "center",
  // we do not want all overlays, to try the OverlayLayerContainer
  map: map,
  center: [172.1569825, -42.6109735],
  zoom: 6,
  layers: myLayers,
  tbar: toolBar
});
{% endhighlight %}
