$(document).ready(function () {

    Revealator.effects_padding = '-300';

    $('.second .section__slider').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow:'<span class="prev"><i class="fas fa-angle-left"></i></span>',
        nextArrow:'<span class="next"><i class="fas fa-angle-right"></i></span>',
    });


    $('.fourth .section__slider').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow:'<span class="prev"><i class="fas fa-angle-left"></i></span>',
        nextArrow:false,
    });
})