/* Responsive Menu */
(function($) {

    $.fn.menumaker = function(options) {

        var nav_menu = $(this),
            settings = $.extend({
                title: "Menu",
                format: "dropdown",
                sticky: false
            }, options);

        return this.each(function() {
            nav_menu.prepend('<div id="menu-button">' + settings.title + '</div>');
            $(this).find("#menu-button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.hide().removeClass('open');
                } else {
                    mainmenu.show().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });

            nav_menu.find('li ul').parent().addClass('has-sub');

            multiTg = function() {
                nav_menu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                nav_menu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').hide();
                    } else {
                        $(this).siblings('ul').addClass('open').show();
                    }
                });
            };

            if (settings.format === 'multitoggle') multiTg();
            else nav_menu.addClass('dropdown');

            if (settings.sticky === true) nav_menu.css('position', 'fixed');

            resizeFix = function() {
                if ($(window).width() > 1050) {
                    nav_menu.find('ul').show();
                }

                if ($(window).width() <= 1050) {
                    nav_menu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);

        });
    };

    $("#nav_menu").menumaker({
        title: "Menu",
        format: "multitoggle"
    });
})(jQuery);

jQuery(document).ready(function($) {

    // Stats 
    "use strict";
    $('.home-stats').appear(function() {
        $('#stat1').animateNumber({
            number: 251
        }, 1200);
        $('#stat2').animateNumber({
            number: 450
        }, 1200);
        $('#stat3').animateNumber({
            number: 90293
        }, 1150);
        $('#stat4').animateNumber({
            number: 3892
        }, 1300);
    }, {
        accX: 0,
        accY: -200
    });

    // Parallax 
    "use strict";
    $.stellar({
        horizontalOffset: 50
    });

    // Vertical Tab 
    "use strict";
    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });

    // Instagram Feed
    "use strict";
    $("#instafeed").instastream({
        instaToken: '1011689.764d34f.25312ac794bf41f5b7c3d2f3385ce17e',
        instaUser: '1011689',
        instaResults: 6,
        instaMenu: 'no'
    });

    // Owl Carousel - Works 
    "use strict";
    $("#owl-works").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    // Skills Animated 
    "use strict";
    $('.skills').appear(function() {
        $('#skill1 em').css("width", "60%");
        $('#skill2 em').css("width", "90%");
        $('#skill3 em').css("width", "50%");
        $('#skill4 em').css("width", "100%");
        $('#skill5 em').css("width", "80%");
        $('#skill6 em').css("width", "70%");

        $('.interest ul li').addClass("interest-active");

    }, {
        accX: 0,
        accY: -300
    });

    // Skills3 Animated 
    "use strict";
    $('.skills-v3').appear(function() {
        $('.ps1 .progress-bar').css("width", "70%");
        $('.ps2 .progress-bar').css("width", "60%");
        $('.ps3 .progress-bar').css("width", "90%");
        $('.ps4 .progress-bar').css("width", "40%");
        $('.ps5 .progress-bar').css("width", "85%");
        $('.ps6 .progress-bar').css("width", "54%");
        $('.ps7 .progress-bar').css("width", "71%");
        $('.ps8 .progress-bar').css("width", "92%");

    }, {
        accX: 0,
        accY: -300
    });

    // Skills4 Animated 
    "use strict";
    $('.skills-v4').appear(function() {
        $('.ps9 .progress-bar').css("width", "70%");
        $('.ps10 .progress-bar').css("width", "60%");
        $('.ps11 .progress-bar').css("width", "90%");
        $('.ps12 .progress-bar').css("width", "40%");
        $('.ps13 .progress-bar').css("width", "85%");
        $('.ps14 .progress-bar').css("width", "54%");
        $('.ps15 .progress-bar').css("width", "71%");
        $('.ps16 .progress-bar').css("width", "92%");

    }, {
        accX: 0,
        accY: -300
    });

    // Page Scroll Plugin 
    "use strict";
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Scroll Spy
    $('body').scrollspy({
        target: '#resume-nav'
    })

    // Stats
    "use strict";
    $('.theme-stats').appear(function() {
        $('.ts-info1 span').animateNumber({
            number: 57
        }, 1200);
        $('.ts-info2 span').animateNumber({
            number: 12
        }, 1200);
        $('.ts-info3 span').animateNumber({
            number: 24
        }, 1200);
        $('.ts-info4 span').animateNumber({
            number: 2090
        }, 800);
    }, {
        accX: 0,
        accY: -200
    });

    // News ticker
    "use strict";
    $('.vticker').easyTicker({
        direction: 'up',
        easing: 'swing',
        speed: 'slow',
        interval: 2000,
        height: 'auto',
        visible: 1
    });

    // Blog Slider
    "use strict";
    $("#blog-slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        pagination: false,
        singleItem: true
    });



    // Sidebar Slider
    "use strict";

    $("#side-slider").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        pagination: false,
        singleItem: true

    });


    // Quote Slider
    "use strict";
    $("#quote-slider").owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: true,
        pagination: false,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade"
    });


    // Slide Search
    "use strict";

    $(".slide-search").click(function() {
        $(".searchbar-content").slideToggle("slow", function() {});
        $(this).toggleClass("active");

    });

    // Repsonsive Menu Active
    "use strict";

    $(".menu-open").click(function() {
        $(".hidden-menu").toggleClass("hidden-menu-active");
        $(this).toggleClass("active");

    });


    // Prettyphoto
    $("a[class^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default'
    });

    // Date Picker
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        container: document.getElementById('date-picker'),
        format: 'YYYY-MM-DD',
    });

    // Slick Slider
    "use strict";

    $('.client-slider').slick({
        arrows: false,
        speed: 300,
        centerMode: false, 
        autoplay: true,
	   autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

// Slick Slider
    "use strict";

    $('.twitterfeed-slider').slick({
        arrows: false,
        speed: 300,
        centerMode: false, 
        autoplay: true,
	   autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    "use strict";

    $('.product-slider').slick({
        arrows: true,
        speed: 300,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
    });

    "use strict";

    $("#lookbook-slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false
    });

    "use strict";

    $('.insta-slider').slick({
        dots: false,
        arrows: true,
        speed: 800,
        autoplay: true,
        vertical: true,
        autoplaySpeed: 5000,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    "use strict";

    $('.shots-slider').slick({
        arrows: true,
        speed: 300,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: function(slider, i) {
            //FYI just have a look at the object to find aviable information
            //press f12 to access the console
            //you could also debug or look in the source
            console.log(slider);
            return (i + 1) + ("<span>") + '/' + slider.slideCount + ("</span>");
        },

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    "use strict";

    $('.shots-slider1').slick({
        dots: false,
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    "use strict";

    $('.works-slider1').slick({
        dots: false,
        arrows: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // Close Cart table
    $(".close-cart").click(function() {
        $(this).parent().parent().hide();
    });

    // Tabs
    "use strict";

    $('#tabs li a').click(function(e) {
        $('#tabs li, #content .current').removeClass('current').removeClass('fadeInLeft');
        $(this).parent().addClass('current');
        var currentTab = $(this).attr('href');
        $(currentTab).addClass('current fadeInLeft');
        e.preventDefault();
    });

    // Accordion
    "use strict";

    $(".accordionf div").show();
    setTimeout("$('.accordionf div').slideToggle('slow');", 500);
    $(".accordionf h3").click(function() {
        $(this).next(".pane").slideToggle("slow").siblings(".pane:visible").slideUp("fast");
        $(this).toggleClass("current");
        $(this).siblings("h3").removeClass("current");
    });

    // Toggle
    "use strict";
    $(".accordiont div").show();
    setTimeout("$('.accordiont div').slideToggle('slow');", 500);
    $(".accordiont h3").click(function() {
        $(this).next(".pane").slideToggle("slow");
        $(this).toggleClass("current");
        $(this).siblings("h3").removeClass("current");
    });

    $(".toggle-trigger").click(function() {
        $(".toggle-content").slideToggle("slow", function() {});

    });

    $(".toggle-trigger1").on("click", function() {

        $(".toggle-content1").slideToggle("slow", function() {});
    });

    $(".toggle-trigger2").on("click", function() {
        $(".toggle-content2").slideToggle("slow", function() {});
        $(".toggle2").toggleClass("active");
    });

    $(".toggle-trigger3").on("click", function() {
        $(".toggle-content3").slideToggle("slow", function() {});
        $(".toggle3").toggleClass("active");
    });

    $(".toggle-trigger4").on("click", function() {
        $(".toggle-content4").slideToggle("slow", function() {});
        $(".toggle4").toggleClass("active");
    });

    $(".toggle-trigger1").on("click", function() {
        if ($('.toggle1').hasClass('active')) {
            $('.toggle1').removeClass('active')

        } else {
            $('.toggle1').addClass('active')
        }
    });

    // slider Range
    "use strict";

    $("#sliderRange")
        .slider({
            range: true,
            min: 0,
            max: 99,
            step: 1,
            values: [13, 65],
            slide: function(event, ui) {
                var price1 = ui.values[0];
                var price2 = ui.values[1];
                $("#price1")
                    .val("\u20ac" + price1 + ".00");
                $("#price2")
                    .val("\u20ac" + price2 + ".00");
            }
        });

    $('#price1')
        .bind('keyup', function() {
            var from = $(this)
                .val();
            var to = $('#price2')
                .val();
            $('#sliderRange')
                .slider('option', 'values', [from, to]);
        });

    $('#price2')
        .bind('keyup', function() {
            var from = $('#price1')
                .val();
            var to = $(this)
                .val();
            $('#sliderRange')
                .slider('option', 'values', [from, to]);

        });

});

// Scrollbar
(function($) {
    $(window).load(function() {
        $(".top-stories ul").mCustomScrollbar();
    });
})(jQuery);

// OnScroll Effects
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 320) {
        $("#home-resume header").css({
            'height': '70px'
        });
    } else {
        $("#home-resume header").css({
            'height': '130px'
        });
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 320) {
        $("#home-resume .logo h1").css({
            'line-height': '70px'
        });
    } else {
        $("#home-resume .logo h1").css({
            'line-height': '130px'
        });
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 320) {
        $("#home-resume nav .resume-nav").css({
            'margin-top': '33px'
        });
    } else {
        $("#home-resume nav .resume-nav").css({
            'margin-top': '61px'
        });
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 320) {
        $("#index-university header").css({
            'height': '70px'
        });
    } else {
        $("#index-university header").css({
            'height': '130px'
        });
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 320) {
        $("#index-university header").css({
            'padding': '0px'
        });
    } else {
        $("#index-university header").css({
            'padding': '30px 0'
        });
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 320) {
        $("#index-university .searchbar-content").addClass('searchbar-content-up');
    } else {
        $("#index-university .searchbar-content").removeClass('searchbar-content-up');
    }
});

// Video Play Control
(function($) {
    $(document).ready(function() {
        $(".vjs-play-control").click(function() {
            $(".vjs-progress-control").slideToggle("slow");
        });
    });
})(jQuery);

$(function() {
    $('audio').audioPlayer();
});

// VIEWPORT BUG FIX
(function(doc) {
    var addEvent = 'addEventListener',
        type = 'gesturestart',
        qsa = 'querySelectorAll',
        scales = [1, 1],
        meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

    function fix() {
        meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
        doc.removeEventListener(type, fix, true);
    }
    if ((meta = meta[meta.length - 1]) && addEvent in doc) {
        fix();
        scales = [.25, 1.6];
        doc[addEvent](type, fix, true);
    }
}(document));