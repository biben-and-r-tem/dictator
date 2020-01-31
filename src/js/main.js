$(document).ready(function () {
    if (!$('.main-top-block').length && $('.day-night-switch span:first').html() == 'Day') {
        $('header').css({
            'background': 'linear-gradient(180deg, #0A0908 0%, rgba(10, 9, 8, 0.6) 100%)'
        })
    } else {
        return false;
    }
});

var swiper = new Swiper('.events .swiper-container', {
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        980: {
            slidesPerView: 2,
            spaceBetween: 34,
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
        // when window width is >= 320px
        0: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        980: {
            slidesPerView: 3,
            spaceBetween: 34,
        }
    }
});

function initMap() {

    var secheltLoc = new google.maps.LatLng(50.39934, 30.6467349);
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

};