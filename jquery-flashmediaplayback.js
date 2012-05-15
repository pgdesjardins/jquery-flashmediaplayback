/**
 * User: gdesjardins
 * Date: 07/05/12
 * Time: 10:28 AM
 * Version: 0.9alpha
 */
(function ($) {
    var methods = {
        init: function (options) {
            return this.each(function () {
                var settings = $.extend({
                    'width': '600',
                    'height': '409',
                    'src': 'http://osmf.org/videos/cathy2.flv',
                    'poster': 'http://osmf.org/images/poster_cathy_fmp.jpg',
                    'autoPlay': false,
                    'loop': false,
                    'playButtonOverlay': true,
                    'controlBarAutoHide': true,
                    'controlBarMode': 'docked', /*[docked,floating,none]*/
                    'streaming': false,
                    'fmpPath': 'http://fpdownload.adobe.com/strobe/FlashMediaPlayback.swf',
                    'fmpStreamingPath': 'http://fpdownload.adobe.com/strobe/FlashMediaPlayback_101.swf'
                }, options),
                    strFlashvar = 'src=' + encodeURIComponent(settings.src) + '&poster=' + encodeURIComponent(settings.poster) + '&loop=' + settings.loop + '&autoPlay=' + settings.autoPlay + ((settings.controlBarMode !== 'docked') ? "&controlBarMode=" + settings.controlBarMode : '') + "&playButtonOverlay=" + settings.playButtonOverlay + "&controlBarAutoHide=" + settings.controlBarAutoHide,
                    strPlayer = (settings.streaming) ? settings.fmpStreamingPath : settings.fmpPath, template = '<object width="' + settings.width + '" height="' + settings.height + '"><param name="movie" value="' + strPlayer + '"></param><param name="flashvars" value="' + strFlashvar + '"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="' + strPlayer + '" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="' + settings.width + '" height="' + settings.height + '" flashvars=' + strFlashvar + '></embed></object>';
                /*if (console && console.log) {
                    console.log(strFlashvar);
                    console.log(strPlayer);
                }*/
                $(this).append(template);
            });
        },
        destroy: function () {
            $(this).empty();
        }
    };
    $.fn.fmp = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.fmp');
        }
    };
})(jQuery);
