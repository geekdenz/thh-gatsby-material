---
title: "jQuery Plugin Template"
cover: "1.jpg"
category: "JavaScript"
date: "2012-04-19"
slug: "2012/04/jquery-plugin-template/"
tags:
    - jQuery
    - JavaScript
    - Programming
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
