/*
 * Universal Video Player v1.2
 *
 * Copyright 2014, LambertGroup
 *
 */
(function(d) {
    function S(a, b, g) {
        g.css({
            background: a.playlistRecordBgOffColor
        });
        a.playlistRecordShowTitle ? d(".title", g).css({
            color: a.playlistRecordTitleOffColor
        }) : d(".title", g).css({
            display: "none"
        });
        a.playlistRecordShowDesc ? d(".reg", g).css({
            color: a.playlistRecordDescOffColor
        }) : d(".reg", g).css({
            display: "none"
        });
        b = g.find("img:first");
        a.playlistRecordShowImg ? b.css({
            opacity: a.playlistRecordBgOffImgOpacity / 100,
            filter: "alpha(opacity=" + a.playlistRecordBgOffImgOpacity + ")"
        }) : b.css({
            display: "none"
        })
    }

    function U(a, b, g) {
        g.css({
            background: a.playlistRecordBgOnColor
        });
        d(".title", g).css({
            color: a.playlistRecordTitleOnColor
        });
        d(".reg", g).css({
            color: a.playlistRecordDescOnColor
        });
        g.find("img:first").css({
            opacity: a.playlistRecordBgOnImgOpacity / 100,
            filter: "alpha(opacity=" + a.playlistRecordBgOnImgOpacity + ")"
        })
    }

    function O(a, b, g, f, h, e, n, m, p, k, l, q, D, t, w) {
        var y = !0,
            z = "next",
            x = g.shuffle; - 1 == a && (z = "previous");
        b.thumbsClicked && (x = !1);
        if (!g.loop && b.current_img_no + a >= b.selectedCateg_total_images || !g.loop && 0 > b.current_img_no + a || b.categsAreListed) y = !1;
        y && (S(g, b, d(b.thumbsHolder_Thumbs[b.current_img_no])), B(b, b.previousOrigID) && (b.player.stopVideo(), d(".lbg_player", f).css({
            "z-index": -1
        })), P(b, b.previousOrigID) && (b.vimeo_player.api("pause"), d(".lbg_vimeo_player", f).css({
            "z-index": -1
        })), V(b, b.previousOrigID) && (document.getElementById(b.html5_video_id).pause(), d("#" + b.html5_video_id).css({
            "z-index": -1,
            width: 0,
            height: 0
        })), a = z, x ? (x = Math.floor(Math.random() * (b.selectedCateg_total_images - 1)), b.current_img_no = x != b.current_img_no ? x : Math.floor(Math.random() * (b.selectedCateg_total_images - 1))) : "next" == a ? b.current_img_no == b.selectedCateg_total_images - 1 ? b.current_img_no = 0 : b.current_img_no++ : 0 > b.current_img_no - 1 ? b.current_img_no = b.selectedCateg_total_images - 1 : b.current_img_no--, b.origID = d("div[rel='" + b.current_img_no + "']").attr("data-origID"), b.previousOrigID = b.origID, b.currentImg = b.playlist_arr[b.origID], e.html(b.playlist_arr[b.origID].title), b.thumbsClicked = !1, U(g, b, d(b.thumbsHolder_Thumbs[b.current_img_no])), W(0, h, g, b), oa(b, g, l), void 0 != b.currentImg.youtube && "" != b.currentImg.youtube || void 0 != b.currentImg.vimeo && "" != b.currentImg.vimeo || void 0 != b.currentImg.selfhostedMP4 && "" != b.currentImg.selfhostedMP4) && (g.autoPlayFirstVideo = !0, k.hasClass("pauseBut") || k.addClass("pauseBut"), B(b, b.origID) && (b.youtubeWasStarted = -1, f.css("background", "#000000"), -1 != s.indexOf("ipad") || -1 != s.indexOf("iphone") || -1 != s.indexOf("ipod") || -1 != s.indexOf("webos") || -1 != navigator.userAgent.indexOf("Android") ? (b.player.cueVideoById(b.playlist_arr[b.origID].youtube), k.removeClass("pauseBut")) : b.player.loadVideoById(b.playlist_arr[b.origID].youtube, 0, g.suggestedQuality), b.player.setVolume(100 * g.initialVolume), d(".lbg_player", f).css({
            "z-index": 5
        }), aa(b, g, f, n, m, q, "block"), g.googleTrakingOn && ga("send", "event", b.googleYouTubeCateg, "Play", "Title: " + b.playlist_arr[b.origID].title + " --- ID: " + b.playlist_arr[b.origID].youtube)), P(b, b.origID) && (f.css("background", "#000000"), d("#" + w).attr("src", "//player.vimeo.com/video/" + b.playlist_arr[b.origID].vimeo + "?api=1&amp;player_id=" + w), aa(b, g, f, n, m, q, "none"), g.googleTrakingOn && ga("send", "event", b.googleVimeoCateg, "Play", "Title: " + b.playlist_arr[b.origID].title + " --- ID: " + b.playlist_arr[b.origID].vimeo)), V(b, b.origID) && (h = ea(), f.css("background", "#000000"), e = new Date, document.getElementById(b.html5_video_id).src = pa(h, b, b.html5_video_id) + "?time=" + e.getTime(), document.getElementById(b.html5_video_id).load(), d("#" + b.html5_video_id).css({
            "z-index": 5,
            width: "100%",
            height: "100%"
        }), document.getElementById(b.html5_video_id).volume = g.initialVolume, document.getElementById(b.html5_video_id).play(), aa(b, g, f, n, m, q, "block"), g.googleTrakingOn && ga("send", "event", b.googleSelfHostedCateg, "Play", "Title: " + b.playlist_arr[b.origID].title + " --- ID: " + b.playlist_arr[b.origID].selfhostedMP4)), qa(b, g, f, n, m, q, p, l, w), b.videoIsFullScreen && g.showPlaylistBut && (D.css({
            display: "none"
        }), t.css({
            left: parseInt(t.css("left").substr(0, t.css("left").lastIndexOf("px")), 10) - D.width() - b.buttonsDistance + "px"
        })))
    }

    function W(a, b, d, f) {
        if (f.selectedCateg_total_images > d.numberOfThumbsPerScreen) {
            d = (f.thumbsHolder_Thumb.height()) * (f.selectedCateg_total_images - d.numberOfThumbsPerScreen);
            var h = 0;
            b.stop(!0, !0);
            a && !f.isCarouselScrolling ? (f.isCarouselScrolling = !0, 1 >= a && (a = 0), h = parseInt(d * (a - 100) / 100, 10), 0 < h && (h = 0), b.animate({
                top: h + "px"
            }, 1100, "easeOutQuad", function() {
                f.isCarouselScrolling = !1
            })) : f.isCarouselScrolling || (f.isCarouselScrolling = !0, b.css("opacity", "0.5"), h = parseInt(-(f.thumbsHolder_Thumb.height()) * f.current_img_no, 10), Math.abs(h) > d && (h = -d), f.universal_video_player_sliderVertical.slider("value", 90 + parseInt(90 * h / d, 10)), b.animate({
                opacity: 1,
                top: h + "px"
            }, 500, "easeOutCubic", function() {
                f.isCarouselScrolling = !1
            }))
        }
    }

    function ba(a, b, g, f, h, e, n, m, p, k) {
        if (a.categsAreListed) k.click();
        else {
            k = 0;
            b.origWidth != b.width && (k = 2 * b.borderWidth);
            m = d(".thumbsHolder_ThumbOFF .title", g);
            p = d(".thumbsHolder_ThumbOFF .reg", g);
            n = d(".thumbsHolder_ThumbOFF .padding", g);
            a.thumbsHolder_Thumbs.css({
                height: parseInt(h.height() / b.numberOfThumbsPerScreen, 10) + "px"
            });
            n.css({
                "padding-left": parseInt(b.origthumbLeftPadding / (b.origWidth / (b.width - k)), 10) + "px",
                "padding-right": parseInt(b.origthumbRightPadding / (b.origWidth / (b.width - k)), 10) + "px",
                "padding-top": parseInt(b.origthumbTopPadding / (b.origWidth / (b.width - k)), 10) + "px",
                "padding-bottom": parseInt(b.origthumbBottomPadding / (b.origWidth / (b.width - k)), 10) + "px"
            });
            h = "px"; - 1 != m.css("font-size").lastIndexOf("em") && (h = "em");
            n = "px"; - 1 != m.css("line-height").lastIndexOf("em") && (n = "em");
            m.css({
                "font-size": parseInt(b.origthumbTitleFont / (b.origWidth / (b.width - k)), 10) + h,
                "line-height": parseInt(b.origthumbTitleLineHeight / (b.origWidth / (b.width - k)), 10) + n
            });
            h = "px"; - 1 != p.css("font-size").lastIndexOf("em") && (h = "em");
            n = "px"; - 1 != p.css("line-height").lastIndexOf("em") && (n = "em");
            p.css({
                "font-size": parseInt(b.origthumbRegFont / (b.origWidth / (b.width - k)), 10) + h,
                "line-height": parseInt(b.origthumbRegLineHeight / (b.origWidth / (b.width - k)), 10) + n
            });
            b.playlistRecordShowImg && (g = d(".thumbsHolder_ThumbOFF", g).find("img:first"), !b.playlistRecordShowTitle && !b.playlistRecordShowDesc || b.origWidth == b.width ? b.playlistRecordShowTitle || b.playlistRecordShowDesc ? g.css({
                width: parseInt(b.origThumbImgW / (b.origWidth / b.width), 10) + "px",
                height: parseInt(b.origThumbImgH / (b.origWidth / b.width), 10) + "px"
            }) : g.css({
                width: parseInt(b.origThumbImgW / (b.origWidth / b.width), 10) + 1 + "px",
                height: a.thumbsHolder_Thumbs.height() + "px"
            }) : g.css({
                width: parseInt(b.origThumbImgW / (b.origWidth / (b.width - 42)), 10) + "px",
                height: parseInt(b.origThumbImgH / (b.origWidth / (b.width - 42)), 10) + "px"
            }));
            var l = 0,
                q = 0;
            a.categsAreListed || (a.thumbMarginTop = Math.floor((e.height() - a.thumbsHolder_Thumb.height() * b.numberOfThumbsPerScreen) / (b.numberOfThumbsPerScreen - 1)));
            thumb_i = 0;
            f.children().each(function() {
                thumb_i++;
                theThumb = d(this);
                q = theThumb.height();
                1 >= thumb_i ? (l = Math.floor((e.height() - (a.thumbMarginTop + theThumb.height()) * (b.numberOfThumbsPerScreen - 1) - theThumb.height()) / 2), 1 <= l && (l = 0), theThumb.css("margin-top", l + "px"), theThumb.height(q)) : theThumb.css("margin-top", a.thumbMarginTop + "px")
            })
        }
    }

    function ja(a, b, g, f) {
        d(".fullscreenVimeoButton", b).css({
            right: "82px"
        });
        374 >= f && d(".fullscreenVimeoButton", b).css({
            right: "37px"
        });
        305 >= f && d(".fullscreenVimeoButton", b).css({
            right: "5px"
        })
    }

    function ka(a, b, g, f, h, e, n, m, p, k, l, q, D, t, w, y, z, x, A, Q, r, H, u, M, R, B, J, L, C, E, I, O, F) {
        if (!a.videoIsFullScreen) {
            if (ea(), g = 0, h = "block", responsiveWidth = f.parent().parent().parent().width(), responsiveHeight = f.parent().parent().parent().height(), b.responsiveRelativeToBrowser && (responsiveWidth = d(window).width(), responsiveHeight = d(window).height()), b.width100Proc && (b.width = responsiveWidth), b.height100Proc && (b.height = responsiveHeight), b.origWidth != responsiveWidth || b.width100Proc) b.origWidth > responsiveWidth || b.width100Proc ? b.width = responsiveWidth : b.width100Proc || (b.width = b.origWidth), b.height100Proc || (b.height = b.width / a.playerRatio), b.width = parseInt(b.width, 10), b.height = parseInt(b.height, 10), n.width(b.width), n.height(b.height), f = b.playlistWidth / (b.origWidth / b.width), a.new_width = parseInt(b.width - f - 3 * b.borderWidth, 10), a.new_height = b.height - 2 * b.borderWidth, b.playlistVisible || (a.new_width = parseInt(b.width - 0 - 2 * b.borderWidth, 10)), e.width(a.new_width), e.height(a.new_height), e.css({
                left: b.borderWidth + "px",
                top: b.borderWidth + "px"
            }), d(".lbg_player", e).width(a.new_width), d(".lbg_player", e).height(a.new_height), d(".lbg_vimeo_player", e).width(a.new_width), d(".lbg_vimeo_player", e).height(a.new_height), ja(a, e, k, a.new_width), p.width(b.playlistWidth / (b.origWidth / b.width)), p.height(a.new_height), k.width(b.playlistWidth / (b.origWidth / b.width)), k.height(a.new_height), k.css({
                top: 0,
                right: -1 * (b.borderWidth + b.playlistWidth / (b.origWidth / b.width)) + "px"
            }), m.width(b.playlistWidth / (b.origWidth / b.width)), m.css("top", "0px"), a.selectedCateg_total_images > b.numberOfThumbsPerScreen && (0 >= b.borderWidth && (g = a.universal_video_player_sliderVertical.width() / 2), a.universal_video_player_sliderVertical.height(k.height() - 15), a.universal_video_player_sliderVertical.css({
                display: "block",
                left: Math.floor(b.width - 2 * b.borderWidth + (b.borderWidth - a.universal_video_player_sliderVertical.width()) / 2) - g + "px"
            })), b.showCategs && (t.css({
                width: b.playlistWidth / (b.origWidth / b.width) + "px",
                right: -1 * (b.borderWidth + b.playlistWidth / (b.origWidth / b.width)) + "px"
            }), w.css({
                "background-position": b.playlistWidth / (b.origWidth / b.width) - 9 + "px 50%"
            })), h = "block", b.playlistVisible || (h = "none"), b.showSearch && (b.width <= a.minimalWidthSearch && (h = "none"), y.css({
                width: b.playlistWidth / (b.origWidth / b.width) + "px",
                top: 3 + (b.height - 2 * b.borderWidth) + "px",
                right: -1 * (b.borderWidth + b.playlistWidth / (b.origWidth / b.width)) + "px",
                display: h
            }), z.css({
                width: parseInt(b.playlistWidth / (b.origWidth / b.width), 10) - 100 + "px"
            })), b.showLogo && (w = d(".yourLogo", e).find("img:first"), w.css({
                "max-width": parseInt(100 * b.width / b.origWidth, 10) + "%"
            }), h = "block", b.width <= a.minimalWidthSearch && (h = "none"), d(".yourLogo", e).css({
                display: h
            })), b.playlistVisible ? (b.showNextPrevBut && (J.css({
                right: -1 * (b.borderWidth + b.playlistWidth / (b.origWidth / b.width)) + "px"
            }), L.css({
                right: -1 * (b.borderWidth + b.playlistWidth / (b.origWidth / b.width) - J.width() - a.buttonsDistanceSeekBar) + "px"
            })), b.showShuffleBut && C.css({
                right: -1 * (b.borderWidth + b.playlistWidth / (b.origWidth / b.width) - J.width() - L.width() - a.totalButtonsDistanceSeekBar) + "px"
            })) : (b.showNextPrevBut && (J.css({
                right: 0
            }), L.css({
                right: J.width() + a.buttonsDistanceSeekBar + "px"
            })), b.showShuffleBut && C.css({
                right: J.width() + L.width() + a.totalButtonsDistanceSeekBar + "px"
            })), b.width <= a.minimalWidthInfo ? fa(a, b, e, x, A, Q, r, H, u, M, R, B, !1, !1) : b.width <= a.minimalWidthDownload ? fa(a, b, e, x, A, Q, r, H, u, M, R, B, !1, !0) : fa(a, b, e, x, A, Q, r, H, u, M, R, B, !0, !0), P(a, a.origID) && aa(a, b, e, E, I, O, "none"), ba(a, b, e, m, p, k, l, q, D, t)
        } else if (-1 != s.indexOf("ipad") || -1 != s.indexOf("iphone") || -1 != s.indexOf("ipod") || -1 != s.indexOf("webos") || -1 != navigator.userAgent.indexOf("Android")) B.click(), ka(a, b, g, f, h, e, n, m, p, k, l, q, D, t, w, y, z, x, A, Q, r, H, u, M, R, B, J, L, C, E, I, O, F);
        W(0, m, b, a)
    }

    function ea() {
        var a = -1;
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var b = navigator.userAgent,
                d = /MSIE ([0-9]{1,}[.0-9]{0,})/;
            null != d.exec(b) && (a = parseFloat(RegExp.$1))
        } else "Netscape" == navigator.appName && (b = navigator.userAgent, d = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/, null != d.exec(b) && (a = parseFloat(RegExp.$1)));
        return parseInt(a, 10)
    }

    function pa(a, b, d) {
        var f = b.playlist_arr[b.origID].selfhostedWEBM,
            h = navigator.userAgent.toLowerCase();
        if (-1 != h.indexOf("chrome") || -1 != h.indexOf("msie") || -1 != h.indexOf("safari") || -1 != h.indexOf("android")) f = b.playlist_arr[b.origID].selfhostedMP4;
        if (-1 != h.indexOf("ipad") || -1 != h.indexOf("iphone") || -1 != h.indexOf("ipod") || -1 != h.indexOf("webos")) f = b.playlist_arr[b.origID].selfhostedMP4; - 1 != h.indexOf("android") && (f = b.playlist_arr[b.origID].selfhostedMP4); - 1 != a && (f = b.playlist_arr[b.origID].selfhostedMP4); - 1 != h.indexOf("opera") && (f = b.playlist_arr[b.origID].selfhostedWEBM, "" != X(d) && (f = b.playlist_arr[b.origID].selfhostedMP4)); - 1 != h.indexOf("opr/") && (f = b.playlist_arr[b.origID].selfhostedWEBM, "" != X(d) && (f = b.playlist_arr[b.origID].selfhostedMP4));
        if (-1 != h.indexOf("firefox") || -1 != h.indexOf("mozzila")) f = b.playlist_arr[b.origID].selfhostedWEBM, "" != X(d) && (f = b.playlist_arr[b.origID].selfhostedMP4);
        return f
    }

    function B(a, b) {
        var d = !1;
        void 0 != a.playlist_arr[b].youtube && "" != a.playlist_arr[b].youtube && a.haveYouTube && (d = !0);
        return d
    }

    function P(a, b) {
        var d = !1;
        void 0 != a.playlist_arr[b].vimeo && "" != a.playlist_arr[b].vimeo && a.haveVimeo && (d = !0);
        return d
    }

    function V(a, b) {
        var d = !1;
        void 0 != a.playlist_arr[b].selfhostedMP4 && "" != a.playlist_arr[b].selfhostedMP4 && a.haveSelfHosted && (d = !0);
        return d
    }

    function N(a) {
        var b = 10 > Math.floor(a / 60) ? "0" + Math.floor(a / 60) : Math.floor(a / 60);
        return b + ":" + (10 > Math.floor(a - 60 * b) ? "0" + Math.floor(a - 60 * b) : Math.floor(a - 60 * b))
    }

    function qa(a, b, g, f, h, e, n, m, p) {
        clearInterval(a.youTubeInterval);
        clearInterval(a.vimeoInterval);
        clearInterval(a.selfHostedInterval);
        a.totalTime = 0;
        a.curTime = 0;
        b.isBufferInitialized && (f.progressbar("destroy"), b.isBufferInitialized = !1);
        b.isSeekBarInitialized && (h.slider("destroy"), b.isSeekBarInitialized = !1);
        a.bufferedTime = 0;
        f.css({
            background: b.bufferEmptyColor
        });
        P(a, a.origID) || (f.progressbar({
            value: 0,
            complete: function() {
                a.is_buffer_complete = !0
            },
            create: function(a, d) {
                b.isBufferInitialized = !0
            }
        }), d(".ui-widget-header", f).css({
            background: b.bufferFullColor
        }), f.css({
            display: "block"
        }), h.css({
            display: "block"
        }), e.css({
            display: "block"
        }));
        P(a, a.origID) && a.videoIsFullScreen && (f.css({
            display: "none"
        }), h.css({
            display: "none"
        }), e.css({
            display: "none"
        }));
        B(a, a.origID) && (a.youTubeInterval = setInterval(function() {
            var e = !0; - 1 == s.indexOf("ipad") && -1 == s.indexOf("iphone") && -1 == s.indexOf("ipod") && -1 == s.indexOf("webos") && -1 == navigator.userAgent.indexOf("Android") || a.youtubeWasStarted == YT.PlayerState.PLAYING || (e = !1);
            0 != a.isYouTubeReady && (!b.isSeekBarInitialized && 0 < a.player.getDuration() && e && (h.slider({
                value: 0,
                step: .5,
                orientation: "horizontal",
                range: "min",
                max: a.player.getDuration(),
                slide: function() {
                    a.is_seeking = !0;
                    d("iframe", g).css({
                        "pointer-events": "none"
                    })
                },
                stop: function(b, e) {
                    a.is_seeking = !1;
                    d("iframe", g).css({
                        "pointer-events": "auto"
                    });
                    a.player.seekTo(e.value)
                },
                create: function(a, d) {
                    b.isSeekBarInitialized = !0
                }
            }), d(".ui-slider-range", h).css({
                background: b.seekbarColor
            })), n.html(N(a.player.getDuration()) + "/" + N(a.player.getCurrentTime())), a.is_buffer_complete || (a.bufferedTime = 100 * a.player.getVideoLoadedFraction(), f.progressbar({
                value: a.bufferedTime
            })), !a.is_seeking && b.isSeekBarInitialized && h.slider("value", a.player.getCurrentTime()))
        }, 500));
        P(a, a.origID) && (a.vimeoInterval = setInterval(function() {
            n.html(N(a.totalTime) + "/" + N(a.curTime));
            0 < a.totalTime || a.vimeo_player.api("getDuration", function(b) {
                a.totalTime = b
            });
            a.vimeo_player.api("getCurrentTime", function(b) {
                a.curTime = b;
                0 < b && a.curTime++
            })
        }, 500));
        if (V(a, a.origID)) {
            var k = parseInt(f.width(), 10);
            a.selfHostedInterval = setInterval(function() {
                a.curTime = document.getElementById(a.html5_video_id).currentTime;
                a.totalTime = document.getElementById(a.html5_video_id).duration;
                !b.isSeekBarInitialized && 0 < a.totalTime && (h.slider({
                    value: 0,
                    step: .5,
                    orientation: "horizontal",
                    range: "min",
                    max: a.totalTime,
                    slide: function() {
                        a.is_seeking = !0
                    },
                    stop: function(b, d) {
                        a.is_seeking = !1;
                        document.getElementById(a.html5_video_id).currentTime = d.value
                    },
                    create: function(a, d) {
                        b.isSeekBarInitialized = !0
                    }
                }), d(".ui-slider-range", h).css({
                    background: b.seekbarColor
                }));
                n.html(N(a.totalTime) + "/" + N(a.curTime));
                a.bufferedTime = document.getElementById(a.html5_video_id).buffered;
                a.is_buffer_complete || (a.bufferedTime = a.bufferedTime.length ? parseFloat(document.getElementById(a.html5_video_id).buffered.end(0)) : document.getElementById(a.html5_video_id).buffered, 0 < a.bufferedTime && f.progressbar({
                    value: a.bufferedTime * k / a.totalTime
                }));
                !a.is_seeking && b.isSeekBarInitialized && h.slider("value", a.curTime)
            }, 500)
        }
    }

    function aa(a, b, g, f, h, e, n) {
        e = 0;
        var m = d(".showHidePlaylistBut", g).width() + a.buttonsDistance,
            p = n,
            k = "none";
        "none" == n && (k = "block");
        B(a, a.origID) && (p = "none");
        d(".firstset_controls", g).css("display", n);
        f.css("display", n);
        h.css("display", n);
        "block" == n && (e = a.showPlaylistButOrigLeft, m = a.fullscreenButOrigLeft);
        d(".largePlayButton", g).css({
            display: p
        });
        d(".fullscreenVimeoButton", g).css({
            display: k
        });
        b.showPlaylistBut && d(".showHidePlaylistBut", g).css({
            left: e + "px"
        });
        b.showFullscreenBut && d(".fullscreenBut", g).css({
            left: m + "px",
            display: n
        })
    }

    function ca(a, b) {
        a = String(a);
        var d = "",
            f, h;
        a.length > b && (a = a.substring(0, b), h = a.split(/\b[\s,\.-:;]*/), f = a.substring(b - 2, b - 1), "" != f && (h.pop(), d = "..."), a = h.join(" "));
        return a + d
    }

    function ha(a, b, g, f, h) {
        g.css("top", "0px");
        var e = 0;
        b.isPlaylistSliderInitialized && a.universal_video_player_sliderVertical.slider("destroy");
        b.isPlaylistSliderInitialized = !1;
        a.selectedCateg_total_images > b.numberOfThumbsPerScreen && (a.universal_video_player_sliderVertical.slider({
            orientation: "vertical",
            range: "min",
            min: 1,
            max: 100,
            step: 1,
            value: 100,
            slide: function(d, e) {
                W(e.value, g, b, a)
            }
        }), b.isPlaylistSliderInitialized = !0, 0 >= b.borderWidth && (e = a.universal_video_player_sliderVertical.width() / 2), a.universal_video_player_sliderVertical.height(h.height() - 15), a.universal_video_player_sliderVertical.css({
            display: "block",
            left: Math.floor(b.width - 2 * b.borderWidth + (b.borderWidth - a.universal_video_player_sliderVertical.width()) / 2) - e + "px"
        }), d(".ui-slider-handle", a.universal_video_player_sliderVertical).css({
            "background-color": b.playlistScrollerBgColorOFF
        }), d(".ui-slider-handle", a.universal_video_player_sliderVertical).mouseover(function() {
            d(this).css({
                "background-color": b.playlistScrollerBgColorON
            })
        }), d(".ui-slider-handle", a.universal_video_player_sliderVertical).mouseout(function() {
            d(this).css({
                "background-color": b.playlistScrollerBgColorOFF
            })
        }), f.mousewheel(function(d, e, f, h) {
            d.preventDefault();
            d = a.universal_video_player_sliderVertical.slider("value");
            if (1 < parseInt(d, 10) && -1 == parseInt(e, 10) || 100 > parseInt(d, 10) && 1 == parseInt(e, 10)) d += e, a.universal_video_player_sliderVertical.slider("value", d), W(d, g, b, a)
        }))
    }

    function ra(a, b, g, f, h, e, n, m, p, k, l, q, s, t, w, y, z, x, A, B, r, H) {
        f.stop(!0, !0);
        a.isCarouselScrolling = !1;
        f.stop().animate({
            left: -1 * e.width() + "px"
        }, 600, "easeOutQuad", function() {
            f.html("");
            for (var u = 0; u < a.category_arr.length; u++) a.thumbsHolder_Thumb = d('<div class="thumbsHolder_ThumbOFF categUnit" rel="' + u + '"><div class="padding"><span class="title">' + a.category_arr[u] + "</span></div></div>"), f.append(a.thumbsHolder_Thumb), a.thumbsHolder_Thumb.css({
                top: (a.thumbsHolder_Thumb.height() + 1) * u + "px",
                background: b.categoryRecordBgOffColor,
                "border-bottom-color": b.categoryRecordBottomBorderOffColor,
                color: b.categoryRecordTextOffColor
            }), a.category_arr[u] == a.selectedCateg && (a.current_img_no = u, a.thumbsHolder_Thumb.css({
                background: b.categoryRecordBgOnColor,
                "border-bottom-color": b.categoryRecordBottomBorderOnColor,
                color: b.categoryRecordTextOnColor
            }));
            a.thumbMarginTop = 0;
            b.numberOfThumbsPerScreen = Math.floor((b.height - 2 * b.borderWidth) / (a.thumbsHolder_Thumb.height() + 1)) - 1;
            a.selectedCateg_total_images = a.numberOfCategories;
            a.categsAreListed = !0;
            a.thumbsHolder_Thumbs = d(".thumbsHolder_ThumbOFF", g);
            ha(a, b, f, e, h);
            a.thumbsHolder_Thumbs.click(function() {
                var u = d(this).attr("rel");
                a.selectedCateg = a.category_arr[u];
                m.html(a.selectedCateg);
                la(a, b, g, f, h, e, n, p, k, l, q, s, t, w, y, z, x, A, B, r, H)
            });
            a.thumbsHolder_Thumbs.mouseover(function() {
                d(this).css({
                    background: b.categoryRecordBgOnColor,
                    "border-bottom-color": b.categoryRecordBottomBorderOnColor,
                    color: b.categoryRecordTextOnColor
                })
            });
            a.thumbsHolder_Thumbs.mouseout(function() {
                var e = d(this),
                    f = e.attr("rel");
                a.current_img_no != f && e.css({
                    background: b.categoryRecordBgOffColor,
                    "border-bottom-color": b.categoryRecordBottomBorderOffColor,
                    color: b.categoryRecordTextOffColor
                })
            });
            f.stop().animate({
                left: "0px"
            }, 400, "easeOutQuad", function() {})
        })
    }

    function la(a, b, g, f, h, e, n, m, p, k, l, q, s, t, w, y, z, x, A, B, r) {
        f.stop(!0, !0);
        a.isCarouselScrolling = !1;
        a.categsAreListed = !1;
        l = k = "";
        var H = !1;
        m = 500;
        a.is_very_first && (m = 1);
        "" != a.search_val && (m = 1);
        f.css({
            left: -1 * e.width() + "px"
        });
        f.html("");
        for (var u = a.selectedCateg_total_images = 0; u < a.playlist_arr.length; u++) {
            H = !1;
            if ("" != a.search_val) {
                if (k = a.playlist_arr[u].title.toLowerCase(), l = a.playlist_arr[u].desc.toLowerCase(), -1 != k.indexOf(a.search_val) || -1 != l.indexOf(a.search_val)) H = !0
            } else -1 != a.playlist_arr[u].category.indexOf(a.selectedCateg + ";") && (H = !0);
            H && (a.selectedCateg_total_images++, k = a.playlist_arr[u]["bottom-thumb"], thumbUnit = "", b.playlistRecordShowImg && (thumbUnit = '<img src="' + k + '">'), a.thumbsHolder_Thumb = d('<div class="thumbsHolder_ThumbOFF" rel="' + (a.selectedCateg_total_images - 1) + '" data-origID="' + u + '"><div class="padding">' + thumbUnit + '<span class="title">' + ca(a.playlist_arr[u].title, b.playlistRecordTitleLimit) + '</span><br><span class="reg">' + ca(a.playlist_arr[u].desc, b.playlistRecordDescLimit) + "</span></div></div>"), f.append(a.thumbsHolder_Thumb), S(b, a, a.thumbsHolder_Thumb), a.thumbsHolder_Thumb.css({
                height: b.playlistRecordHeight + "px"
            }), d(".padding", a.thumbsHolder_Thumb).css({
                padding: b.playlistRecordPadding + "px"
            }), 0 == b.origThumbW && (0 == b.numberOfThumbsPerScreen && (b.numberOfThumbsPerScreen = Math.floor((b.origHeight - 2 * b.borderWidth) / a.thumbsHolder_Thumb.height())), b.origNumberOfThumbsPerScreen = b.numberOfThumbsPerScreen, b.origThumbW = a.thumbsHolder_Thumb.width(), b.origThumbH = a.thumbsHolder_Thumb.height(), p = d(".thumbsHolder_ThumbOFF .padding", g), b.origthumbLeftPadding = p.css("padding-left").substr(0, p.css("padding-left").lastIndexOf("px")), b.origthumbRightPadding = p.css("padding-right").substr(0, p.css("padding-left").lastIndexOf("px")), b.origthumbTopPadding = p.css("padding-top").substr(0, p.css("padding-left").lastIndexOf("px")), b.origthumbBottomPadding = p.css("padding-bottom").substr(0, p.css("padding-left").lastIndexOf("px")), a.thumbMarginTop = Math.floor((h.height() - a.thumbsHolder_Thumb.height() * b.numberOfThumbsPerScreen) / (b.numberOfThumbsPerScreen - 1)), a.origThumbMarginTop = a.thumbMarginTop, k = d(".thumbsHolder_ThumbOFF .title", g), l = d(".thumbsHolder_ThumbOFF .reg", g), k.css({
                "font-size": b.playlistTitleFontSize + "px",
                "line-height": b.playlistTitleLineHeight + "px"
            }), l.css({
                "font-size": b.playlistDescFontSize + "px",
                "line-height": b.playlistDescLineHeight + "px"
            }), -1 != k.css("font-size").lastIndexOf("px") ? b.origthumbTitleFont = k.css("font-size").substr(0, k.css("font-size").lastIndexOf("px")) : -1 != k.css("font-size").lastIndexOf("em") && (b.origthumbTitleFont = k.css("font-size").substr(0, k.css("font-size").lastIndexOf("em"))), -1 != k.css("line-height").lastIndexOf("px") ? b.origthumbTitleLineHeight = k.css("line-height").substr(0, k.css("line-height").lastIndexOf("px")) : -1 != k.css("line-height").lastIndexOf("em") && (b.origthumbTitleLineHeight = k.css("line-height").substr(0, k.css("line-height").lastIndexOf("em"))), -1 != l.css("font-size").lastIndexOf("px") ? b.origthumbRegFont = l.css("font-size").substr(0, l.css("font-size").lastIndexOf("px")) : -1 != l.css("font-size").lastIndexOf("em") && (b.origthumbRegFont = l.css("font-size").substr(0, l.css("font-size").lastIndexOf("em"))), -1 != l.css("line-height").lastIndexOf("px") ? b.origthumbRegLineHeight = l.css("line-height").substr(0, l.css("line-height").lastIndexOf("px")) : -1 != l.css("line-height").lastIndexOf("em") && (b.origthumbRegLineHeight = l.css("line-height").substr(0, l.css("line-height").lastIndexOf("em")))))
        }
        0 != b.origNumberOfThumbsPerScreen && (b.numberOfThumbsPerScreen = b.origNumberOfThumbsPerScreen, a.thumbMarginTop = a.origThumbMarginTop);
        ha(a, b, f, e, h);
        a.thumbsHolder_Thumbs = d(".thumbsHolder_ThumbOFF", g);
        a.thumbsHolder_Thumbs.removeClass("categUnit");
        k = d(".thumbsHolder_ThumbOFF .title", g);
        l = d(".thumbsHolder_ThumbOFF .reg", g);
        a.thumbsHolder_Thumbs.click(function() {
            var e = d(this).attr("rel");
            S(b, a, d(a.thumbsHolder_Thumbs[a.current_img_no]));
            a.thumbsClicked = !0;
            a.current_img_no = e - 1;
            O(1, a, b, g, f, q, s, t, w, y, z, x, A, B, r)
        });
        a.thumbsHolder_Thumbs.mouseenter(function() {
            var e = d(this);
            e.attr("rel");
            U(b, a, e)
        });
        a.thumbsHolder_Thumbs.mouseleave(function() {
            var e = d(this),
                f = e.attr("rel");
            a.current_img_no != f && S(b, a, e)
        });
        ba(a, b, g, f, e, h, p, k, l, n);
        a.current_img_no = b.firstVideo;
        b.firstVideo > a.selectedCateg_total_images && (a.current_img_no = a.selectedCateg_total_images);
        0 > b.firstVideo && (a.current_img_no = 0);
        b.shuffle && (a.current_img_no = Math.floor(Math.random() * a.selectedCateg_total_images));
        U(b, a, d(a.thumbsHolder_Thumbs[a.current_img_no]));
        a.origID = d("div[rel='" + a.current_img_no + "']").attr("data-origID");
        a.is_very_first && (a.is_very_first = !1, a.previousOrigID = a.origID);
        q.html(a.playlist_arr[a.origID].title);
        a.currentImg = a.playlist_arr[a.origID];
        f.stop().animate({
            left: "0px"
        }, m, "easeOutQuad", function() {
            b.shuffle && W(0, f, b, a)
        })
    }

    function fa(a, b, d, f, h, e, n, m, p, k, l, q, s, t) {
        a.totalButtonsDistance = 0;
        b.showRewindBut ? (f.css({
            left: 0,
            bottom: "0px"
        }), a.totalButtonsDistance += a.buttonsDistance) : f.css({
            display: "none",
            width: 0,
            height: 0,
            padding: 0,
            margin: 0
        });
        b.showPlayBut ? (h.css({
            left: f.width() + a.totalButtonsDistance + "px",
            bottom: "0px",
            "background-color": b.playButColorOff
        }), a.totalButtonsDistance += a.buttonsDistance) : h.css({
            display: "none",
            width: 0,
            height: 0,
            padding: 0,
            margin: 0
        });
        b.showVolumeBut ? (e.css({
            left: f.width() + h.width() + a.totalButtonsDistance + "px",
            bottom: "0px"
        }), a.totalButtonsDistance += a.buttonsDistance) : e.css({
            display: "none",
            width: 0,
            height: 0,
            padding: 0,
            margin: 0
        });
        b.showFacebookBut ? (n.css({
            left: f.width() + h.width() + e.width() + a.totalButtonsDistance + "px",
            bottom: "0px"
        }), a.totalButtonsDistance += a.buttonsDistance) : n.css({
            display: "none",
            width: 0,
            height: 0,
            padding: 0,
            margin: 0
        });
        b.showTwitterBut ? (m.css({
            left: f.width() + h.width() + e.width() + n.width() + a.totalButtonsDistance + "px",
            bottom: "0px"
        }), a.totalButtonsDistance += a.buttonsDistance) : m.css({
            display: "none",
            width: 0,
            height: 0,
            padding: 0,
            margin: 0
        });
        b.showInfoBut && t ? (p.css({
            display: "block",
            width: a.origInfoWidth + "px",
            height: a.origInfoHeight + "px",
            left: f.width() + h.width() + e.width() + n.width() + m.width() + a.totalButtonsDistance + "px",
            bottom: "0px"
        }), a.totalButtonsDistance += a.buttonsDistance) : p.css({
            display: "none",
            width: 0,
            height: 0,
            padding: 0,
            margin: 0
        });
        b.showDownloadBut && s ? (k.css({
            display: "block",
            width: a.origDownloadWidth + "px",
            height: a.origDownloadHeight + "px",
            left: f.width() + h.width() + e.width() + n.width() + m.width() + p.width() + a.totalButtonsDistance + "px",
            bottom: "0px"
        }), a.totalButtonsDistance += a.buttonsDistance) : k.css({
            display: "none",
            width: 0,
            height: 0,
            padding: 0,
            margin: 0
        });
        b.showPlaylistBut ? (a.showPlaylistButOrigLeft = f.width() + h.width() + e.width() + n.width() + m.width() + p.width() + k.width() + a.totalButtonsDistance, l.css({
            left: a.showPlaylistButOrigLeft + "px",
            bottom: "0px"
        }), a.totalButtonsDistance += a.buttonsDistance) : l.css({
            display: "none",
            width: 0,
            height: 0,
            padding: 0,
            margin: 0
        });
        b.showFullscreenBut ? (a.fullscreenButOrigLeft = f.width() + h.width() + e.width() + n.width() + m.width() + p.width() + k.width() + l.width() + a.totalButtonsDistance, q.css({
            left: a.fullscreenButOrigLeft + "px",
            bottom: "0px"
        }), a.totalButtonsDistance += a.buttonsDistance) : q.css({
            display: "none",
            width: 0,
            height: 0,
            padding: 0,
            margin: 0
        })
    }

    function ma(a, b, g, f, h, e, n, m, p, k, l, q, s, t, w) {
        if (a.videoIsFullScreen) {
            d("body").css("margin-top", a.origBodyTopMargin);
            d("body").css("margin-right", a.origBodyRightMargin);
            d("body").css("margin-bottom", a.origBodyBottomMargin);
            d("body").css("margin-left", a.origBodyLeftMargin);
            d("body").css("overflow", a.origBodyOverflow);
            a.videoIsFullScreen = !1;
            g.css("position", a.containerOrigPosition);
            g.css("z-index", a.containerOrigZindex);
            e.css({
                display: "block"
            });
            P(a, a.origID) || (f.css({
                display: "block"
            }), h.css({
                display: "block"
            }));
            var y = "";
            b.playlistVisible ? (a.new_width = parseInt(b.width - b.playlistWidth / (b.origWidth / b.width) - 3 * b.borderWidth, 10), y = "block", b.showNextPrevBut && (k.css({
                right: -1 * (b.borderWidth + b.playlistWidth / (b.origWidth / b.width)) + "px"
            }), l.css({
                right: -1 * (b.borderWidth + b.playlistWidth / (b.origWidth / b.width) - k.width() - a.buttonsDistanceSeekBar) + "px"
            })), b.showShuffleBut && q.css({
                right: -1 * (b.borderWidth + b.playlistWidth / (b.origWidth / b.width) - k.width() - l.width() - a.totalButtonsDistanceSeekBar) + "px"
            })) : (a.new_width = parseInt(b.width - 2 * b.borderWidth, 10), y = "none", b.showNextPrevBut && (k.css({
                right: 0
            }), l.css({
                right: k.width() + a.buttonsDistanceSeekBar + "px"
            })), b.showShuffleBut && q.css({
                right: k.width() + l.width() + a.totalButtonsDistanceSeekBar + "px"
            }));
            a.new_height = parseInt(b.height - 2 * b.borderWidth, 10);
            n.css({
                display: y
            });
            b.showCategs && m.css({
                display: y
            });
            b.showSearch && (p.css({
                display: y
            }), b.width <= a.minimalWidthSearch && p.css({
                display: "none"
            }));
            b.isPlaylistSliderInitialized && b.playlistVisible && a.universal_video_player_sliderVertical.css({
                visibility: "visible"
            });
            b.showInfoBut && s.css({
                bottom: 0
            });
            b.showPlaylistBut && (t.css({
                display: "block"
            }), w.css({
                left: parseInt(w.css("left").substr(0, w.css("left").lastIndexOf("px")), 10) + t.width() + a.buttonsDistance + "px"
            }));
            g.width(a.new_width);
            g.height(a.new_height);
            g.css({
                left: b.borderWidth + "px",
                top: b.borderWidth + "px"
            });
            e.css({
                left: 0,
                bottom: -1 * b.borderWidth + "px",
                background: "none"
            });
            f.css({
                bottom: 0
            });
            h.css({
                bottom: 0
            })
        } else d("body").css("margin", 0), d("body").css("overflow", "hidden"), g.css("position", "fixed"), g.css("z-index", 1E4), a.new_width = window.innerWidth, a.new_height = window.innerHeight, a.videoIsFullScreen = !0, P(a, a.origID) && (f.css({
            display: "none"
        }), h.css({
            display: "none"
        }), e.css({
            display: "none"
        })), n.css({
            display: "none"
        }), b.showCategs && m.css({
            display: "none"
        }), b.showSearch && p.css({
            display: "none"
        }), b.isPlaylistSliderInitialized && a.universal_video_player_sliderVertical.css({
            visibility: "hidden"
        }), b.showNextPrevBut && (k.css({
            right: 0
        }), l.css({
            right: k.width() + a.buttonsDistanceSeekBar + "px"
        })), b.showShuffleBut && q.css({
            right: k.width() + l.width() + a.totalButtonsDistanceSeekBar + "px"
        }), b.showInfoBut && s.css({
            bottom: b.borderWidth + "px"
        }), b.showPlaylistBut && (t.css({
            display: "none"
        }), w.css({
            left: parseInt(w.css("left").substr(0, w.css("left").lastIndexOf("px")), 10) - t.width() - a.buttonsDistance + "px"
        })), g.width(a.new_width), g.height(a.new_height), g.css({
            top: "0px",
            left: "0px"
        }), e.css({
            left: 0,
            bottom: "1px",
            background: b.controlsBgFullScreenColor
        }), f.css({
            bottom: b.borderWidth + "px"
        }), h.css({
            bottom: b.borderWidth + "px"
        });
        a.haveYouTube && d(".lbg_player", g).css({
            width: a.new_width + "px",
            height: a.new_height + "px"
        });
        a.haveVimeo && d(".lbg_vimeo_player", g).css({
            width: a.new_width + "px",
            height: a.new_height + "px"
        });
        ja(a, g, n, a.new_width)
    }

    function oa(a, b, d) {
        d.html('<div class="movieTitle">' + a.playlist_arr[a.origID].title + '</div><div class="movieDesc">' + a.playlist_arr[a.origID].desc + "</div>")
    }
    var s = navigator.userAgent.toLowerCase(),
        X = function(a) {
            return document.getElementById(a).canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
        };
    d.fn.universal_video_player = function(a) {
        a = d.extend({}, d.fn.universal_video_player.defaults, a);
        return this.each(function() {
            var b = d(this);
            responsiveWidth = b.parent().width();
            responsiveHeight = b.parent().height();
            a.responsiveRelativeToBrowser && (responsiveWidth = d(window).width(), responsiveHeight = d(window).height());
            a.origWidth = a.width;
            a.width100Proc && (a.width = responsiveWidth);
            a.origHeight = a.height;
            a.height100Proc && (a.height = responsiveHeight);
            a.responsive && (a.origWidth != responsiveWidth || a.width100Proc) && (a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth : a.origWidth, a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight)));
            a.width = parseInt(a.width, 10);
            a.height = parseInt(a.height, 10);
            b.css("display", "block");
            var g = d("<div></div>").addClass("universal_video_playerBorder"),
                f = d("<div></div>").addClass("universal_video_player").addClass(a.skin),
                h = d('<div class="thumbsHolderWrapper"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div> <div class="slider-vertical"></div> <div class="selectedCategDiv"><div class="innerSelectedCategDiv">READING CATEGORIES...</div></div> <div class="searchDiv"><input class="search_term" type="text" value="search..." /></div> <div class="top_title">Movie Title</div> <div class="the_timer">00:00/00:00</div> <div class="videoBuffer"></div> <div class="videoSeek"></div> <div class="all_controls"> <div class="firstset_controls"> <div class="rewindBut" title="Rewind"></div><div class="playBut" title="Play/Pause"></div> <div class="volumeAll"><div class="volumeSlider"></div><div class="volumeBut" title="Mute/Unmute"></div></div> <div class="facebookBut" title="Facebook"></div><div class="twitterBut" title="Twitter"></div><div class="infoBut" title="Info"></div><div class="downloadBut" title="Download File"></div> </div> <div class="showHidePlaylistBut" title="Show/Hide Playlist"></div><div class="fullscreenBut" title="FullScreen"></div> <div class="shuffleBut" title="Shuffle"></div><div class="prevBut" title="Previous"></div><div class="nextBut" title="Next"></div> </div> <div class="videoInfoBox"></div>');
            b.wrap(f);
            b.after(h);
            var e = b.parent(".universal_video_player");
            e.wrap(g);
            var n = e.parent(".universal_video_playerBorder"),
                m = d(".selectedCategDiv", e),
                p = d(".innerSelectedCategDiv", e),
                k = d(".searchDiv", e),
                l = d(".search_term", e),
                q = d(".nextBut", e),
                D = d(".prevBut", e),
                t = d(".shuffleBut", e),
                w = d(".top_title", e),
                y = d(".the_timer", e),
                z = d(".all_controls", e),
                x = d(".videoBuffer", e),
                A = d(".videoSeek", e),
                Q = d(".rewindBut", e),
                r = d(".playBut", e),
                H = d(".volumeAll", e),
                u = d(".volumeBut", e),
                M = d(".volumeSlider", e),
                R = d(".facebookBut", e),
                N = d(".twitterBut", e),
                J = d(".infoBut", e),
                L = d(".downloadBut", e),
                C = d(".showHidePlaylistBut", e),
                E = d(".fullscreenBut", e),
                I = d(".videoInfoBox", e),
                f = Math.floor(1E5 * Math.random()),
                g = d("<div></div>").addClass("lbg_player");
            b.append(g);
            var S = "lbg_player" + f;
            d(".lbg_player", e).attr("id", S);
            g = d("<div></div>").addClass("lbg_vimeo_player");
            b.append(g);
            var F = "lbg_vimeo_player" + f,
                g = ea(),
                U = a.defaultEffect,
                c = {
                    current_img_no: 0,
                    currentImg: 0,
                    current_imgInside: "",
                    windowWidth: 0,
                    carouselStep: 0,
                    thumbMarginTop: 0,
                    origThumbMarginTop: 0,
                    thumbsClicked: !1,
                    windowWidth: 0,
                    haveYouTube: !1,
                    haveVimeo: !1,
                    haveSelfHosted: !1,
                    html5_video_id: "html5_video_id_" + f,
                    playerRatio: a.origWidth / a.origHeight,
                    total_images: 0,
                    playlist_arr: "",
                    category_arr: "",
                    selectedCateg: "",
                    categsAreListed: !1,
                    numberOfCategories: 0,
                    selectedCateg: "",
                    universal_video_player_sliderVertical: "",
                    search_val: "",
                    is_very_first: !0,
                    is_very_first_vimeo: !0,
                    thumbsHolder_Thumb: "",
                    thumbsHolder_Thumbs: "",
                    containerOrigPosition: "",
                    containerOrigZindex: "",
                    youTubeInterval: "",
                    selfHostedInterval: "",
                    vimeoInterval: "",
                    bufferedTime: 0,
                    is_buffer_complete: !1,
                    is_seeking: !1,
                    totalTime: 0,
                    curTime: 0,
                    new_width: 0,
                    new_height: 0,
                    buttonsDistance: 15,
                    totalButtonsDistance: 0,
                    showPlaylistButOrigLeft: 0,
                    fullscreenButOrigLeft: 0,
                    origInfoWidth: 0,
                    origInfoHeight: 0,
                    origDownloadWidth: 0,
                    origDownloadHeight: 0,
                    buttonsDistanceSeekBar: 7,
                    totalButtonsDistanceSeekBar: 0,
                    minimalWidthSearch: 445,
                    minimalWidthDownload: 370,
                    minimalWidthInfo: 340,
                    showHidePlaylistMiliseconds: 0,
                    googleYouTubeCateg: "YouTube Videos",
                    googleVimeoCateg: "Vimeo Videos",
                    googleSelfHostedCateg: "Self-Hosted Videos",
                    videoIsFullScreen: !1,
                    youtubeWasStarted: -1,
                    origBodyTopMargin: 0,
                    origBodyRightMargin: 0,
                    origBodyBottomMargin: 0,
                    origBodyLeftMargin: 0,
                    origBodyOverflow: "",
                    origID: 0,
                    previousOrigID: 0,
                    player: !1,
                    isYouTubeReady: !1,
                    vimeo_player: !1,
                    vimeo_iframe: !1
                };
            c.origInfoWidth = J.width();
            c.origInfoHeight = J.height();
            c.origDownloadWidth = L.width();
            c.origDownloadHeight = L.height();
            c.containerOrigPosition = e.css("position");
            c.containerOrigZindex = e.css("z-index");
            c.origBodyTopMargin = d("body").css("margin-top");
            c.origBodyRightMargin = d("body").css("margin-right");
            c.origBodyBottomMargin = d("body").css("margin-bottom");
            c.origBodyLeftMargin = d("body").css("margin-left");
            c.origBodyOverflow = d("body").css("overflow");
            var G = d(".thumbsHolderWrapper", e),
                T = d(".thumbsHolderVisibleWrapper", e),
                K = d(".thumbsHolder", e);
            c.universal_video_player_sliderVertical = d(".slider-vertical", e);
            var Y, Z, $;
            G.css({
                background: a.playlistBgColor
            });
            a.showTopTitle ? w.css({
                color: a.topTitleColor,
                top: -1 * a.borderWidth + (a.borderWidth - w.height()) / 2 + "px"
            }) : w.css({
                display: "none"
            });
            a.showTimer ? y.css({
                color: a.timerColor,
                top: -1 * a.borderWidth + (a.borderWidth - y.height()) / 2 + "px"
            }) : y.css({
                display: "none"
            });
            n.width(a.width);
            n.height(a.height);
            n.css("background", a.borderColor);
            c.new_width = parseInt(a.width - a.playlistWidth / (a.origWidth / a.width) - 3 * a.borderWidth, 10);
            e.width(c.new_width);
            e.height(a.height - 2 * a.borderWidth);
            e.css({
                left: a.borderWidth + "px",
                top: a.borderWidth + "px"
            });
            d(".lbg_player", e).width(c.new_width);
            d(".lbg_player", e).height(e.height());
            d(".lbg_vimeo_player", e).width(c.new_width);
            d(".lbg_vimeo_player", e).height(e.height());
            T.width(a.playlistWidth / (a.origWidth / a.width));
            T.height(e.height());
            G.width(a.playlistWidth / (a.origWidth / a.width));
            G.height(e.height());
            G.css({
                top: 0,
                right: -1 * (a.borderWidth + a.playlistWidth / (a.origWidth / a.width)) + "px"
            });
            K.width(a.playlistWidth / (a.origWidth / a.width));
            K.css("top", "0px");
            m.css({
                width: a.playlistWidth / (a.origWidth / a.width) + "px",
                "background-color": a.selectedCategBg,
                "background-position": "2px 50%",
                top: "-20px",
                right: -1 * (a.borderWidth + a.playlistWidth / (a.origWidth / a.width)) + "px"
            });
            p.css({
                color: a.selectedCategOffColor,
                "background-position": a.playlistWidth / (a.origWidth / a.width) - 9 + "px 50%"
            });
            var v = b.find("ul:first").children();
            c.playlist_arr = [];
            c.category_arr = [];
            var ia = [];
            v.each(function() {
                c.currentImg = d(this);
                c.currentImg.is("li") || (c.currentImg = c.currentImg.find("li:first"));
                if (c.currentImg.is("li")) {
                    c.currentImg.css("display", "none");
                    c.total_images++;
                    c.playlist_arr[c.total_images - 1] = [];
                    c.playlist_arr[c.total_images - 1].title = "";
                    c.playlist_arr[c.total_images - 1].desc = "";
                    c.playlist_arr[c.total_images - 1]["bottom-thumb"] = "";
                    c.playlist_arr[c.total_images - 1].category = "";
                    c.playlist_arr[c.total_images - 1].youtube = "";
                    c.playlist_arr[c.total_images - 1].vimeo = "";
                    c.playlist_arr[c.total_images - 1].selfhostedMP4 = "";
                    c.playlist_arr[c.total_images - 1].selfhostedWEBM = "";
                    void 0 != d(v[c.total_images - 1]).attr("data-title") && "" != d(v[c.total_images - 1]).attr("data-title") && (c.playlist_arr[c.total_images - 1].title = d(v[c.total_images - 1]).attr("data-title"));
                    void 0 != d(v[c.total_images - 1]).attr("data-desc") && "" != d(v[c.total_images - 1]).attr("data-desc") && (c.playlist_arr[c.total_images - 1].desc = d(v[c.total_images - 1]).attr("data-desc"));
                    void 0 != d(v[c.total_images - 1]).attr("data-bottom-thumb") && "" != d(v[c.total_images - 1]).attr("data-bottom-thumb") && (c.playlist_arr[c.total_images - 1]["bottom-thumb"] = d(v[c.total_images - 1]).attr("data-bottom-thumb"));
                    void 0 != d(v[c.total_images - 1]).attr("data-youtube") && "" != d(v[c.total_images - 1]).attr("data-youtube") && (c.playlist_arr[c.total_images - 1].youtube = d(v[c.total_images - 1]).attr("data-youtube"));
                    void 0 != d(v[c.total_images - 1]).attr("data-vimeo") && "" != d(v[c.total_images - 1]).attr("data-vimeo") && (c.playlist_arr[c.total_images - 1].vimeo = d(v[c.total_images - 1]).attr("data-vimeo"));
                    void 0 != d(v[c.total_images - 1]).attr("data-selfhostedMP4") && "" != d(v[c.total_images - 1]).attr("data-selfhostedMP4") && (c.playlist_arr[c.total_images - 1].selfhostedMP4 = d(v[c.total_images - 1]).attr("data-selfhostedMP4"));
                    void 0 != d(v[c.total_images - 1]).attr("data-selfhostedWEBM") && "" != d(v[c.total_images - 1]).attr("data-selfhostedWEBM") && (c.playlist_arr[c.total_images - 1].selfhostedWEBM = d(v[c.total_images - 1]).attr("data-selfhostedWEBM"));
                    if (void 0 != d(v[c.total_images - 1]).attr("data-category") && "" != d(v[c.total_images - 1]).attr("data-category")) {
                        c.playlist_arr[c.total_images - 1].category = d(v[c.total_images - 1]).attr("data-category") + ";";
                        ia = d(v[c.total_images - 1]).attr("data-category").split(";");
                        for (var a = 0; a < ia.length; a++) - 1 === c.category_arr.indexOf(ia[a]) && c.category_arr.push(ia[a])
                    }
                    void 0 != d(v[c.total_images - 1]).attr("data-youtube") && "" != d(v[c.total_images - 1]).attr("data-youtube") && (c.haveYouTube = !0);
                    void 0 != d(v[c.total_images - 1]).attr("data-vimeo") && "" != d(v[c.total_images - 1]).attr("data-vimeo") && (c.haveVimeo = !0);
                    void 0 != d(v[c.total_images - 1]).attr("data-selfhostedMP4") && "" != d(v[c.total_images - 1]).attr("data-selfhostedMP4") && (c.haveSelfHosted = !0)
                }
            });
            c.numberOfCategories = c.category_arr.length;
            c.category_arr.sort();
            c.selectedCateg = a.firstCateg;
            "" == a.firstCateg && -1 === c.category_arr.indexOf(a.firstCateg) && (c.selectedCateg = c.category_arr[0]);
            p.html(c.selectedCateg);
            Y = d(".thumbsHolder_ThumbOFF .padding", e);
            Z = d(".thumbsHolder_ThumbOFF .title", e);
            $ = d(".thumbsHolder_ThumbOFF .reg", e);
            la(c, a, e, K, G, T, m, k, Y, Z, $, w, x, A, y, r, I, z, C, E, F);
            if (c.haveYouTube) {
                var X = function(b) {
                        c.youtubeWasStarted != YT.PlayerState.PLAYING && (c.youtubeWasStarted = b.data);
                        b.data == YT.PlayerState.ENDED && O(1, c, a, e, K, w, x, A, y, r, I, z, C, E, F);
                        b.data == YT.PlayerState.PAUSED && r.removeClass("pauseBut");
                        b.data == YT.PlayerState.PLAYING && r.addClass("pauseBut")
                    },
                    ba = function(b) {
                        -1 == s.indexOf("ipad") && -1 == s.indexOf("iphone") && -1 == s.indexOf("ipod") && -1 == s.indexOf("webos") && -1 == navigator.userAgent.indexOf("Android") && (c.player.setVolume(100 * a.initialVolume), a.autoPlayFirstVideo ? void 0 != c.currentImg.youtube && "" != c.currentImg.youtube && (b.target.playVideo(), r.hasClass("pauseBut") || r.addClass("pauseBut")) : b.target.pauseVideo());
                        c.isYouTubeReady = !0
                    },
                    f = document.createElement("script");
                f.src = a.youtubeJsUrl;
                var ca = document.getElementsByTagName("script")[0];
                ca.parentNode.insertBefore(f, ca);
                window.onYouTubeIframeAPIReady = function() {
                    void 0 != c.currentImg.youtube && "" != c.currentImg.youtube ? (c.player = new YT.Player(S, {
                        width: c.new_width,
                        height: a.height - 2 * a.borderWidth,
                        videoId: c.currentImg.youtube,
                        playerVars: {
                            rel: 0,
                            wmode: "opaque",
                            controls: 0,
                            showinfo: 0,
                            html5: 1,
                            modestbranding: 1,
                            cc_load_policy: 0,
                            iv_load_policy: 3,
                            fs: 0,
                            disablekb: 1
                        },
                        events: {
                            onReady: ba,
                            onStateChange: X
                        }
                    }), d(".lbg_player", e).css({
                        "z-index": 5
                    })) : c.player = new YT.Player(S, {
                        width: "100%",
                        height: "100%",
                        videoId: "xoORbLlFsis",
                        playerVars: {
                            rel: 0,
                            wmode: "opaque",
                            controls: 0,
                            showinfo: 0,
                            html5: 1,
                            modestbranding: 1,
                            cc_load_policy: 0,
                            iv_load_policy: 3,
                            fs: 0,
                            disablekb: 1
                        },
                        events: {
                            onReady: ba,
                            onStateChange: X
                        }
                    })
                }
            }
            if (c.haveVimeo) {
                var ha = function(b) {
                    O(1, c, a, e, K, w, x, A, y, r, I, z, C, E, F)
                };
                void 0 != c.currentImg.vimeo && "" != c.currentImg.vimeo ? (d(".lbg_vimeo_player", e).html('<iframe id="' + F + '" src="//player.vimeo.com/video/' + c.currentImg.vimeo + "?api=1&amp;player_id=" + F + '" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), d(".lbg_vimeo_player", e).css({
                    "z-index": 5
                })) : d(".lbg_vimeo_player", e).html('<iframe id="' + F + '" src="//player.vimeo.com/video/?api=1&amp;player_id=' + F + '" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                c.vimeo_iframe = d("#" + F)[0];
                c.vimeo_player = $f(c.vimeo_iframe);
                c.vimeo_player.addEvent("ready", function() {
                    c.is_very_first_vimeo && (c.vimeo_player.api("setVolume", a.initialVolume), c.is_very_first_vimeo = !1);
                    d(".lbg_vimeo_player", e).css({
                        "z-index": 5
                    });
                    a.autoPlayFirstVideo ? void 0 != c.currentImg.vimeo && "" != c.currentImg.vimeo && -1 == s.indexOf("ipad") && -1 == s.indexOf("iphone") && -1 == s.indexOf("ipod") && -1 == s.indexOf("webos") && -1 == navigator.userAgent.indexOf("Android") && c.vimeo_player.api("play") : c.vimeo_player.api("pause");
                    c.vimeo_player.addEvent("finish", ha)
                })
            }
            c.haveSelfHosted && (f = "", a.autoPlayFirstVideo && (f = ' autoplay="autoplay"'), f = d('<video id="' + c.html5_video_id + '" width="100%" height="100%" preload="auto"' + f + "></video>"), e.append(f), d("#" + c.html5_video_id).css({
                "z-index": -1,
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                position: "absolute",
                background: "#000000"
            }), document.getElementById(c.html5_video_id).volume = a.initialVolume, void 0 != c.currentImg.selfhostedMP4 && "" != c.currentImg.selfhostedMP4 && (document.getElementById(c.html5_video_id).src = pa(g, c, c.html5_video_id), document.getElementById(c.html5_video_id).load(), d("#" + c.html5_video_id).css({
                "z-index": 5,
                width: "100%",
                height: "100%"
            }), a.autoPlayFirstVideo && (document.getElementById(c.html5_video_id).play(), r.hasClass("pauseBut") || r.addClass("pauseBut"))), document.getElementById(c.html5_video_id).addEventListener("ended", function(b) {
                O(1, c, a, e, K, w, x, A, y, r, I, z, C, E, F)
            }, !1));
            a.googleTrakingOn && (ga("create", a.googleTrakingCode, "auto"), f = g = "", void 0 != c.currentImg.youtube && "" != c.currentImg.youtube && (g = c.currentImg.youtube, f = c.googleYouTubeCateg), void 0 != c.currentImg.vimeo && "" != c.currentImg.vimeo && (g = c.currentImg.vimeo, f = c.googleVimeoCateg), void 0 != c.currentImg.selfhostedMP4 && "" != c.currentImg.selfhostedMP4 && (g = c.currentImg.selfhostedMP4, f = c.googleSelfHostedCateg), ga("send", "event", f, "Play", "Title: " + c.currentImg.title + " --- ID: " + g));
            g = d("<div></div>").addClass("largePlayButton");
            e.append(g);
            d(".largePlayButton", e).click(function() {
                r.click()
            });
            B(c, c.origID) && d(".largePlayButton", e).css({
                display: "none"
            });
            g = d("<div></div>").addClass("fullscreenVimeoButton");
            e.append(g);
            d(".fullscreenVimeoButton", e).mouseover(function() {
                d(this).css({
                    background: "url(" + a.absUrl + "skins/" + a.skin + "/fullscreenvimeo.png) no-repeat left bottom"
                })
            });
            d(".fullscreenVimeoButton", e).mouseout(function() {
                d(this).css({
                    background: "none"
                })
            });
            g = d('<a href="' + a.logoLink + '" target="' + a.logoTarget + '"><img src="' + a.logoImagePath + '"></a>').addClass("yourLogo");
            e.append(g);
            a.showLogo || d(".yourLogo", e).css({
                display: "none"
            });
            qa(c, a, e, x, A, z, y, I, F);
            z.css({
                left: 0,
                height: a.borderWidth + "px",
                bottom: -1 * a.borderWidth + "px"
            });
            fa(c, a, e, Q, r, H, R, N, J, L, C, E, !0, !0);
            a.showRewindBut && Q.click(function() {
                var a = !0;
                V(c, c.origID) && (document.getElementById(c.html5_video_id).currentTime = 0, document.getElementById(c.html5_video_id).play());
                B(c, c.origID) && 0 != c.isYouTubeReady && (a = -1 != s.indexOf("ipad") || -1 != s.indexOf("iphone") || -1 != s.indexOf("ipod") || -1 != s.indexOf("webos") || -1 != navigator.userAgent.indexOf("Android") ? c.youtubeWasStarted == YT.PlayerState.PLAYING ? !0 : !1 : !0) && (c.player.seekTo(0), c.player.playVideo())
            });
            a.showPlayBut && (r.mouseover(function() {
                r.css({
                    "background-color": a.playButColorOn
                })
            }), r.mouseout(function() {
                r.css({
                    "background-color": a.playButColorOff
                })
            }), r.click(function() {
                var a = !0;
                V(c, c.origID) && (r.hasClass("pauseBut") ? (document.getElementById(c.html5_video_id).pause(), r.removeClass("pauseBut")) : (document.getElementById(c.html5_video_id).play(), r.addClass("pauseBut")));
                B(c, c.origID) && 0 != c.isYouTubeReady && (a = -1 != s.indexOf("ipad") || -1 != s.indexOf("iphone") || -1 != s.indexOf("ipod") || -1 != s.indexOf("webos") || -1 != navigator.userAgent.indexOf("Android") ? c.youtubeWasStarted == YT.PlayerState.PLAYING ? !0 : !1 : !0) && (r.hasClass("pauseBut") ? (c.player.pauseVideo(), r.removeClass("pauseBut")) : (c.player.playVideo(), r.addClass("pauseBut")))
            }));
            a.showVolumeBut && (M.slider({
                value: a.initialVolume,
                orientation: "vertical",
                range: "max",
                max: 1,
                step: .05,
                animate: !0,
                slide: function(b, f) {
                    d("iframe", e).css({
                        "pointer-events": "none"
                    });
                    a.initialVolume = f.value;
                    B(c, c.origID) && 0 != c.isYouTubeReady && (c.player.unMute(), u.removeClass("volumeButtonMute"), c.player.setVolume(100 * a.initialVolume));
                    V(c, c.origID) && (document.getElementById(c.html5_video_id).muted = !1, document.getElementById(c.html5_video_id).volume = a.initialVolume, u.removeClass("volumeButtonMute"))
                },
                stop: function(a, b) {
                    d("iframe", e).css({
                        "pointer-events": "auto"
                    })
                }
            }), M.css({
                background: a.volumeOnColor
            }), M.css({
                "border-color": a.volumeOffColor
            }), d(".ui-slider-range", M).css({
                background: a.volumeOffColor
            }), H.mouseover(function() {
                M.css({
                    display: "block"
                })
            }), H.mouseout(function() {
                M.css({
                    display: "none"
                })
            }), u.click(function() {
                c.haveYouTube && 0 != c.isYouTubeReady && (c.player.isMuted() ? (u.removeClass("volumeButtonMute"), c.player.setVolume(100 * a.initialVolume), c.player.unMute()) : (u.addClass("volumeButtonMute"), a.initialVolume = c.player.getVolume() / 100, c.player.setVolume(0), c.player.mute()));
                c.haveSelfHosted && (1 == document.getElementById(c.html5_video_id).muted ? (document.getElementById(c.html5_video_id).muted = !1, document.getElementById(c.html5_video_id).volume = a.initialVolume, u.removeClass("volumeButtonMute")) : (document.getElementById(c.html5_video_id).muted = !0, a.initialVolume = document.getElementById(c.html5_video_id).volume, document.getElementById(c.html5_video_id).volume = 0, u.addClass("volumeButtonMute")))
            }));
            a.showFacebookBut && (window.fbAsyncInit = function() {
                FB.init({
                    appId: a.facebookAppID,
                    version: "v2.1",
                    status: !0,
                    cookie: !0,
                    xfbml: !0
                })
            }, function(a, b, c) {
                var d = a.getElementsByTagName(b)[0];
                a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "//connect.facebook.com/en_US/sdk.js", d.parentNode.insertBefore(a, d))
            }(document, "script", "facebook-jssdk"), R.click(function() {
                FB.ui({
                    method: "feed",
                    name: a.facebookShareTitle,
                    caption: c.playlist_arr[c.origID].title,
                    description: a.facebookShareDescription,
                    link: document.URL
                }, function(a) {})
            }));
            a.showTwitterBut && N.click(function() {
                window.open("https://twitter.com/intent/tweet?url=" + document.URL + "&text=" + c.playlist_arr[c.origID].title, "Twitter", "status = 1, left = 430, top = 270, height = 550, width = 420, resizable = 0")
            });
            a.showInfoBut && (J.click(function() {
                I.slideToggle(500, "easeOutCirc")
            }), oa(c, a, I));
            a.showDownloadBut && L.click(function() {
                B(c, c.origID) || P(c, c.origID) || window.open(a.pathToDownloadFile + "download.php?the_file=" + c.playlist_arr[c.origID].selfhostedMP4)
            });
            a.showPlaylistBut && C.click(function() {
                a.showPlaylistOnInit || G.css("visibility", "visible");
                "none" != G.css("display") ? (a.playlistVisible = !1, c.new_width = parseInt(a.width - 2 * a.borderWidth, 10), e.width(c.new_width), G.css({
                    display: "none"
                }), a.showCategs && m.css({
                    display: "none"
                }), a.showSearch && k.css({
                    display: "none"
                }), a.isPlaylistSliderInitialized && c.universal_video_player_sliderVertical.css({
                    visibility: "hidden"
                }), a.showNextPrevBut && (q.css({
                    right: 0
                }), D.css({
                    right: q.width() + c.buttonsDistanceSeekBar + "px"
                })), a.showShuffleBut && t.css({
                    right: q.width() + D.width() + c.totalButtonsDistanceSeekBar + "px"
                })) : (c.showHidePlaylistMiliseconds = 300, a.playlistVisible = !0, c.new_width = parseInt(a.width - a.playlistWidth / (a.origWidth / a.width) - 3 * a.borderWidth, 10), e.width(c.new_width), G.css({
                    display: "block"
                }), a.showCategs && m.css({
                    display: "block"
                }), !a.showSearch || a.width <= c.minimalWidthSearch || k.css({
                    display: "block"
                }), a.isPlaylistSliderInitialized && c.universal_video_player_sliderVertical.css({
                    visibility: "visible"
                }), a.showNextPrevBut && (q.css({
                    right: -1 * (a.borderWidth + a.playlistWidth / (a.origWidth / a.width)) + "px"
                }), D.css({
                    right: -1 * (a.borderWidth + a.playlistWidth / (a.origWidth / a.width) - q.width() - c.buttonsDistanceSeekBar) + "px"
                })), a.showShuffleBut && t.css({
                    right: -1 * (a.borderWidth + a.playlistWidth / (a.origWidth / a.width) - q.width() - D.width() - c.totalButtonsDistanceSeekBar) + "px"
                }));
                c.haveYouTube && d(".lbg_player", e).animate({
                    width: c.new_width + "px"
                }, c.showHidePlaylistMiliseconds, "easeOutQuad", function() {});
                c.haveVimeo && d(".lbg_vimeo_player", e).animate({
                    width: c.new_width + "px"
                }, c.showHidePlaylistMiliseconds, "easeOutQuad", function() {});
                ja(c, e, G, c.new_width)
            });
            a.showFullscreenBut && (E.click(function() {
                screenfull.enabled && -1 == navigator.userAgent.indexOf("Android") ? screenfull.toggle() : ma(c, a, e, x, A, z, G, m, k, q, D, t, I, C, E)
            }), c.totalButtonsDistance += c.buttonsDistance);
            d(".fullscreenVimeoButton", e).click(function() {
                screenfull.enabled && -1 == navigator.userAgent.indexOf("Android") ? screenfull.toggle() : ma(c, a, e, x, A, z, G, m, k, q, D, t, I, C, E)
            });
            B(c, c.origID) && d(".fullscreenVimeoButton", e).css({
                display: "none"
            });
            screenfull.enabled && -1 == navigator.userAgent.indexOf("Android") && document.addEventListener(screenfull.raw.fullscreenchange, function() {
                setTimeout(function() {
                    ma(c, a, e, x, A, z, G, m, k, q, D, t, I, C, E)
                }, 50)
            });
            c.totalButtonsDistanceSeekBar = 0;
            a.showNextPrevBut ? (q.css({
                right: -1 * (a.borderWidth + a.playlistWidth / (a.origWidth / a.width)) + "px",
                bottom: "0px"
            }), q.click(function() {
                c.categsAreListed || O(1, c, a, e, K, w, x, A, y, r, I, z, C, E, F)
            }), D.css({
                right: -1 * (a.borderWidth + a.playlistWidth / (a.origWidth / a.width) - q.width() - c.buttonsDistanceSeekBar) + "px",
                bottom: "0px"
            }), D.click(function() {
                c.categsAreListed || O(-1, c, a, e, K, w, x, A, y, r, I, z, C, E, F)
            }), c.totalButtonsDistanceSeekBar = 3 * c.buttonsDistanceSeekBar) : (q.css({
                display: "none",
                width: 0,
                height: 0,
                padding: 0,
                margin: 0
            }), D.css({
                display: "none",
                width: 0,
                height: 0,
                padding: 0,
                margin: 0
            }));
            a.showShuffleBut ? (t.css({
                right: -1 * (a.borderWidth + a.playlistWidth / (a.origWidth / a.width) - q.width() - D.width() - c.totalButtonsDistanceSeekBar) + "px",
                bottom: "0px"
            }), a.shuffle && t.addClass("VideoShuffleON"), t.click(function() {
                a.shuffle ? (t.removeClass("VideoShuffleON"), a.shuffle = !1) : (t.addClass("VideoShuffleON"), a.shuffle = !0)
            })) : t.css({
                display: "none",
                width: 0,
                height: 0,
                padding: 0,
                margin: 0
            });
            K.swipe({
                swipeStatus: function(b, d, e, f, g, h) {
                    "up" != e && "down" != e || 0 == f || (currentScrollVal = c.universal_video_player_sliderVertical.slider("value"), currentScrollVal = "up" == e ? currentScrollVal - 1.5 : currentScrollVal + 1.5, c.universal_video_player_sliderVertical.slider("value", currentScrollVal), W(currentScrollVal, K, a, c))
                },
                threshold: 100,
                maxTimeThreshold: 500,
                fingers: "all"
            });
            k.css({
                width: a.playlistWidth / (a.origWidth / a.width) + "px",
                "background-color": a.searchAreaBg,
                top: 3 + (a.height - 2 * a.borderWidth) + "px",
                right: -1 * (a.borderWidth + a.playlistWidth / (a.origWidth / a.width)) + "px"
            });
            l.val(a.searchInputText);
            l.css({
                width: parseInt(a.playlistWidth / (a.origWidth / a.width), 10) - 100 + "px",
                "background-color": a.searchInputBg,
                "border-color": a.searchInputBorderColor,
                color: a.searchInputTextColor
            });
            void 0 != c.currentImg.vimeo && "" != c.currentImg.vimeo && aa(c, a, e, x, A, z, "none");
            a.showCategs ? (l.on("click", function() {
                d(this).val("")
            }), l.on("input", function() {
                c.search_val = l.val().toLowerCase();
                la(c, a, e, K, G, T, m, k, Y, Z, $, w, x, A, y, r, I, z, C, E, F)
            })) : l.css({
                display: "none"
            });
            a.showCategs ? (m.click(function() {
                c.search_val = "";
                l.val(a.searchInputText);
                ra(c, a, e, K, G, T, m, p, k, Y, Z, $, w, x, A, y, r, I, z, C, E, F)
            }), m.mouseover(function() {
                p.css({
                    color: a.selectedCategOnColor
                })
            }), m.mouseout(function() {
                p.css({
                    color: a.selectedCategOffColor
                })
            })) : m.css({
                display: "none"
            });
            a.origWidth != a.width && ka(c, a, U, b, h, e, n, K, T, G, Y, Z, $, m, p, k, l, Q, r, H, R, N, J, L, C, E, q, D, t, x, A, z, F);
            a.showPlaylistOnInit ? c.showHidePlaylistMiliseconds = 300 : (c.showHidePlaylistMiliseconds = 0, G.css("visibility", "hidden"), setTimeout(function() {
                C.click()
            }, 100));
            var na = !1,
                da = !0;
            d(window).resize(function() {
                var f = ea();
                da = !0; - 1 != f && 9 == f && 0 == c.windowWidth && (da = !1);
                c.windowWidth == d(window).width() ? (da = !1, a.windowCurOrientation != window.orientation && -1 != navigator.userAgent.indexOf("Android") && (a.windowCurOrientation = window.orientation, da = !0)) : c.windowWidth = d(window).width();
                a.responsive && da && (!1 !== na && clearTimeout(na), na = setTimeout(function() {
                    ka(c, a, U, b, h, e, n, K, T, G, Y, Z, $, m, p, k, l, Q, r, H, R, N, J, L, C, E, q, D, t, x, A, z, F)
                }, 300))
            })
        })
    };
    d.fn.myReverse = [].reverse;
    d.fn.universal_video_player.defaults = {
        skin: "whiteControllers",
        width: 980,
        height: 399,
        width100Proc: !1,
        height100Proc: !1,
        shuffle: !1,
        firstVideo: 0,
        initialVolume: 1,
        loop: !0,
        showCategs: !0,
        showSearch: !0,
        showTopTitle: !0,
        showTimer: !0,
        showRewindBut: !0,
        showPlayBut: !0,
        showVolumeBut: !0,
        showFacebookBut: !0,
        facebookAppID: "1620027148224169",
        facebookShareTitle: "Universal Video Player",
        facebookShareDescription: "A top-notch responsive HTML5 Video Player compatible with all major browsers and mobile devices.",
        showTwitterBut: !0,
        showInfoBut: !0,
        showDownloadBut: !0,
        showPlaylistBut: !0,
        showFullscreenBut: !0,
        showShuffleBut: !0,
        showNextPrevBut: !0,
        borderWidth: 20,
        borderColor: "#4a4a4a",
        playlistWidth: 282,
        absUrl: "",
        pathToDownloadFile: "",
        suggestedQuality: "default",
        controlsBgFullScreenColor: "#000000",
        playlistVisible: !0,
        playlistScrollerBgColorOFF: "#CCCCCC",
        playlistScrollerBgColorON: "#FFFFFF",
        responsive: !1,
        responsiveRelativeToBrowser: !1,
        numberOfThumbsPerScreen: 0,
        origNumberOfThumbsPerScreen: 0,
        logoImagePath: "skins/logo_watermark.png",
        logoLink: "http://codecanyon.net/user/LambertGroup?ref=LambertGroup",
        logoTarget: "_blank",
        showLogo: !0,
        autoPlayFirstVideo: !0,
        playlistRecordShowImg: !0,
        playlistRecordShowTitle: !0,
        playlistRecordShowDesc: !0,
        playlistRecordHeight: 89,
        playlistRecordPadding: 10,
        playlistTitleFontSize: 15,
        playlistTitleLineHeight: 19,
        playlistDescFontSize: 12,
        playlistDescLineHeight: 15,
        playlistRecordBgOffColor: "#eeeeee",
        playlistRecordTitleOffColor: "#333333",
        playlistRecordDescOffColor: "#333333",
        playlistRecordBgOffImgOpacity: 100,
        playlistRecordBgOnColor: "#de1a21",
        playlistRecordTitleOnColor: "#FFFFFF",
        playlistRecordDescOnColor: "#FFFFFF",
        playlistRecordBgOnImgOpacity: 100,
        playlistBgColor: "#4a4a4a",
        playlistRecordTitleLimit: 22,
        playlistRecordDescLimit: 84,
        showPlaylistOnInit: !0,
        categoryRecordBgOffColor: "#000000",
        categoryRecordBgOnColor: "#252525",
        categoryRecordBottomBorderOffColor: "#333333",
        categoryRecordBottomBorderOnColor: "#333333",
        categoryRecordTextOffColor: "#4c4c4c",
        categoryRecordTextOnColor: "#de1a21",
        firstCateg: "",
        selectedCategBg: "transparent",
        selectedCategOffColor: "#FFFFFF",
        selectedCategOnColor: "#de1a28",
        searchAreaBg: "transparent",
        searchInputText: "search...",
        searchInputBg: "#cccccc",
        searchInputBorderColor: "#4a4a4a",
        searchInputTextColor: "#333333",
        topTitleColor: "#FFFFFF",
        timerColor: "#FFFFFF",
        bufferEmptyColor: "#929292",
        bufferFullColor: "#333333",
        seekbarColor: "#ffffff",
        volumeOffColor: "#454545",
        volumeOnColor: "#ffffff",
        isBufferInitialized: !1,
        isSeekBarInitialized: !1,
        playButColorOff: "#de1a21",
        playButColorOn: "#de1a21",
        youtubeJsUrl: "https://www.youtube.com/iframe_api",
        vimeoJsUrl: "http://a.vimeocdn.com/js/froogaloop2.min.js",
        googleTrakingOn: !1,
        googleTrakingCode: "",
        origWidth: 0,
        origHeight: 0,
        origThumbW: 0,
        origThumbH: 0,
        origThumbImgW: 69,
        origThumbImgH: 69,
        origthumbLeftPadding: 0,
        origthumbRightPadding: 0,
        origthumbTopPadding: 0,
        origthumbBottomPadding: 0,
        origthumbTitleFont: 0,
        origthumbRegFont: 0,
        origthumbTitleLineHeight: 0,
        origthumbRegLineHeight: 0,
        origthumbsHolder_MarginTop: 0,
        windowOrientationScreenSize0: 0,
        windowOrientationScreenSize90: 0,
        windowOrientationScreenSize_90: 0,
        windowCurOrientation: 0,
        isPlaylistSliderInitialized: !1
    }
})(jQuery);