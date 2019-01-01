---
layout: post
status: publish
published: true
title: jQuery Plugin Template
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: ''
author_login: admin
author_email: Tim@ihostnz.com
wordpress_id: 190
wordpress_url: http://www.thheuer.com/?p=190
date: '2012-04-19 11:03:56 +1200'
date_gmt: '2012-04-18 23:03:56 +1200'
categories:
- JavaScript
tags: [jQuery,JavaScript,Programming]
comments: []
---
<p>Here my simple and short jQuery plugin template. Hope it helps with plugin development. It has all the recommended settings (from <a target="_blank" href="http://docs.jquery.com/Plugins/Authoring">docs.jquery.com/Plugins/Authoring</a>):</p>

{% highlight javascript %}
(function($) {
    $.fn.pluginNamespace = function(method) {
        var defaults = {
                // settings here
            },
            settings = null,
            methods = {
                init: function(options) {
                    settings = $.extend(defaults, options);
                }
            };
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }
    };
})(jQuery);
{% endhighlight %}
