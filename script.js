(function($) {

	"use strict";

	

	// ______________ Global Loader

	$(window).on("load", function(e) {

		$("#global-loader").fadeOut("slow");

	})

	

	

	// ______________ Cover-image

	$(".cover-image").each(function(e) {

		var attr = $(this).attr('data-bs-image-src');

		if (typeof attr !== typeof undefined && attr !== false) {

			$(this).css('background', 'url(' + attr + ') center center');

		}

	});



	

	// ______________Rating Stars

	var ratingOptions = {

		selectors: {

			starsSelector: '.rating-stars',

			starSelector: '.rating-star',

			starActiveClass: 'is--active',

			starHoverClass: 'is--hover',

			starNoHoverClass: 'is--no-hover',

			targetFormElementSelector: '.rating-value'

		}

	};

	

	// ______________Active Class

	$(".horizontalMenu-list li a").each(function(e) {

		var pageUrl = window.location.href.split(/[?#]/)[0];

		if (this.href == pageUrl) {

			$(this).addClass("active");

			$(this).parent().addClass("active"); // add active to li of the current link

			$(this).parent().parent().prev().addClass("active"); // add active class to an anchor

			$(this).parent().parent().prev().click(); // click the item to make it drop

		}

	});



	// ______________ Back to Top

	$(window).on("scroll", function(e) {

		if ($(this).scrollTop() > 0) {

			$('#back-to-top').fadeIn('slow');

		} else {

			$('#back-to-top').fadeOut('slow');

		}

	});

	$(document).on("click", "#back-to-top", function(e) {

		$("html, body").animate({

			scrollTop: 0

		}, 0);

		return false;

	});

	

	// ______________Quantity-right-plus

	var quantitiy = 0;

	$(document).on('click','.quantity-right-plus', function(e) {

		e.preventDefault();

		var quantity = parseInt($('#quantity').val()); 

		$('#quantity').val(quantity + 1); 

	});

	$(document).on('click', '.quantity-left-minus', function(e) {

		e.preventDefault();

		var quantity = parseInt($('#quantity').val());

		if (quantity > 0) {

			$('#quantity').val(quantity - 1);

		}

	});

	

	

	

	// ______________Chart-circle

	if ($('.chart-circle').length) {

		$('.chart-circle').each(function(e) {

			let $this = $(this);

			$this.circleProgress({

				fill: {

					color: $this.attr('data-color')

				},

				size: $this.height(),

				startAngle: -Math.PI / 4 * 2,

				emptyFill: '#f9faff',

				lineCap: ''

			});

		});

	}

	const DIV_CARD = 'div.card';

	

	// ___________TOOLTIP

	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {

		return new bootstrap.Tooltip(tooltipTriggerEl)

	})

	

	// __________POPOVER

	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))

	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {

	return new bootstrap.Popover(popoverTriggerEl)

	})

	// By default, Bootstrap doesn't auto close popover after appearing in the page

	$(document).on('click', function (e) {

		$('[data-bs-toggle="popover"],[data-original-title]').each(function () {

			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {

				(($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false  // fix for BS 3.3.6

			}



		});

	});

	

	// ______________Card Remove

	$(document).on('click', '[data-bs-toggle="card-remove"]', function(e) {

		let $card = $(this).closest(DIV_CARD);

		$card.remove();

		e.preventDefault();

		return false;

	});

	

	// ______________Card Collapse

	$(document).on('click', '[data-bs-toggle="card-collapse"]', function(e) {

		let $card = $(this).closest(DIV_CARD);

		$card.toggleClass('card-collapsed');

		e.preventDefault();

		return false;

	});

	

	// ______________Card Full Screen

	$(document).on('click', '[data-bs-toggle="card-fullscreen"]', function(e) {

		let $card = $(this).closest(DIV_CARD);

		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');

		e.preventDefault();

		return false;

	});

	



})(jQuery);



// ______________ Modal

$(document).ready(function(){

	$("#myModal").modal('show');

});



$(document).ready(function(){

	$(".sticky").parent().addClass('header-absolute');

  });










  //video


  /*!

 * Vidbg v1.1.1 (https://github.com/blakewilson/vidbg)

 * Vidbg By Blake Wilson

 * @license Licensed Under MIT (https://github.com/blakewilson/vidbg/blob/master/LICENSE)

 */

! function(e, t) {

    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : e.jQuery)

}(this, function($) {

    "use strict";



    function e(e) {

        var t = {},

            o, i, r, n, s, a, p;

        for (s = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), p = 0, a = s.length; a > p && (i = s[p], -1 === i.search(/^(http|https|ftp):\/\//) && -1 !== i.search(":")); p++) o = i.indexOf(":"), r = i.substring(0, o), n = i.substring(o + 1), n || (n = void 0), "string" == typeof n && (n = "true" === n || ("false" === n ? !1 : n)), "string" == typeof n && (n = isNaN(n) ? n : +n), t[r] = n;

        return null == r && null == n ? e : t

    }



    function t(e) {

        e = "" + e;

        var t = e.split(/\s+/),

            o = "50%",

            i = "50%",

            r, n, s;

        for (s = 0, r = t.length; r > s; s++) n = t[s], "left" === n ? o = "0%" : "right" === n ? o = "100%" : "top" === n ? i = "0%" : "bottom" === n ? i = "100%" : "center" === n ? 0 === s ? o = "50%" : i = "50%" : 0 === s ? o = n : i = n;

        return {

            x: o,

            y: i

        }

    }



    function o(e) {

        var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

        e = e.replace(t, function(e, t, o, i) {

            return t + t + o + o + i + i

        });

        var o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);

        return o ? {

            r: parseInt(o[1], 16),

            g: parseInt(o[2], 16),

            b: parseInt(o[3], 16)

        } : null

    }



    function i(t, o, i) {

        this.$element = $(t), "string" == typeof o && (o = e(o)), i ? "string" == typeof i && (i = e(i)) : i = {}, this.settings = $.extend({}, n, i), this.path = o;

        try {

            this.init()

        } catch (r) {

            if (r.message !== s) throw r

        }

    }

    var r = "vidbg",

        n = {

            volume: 1,

            playbackRate: 1,

            muted: !0,

            loop: !0,

            autoplay: !0,

            position: "50% 50%",

            overlay: !1,

            overlayColor: "#000",

            overlayAlpha: .3,

            resizing: !0

        },

        s = "Not implemented";

    i.prototype.init = function() {

        var e = this,

            i = e.path,

            r = i,

            n = "",

            a = e.$element,

            p = e.settings,

            d = t(p.position),

            c, u, l;

        u = e.$wrapper = $('<div class="vidbg-container">').css({

            position: "absolute",

            "z-index": -1,

            top: 0,

            left: 0,

            bottom: 0,

            right: 0,

            overflow: "hidden",

            "-webkit-background-size": "cover",

            "-moz-background-size": "cover",

            "-o-background-size": "cover",

            "background-size": "cover",

            "background-repeat": "no-repeat",

            "background-position": d.x + " " + d.y

        }), "object" == typeof i && (i.poster ? r = i.poster : i.mp4 ? r = i.mp4 : i.webm && (r = i.webm)), u.css("background-image", "url(" + r + ")"), "static" === a.css("position") && a.css("position", "relative"), a.is("body") && u.css({

            position: "fixed"

        }), a.prepend(u), "object" == typeof i ? (i.mp4 && (n += '<source src="' + i.mp4 + '" type="video/mp4">'), i.webm && (n += '<source src="' + i.webm + '" type="video/webm">'), c = e.$video = $("<video>" + n + "</video>")) : c = e.$video = $('<video><source src="' + i + '" type="video/mp4"><source src="' + i + '" type="video/webm"></video>');

        try {

            c.prop({

                autoplay: p.autoplay,

                loop: p.loop,

                volume: p.volume,

                muted: p.muted,

                defaultMuted: p.muted,

                playbackRate: p.playbackRate,

                defaultPlaybackRate: p.playbackRate

            })

        } catch (v) {

            throw new Error(s)

        }

        c.css({

            margin: "auto",

            position: "absolute",

            "z-index": -1,

            top: d.y,

            left: d.x,

            "-webkit-transform": "translate(-" + d.x + ", -" + d.y + ")",

            "-ms-transform": "translate(-" + d.x + ", -" + d.y + ")",

            "-moz-transform": "translate(-" + d.x + ", -" + d.y + ")",

            transform: "translate(-" + d.x + ", -" + d.y + ")",

            "max-width": "none",

            visibility: "hidden",

            opacity: 0

        }).one("canplaythrough.vidbg", function() {

            e.resize()

        }).one("playing.vidbg", function() {

            c.css({

                visibility: "visible",

                opacity: 1

            }), u.css("background-image", "none")

        }), a.on("resize.vidbg", function() {

            p.resizing && e.resize()

        }), u.append(c), l = e.$overlay = $('<div class="vidbg-overlay">').css({

            position: "absolute",

            top: 0,

            left: 0,

            right: 0,

            bottom: 0,

            background: "rgba(" + o(p.overlayColor).r + ", " + o(p.overlayColor).g + ", " + o(p.overlayColor).b + ", " + p.overlayAlpha + ")"

        }), p.overlay && u.append(l)

    }, i.prototype.getVideoObject = function() {

        return this.$video[0]

    }, i.prototype.resize = function() {

        if (this.$video) {

            var e = this.$wrapper,

                t = this.$video,

                o = t[0],

                i = o.videoHeight,

                r = o.videoWidth,

                n = e.height(),

                s = e.width();

            s / r > n / i ? t.css({

                width: s + 2,

                height: "auto"

            }) : t.css({

                width: "auto",

                height: n + 2

            })

        }

    }, i.prototype.destroy = function() {

        delete $[r].lookup[this.index], this.$video && this.$video.off(r), this.$element.off(r).removeData(r), this.$wrapper.remove()

    }, $[r] = {

        lookup: []

    }, $.fn[r] = function(e, t) {

        var o;

        return this.each(function() {

            o = $.data(this, r), o && o.destroy(), o = new i(this, e, t), o.index = $[r].lookup.push(o) - 1, $.data(this, r, o)

        }), this

    }, $(document).ready(function() {

        var e = $(window);

        e.on("resize.vidbg", function() {

            for (var e = $[r].lookup.length, t = 0, o; e > t; t++) o = $[r].lookup[t], o && o.settings.resizing && o.resize()

        }), e.on("unload.vidbg", function() {

            return !1

        }), $(document).find("[data-vidbg-bg]").each(function(e, t) {

            var o = $(t),

                i = o.data("vidbg-options"),

                n = o.data("vidbg-bg");

            o[r](n, i)

        })

    })

});


$(function(e){

  'use strict';

	$('body').ihavecookies({

		title: 'Sayt test rejimida ishlamoqda!',

		message: "Assalomu alaykum, hurmatli foydalanuvchi! Sizni saytimizda ko'rganimizdan mamnunmiz. Hozirda sayt to'liq qayta ishlanmoqda va yangilanishlar kiritilmoqda. Agar biron-bir xatolikka duch kelsangiz, <a href='https://t.me/The_Nameless_Knight'>bizga xabar berishingiz mumkin</a>.",

		delay: 600,

		expires: 1,

		link: '#privacy',

		onAccept: function(){

			var myPreferences = $.fn.ihavecookies.cookie();

			console.log('Yay! The following preferences were saved...');

			console.log(myPreferences);

		},

		uncheckBoxes: true,

		acceptBtnLabel: '"Tushundim, rahmat! ðŸ˜Š',

		moreInfoLabel: ''

	});



	if ($.fn.ihavecookies.preference('marketing') === true) {

		console.log('This should run because marketing is accepted.');

	}

});


(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof module==='object'&&module.exports){module.exports=factory(require('jquery'))}else{factory(jQuery)}

$(".horizontal-main").sticky({topSpacing:0})}(function($){var slice=Array.prototype.slice;var splice=Array.prototype.splice;var defaults={topSpacing:0,bottomSpacing:0,className:'is-sticky',wrapperClassName:'sticky-wrapper',center:!1,getWidthFrom:'',widthFromWrapper:!0,responsiveWidth:!1,zIndex:'inherit'},$window=$(window),$document=$(document),sticked=[],windowHeight=$window.height(),scroller=function(){var scrollTop=$window.scrollTop(),documentHeight=$document.height(),dwh=documentHeight-windowHeight,extra=(scrollTop>dwh)?dwh-scrollTop:0;for(var i=0,l=sticked.length;i<l;i++){var s=sticked[i],elementTop=s.stickyWrapper.offset().top,etse=elementTop-s.topSpacing-extra;s.stickyWrapper.css('height',s.stickyElement.outerHeight());if(scrollTop<=etse){if(s.currentTop!==null){s.stickyElement.css({'width':'','position':'','top':'','z-index':''});s.stickyElement.parent().removeClass(s.className);s.stickyElement.trigger('sticky-end',[s]);s.currentTop=null}}

else{var newTop=documentHeight-s.stickyElement.outerHeight()-s.topSpacing-s.bottomSpacing-scrollTop-extra;if(newTop<0){newTop=newTop+s.topSpacing}else{newTop=s.topSpacing}

if(s.currentTop!==newTop){var newWidth;if(s.getWidthFrom){padding=s.stickyElement.innerWidth()-s.stickyElement.width();newWidth=$(s.getWidthFrom).width()-padding||null}else if(s.widthFromWrapper){newWidth=s.stickyWrapper.width()}

if(newWidth==null){newWidth=s.stickyElement.width()}

s.stickyElement.css('width',newWidth).css('position','fixed').css('top',newTop).css('z-index',s.zIndex);s.stickyElement.parent().addClass(s.className);if(s.currentTop===null){s.stickyElement.trigger('sticky-start',[s])}else{s.stickyElement.trigger('sticky-update',[s])}

if(s.currentTop===s.topSpacing&&s.currentTop>newTop||s.currentTop===null&&newTop<s.topSpacing){s.stickyElement.trigger('sticky-bottom-reached',[s])}else if(s.currentTop!==null&&newTop===s.topSpacing&&s.currentTop<newTop){s.stickyElement.trigger('sticky-bottom-unreached',[s])}

s.currentTop=newTop}

var stickyWrapperContainer=s.stickyWrapper.parent();var unstick=(s.stickyElement.offset().top+s.stickyElement.outerHeight()>=stickyWrapperContainer.offset().top+stickyWrapperContainer.outerHeight())&&(s.stickyElement.offset().top<=s.topSpacing);if(unstick){s.stickyElement.css('position','absolute').css('top','').css('bottom',0).css('z-index','')}else{s.stickyElement.css('position','fixed').css('top',newTop).css('bottom','').css('z-index',s.zIndex)}}}},resizer=function(){windowHeight=$window.height();for(var i=0,l=sticked.length;i<l;i++){var s=sticked[i];var newWidth=null;if(s.getWidthFrom){if(s.responsiveWidth){newWidth=$(s.getWidthFrom).width()}}else if(s.widthFromWrapper){newWidth=s.stickyWrapper.width()}

if(newWidth!=null){s.stickyElement.css('width',newWidth)}}},methods={init:function(options){return this.each(function(){var o=$.extend({},defaults,options);var stickyElement=$(this);var stickyId=stickyElement.attr('id');var wrapperId=stickyId?stickyId+'-'+defaults.wrapperClassName:defaults.wrapperClassName;var wrapper=$('<div></div>').attr('id',wrapperId).addClass(o.wrapperClassName);stickyElement.wrapAll(function(){if($(this).parent("#"+wrapperId).length==0){return wrapper}});var stickyWrapper=stickyElement.parent();if(o.center){stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"})}

if(stickyElement.css("float")==="right"){stickyElement.css({"float":"none"}).parent().css({"float":"right"})}

o.stickyElement=stickyElement;o.stickyWrapper=stickyWrapper;o.currentTop=null;sticked.push(o);methods.setWrapperHeight(this);methods.setupChangeListeners(this)})},setWrapperHeight:function(stickyElement){var element=$(stickyElement);var stickyWrapper=element.parent();if(stickyWrapper){stickyWrapper.css('height',element.outerHeight())}},setupChangeListeners:function(stickyElement){if(window.MutationObserver){var mutationObserver=new window.MutationObserver(function(mutations){if(mutations[0].addedNodes.length||mutations[0].removedNodes.length){methods.setWrapperHeight(stickyElement)}});mutationObserver.observe(stickyElement,{subtree:!0,childList:!0})}else{if(window.addEventListener){stickyElement.addEventListener('DOMNodeInserted',function(){methods.setWrapperHeight(stickyElement)},!1);stickyElement.addEventListener('DOMNodeRemoved',function(){methods.setWrapperHeight(stickyElement)},!1)}else if(window.attachEvent){stickyElement.attachEvent('onDOMNodeInserted',function(){methods.setWrapperHeight(stickyElement)});stickyElement.attachEvent('onDOMNodeRemoved',function(){methods.setWrapperHeight(stickyElement)})}}},update:scroller,unstick:function(options){return this.each(function(){var that=this;var unstickyElement=$(that);var removeIdx=-1;var i=sticked.length;while(i-->0){if(sticked[i].stickyElement.get(0)===that){splice.call(sticked,i,1);removeIdx=i}}

if(removeIdx!==-1){unstickyElement.unwrap();unstickyElement.css({'width':'','position':'','top':'','float':'','z-index':''})}})}};if(window.addEventListener){window.addEventListener('scroll',scroller,!1);window.addEventListener('resize',resizer,!1)}else if(window.attachEvent){window.attachEvent('onscroll',scroller);window.attachEvent('onresize',resizer)}

$.fn.sticky=function(method){if(methods[method]){return methods[method].apply(this,slice.call(arguments,1))}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments)}else{$.error('Method '+method+' does not exist on jQuery.sticky')}};$.fn.unstick=function(method){if(methods[method]){return methods[method].apply(this,slice.call(arguments,1))}else if(typeof method==='object'||!method){return methods.unstick.apply(this,arguments)}else{$.error('Method '+method+' does not exist on jQuery.sticky')}};$(function(){setTimeout(scroller,0)})}))





$(document).ready(function(){



  var stickyElement = $(".sticky"),

      stickyClass = "sticky-pin",

      stickyPos = stickyElement.offset().top, //Distance from the top of the window.

      stickyHeight;



  //Create a negative margin to prevent content 'jumps':

  stickyElement.after('<div class="jumps-prevent"></div>');

  function jumpsPrevent() {

    stickyHeight = stickyElement.innerHeight();

    stickyElement.css({"margin-bottom":"-" + stickyHeight + "px"});

    stickyElement.next().css({"padding-top": + stickyHeight + "px"}); 

  };

  jumpsPrevent(); //Run.



  //Function trigger:

  $(window).resize(function(){

    jumpsPrevent();

  });



  //Sticker function:

  function stickerFn() {

    var winTop = $(this).scrollTop();

    //Check element position:

    winTop >= stickyPos ?

      stickyElement.addClass(stickyClass):

      stickyElement.removeClass(stickyClass) //Boolean class switcher.

  };

  stickerFn(); //Run.



  //Function trigger:

  $(window).scroll(function(){

    stickerFn();

  });



});





(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof module==='object'&&module.exports){module.exports=factory(require('jquery'))}else{factory(jQuery)}

$(".horizontal-main").sticky({topSpacing:0})}(function($){var slice=Array.prototype.slice;var splice=Array.prototype.splice;var defaults={topSpacing:0,bottomSpacing:0,className:'is-sticky',wrapperClassName:'sticky-wrapper',center:!1,getWidthFrom:'',widthFromWrapper:!0,responsiveWidth:!1,zIndex:'inherit'},$window=$(window),$document=$(document),sticked=[],windowHeight=$window.height(),scroller=function(){var scrollTop=$window.scrollTop(),documentHeight=$document.height(),dwh=documentHeight-windowHeight,extra=(scrollTop>dwh)?dwh-scrollTop:0;for(var i=0,l=sticked.length;i<l;i++){var s=sticked[i],elementTop=s.stickyWrapper.offset().top,etse=elementTop-s.topSpacing-extra;s.stickyWrapper.css('height',s.stickyElement.outerHeight());if(scrollTop<=etse){if(s.currentTop!==null){s.stickyElement.css({'width':'','position':'','top':'','z-index':''});s.stickyElement.parent().removeClass(s.className);s.stickyElement.trigger('sticky-end',[s]);s.currentTop=null}}

else{var newTop=documentHeight-s.stickyElement.outerHeight()-s.topSpacing-s.bottomSpacing-scrollTop-extra;if(newTop<0){newTop=newTop+s.topSpacing}else{newTop=s.topSpacing}

if(s.currentTop!==newTop){var newWidth;if(s.getWidthFrom){padding=s.stickyElement.innerWidth()-s.stickyElement.width();newWidth=$(s.getWidthFrom).width()-padding||null}else if(s.widthFromWrapper){newWidth=s.stickyWrapper.width()}

if(newWidth==null){newWidth=s.stickyElement.width()}

s.stickyElement.css('width',newWidth).css('position','fixed').css('top',newTop).css('z-index',s.zIndex);s.stickyElement.parent().addClass(s.className);if(s.currentTop===null){s.stickyElement.trigger('sticky-start',[s])}else{s.stickyElement.trigger('sticky-update',[s])}

if(s.currentTop===s.topSpacing&&s.currentTop>newTop||s.currentTop===null&&newTop<s.topSpacing){s.stickyElement.trigger('sticky-bottom-reached',[s])}else if(s.currentTop!==null&&newTop===s.topSpacing&&s.currentTop<newTop){s.stickyElement.trigger('sticky-bottom-unreached',[s])}

s.currentTop=newTop}

var stickyWrapperContainer=s.stickyWrapper.parent();var unstick=(s.stickyElement.offset().top+s.stickyElement.outerHeight()>=stickyWrapperContainer.offset().top+stickyWrapperContainer.outerHeight())&&(s.stickyElement.offset().top<=s.topSpacing);if(unstick){s.stickyElement.css('position','absolute').css('top','').css('bottom',0).css('z-index','')}else{s.stickyElement.css('position','fixed').css('top',newTop).css('bottom','').css('z-index',s.zIndex)}}}},resizer=function(){windowHeight=$window.height();for(var i=0,l=sticked.length;i<l;i++){var s=sticked[i];var newWidth=null;if(s.getWidthFrom){if(s.responsiveWidth){newWidth=$(s.getWidthFrom).width()}}else if(s.widthFromWrapper){newWidth=s.stickyWrapper.width()}

if(newWidth!=null){s.stickyElement.css('width',newWidth)}}},methods={init:function(options){return this.each(function(){var o=$.extend({},defaults,options);var stickyElement=$(this);var stickyId=stickyElement.attr('id');var wrapperId=stickyId?stickyId+'-'+defaults.wrapperClassName:defaults.wrapperClassName;var wrapper=$('<div></div>').attr('id',wrapperId).addClass(o.wrapperClassName);stickyElement.wrapAll(function(){if($(this).parent("#"+wrapperId).length==0){return wrapper}});var stickyWrapper=stickyElement.parent();if(o.center){stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"})}

if(stickyElement.css("float")==="right"){stickyElement.css({"float":"none"}).parent().css({"float":"right"})}

o.stickyElement=stickyElement;o.stickyWrapper=stickyWrapper;o.currentTop=null;sticked.push(o);methods.setWrapperHeight(this);methods.setupChangeListeners(this)})},setWrapperHeight:function(stickyElement){var element=$(stickyElement);var stickyWrapper=element.parent();if(stickyWrapper){stickyWrapper.css('height',element.outerHeight())}},setupChangeListeners:function(stickyElement){if(window.MutationObserver){var mutationObserver=new window.MutationObserver(function(mutations){if(mutations[0].addedNodes.length||mutations[0].removedNodes.length){methods.setWrapperHeight(stickyElement)}});mutationObserver.observe(stickyElement,{subtree:!0,childList:!0})}else{if(window.addEventListener){stickyElement.addEventListener('DOMNodeInserted',function(){methods.setWrapperHeight(stickyElement)},!1);stickyElement.addEventListener('DOMNodeRemoved',function(){methods.setWrapperHeight(stickyElement)},!1)}else if(window.attachEvent){stickyElement.attachEvent('onDOMNodeInserted',function(){methods.setWrapperHeight(stickyElement)});stickyElement.attachEvent('onDOMNodeRemoved',function(){methods.setWrapperHeight(stickyElement)})}}},update:scroller,unstick:function(options){return this.each(function(){var that=this;var unstickyElement=$(that);var removeIdx=-1;var i=sticked.length;while(i-->0){if(sticked[i].stickyElement.get(0)===that){splice.call(sticked,i,1);removeIdx=i}}

if(removeIdx!==-1){unstickyElement.unwrap();unstickyElement.css({'width':'','position':'','top':'','float':'','z-index':''})}})}};if(window.addEventListener){window.addEventListener('scroll',scroller,!1);window.addEventListener('resize',resizer,!1)}else if(window.attachEvent){window.attachEvent('onscroll',scroller);window.attachEvent('onresize',resizer)}

$.fn.sticky=function(method){if(methods[method]){return methods[method].apply(this,slice.call(arguments,1))}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments)}else{$.error('Method '+method+' does not exist on jQuery.sticky')}};$.fn.unstick=function(method){if(methods[method]){return methods[method].apply(this,slice.call(arguments,1))}else if(typeof method==='object'||!method){return methods.unstick.apply(this,arguments)}else{$.error('Method '+method+' does not exist on jQuery.sticky')}};$(function(){setTimeout(scroller,0)})}))





$(document).ready(function(){



  var stickyElement = $(".sticky"),

      stickyClass = "sticky-pin",

      stickyPos = stickyElement.offset().top, //Distance from the top of the window.

      stickyHeight;



  //Create a negative margin to prevent content 'jumps':

  stickyElement.after('<div class="jumps-prevent"></div>');

  function jumpsPrevent() {

    stickyHeight = stickyElement.innerHeight();

    stickyElement.css({"margin-bottom":"-" + stickyHeight + "px"});

    stickyElement.next().css({"padding-top": + stickyHeight + "px"}); 

  };

  jumpsPrevent(); //Run.



  //Function trigger:

  $(window).resize(function(){

    jumpsPrevent();

  });



  //Sticker function:

  function stickerFn() {

    var winTop = $(this).scrollTop();

    //Check element position:

    winTop >= stickyPos ?

      stickyElement.addClass(stickyClass):

      stickyElement.removeClass(stickyClass) //Boolean class switcher.

  };

  stickerFn(); //Run.



  //Function trigger:

  $(window).scroll(function(){

    stickerFn();

  });



});


(function($) {

	/*---Owl-carousel----*/

	

	// ______________Owl-carousel-icons

	var owl = $('.owl-carousel-icons');

	owl.owlCarousel({

		margin: 0,

		padding:15,

		loop: true,

		nav: true,

		autoplay: true,

		dots: false,

		responsive: {

			0: {

				items: 1

			},

			600: {

				items: 2

			},

			1300: {

				items: 3

			}

		}

	})

	

		

	// ______________Owl-carousel-icons2

	var owl = $('.owl-carousel-icons2');

	owl.owlCarousel({

		loop: true,

		rewind: false,

		margin: 0,

		animateIn: 'fadeInDowm',

		animateOut: 'fadeOutDown',

		autoplay: false,

		autoplayTimeout: 5000, // set value to change speed

		autoplayHoverPause: true,

		dots: false,

		nav: true,

		autoplay: true,

		responsiveClass: true,

		responsive: {

			0: {

				items: 1,

				nav: true

			},

			600: {

				items: 2,

				nav: true

			},

			1300: {

				items: 4,

				nav: true

			}

		}

	})

	

	// ______________Owl-carousel-icons3

	var owl = $('.owl-carousel-icons3');

	owl.owlCarousel({

		margin: 25,

		loop: true,

		nav: false,

		dots: false,

		autoplay: true,

		responsive: {

			0: {

				items: 1

			},

			600: {

				items: 1

			},

			1000: {

				items: 2

			}

		}

	})

	

	// ______________Owl-carousel-icons4

	var owl = $('.owl-carousel-icons4');

	owl.owlCarousel({

		margin: 25,

		loop: true,

		nav: false,

		dots: false,

		autoplay: true,

		responsive: {

			0: {

				items: 1

			},

			600: {

				items: 3

			},

			1000: {

				items: 6

			}

		}

	})

	

	// ______________Owl-carousel-icons5

	var owl = $('.owl-carousel-icons5');

	owl.owlCarousel({

		loop: true,

		rewind: false,

		margin: 25,

		animateIn: 'fadeInDowm',

		animateOut: 'fadeOutDown',

		autoplay: false,

		autoplayTimeout: 5000, // set value to change speed

		autoplayHoverPause: true,

		dots: true,

		nav: false,

		autoplay: true,

		responsiveClass: true,

		responsive: {

			0: {

				items: 1,

				nav: true

			},

			600: {

				items: 2,

				nav: true

			},

			1300: {

				items: 4,

				nav: true

			}

		}

	})

	

	// ______________Owl-carousel-icons6

	var owl = $('.owl-carousel-icons6');

	owl.owlCarousel({

		margin: 25,

		loop: true,

		nav: false,

		dots: false,

		autoplay: true,

		responsive: {

			0: {

				items: 1

			},

			600: {

				items: 2

			},

			1000: {

				items: 3

			}

		}

	})

	

	// ______________Owl-carousel-icons7

	var owl = $('.owl-carousel-icons7');

	owl.owlCarousel({

		margin: 25,

		loop: true,

		nav: false,

		dots: false,

		autoplay: true,

		responsive: {

			0: {

				items: 1

			},

			600: {

				items: 2

			},

			1000: {

				items: 3

			}

		}

	})

	// ______________Testimonial-owl-carousel2

	var owl = $('.testimonial-owl-carousel2');

	owl.owlCarousel({

		margin: 25,

		loop: true,

		nav: false,

		autoplay: true,

		dots: false,

		animateOut: 'fadeOut',

		smartSpeed:450,

		responsive: {

			0: {

				items: 1

			}

		}

	})

	

	// ______________Testimonial-owl-carousel3

	var owl = $('.testimonial-owl-carousel3');

	owl.owlCarousel({

		margin: 25,

		loop: true,

		nav: false,

		autoplay: true,

		dots: true,

		responsive: {

			0: {

				items: 1

			}

		}

	})

	

	// ______________Testimonial-owl-carousel4

	var owl = $('.testimonial-owl-carousel4');

	owl.owlCarousel({

		margin: 25,

		loop: true,

		nav: false,

		autoplay: true,

		dots: true,

		responsive: {

			0: {

				items: 1

			}

		}

	})

	

	// ______________Testimonial-owl-carousel

	var owl = $('.testimonial-owl-carousel');

	owl.owlCarousel({

		loop: true,

		rewind: false,

		margin: 25,

		autoplay: true,

		animateIn: 'fadeInDowm',

		animateOut: 'fadeOutDown',

		autoplay: false,

		autoplayTimeout: 5000, // set value to change speed

		autoplayHoverPause: true,

		dots: false,

		nav: true,

		responsiveClass: true,

		responsive: {

			0: {

				items: 1,

				nav: true

			},

			1000: {

				items: 2

			}

		}

	})

	

	// ______________Testimonial-owl-carousel

	var owl = $('.testimonial-owl-carousel-01');

	owl.owlCarousel({

		loop: true,

		rewind: false,

		margin: 25,

		autoplay: true,

		animateIn: 'fadeInDowm',

		animateOut: 'fadeOutDown',

		autoplay: false,

		autoplayTimeout: 5000, // set value to change speed

		autoplayHoverPause: true,

		dots: false,

		nav: true,

		responsiveClass: true,

		responsive: {

			0: {

				items: 1,

				nav: true

			},

			1000: {

				items: 1

			}

		}

	})

	

	// ______________Client-carousel

	var owl = $('.client-carousel');

	owl.owlCarousel({

		loop: true,

		rewind: false,

		margin: 25,

		animateIn: 'fadeInDowm',

		animateOut: 'fadeOutDown',

		autoplay: true,

		autoplayTimeout: 5000, // set value to change speed

		autoplayHoverPause: true,

		dots: false,

		nav: false,

		responsiveClass: true,

		responsive: {

			0: {

				items: 2,

				nav:false

			},

			600: {

				items: 3,

				nav: false

			},

			1300: {

				items: 5,

				nav: false

			}

		}

	})

	

	// ______________Client-carousel

	var owl = $('.classes-carousel');

	owl.owlCarousel({

		loop:true,

		margin:0,

		autoplay:true,

		autoplayHoverPause:true,

		dots: false,

		 slideTransition: 'linear',

        autoplayTimeout: 3000,

        autoplaySpeed: 3000,

		responsiveClass: true,

		responsive: {

			0: {

				items: 1,

				nav:false

			},

			600: {

				items: 2,

				nav: false

			},

			1300: {

				items: 6,

				nav: false

			}

		}

	})

	

	// ______________Client-carousel

	var owl = $('.classes-carousel-1');

	owl.owlCarousel({

        // items:3,

		loop:true,

		margin:0,

		autoplay:true,

		autoplayHoverPause:true,

		dots: false,

		slideTransition: 'linear',

        autoplayTimeout: 3000,

        autoplaySpeed: 3000,

		responsiveClass: true,

		responsive: {

			0: {

				items: 1,

				nav:false

			},

			600: {

				items: 2,

				nav: false

			},

			1300: {

				items: 4,

				nav: false

			}

		}

	})

	

	// ______________Client-carousel

	var owl = $('.classes-carousel-2');

	owl.owlCarousel({

        // items:4,

		loop:true,

		margin:0,

		autoplay:true,

		autoplayHoverPause:true,

		dots: false,

		slideTransition: 'linear',

        autoplayTimeout: 3000,

        autoplaySpeed: 3000,

		responsiveClass: true,

		responsive: {

			0: {

				items: 1,

				nav:false

			},

			600: {

				items: 2,

				nav: false

			},

			1300: {

				items: 4,

				nav: false

			}

		}

	})

	// ______________bannner-owl-carousel

	var owl = $('.bannner-owl-carousel');

	owl.owlCarousel({

		margin: 0,

		padding:0,

		loop: true,

		nav: false,

		autoplay: true,

		dots: false,

		animateOut: 'fadeOut',

		smartSpeed:450,

		responsive: {

			0: {

				items: 1

			}

		}

	})

	

	// ______________bannner-owl-carousel1

	var owl = $('.bannner-owl-carousel1');

	owl.owlCarousel({

		margin: 0,

		loop: true,

		nav: true,

		autoplay: true,

		dots: false,

		animateOut: 'fadeIn',

		smartSpeed:450,

		responsive: {

			0: {

				items: 1

			}

		}

	})

	

})(jQuery);


$(function(e){

	$('.counter').countUp();

});


/*!
Waypoints - 4.0.0
Copyright Ãƒâ€šÃ‚Â© 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/*!
* jquery.countup.js 1.0.3
*
* Copyright 2016, AdriÃƒÂ¡n Guerra Marrero http://agmstudio.io @AGMStudio_io
* Released under the MIT License
*
* Date: Oct 27, 2016
*/
(function( $ ){
    "use strict";
  
    $.fn.countUp = function( options ) {
  
      // Defaults
      var settings = $.extend({
          'time': 2000,
          'delay': 10
      }, options);
  
      return this.each(function(){
  
          // Store the object
          var $this = $(this);
          var $settings = settings;
  
          var counterUpper = function() {
              if(!$this.data('counterupTo')) {
                  $this.data('counterupTo',$this.text());
              }
              var time = parseInt($this.data("counter-time")) > 0 ? parseInt($this.data("counter-time")) : $settings.time;
              var delay = parseInt($this.data("counter-delay")) > 0 ? parseInt($this.data("counter-delay")) : $settings.delay;
              var divisions = time / delay;
              var num = $this.data('counterupTo');
              var nums = [num];
              var isComma = /[0-9]+,[0-9]+/.test(num);
              num = num.replace(/,/g, '');
              var isInt = /^[0-9]+$/.test(num);
              var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
              var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
  
              // Generate list of incremental numbers to display
              for (var i = divisions; i >= 1; i--) {
  
                  // Preserve as int if input was int
                  var newNum = parseInt(Math.round(num / divisions * i));
  
                  // Preserve float if input was float
                  if (isFloat) {
                      newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                  }
  
                  // Preserve commas if input had commas
                  if (isComma) {
                      while (/(\d+)(\d{3})/.test(newNum.toString())) {
                          newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                      }
                  }
  
                  nums.unshift(newNum);
              }
  
              $this.data('counterup-nums', nums);
              $this.text('0');
  
              // Updates the number until we're done
              var f = function() {
                  $this.text($this.data('counterup-nums').shift());
                  if ($this.data('counterup-nums').length) {
                      setTimeout($this.data('counterup-func'),delay);
                  } else {
                      delete $this.data('counterup-nums');
                      $this.data('counterup-nums', null);
                      $this.data('counterup-func', null);
                  }
              };
              $this.data('counterup-func', f);
  
              // Start the count up
              setTimeout($this.data('counterup-func'),delay);
          };
  
          // Perform counts when the element gets into view
          $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
      });
  
    };
  
  })( jQuery );


  !function(t,e,i,s){function n(e,i){this.settings=null,this.options=t.extend({},n.Defaults,i),this.$element=t(e),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},t.each(["onResize","onThrottledResize"],t.proxy(function(e,i){this._handlers[i]=t.proxy(this[i],this)},this)),t.each(n.Plugins,t.proxy(function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)},this)),t.each(n.Workers,t.proxy(function(e,i){this._pipe.push({filter:i.filter,run:t.proxy(i.run,this)})},this)),this.setup(),this.initialize()}n.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:e,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},n.Width={Default:"default",Inner:"inner",Outer:"outer"},n.Type={Event:"event",State:"state"},n.Plugins={},n.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",i=!this.settings.autoWidth,s=this.settings.rtl,n={width:"auto","margin-left":s?e:"","margin-right":s?"":e};!i&&this.$stage.children().css(n),t.css=n}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,s=this._items.length,n=!this.settings.autoWidth,o=[];for(t.items={merge:!1,width:e};s--;)i=this._mergers[s],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,t.items.merge=i>1||t.items.merge,o[s]=n?e*i:this._items[s].width();this._widths=o}},{filter:["items","settings"],run:function(){var e=[],i=this._items,s=this.settings,n=Math.max(2*s.items,4),o=2*Math.ceil(i.length/2),r=s.loop&&i.length?s.rewind?n:Math.max(n,o):0,a="",h="";for(r/=2;r>0;)e.push(this.normalize(e.length/2,!0)),a+=i[e[e.length-1]][0].outerHTML,e.push(this.normalize(i.length-1-(e.length-1)/2,!0)),h=i[e[e.length-1]][0].outerHTML+h,r-=1;this._clones=e,t(a).addClass("cloned").appendTo(this.$stage),t(h).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t=this.settings.rtl?1:-1,e=this._clones.length+this._items.length,i=-1,s=0,n=0,o=[];++i<e;)s=o[i-1]||0,n=this._widths[this.relative(i)]+this.settings.margin,o.push(s+n*t);this._coordinates=o}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,i={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""};this.$stage.css(i)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,i=!this.settings.autoWidth,s=this.$stage.children();if(i&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],s.eq(e).css(t.css);else i&&(t.css.width=t.items.width,s.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var t,e,i,s,n=this.settings.rtl?1:-1,o=2*this.settings.stagePadding,r=this.coordinates(this.current())+o,a=r+this.width()*n,h=[];for(i=0,s=this._coordinates.length;i<s;i++)t=this._coordinates[i-1]||0,e=Math.abs(this._coordinates[i])+o*n,(this.op(t,"<=",r)&&this.op(t,">",a)||this.op(e,"<",r)&&this.op(e,">",a))&&h.push(i);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+h.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],n.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=t("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(t("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},n.prototype.initializeItems=function(){var e=this.$element.find(".owl-item");if(e.length)return this._items=e.get().map(function(e){return t(e)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},n.prototype.initialize=function(){var t,e,i;(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading"))&&(t=this.$element.find("img"),e=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:void 0,i=this.$element.children(e).width(),t.length&&i<=0&&this.preloadAutoWidthImages(t));this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},n.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},n.prototype.setup=function(){var e=this.viewport(),i=this.options.responsive,s=-1,n=null;i?(t.each(i,function(t){t<=e&&t>s&&(s=Number(t))}),"function"==typeof(n=t.extend({},this.options,i[s])).stagePadding&&(n.stagePadding=n.stagePadding()),delete n.responsive,n.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+s))):n=t.extend({},this.options),this.trigger("change",{property:{name:"settings",value:n}}),this._breakpoint=s,this.settings=n,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},n.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},n.prototype.prepare=function(e){var i=this.trigger("prepare",{content:e});return i.data||(i.data=t("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(e)),this.trigger("prepared",{content:i.data}),i.data},n.prototype.update=function(){for(var e=0,i=this._pipe.length,s=t.proxy(function(t){return this[t]},this._invalidated),n={};e<i;)(this._invalidated.all||t.grep(this._pipe[e].filter,s).length>0)&&this._pipe[e].run(n),e++;this._invalidated={},!this.is("valid")&&this.enter("valid")},n.prototype.width=function(t){switch(t=t||n.Width.Default){case n.Width.Inner:case n.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},n.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},n.prototype.onThrottledResize=function(){e.clearTimeout(this.resizeTimer),this.resizeTimer=e.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},n.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},n.prototype.registerEventHandlers=function(){t.support.transition&&this.$stage.on(t.support.transition.end+".owl.core",t.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(e,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",t.proxy(this.onDragEnd,this)))},n.prototype.onDragStart=function(e){var s=null;3!==e.which&&(t.support.transform?s={x:(s=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===s.length?12:4],y:s[16===s.length?13:5]}:(s=this.$stage.position(),s={x:this.settings.rtl?s.left+this.$stage.width()-this.width()+this.settings.margin:s.left,y:s.top}),this.is("animating")&&(t.support.transform?this.animate(s.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===e.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=t(e.target),this._drag.stage.start=s,this._drag.stage.current=s,this._drag.pointer=this.pointer(e),t(i).on("mouseup.owl.core touchend.owl.core",t.proxy(this.onDragEnd,this)),t(i).one("mousemove.owl.core touchmove.owl.core",t.proxy(function(e){var s=this.difference(this._drag.pointer,this.pointer(e));t(i).on("mousemove.owl.core touchmove.owl.core",t.proxy(this.onDragMove,this)),Math.abs(s.x)<Math.abs(s.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},n.prototype.onDragMove=function(t){var e=null,i=null,s=null,n=this.difference(this._drag.pointer,this.pointer(t)),o=this.difference(this._drag.stage.start,n);this.is("dragging")&&(t.preventDefault(),this.settings.loop?(e=this.coordinates(this.minimum()),i=this.coordinates(this.maximum()+1)-e,o.x=((o.x-e)%i+i)%i+e):(e=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),i=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),s=this.settings.pullDrag?-1*n.x/5:0,o.x=Math.max(Math.min(o.x,e+s),i+s)),this._drag.stage.current=o,this.animate(o.x))},n.prototype.onDragEnd=function(e){var s=this.difference(this._drag.pointer,this.pointer(e)),n=this._drag.stage.current,o=s.x>0^this.settings.rtl?"left":"right";t(i).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==s.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(n.x,0!==s.x?o:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=o,(Math.abs(s.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},n.prototype.closest=function(e,i){var s=-1,n=this.width(),o=this.coordinates();return this.settings.freeDrag||t.each(o,t.proxy(function(t,r){return"left"===i&&e>r-30&&e<r+30?s=t:"right"===i&&e>r-n-30&&e<r-n+30?s=t+1:this.op(e,"<",r)&&this.op(e,">",void 0!==o[t+1]?o[t+1]:r-n)&&(s="left"===i?t+1:t),-1===s},this)),this.settings.loop||(this.op(e,">",o[this.minimum()])?s=e=this.minimum():this.op(e,"<",o[this.maximum()])&&(s=e=this.maximum())),s},n.prototype.animate=function(e){var i=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),i&&(this.enter("animating"),this.trigger("translate")),t.support.transform3d&&t.support.transition?this.$stage.css({transform:"translate3d("+e+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):i?this.$stage.animate({left:e+"px"},this.speed(),this.settings.fallbackEasing,t.proxy(this.onTransitionEnd,this)):this.$stage.css({left:e+"px"})},n.prototype.is=function(t){return this._states.current[t]&&this._states.current[t]>0},n.prototype.current=function(t){if(void 0===t)return this._current;if(0!==this._items.length){if(t=this.normalize(t),this._current!==t){var e=this.trigger("change",{property:{name:"position",value:t}});void 0!==e.data&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current}},n.prototype.invalidate=function(e){return"string"===t.type(e)&&(this._invalidated[e]=!0,this.is("valid")&&this.leave("valid")),t.map(this._invalidated,function(t,e){return e})},n.prototype.reset=function(t){void 0!==(t=this.normalize(t))&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},n.prototype.normalize=function(t,e){var i=this._items.length,s=e?0:this._clones.length;return!this.isNumeric(t)||i<1?t=void 0:(t<0||t>=i+s)&&(t=((t-s/2)%i+i)%i+s/2),t},n.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},n.prototype.maximum=function(t){var e,i,s,n=this.settings,o=this._coordinates.length;if(n.loop)o=this._clones.length/2+this._items.length-1;else if(n.autoWidth||n.merge){if(e=this._items.length)for(i=this._items[--e].width(),s=this.$element.width();e--&&!((i+=this._items[e].width()+this.settings.margin)>s););o=e+1}else o=n.center?this._items.length-1:this._items.length-n.items;return t&&(o-=this._clones.length/2),Math.max(o,0)},n.prototype.minimum=function(t){return t?0:this._clones.length/2},n.prototype.items=function(t){return void 0===t?this._items.slice():(t=this.normalize(t,!0),this._items[t])},n.prototype.mergers=function(t){return void 0===t?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},n.prototype.clones=function(e){var i=this._clones.length/2,s=i+this._items.length,n=function(t){return t%2==0?s+t/2:i-(t+1)/2};return void 0===e?t.map(this._clones,function(t,e){return n(e)}):t.map(this._clones,function(t,i){return t===e?n(i):null})},n.prototype.speed=function(t){return void 0!==t&&(this._speed=t),this._speed},n.prototype.coordinates=function(e){var i,s=1,n=e-1;return void 0===e?t.map(this._coordinates,t.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(this.settings.rtl&&(s=-1,n=e+1),i=this._coordinates[e],i+=(this.width()-i+(this._coordinates[n]||0))/2*s):i=this._coordinates[n]||0,i=Math.ceil(i))},n.prototype.duration=function(t,e,i){return 0===i?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},n.prototype.to=function(t,e){var i=this.current(),s=null,n=t-this.relative(i),o=(n>0)-(n<0),r=this._items.length,a=this.minimum(),h=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(n)>r/2&&(n+=-1*o*r),(s=(((t=i+n)-a)%r+r)%r+a)!==t&&s-n<=h&&s-n>0&&(i=s-n,t=s,this.reset(i))):t=this.settings.rewind?(t%(h+=1)+h)%h:Math.max(a,Math.min(h,t)),this.speed(this.duration(i,t,e)),this.current(t),this.isVisible()&&this.update()},n.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},n.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},n.prototype.onTransitionEnd=function(t){if(void 0!==t&&(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},n.prototype.viewport=function(){var s;return this.options.responsiveBaseElement!==e?s=t(this.options.responsiveBaseElement).width():e.innerWidth?s=e.innerWidth:i.documentElement&&i.documentElement.clientWidth?s=i.documentElement.clientWidth:console.warn("Can not detect viewport width."),s},n.prototype.replace=function(e){this.$stage.empty(),this._items=[],e&&(e=e instanceof jQuery?e:t(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter(function(){return 1===this.nodeType}).each(t.proxy(function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},n.prototype.add=function(e,i){var s=this.relative(this._current);i=void 0===i?this._items.length:this.normalize(i,!0),e=e instanceof jQuery?e:t(e),this.trigger("add",{content:e,position:i}),e=this.prepare(e),0===this._items.length||i===this._items.length?(0===this._items.length&&this.$stage.append(e),0!==this._items.length&&this._items[i-1].after(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[i].before(e),this._items.splice(i,0,e),this._mergers.splice(i,0,1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[s]&&this.reset(this._items[s].index()),this.invalidate("items"),this.trigger("added",{content:e,position:i})},n.prototype.remove=function(t){void 0!==(t=this.normalize(t,!0))&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},n.prototype.preloadAutoWidthImages=function(e){e.each(t.proxy(function(e,i){this.enter("pre-loading"),i=t(i),t(new Image).one("load",t.proxy(function(t){i.attr("src",t.target.src),i.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",i.attr("src")||i.attr("data-src")||i.attr("data-src-retina"))},this))},n.prototype.destroy=function(){for(var s in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),t(i).off(".owl.core"),!1!==this.settings.responsive&&(e.clearTimeout(this.resizeTimer),this.off(e,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[s].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},n.prototype.op=function(t,e,i){var s=this.settings.rtl;switch(e){case"<":return s?t>i:t<i;case">":return s?t<i:t>i;case">=":return s?t<=i:t>=i;case"<=":return s?t>=i:t<=i}},n.prototype.on=function(t,e,i,s){t.addEventListener?t.addEventListener(e,i,s):t.attachEvent&&t.attachEvent("on"+e,i)},n.prototype.off=function(t,e,i,s){t.removeEventListener?t.removeEventListener(e,i,s):t.detachEvent&&t.detachEvent("on"+e,i)},n.prototype.trigger=function(e,i,s,o,r){var a={item:{count:this._items.length,index:this.current()}},h=t.camelCase(t.grep(["on",e,s],function(t){return t}).join("-").toLowerCase()),l=t.Event([e,"owl",s||"carousel"].join(".").toLowerCase(),t.extend({relatedTarget:this},a,i));return this._supress[e]||(t.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(l)}),this.register({type:n.Type.Event,name:e}),this.$element.trigger(l),this.settings&&"function"==typeof this.settings[h]&&this.settings[h].call(this,l)),l},n.prototype.enter=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){void 0===this._states.current[e]&&(this._states.current[e]=0),this._states.current[e]++},this))},n.prototype.leave=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]--},this))},n.prototype.register=function(e){if(e.type===n.Type.Event){if(t.event.special[e.name]||(t.event.special[e.name]={}),!t.event.special[e.name].owl){var i=t.event.special[e.name]._default;t.event.special[e.name]._default=function(t){return!i||!i.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&t.namespace.indexOf("owl")>-1:i.apply(this,arguments)},t.event.special[e.name].owl=!0}}else e.type===n.Type.State&&(this._states.tags[e.name]?this._states.tags[e.name]=this._states.tags[e.name].concat(e.tags):this._states.tags[e.name]=e.tags,this._states.tags[e.name]=t.grep(this._states.tags[e.name],t.proxy(function(i,s){return t.inArray(i,this._states.tags[e.name])===s},this)))},n.prototype.suppress=function(e){t.each(e,t.proxy(function(t,e){this._supress[e]=!0},this))},n.prototype.release=function(e){t.each(e,t.proxy(function(t,e){delete this._supress[e]},this))},n.prototype.pointer=function(t){var i={x:null,y:null};return(t=(t=t.originalEvent||t||e.event).touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t).pageX?(i.x=t.pageX,i.y=t.pageY):(i.x=t.clientX,i.y=t.clientY),i},n.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},n.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},t.fn.owlCarousel=function(e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var s=t(this),o=s.data("owl.carousel");o||(o=new n(this,"object"==typeof e&&e),s.data("owl.carousel",o),t.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(e,i){o.register({type:n.Type.Event,name:i}),o.$element.on(i+".owl.carousel.core",t.proxy(function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([i]),o[i].apply(this,[].slice.call(arguments,1)),this.release([i]))},o))})),"string"==typeof e&&"_"!==e.charAt(0)&&o[e].apply(o,i)})},t.fn.owlCarousel.Constructor=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={autoRefresh:!0,autoRefreshInterval:500},n.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=e.setInterval(t.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},n.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},n.prototype.destroy=function(){var t,i;for(t in e.clearInterval(this._interval),this._handlers)this._core.$element.off(t,this._handlers[t]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoRefresh=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":t.proxy(function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type)){var i=this._core.settings,s=i.center&&Math.ceil(i.items/2)||i.items,n=i.center&&-1*s||0,o=(e.property&&void 0!==e.property.value?e.property.value:this._core.current())+n,r=this._core.clones().length,a=t.proxy(function(t,e){this.load(e)},this);for(i.lazyLoadEager>0&&(s+=i.lazyLoadEager,i.loop&&(o-=i.lazyLoadEager,s++));n++<s;)this.load(r/2+this._core.relative(o)),r&&t.each(this._core.clones(this._core.relative(o)),a),o++}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={lazyLoad:!1,lazyLoadEager:0},n.prototype.load=function(i){var s=this._core.$stage.children().eq(i),n=s&&s.find(".owl-lazy");!n||t.inArray(s.get(0),this._loaded)>-1||(n.each(t.proxy(function(i,s){var n,o=t(s),r=e.devicePixelRatio>1&&o.attr("data-src-retina")||o.attr("data-src")||o.attr("data-srcset");this._core.trigger("load",{element:o,url:r},"lazy"),o.is("img")?o.one("load.owl.lazy",t.proxy(function(){o.css("opacity",1),this._core.trigger("loaded",{element:o,url:r},"lazy")},this)).attr("src",r):o.is("source")?o.one("load.owl.lazy",t.proxy(function(){this._core.trigger("loaded",{element:o,url:r},"lazy")},this)).attr("srcset",r):((n=new Image).onload=t.proxy(function(){o.css({"background-image":'url("'+r+'")',opacity:"1"}),this._core.trigger("loaded",{element:o,url:r},"lazy")},this),n.src=r)},this)),this._loaded.push(s.get(0)))},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Lazy=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(i){this._core=i,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&"position"===t.property.name&&this.update()},this),"loaded.owl.lazy":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var s=this;t(e).on("load",function(){s._core.settings.autoHeight&&s.update()}),t(e).resize(function(){s._core.settings.autoHeight&&(null!=s._intervalId&&clearTimeout(s._intervalId),s._intervalId=setTimeout(function(){s.update()},250))})};n.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},n.prototype.update=function(){var e=this._core._current,i=e+this._core.settings.items,s=this._core.settings.lazyLoad,n=this._core.$stage.children().toArray().slice(e,i),o=[],r=0;t.each(n,function(e,i){o.push(t(i).height())}),(r=Math.max.apply(null,o))<=1&&s&&this._previousHeight&&(r=this._previousHeight),this._previousHeight=r,this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)},n.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoHeight=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find(".owl-video");i.length&&(i.css("display","none"),this.fetch(i,t(e.content)))}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",t.proxy(function(t){this.play(t)},this))};n.Defaults={video:!1,videoHeight:!1,videoWidth:!1},n.prototype.fetch=function(t,e){var i=t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube",s=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),n=t.attr("data-width")||this._core.settings.videoWidth,o=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href");if(!r)throw new Error("Missing video URL.");if((s=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")>-1)i="youtube";else if(s[3].indexOf("vimeo")>-1)i="vimeo";else{if(!(s[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");i="vzaar"}s=s[6],this._videos[r]={type:i,id:s,width:n,height:o},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},n.prototype.thumbnail=function(e,i){var s,n,o=i.width&&i.height?"width:"+i.width+"px;height:"+i.height+"px;":"",r=e.find("img"),a="src",h="",l=this._core.settings,c=function(i){'<div class="owl-video-play-icon"></div>',s=l.lazyLoad?t("<div/>",{class:"owl-video-tn "+h,srcType:i}):t("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+i+")"}),e.after(s),e.after('<div class="owl-video-play-icon"></div>')};if(e.wrap(t("<div/>",{class:"owl-video-wrapper",style:o})),this._core.settings.lazyLoad&&(a="data-src",h="owl-lazy"),r.length)return c(r.attr(a)),r.remove(),!1;"youtube"===i.type?(n="//img.youtube.com/vi/"+i.id+"/hqdefault.jpg",c(n)):"vimeo"===i.type?t.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t[0].thumbnail_large,c(n)}}):"vzaar"===i.type&&t.ajax({type:"GET",url:"//vzaar.com/api/videos/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t.framegrab_url,c(n)}})},n.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},n.prototype.play=function(e){var i,s=t(e.target).closest("."+this._core.settings.itemClass),n=this._videos[s.attr("data-video")],o=n.width||"100%",r=n.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),s=this._core.items(this._core.relative(s.index())),this._core.reset(s.index()),(i=t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height",r),i.attr("width",o),"youtube"===n.type?i.attr("src","//www.youtube.com/embed/"+n.id+"?autoplay=1&rel=0&v="+n.id):"vimeo"===n.type?i.attr("src","//player.vimeo.com/video/"+n.id+"?autoplay=1"):"vzaar"===n.type&&i.attr("src","//view.vzaar.com/"+n.id+"/player?autoplay=true"),t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")),this._playing=s.addClass("owl-video-playing"))},n.prototype.isInFullScreen=function(){var e=i.fullscreenElement||i.mozFullScreenElement||i.webkitFullscreenElement;return e&&t(e).parent().hasClass("owl-video-frame")},n.prototype.destroy=function(){var t,e;for(t in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Video=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this.core=e,this.core.options=t.extend({},n.Defaults,this.core.options),this.swapping=!0,this.previous=void 0,this.next=void 0,this.handlers={"change.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":t.proxy(function(t){t.namespace&&(this.swapping="translated"==t.type)},this),"translate.owl.carousel":t.proxy(function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};n.Defaults={animateOut:!1,animateIn:!1},n.prototype.swap=function(){if(1===this.core.settings.items&&t.support.animation&&t.support.transition){this.core.speed(0);var e,i=t.proxy(this.clear,this),s=this.core.$stage.children().eq(this.previous),n=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,r=this.core.settings.animateOut;this.core.current()!==this.previous&&(r&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),s.one(t.support.animation.end,i).css({left:e+"px"}).addClass("animated owl-animated-out").addClass(r)),o&&n.one(t.support.animation.end,i).addClass("animated owl-animated-in").addClass(o))}},n.prototype.clear=function(e){t(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Animate=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":t.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":t.proxy(function(t,e,i){t.namespace&&this.play(e,i)},this),"stop.owl.autoplay":t.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=t.extend({},n.Defaults,this._core.options)};n.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},n.prototype._next=function(s){this._call=e.setTimeout(t.proxy(this._next,this,s),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||i.hidden||this._core.next(s||this._core.settings.autoplaySpeed)},n.prototype.read=function(){return(new Date).getTime()-this._time},n.prototype.play=function(i,s){var n;this._core.is("rotating")||this._core.enter("rotating"),i=i||this._core.settings.autoplayTimeout,n=Math.min(this._time%(this._timeout||i),i),this._paused?(this._time=this.read(),this._paused=!1):e.clearTimeout(this._call),this._time+=this.read()%i-n,this._timeout=i,this._call=e.setTimeout(t.proxy(this._next,this,s),i-n)},n.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,e.clearTimeout(this._call),this._core.leave("rotating"))},n.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,e.clearTimeout(this._call))},n.prototype.destroy=function(){var t,e;for(t in this.stop(),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.autoplay=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=function(e){this._core=e,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":t.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers)};n.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},n.prototype.initialize=function(){var e,i=this._core.settings;for(e in this._controls.$relative=(i.navContainer?t(i.navContainer):t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=t("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",t.proxy(function(t){this.prev(i.navSpeed)},this)),this._controls.$next=t("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",t.proxy(function(t){this.next(i.navSpeed)},this)),i.dotsData||(this._templates=[t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?t(i.dotsContainer):t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",t.proxy(function(e){var s=t(e.target).parent().is(this._controls.$absolute)?t(e.target).index():t(e.target).parent().index();e.preventDefault(),this.to(s,i.dotsSpeed)},this)),this._overrides)this._core[e]=t.proxy(this[e],this)},n.prototype.destroy=function(){var t,e,i,s,n;for(t in n=this._core.settings,this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)"$relative"===e&&n.navContainer?this._controls[e].html(""):this._controls[e].remove();for(s in this.overides)this._core[s]=this._overrides[s];for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},n.prototype.update=function(){var t,e,i=this._core.clones().length/2,s=i+this._core.items().length,n=this._core.maximum(!0),o=this._core.settings,r=o.center||o.autoWidth||o.dotsData?1:o.dotsEach||o.items;if("page"!==o.slideBy&&(o.slideBy=Math.min(o.slideBy,o.items)),o.dots||"page"==o.slideBy)for(this._pages=[],t=i,e=0,0;t<s;t++){if(e>=r||0===e){if(this._pages.push({start:Math.min(n,t-i),end:t-i+r-1}),Math.min(n,t-i)===n)break;e=0,0}e+=this._core.mergers(this._core.relative(t))}},n.prototype.draw=function(){var e,i=this._core.settings,s=this._core.items().length<=i.items,n=this._core.relative(this._core.current()),o=i.loop||i.rewind;this._controls.$relative.toggleClass("disabled",!i.nav||s),i.nav&&(this._controls.$previous.toggleClass("disabled",!o&&n<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&n>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!i.dots||s),i.dots&&(e=this._pages.length-this._controls.$absolute.children().length,i.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):e>0?this._controls.$absolute.append(new Array(e+1).join(this._templates[0])):e<0&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(t.inArray(this.current(),this._pages)).addClass("active"))},n.prototype.onTrigger=function(e){var i=this._core.settings;e.page={index:t.inArray(this.current(),this._pages),count:this._pages.length,size:i&&(i.center||i.autoWidth||i.dotsData?1:i.dotsEach||i.items)}},n.prototype.current=function(){var e=this._core.relative(this._core.current());return t.grep(this._pages,t.proxy(function(t,i){return t.start<=e&&t.end>=e},this)).pop()},n.prototype.getPosition=function(e){var i,s,n=this._core.settings;return"page"==n.slideBy?(i=t.inArray(this.current(),this._pages),s=this._pages.length,e?++i:--i,i=this._pages[(i%s+s)%s].start):(i=this._core.relative(this._core.current()),s=this._core.items().length,e?i+=n.slideBy:i-=n.slideBy),i},n.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},n.prototype.prev=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},n.prototype.to=function(e,i,s){var n;!s&&this._pages.length?(n=this._pages.length,t.proxy(this._overrides.to,this._core)(this._pages[(e%n+n)%n].start,i)):t.proxy(this._overrides.to,this._core)(e,i)},t.fn.owlCarousel.Constructor.Plugins.Navigation=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=function(i){this._core=i,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":t.proxy(function(i){i.namespace&&"URLHash"===this._core.settings.startPosition&&t(e).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!i)return;this._hashes[i]=e.content}},this),"changed.owl.carousel":t.proxy(function(i){if(i.namespace&&"position"===i.property.name){var s=this._core.items(this._core.relative(this._core.current())),n=t.map(this._hashes,function(t,e){return t===s?e:null}).join();if(!n||e.location.hash.slice(1)===n)return;e.location.hash=n}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers),t(e).on("hashchange.owl.navigation",t.proxy(function(t){var i=e.location.hash.substring(1),s=this._core.$stage.children(),n=this._hashes[i]&&s.index(this._hashes[i]);void 0!==n&&n!==this._core.current()&&this._core.to(this._core.relative(n),!1,!0)},this))};n.Defaults={URLhashListener:!1},n.prototype.destroy=function(){var i,s;for(i in t(e).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(i,this._handlers[i]);for(s in Object.getOwnPropertyNames(this))"function"!=typeof this[s]&&(this[s]=null)},t.fn.owlCarousel.Constructor.Plugins.Hash=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=t("<support>").get(0).style,o="Webkit Moz O ms".split(" "),r={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},a=function(){return!!c("transform")},h=function(){return!!c("perspective")},l=function(){return!!c("animation")};function c(e,i){var r=!1,a=e.charAt(0).toUpperCase()+e.slice(1);return t.each((e+" "+o.join(a+" ")+a).split(" "),function(t,e){if(n[e]!==s)return r=!i||e,!1}),r}function p(t){return c(t,!0)}(function(){return!!c("transition")})()&&(t.support.transition=new String(p("transition")),t.support.transition.end=r.transition.end[t.support.transition]),l()&&(t.support.animation=new String(p("animation")),t.support.animation.end=r.animation.end[t.support.animation]),a()&&(t.support.transform=new String(p("transform")),t.support.transform3d=h())}(window.Zepto||window.jQuery,window,document);

  /**
 * jQuery Bar Rating Plugin v1.2.2
 *
 * http://github.com/antennaio/jquery-bar-rating
 *
 * Copyright (c) 2012-2016 Kazik Pietruszewski
 *
 * This plugin is available under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // browser globals
        factory(jQuery);
    }
}(function ($) {

    var BarRating = (function() {

        function BarRating() {
            var self = this;

            // wrap element in a wrapper div
            var wrapElement = function() {
                var classes = ['br-wrapper'];

                if (self.options.theme !== '') {
                    classes.push('br-theme-' + self.options.theme);
                }

                self.$elem.wrap($('<div />', {
                    'class': classes.join(' ')
                }));
            };

            // unwrap element
            var unwrapElement = function() {
                self.$elem.unwrap();
            };

            // find option by value
            var findOption = function(value) {
                if ($.isNumeric(value)) {
                    value = Math.floor(value);
                }

                return $('option[value="' + value  + '"]', self.$elem);
            };

            // get initial option
            var getInitialOption = function() {
                var initialRating = self.options.initialRating;

                if (!initialRating) {
                    return $('option:selected', self.$elem);
                }

                return findOption(initialRating);
            };

            // get empty option
            var getEmptyOption = function() {
                var $emptyOpt = self.$elem.find('option[value="' + self.options.emptyValue + '"]');

                if (!$emptyOpt.length && self.options.allowEmpty) {
                    $emptyOpt = $('<option />', { 'value': self.options.emptyValue });

                    return $emptyOpt.prependTo(self.$elem);
                }

                return $emptyOpt;
            };

            // get data
            var getData = function(key) {
                var data = self.$elem.data('barrating');

                if (typeof key !== 'undefined') {
                    return data[key];
                }

                return data;
            };

            // set data
            var setData = function(key, value) {
                if (value !== null && typeof value === 'object') {
                    self.$elem.data('barrating', value);
                } else {
                    self.$elem.data('barrating')[key] = value;
                }
            };

            // save data on element
            var saveDataOnElement = function() {
                var $opt = getInitialOption();
                var $emptyOpt = getEmptyOption();

                var value = $opt.val();
                var text = $opt.data('html') ? $opt.data('html') : $opt.text();

                // if the allowEmpty option is not set let's check if empty option exists in the select field
                var allowEmpty = (self.options.allowEmpty !== null) ?
                    self.options.allowEmpty :
                    !!$emptyOpt.length;

                var emptyValue = ($emptyOpt.length) ? $emptyOpt.val() : null;
                var emptyText = ($emptyOpt.length) ? $emptyOpt.text() : null;

                setData(null, {
                    userOptions: self.options,

                    // initial rating based on the OPTION value
                    ratingValue: value,
                    ratingText: text,

                    // rating will be restored by calling clear method
                    originalRatingValue: value,
                    originalRatingText: text,

                    // allow empty ratings?
                    allowEmpty: allowEmpty,

                    // rating value and text of the empty OPTION
                    emptyRatingValue: emptyValue,
                    emptyRatingText: emptyText,

                    // read-only state
                    readOnly: self.options.readonly,

                    // did the user already select a rating?
                    ratingMade: false
                });
            };

            // remove data on element
            var removeDataOnElement = function() {
                self.$elem.removeData('barrating');
            };

            // return current rating text
            var ratingText = function() {
                return getData('ratingText');
            };

            // return current rating value
            var ratingValue = function() {
                return getData('ratingValue');
            };

            // build widget and return jQuery element
            var buildWidget = function() {
                var $w = $('<div />', { 'class': 'br-widget' });

                // create A elements that will replace OPTIONs
                self.$elem.find('option').each(function() {
                    var val, text, html, $a;

                    val = $(this).val();

                    // create ratings - but only if val is not defined as empty
                    if (val !== getData('emptyRatingValue')) {
                        text = $(this).text();
                        html = $(this).data('html');
                        if (html) { text = html; }

                        $a = $('<a />', {
                            'href': '#',
                            'data-rating-value': val,
                            'data-rating-text': text,
                            'html': (self.options.showValues) ? text : ''
                        });

                        $w.append($a);
                    }

                });

                // append .br-current-rating div to the widget
                if (self.options.showSelectedRating) {
                    $w.append($('<div />', { 'text': '', 'class': 'br-current-rating' }));
                }

                // additional classes for the widget
                if (self.options.reverse) {
                    $w.addClass('br-reverse');
                }

                if (self.options.readonly) {
                    $w.addClass('br-readonly');
                }

                return $w;
            };

            // return a jQuery function name depending on the 'reverse' setting
            var nextAllorPreviousAll = function() {
                if (getData('userOptions').reverse) {
                    return 'nextAll';
                } else {
                    return 'prevAll';
                }
            };

            // set the value of the select field
            var setSelectFieldValue = function(value) {
                // change selected option
                findOption(value).prop('selected', true);

                if (getData('userOptions').triggerChange) {
                    self.$elem.change();
                }
            };

            // reset select field
            var resetSelectField = function() {
                $('option', self.$elem).prop('selected', function() {
                    return this.defaultSelected;
                });

                if (getData('userOptions').triggerChange) {
                    self.$elem.change();
                }
            };

            // display the currently selected rating
            var showSelectedRating = function(text) {
                // text undefined?
                text = text ? text : ratingText();

                // special case when the selected rating is defined as empty
                if (text == getData('emptyRatingText')) {
                    text = '';
                }

                // update .br-current-rating div
                if (self.options.showSelectedRating) {
                    self.$elem.parent().find('.br-current-rating').text(text);
                }
            };

            // return rounded fraction of a value (14.4 -> 40, 0.99 -> 90)
            var fraction = function(value) {
                return Math.round(((Math.floor(value * 10) / 10) % 1) * 100);
            };

            // remove all classes from elements
            var resetStyle = function() {
                // remove all classes starting with br-*
                self.$widget.find('a').removeClass(function(index, classes) {
                    return (classes.match(/(^|\s)br-\S+/g) || []).join(' ');
                });
            };

            // apply style by setting classes on elements
            var applyStyle = function() {
                var $a = self.$widget.find('a[data-rating-value="' + ratingValue() + '"]');
                var initialRating = getData('userOptions').initialRating;
                var baseValue = $.isNumeric(ratingValue()) ? ratingValue() : 0;
                var f = fraction(initialRating);
                var $all, $fractional;

                resetStyle();

                // add classes
                $a.addClass('br-selected br-current')[nextAllorPreviousAll()]()
                    .addClass('br-selected');

                if (!getData('ratingMade') && $.isNumeric(initialRating)) {
                    if ((initialRating <= baseValue) || !f) {
                        return;
                    }

                    $all = self.$widget.find('a');

                    $fractional = ($a.length) ?
                        $a[(getData('userOptions').reverse) ? 'prev' : 'next']() :
                        $all[(getData('userOptions').reverse) ? 'last' : 'first']();

                    $fractional.addClass('br-fractional');
                    $fractional.addClass('br-fractional-' + f);
                }
            };

            // check if the element is deselectable?
            var isDeselectable = function($element) {
                if (!getData('allowEmpty') || !getData('userOptions').deselectable) {
                    return false;
                }

                return (ratingValue() == $element.attr('data-rating-value'));
            };

            // handle click events
            var attachClickHandler = function($elements) {
                $elements.on('click.barrating', function(event) {
                    var $a = $(this),
                        options = getData('userOptions'),
                        value,
                        text;

                    event.preventDefault();

                    value = $a.attr('data-rating-value');
                    text = $a.attr('data-rating-text');

                    // is current and deselectable?
                    if (isDeselectable($a)) {
                        value = getData('emptyRatingValue');
                        text = getData('emptyRatingText');
                    }

                    // remember selected rating
                    setData('ratingValue', value);
                    setData('ratingText', text);
                    setData('ratingMade', true);

                    setSelectFieldValue(value);
                    showSelectedRating(text);

                    applyStyle();

                    // onSelect callback
                    options.onSelect.call(
                        self,
                        ratingValue(),
                        ratingText(),
                        event
                    );

                    return false;
                });
            };

            // handle mouseenter events
            var attachMouseEnterHandler = function($elements) {
                $elements.on('mouseenter.barrating', function() {
                    var $a = $(this);

                    resetStyle();

                    $a.addClass('br-active')[nextAllorPreviousAll()]()
                        .addClass('br-active');

                    showSelectedRating($a.attr('data-rating-text'));
                });
            };

            // handle mouseleave events
            var attachMouseLeaveHandler = function($elements) {
                self.$widget.on('mouseleave.barrating blur.barrating', function() {
                    showSelectedRating();
                    applyStyle();
                });
            };

            // somewhat primitive way to remove 300ms click delay on touch devices
            // for a more advanced solution consider setting `fastClicks` option to false
            // and using a library such as fastclick (https://github.com/ftlabs/fastclick)
            var fastClicks = function($elements) {
                $elements.on('touchstart.barrating', function(event) {
                    event.preventDefault();
                    event.stopPropagation();

                    $(this).click();
                });
            };

            // disable clicks
            var disableClicks = function($elements) {
                $elements.on('click.barrating', function(event) {
                    event.preventDefault();
                });
            };

            var attachHandlers = function($elements) {
                // attach click event handler
                attachClickHandler($elements);

                if (self.options.hoverState) {
                    // attach mouseenter event handler
                    attachMouseEnterHandler($elements);

                    // attach mouseleave event handler
                    attachMouseLeaveHandler($elements);
                }
            };

            var detachHandlers = function($elements) {
                // remove event handlers in the ".barrating" namespace
                $elements.off('.barrating');
            };

            var setupHandlers = function(readonly) {
                var $elements = self.$widget.find('a');

                if (getData('userOptions').fastClicks) {
                    fastClicks($elements);
                }

                if (readonly) {
                    detachHandlers($elements);
                    disableClicks($elements);
                } else {
                    attachHandlers($elements);
                }
            };

            this.show = function() {
                // run only once
                if (getData()) return;

                // wrap element
                wrapElement();

                // save data
                saveDataOnElement();

                // build & append widget to the DOM
                self.$widget = buildWidget();
                self.$widget.insertAfter(self.$elem);

                applyStyle();

                showSelectedRating();

                setupHandlers(self.options.readonly);

                // hide the select field
                self.$elem.hide();
            };

            this.readonly = function(state) {
                if (typeof state !== 'boolean' || getData('readOnly') == state) return;

                setupHandlers(state);
                setData('readOnly', state);
                self.$widget.toggleClass('br-readonly');
            };

            this.set = function(value) {
                var options = getData('userOptions');

                if (self.$elem.find('option[value="' + value + '"]').length === 0) return;

                // set data
                setData('ratingValue', value);
                setData('ratingText', self.$elem.find('option[value="' + value + '"]').text());
                setData('ratingMade', true);

                setSelectFieldValue(ratingValue());
                showSelectedRating(ratingText());

                applyStyle();

                // onSelect callback
                if (!options.silent) {
                    options.onSelect.call(
                        this,
                        ratingValue(),
                        ratingText()
                    );
                }
            };

            this.clear = function() {
                var options = getData('userOptions');

                // restore original data
                setData('ratingValue', getData('originalRatingValue'));
                setData('ratingText', getData('originalRatingText'));
                setData('ratingMade', false);

                resetSelectField();
                showSelectedRating(ratingText());

                applyStyle();

                // onClear callback
                options.onClear.call(
                    this,
                    ratingValue(),
                    ratingText()
                );
            };

            this.destroy = function() {
                var value = ratingValue();
                var text = ratingText();
                var options = getData('userOptions');

                // detach handlers
                detachHandlers(self.$widget.find('a'));

                // remove widget
                self.$widget.remove();

                // remove data
                removeDataOnElement();

                // unwrap the element
                unwrapElement();

                // show the element
                self.$elem.show();

                // onDestroy callback
                options.onDestroy.call(
                    this,
                    value,
                    text
                );
            };
        }

        BarRating.prototype.init = function (options, elem) {
            this.$elem = $(elem);
            this.options = $.extend({}, $.fn.barrating.defaults, options);

            return this.options;
        };

        return BarRating;
    })();

    $.fn.barrating = function (method, options) {
        return this.each(function () {
            var plugin = new BarRating();

            // plugin works with select fields
            if (!$(this).is('select')) {
                $.error('Sorry, this plugin only works with select fields.');
            }

            // method supplied
            if (plugin.hasOwnProperty(method)) {
                plugin.init(options, this);
                if (method === 'show') {
                    return plugin.show(options);
                } else {
                    // plugin exists?
                    if (plugin.$elem.data('barrating')) {
                        plugin.$widget = $(this).next('.br-widget');
                        return plugin[method](options);
                    }
                }

            // no method supplied or only options supplied
            } else if (typeof method === 'object' || !method) {
                options = method;
                plugin.init(options, this);
                return plugin.show();

            } else {
                $.error('Method ' + method + ' does not exist on jQuery.barrating');
            }
        });
    };

    $.fn.barrating.defaults = {
        theme:'',
        initialRating:null, // initial rating
        allowEmpty:null, // allow empty ratings?
        emptyValue:'', // this is the expected value of the empty rating
        showValues:false, // display rating values on the bars?
        showSelectedRating:true, // append a div with a rating to the widget?
        deselectable:true, // allow to deselect ratings?
        reverse:false, // reverse the rating?
        readonly:false, // make the rating ready-only?
        fastClicks:true, // remove 300ms click delay on touch devices?
        hoverState:true, // change state on hover?
        silent:false, // supress callbacks when controlling ratings programatically
        triggerChange:true, // trigger change event when ratings are set or reset
        onSelect:function (value, text, event) {
        }, // callback fired when a rating is selected
        onClear:function (value, text) {
        }, // callback fired when a rating is cleared
        onDestroy:function (value, text) {
        } // callback fired when a widget is destroyed
    };

    $.fn.barrating.BarRating = BarRating;

}));












document.addEventListener('DOMContentLoaded', function() {
    generateCaptcha();
    
    // Form submit bo'lishidan oldin captchani tekshirish
    const form = document.getElementById('subscriptionForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Formni to'xtatib turish
        
        const userInput = document.getElementById('userCaptcha').value;
        
        if (userInput === captchaText) {
            // Captcha to'g'ri, formni yuborish
            oc.request(this, 'onSubscription', {
                success: function(response) {
                    // Modal title va textni o'rnatish
                    document.getElementById('modalMessageTitle').textContent = "Muvaffaqiyatli!";
                    document.getElementById('modalMessageText').textContent = response.text_messages || response;
                    
                    // Modalni ko'rsatish
                    const modal = new bootstrap.Modal(document.getElementById('customMessageModal'));
                    modal.show();
                    
                    // Formni tozalash
                    form.reset();
                    // Yangi captcha generatsiya qilish
                    generateCaptcha();
                }
            });
        } else {
            // Captcha noto'g'ri, faqat ogohlantirish xabari
            alert("Captcha noto'g'ri kiritildi. Iltimos qaytadan urinib ko'ring.");
            generateCaptcha();
            document.getElementById('userCaptcha').value = '';
        }
    });
});

// Custom xabarni ko'rsatish uchun funksiya
function showCustomMessage(message) {
    document.getElementById('modalMessageTitle').textContent = "Muvaffaqiyatli!";
    document.getElementById('modalMessageText').textContent = message;
    const modal = new bootstrap.Modal(document.getElementById('customMessageModal'));
    modal.show();
}
