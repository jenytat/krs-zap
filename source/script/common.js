$(document).ready(function(){

    $('.slider__wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        centerMode: false,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 745,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

});

