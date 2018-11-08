$(document).ready(function () {


    //===================  функция скрола ==============//


    $(document).on("scroll", onScroll);

    $('.scroll[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.scroll').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    //============= появление обьектов ================//


    Revealator.effects_padding = '-300';

    //============== слайдер  =======================//

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



    //============  бургер меню  =================//

    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.responsive_menu')
                .toggleClass('menu_state_open');
        });

        // $('.menu__links-item').on('click', function() {
        //
        //
        //     $(this).closest('.responsive_menu')
        //         .removeClass('menu_state_open');
        // });
    });



    $(function() {
        $('.burger').on('click', function() {
            $(this).closest('.burger_menu')
                .toggleClass('menu_open');
        });

        $('.blocks_menu').on('click', function() {


            $(this).closest('.burger_menu')
                .removeClass('menu_open');
        });
    });



});


function onScroll(){
    var scrollPosition = $(document).scrollTop();
    $('.nav__menu .scroll').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('.nav__menu ul .blocks_menu a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}