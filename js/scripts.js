$(document).ready(function() {

	$(".carousel__list").slick({
		nextArrow: ".carousel__arrow_next",
		prevArrow: ".carousel__arrow_prev"
	});

	$(".carousel__link, .card__link").fancybox();

	ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.75694028835799,37.61740386067946],
            zoom: 17,
            controls: ['zoomControl']
        });

        myMap.behaviors.disable('scrollZoom'); 

        myPlacemark = new ymaps.Placemark([55.75699406897989,37.61400599999991],
        {},{
        	iconLayout: 'default#image',
            iconImageHref: './images/map.png',
            // Размеры метки.
            iconImageSize: [33, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-16, -50]
        });

        myMap.geoObjects.add(myPlacemark);
    }
});