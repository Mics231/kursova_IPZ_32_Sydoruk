$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        mobileFirst: true,
        arrows: true,
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow'),
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.browse-the-range-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        mobileFirst: true,
        arrows: true,
        prevArrow: $('.browse-the-range-left-arrow'),
        nextArrow: $('.browse-the-range-right-arrow'),
        slidesToShow: 1
    });

    $('.share-your-setup-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        mobileFirst: true,
        arrows: true,
        prevArrow: $('.share-your-setup-left-arrow'),
        nextArrow: $('.share-your-setup-right-arrow'),
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});