window.onload = function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};

$(window).bind("load resize ready", function () {

    if ($(window).outerWidth() <= 1200 && !$('.menu-block').children().hasClass('mob-switch')) {
        $('<a href="#" class="mob-switch"><span></span><span></span><span></span></a>').appendTo('header .menu-block_right');
        $('<div class="mob-menu"></div>').appendTo('header nav');
        $('header .menu').appendTo('.mob-menu');
    } else if ($(window).outerWidth() >= 1200 && $('.menu-block').children().hasClass('mob-switch')) {
        $('.mob-switch').remove();
        $('header .menu').appendTo('header .menu-block_left');
        $('header .date-time').prependTo('header .menu-block_right');
        $('header .day-night-switch').prependTo('header .menu-block_right');
        $('header .menu-block_left').prependTo('header nav');
        $('.mob-menu').remove();
    };

    if ($(window).outerWidth() <= 992 && !$('.mob-menu').children().hasClass('header .day-night-switch')) {
        $('header .day-night-switch').appendTo('.mob-menu');
        $('header .date-time').appendTo('.mob-menu');
    } else if ($(window).outerWidth() >= 992 && $('.menu-block').children().hasClass('mob-switch')) {
        $('header .date-time').prependTo('header .menu-block_right');
        $('header .day-night-switch').prependTo('header .menu-block_right');
    }

    if ($(window).outerWidth() <= 640 && !$('.mob-menu').children().hasClass('header .menu-block_left')) {
        $('header .menu-block_left').appendTo('.mob-menu');
    } else if ($(window).outerWidth() >= 640 && $('.menu-block').children().hasClass('mob-switch')) {
        $('header .menu-block_left').prependTo('header nav');
    };

    $('.mob-switch').each(function () {
        var mobSwitchTl = new TimelineMax({
                paused: true
            }),
            mobMenu = $(this).parent().parent().find('.mob-menu'),
            mobSwitch = $(this),
            header = $('header'),
            mabMenuColor = mobMenu.css('background'),
            scroll = $(this).parent().parent().find('.scroll-to'),
            span = $(this).find('span'),
            span1 = $(this).find('span:eq(0)'),
            span2 = $(this).find('span:eq(1)'),
            span3 = $(this).find('span:eq(2)');

        mobSwitchTl
            .to(mobMenu, 0, {
                display: 'flex'
            })
            .to(header, 0, {
                position: 'fixed'
            })
            .to(header, 0.6, {
                background: mabMenuColor,
                ease: Linear.easeNone
            })
            .to(mobMenu, 0.6, {
                autoAlpha: 1,
                ease: Linear.easeNone
            }, 0)
            .to(span, 0.3, {
                width: '50%',
                ease: Linear.easeNone
            }, 0)
            .to(span, 0.3, {
                top: 0,
                bottom: 0,
                ease: Linear.easeNone
            })
            .to(span2, 0.3, {
                autoAlpha: 0,
                ease: Linear.easeNone
            }, 0)
            .to(span2, 0, {
                display: 'none'
            })
            .to(span1, 0.4, {
                rotation: 45,
                ease: Linear.easeNone
            }, '-=0.3')
            .to(span3, 0.4, {
                rotation: -45,
                ease: Linear.easeNone
            }, '-=0.4');

        mobSwitch.click(function (e) {
            e.preventDefault();

            mobSwitch.toggleClass('close');

            if (mobSwitch.hasClass('close')) {
                mobSwitchTl.play();
            } else {
                mobSwitchTl.reverse();
            };

            scroll.click(function (e) {
                e.preventDefault();

                if (mobSwitch.hasClass('close')) {
                    mobSwitchTl.reverse();
                    mobSwitch.removeClass('close');
                };
            });
        });
    });

    $('.btn').each(function () {
        var svg = $(this).find('svg'),
            rect1 = $(this).find('rect:eq(0)'),
            rect2 = $(this).find('rect:eq(1)'),
            width = $(this).outerWidth(),
            height = $(this).outerHeight();

        svg.attr("width", width).attr("height", height).attr("viewBox", '0 0 ' + width + ' ' + height);
        rect1.attr("width", width - 2).attr("height", height - 2);
        rect2.attr("width", width - 11).attr("height", height - 11);
    });
});

$(document).ready(function () {
    if (!$('.main-top-block').length && $('.day-night-switch span:first').html() == 'Day') {
        $('header').css({
            'background': 'linear-gradient(180deg, #0A0908 0%, rgba(10, 9, 8, 0.6) 100%)'
        });
    } else if (!$('.main-top-block').length && $('.day-night-switch span:first').html() == 'Night') {
        $('header').css({
            'background': 'linear-gradient(180deg, #232323 0%, rgba(35, 35, 35, 0.75) 100%)'
        });
    };

    $('.btn-popup').each(function () {
        var popUpTl = new TimelineMax({
                paused: true
            }),
            popUp = $('.form-popup'),
            closePopUp = $('.close-popup');

        popUpTl
            .to(popUp, 0, {
                display: 'flex'
            })
            .to(popUp, 0.6, {
                autoAlpha: 1,
                ease: Linear.easeNone
            });

        $(this).click(function (e) {
            e.preventDefault();
            popUpTl.play();

            closePopUp.click(function (e) {
                e.preventDefault();
                popUpTl.reverse();
            });
        });
    });

    $('.scroll-to').click(function (e) {
        e.preventDefault();

        var $window = $(window),
            href = $(this).attr("href"),
            topY = $(href).offset().top;

        TweenMax.to($window, 1, {
            scrollTo: {
                y: topY,
                autoKill: true
            },
            ease: Circ.easeOut
        });
    });


    $(".popup-gal a").each(function () {
        if ($(this).hasClass('btn') || $(this).hasClass('see-more')) {
            return false;
        } else {
            $(this).addClass('fancy');
            $(this).attr("data-fancybox", "gallery");
            $(this).attr("data-caption", $(this).find("img").attr("alt"));
            $(this).attr("title", $(this).find("img").attr("alt"));
        };
    });

    $(".fancy").fancybox({
        buttons: [
            "zoom",
            "fullScreen",
            "close"
        ],
        animationDuration: 366,
        animationEffect: 'zoom-in-out',
        transitionEffect: "tube",
        transitionDuration: 366,
        idleTime: 10,
        btnTpl: {
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left"><div><span></span></div></button>',
            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right"><div><span></span></div></button>'
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
                FULL_SCREEN: "На весь экран",
                ZOOM: "Увеличить/Уменьшить"
            }
        }
    });

    $('.food-menu-page-block').each(function () {
        var foodSwitchTl = new TimelineMax({
                paused: true
            }),
            foodMenu = $(this).find('.food-menu-items'),
            scroll = $(this).find('.scroll-to');

        foodSwitchTl
            .to(foodMenu, 0, {
                display: 'block'
            })
            .to(foodMenu, 0.6, {
                autoAlpha: 1,
                ease: Linear.easeNone
            });

        $('.food-menu-switch').click(function (e) {
            e.preventDefault();
            $('<a href="#" class="close-popup"><i><span></span></i></a>').prependTo(foodMenu);
            foodSwitchTl.play();
            var closePopup = $(this).parent().find('.close-popup');

            closePopup.click(function (e) {
                e.preventDefault();
                foodSwitchTl.reverse()
                    .eventCallback("onReverseComplete", function () {
                        $('.close-popup').remove();
                        TweenMax.to(foodMenu, 0, {
                            clearProps: 'all'
                        });
                    });
            });

            scroll.click(function (e) {
                e.preventDefault();

                if ($('.close-popup').length) {
                    foodSwitchTl.reverse()
                        .eventCallback("onReverseComplete", function () {
                            closePopup.remove();
                            TweenMax.to(foodMenu, 0, {
                                clearProps: 'all'
                            });
                        });
                };
            });
        });
    });


});

var swiper = new Swiper('.events .swiper-container', {
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 34
        }
    },
    on: {
        init: function () {
            checkArrow();
        },
        resize: function () {
            checkArrow();
        }
    }
});

var swiper = new Swiper('.promotions .swiper-container', {
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 34
        }
    },
    on: {
        init: function () {
            checkArrow();
        },
        resize: function () {
            checkArrow();
        }
    }
});

function checkArrow() {
    var swiperPrev = document.querySelector('.swiper-button-prev');
    var swiperNext = document.querySelector('.swiper-button-next');
    if (window.innerWidth > 768) {
        swiperPrev.style.display = 'block';
        swiperNext.style.display = 'block';
    } else {
        swiperPrev.style.display = 'none';
        swiperNext.style.display = 'none';
    }
};

function initMap() {

    $(window).bind("load resize ready", function () {
        var w, h;

        if ($(window).outerWidth() <= 1366 && $(window).outerWidth() >= 992) {
            w = 50.3998119,
                h = 30.648482;
        } else if ($(window).outerWidth() <= 992) {
            w = 50.3993879,
                h = 30.6513359;
        } else {
            w = 50.39934,
                h = 30.6467349;
        };

        var secheltLoc = new google.maps.LatLng(w, h);
        var marcercenter = new google.maps.LatLng(50.3984126, 30.6515003);

        var myMapOptions = {
            center: secheltLoc,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 17,
            scrollwheel: false,
            mapTypeControl: false,
            zoomControl: true,
            styles: [{
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#212121"
                    }]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#212121"
                    }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#bdbdbd"
                    }]
                },
                {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "on"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#181818"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#1b1b1b"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#2c2c2c"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#8a8a8a"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#373737"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#3c3c3c"
                    }]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#4e4e4e"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "on"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#3d3d3d"
                    }]
                }
            ]
        };
        var theMap = new google.maps.Map(document.getElementById("map"), myMapOptions);

        // var image = new google.maps.MarkerImage(
        //     'https://today.ua/wp-content/uploads/2019/11/acfc79e81a538cfda851c7a56b622828__1920x-696x696.jpg',
        //     new google.maps.Size(102, 121),
        //     new google.maps.Point(0, 0),
        //     new google.maps.Point(65, 65)
        // );

        var marker = new google.maps.Marker({
            map: theMap,
            // icon: image,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: marcercenter,
            visible: true
        });
    });
};