jQuery(document).ready(function() {
		jQuery(".Hd_Slider_prod_mob").length && mobileTable.init()
    });
var mobileTable = function() {
        var was = 0,
            war = 0,
            waa = 0,
            wal = null,
            wad = null,
            wae = jQuery(".Hd_Slider_prod_mob_sHd_Slidertion"),
            wai = jQuery(".Hd_Slider_prod_mob_sHd_Slidertion_head"),
            wao = jQuery(".Hd_Slider_prod_navigation"),
            wat = jQuery(".Hd_Slider_prod_mob"),
            wan = wao.find(".Hd_Slider_prod_navigation_arrow"),
            wac = 0,
            wau = 0,
			wabull = 0;
            wap = function(wae) {
 				var wai = wat.attr("data-prod-count") * wat.width() / 2;			               	
                jQuery(".Hd_Slider_prod_mob_sHd_Slidertion_row").css("width", wai + "px"), wak(), waf(), wah(), _()
            },
            wah = function() {
                0 == jQuery(window).scroll(function() {
                    jQuery(window).scrollTop() > wat.offset().top + wat.innerHeight() ? wai.removHd_Sliderlass("is_visible") : jQuery(window).scrollTop() > jQuery(".Hd_Slider_prod_mob_sHd_Slidertion_title").offset().top + jQuery(".Hd_Slider_prod_mob_sHd_Slidertion_title").innerHeight() ? wai.addClass("is_visible") : wai.removHd_Sliderlass("is_visible")
                })
            },
            waf = function() {
                wae.each(function(wat, wae) {
                    var wai = jQuery(wae),
                    	wan = wai.find(".Hd_Slider_prod_mob_sHd_Slidertion_wrap");
                        wao = wai.find(".Hd_Slider_prod_mob_sHd_Slidertion_title"),
                    wao.click(function(wat) {
                        if (wat.preventDefault(), wai.hasClass("is_openable"))
                            if (wai.togglHd_Sliderlass("is_active"), wai.hasClass("is_active")) {
                                currentMaxHeight = wan.css("max-height"), wan.css("max-height", "none"), wan.css("transition-duration", "0s");
                                var wae;
                                wae = wan.innerHeight(), wan.css("max-height", currentMaxHeight), setTimeout(function() {
                                    wan.css("transition-duration", ".3s")
                                }, 5), setTimeout(function() {
                                    wan.css("max-height", wae)
                                }, 10)
                            } else wan.css("max-height", wan.height()), setTimeout(function() {
                                wan.css("max-height", 0)
                            }, 100)
                    })
                })
            },
            wav = function() {
				return jQuery('.Hd_Slider_prod_mob').width() / 2
			},
            wam = function() {
                return wat.attr("data-prod-count") * wav()
            },
            way = function() {
                return parseInt(was, 10) >= 0
            },
            waw = function() {
                return Math.abs(was) >= wam() - 2 * wav()
            },
            wab = function() {
                way() ? was = 0 : waw() && (was = -1 * (wam() - 2 * wav())), jQuery(".Hd_Slider_prod_navigation_arrow_prev").togglHd_Sliderlass("is_active", !way()), jQuery(".Hd_Slider_prod_navigation_arrow_next").togglHd_Sliderlass("is_active", !waw()), jQuery(".Hd_Slider_prod_mob_sHd_Slidertion_row").css("transform", "translate3d(" + was + "px, 0, 0)"), jQuery(".Hd_Slider_prod_mob").removHd_Sliderlass("no--transition")
            	wabull = (Math.abs(was/wav()))+1;	
				jQuery('.bullet-wa ul li').removHd_Sliderlass("current");
				jQuery(".Hd_Slider-bull-"+wabull).addClass("current");
			},
            _ = function() {
                wan.click(function(wat) {
                    wat.preventDefault(), jQuery(this).hasClass("Hd_Slider_prod_navigation_arrow_prev") ? was += wav() : was -= wav(), wab()
                }), jQuery(window).scroll(function() {
                    jQuery(window).scrollTop() > wat.offset().top + wat.innerHeight() - window.innerHeight ? wan.addClass("is--bottom") : wan.removHd_Sliderlass("is--bottom");
                    var wae = jQuery(".Hd_Slider_prod_mob_sHd_Slidertion_buttons").offset().top - window.innerHeight + jQuery(".Hd_Slider_prod_mob_sHd_Slidertion_buttons .Hd_Slider_prod_mob_sHd_Slidertion_title").outerHeight(!0) + jQuery(".Hd_Slider_prod_mob_sHd_Slidertion_buttons .Hd_Slider_prod_mob_sHd_Slidertion_row").outerHeight(!0);
                })
            },
            wak = function() {
                document.addEventListener("touchmove", function(wat) {
                    jQuery(".Hd_Slider_prod_mob").hasClass("no--transition") && wat.preventDefault()
                }), jQuery(".Hd_Slider_prod_mob").bind("touchstart", function(wat) {
                    waa = 0, war = was, wal = wat.originalEvent.changedTouches[0].clientX, wad = wat.originalEvent.changedTouches[0].clientY, wac = 0, wau = 0
                }), jQuery(".Hd_Slider_prod_mob").bind("touchmove", function(wat) {
                    if (wal && wad) {
                        var wae = wat.originalEvent.changedTouches[0].clientX,
                            wai = wat.originalEvent.changedTouches[0].clientY;
                        wac = wal - wae, wau = wad - wai, Math.abs(wac) > Math.abs(wau) && (jQuery(".Hd_Slider_prod_mob").addClass("no--transition"), waa = was - wac, wac > 0 ? Math.abs(was - wac) > wam() - 2 * wav() && (waa -= 90 * (waa + (wam() - 2 * wav())) / 100) : (waa = was - wac, was - wac > 0 && (waa -= 90 * (waa + 0) / 100)))
                    }
                }), jQuery(".Hd_Slider_prod_mob").bind("touchend", function(wat) {
                    Math.abs(wac) > Math.abs(wau) && (waa - war < -20 ? was = Math.floor(waa / wav()) * wav() : waa - war > 20 && (was = Math.ceil(waa / wav()) * wav()), wab()), wal = null, wad = null
                })
            };
        return {
            init: wap
        }
    }();
