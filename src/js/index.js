import * as $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import '@scss/main.scss'
import 'owl.carousel'

$(function() {

    $(document).ready(function() {

        //preloader
        setTimeout(function() {
            let preloader = $('#page-preloader');
            if ( !preloader.hasClass('done') ) {
                preloader.addClass('done');
            }
        }, 1000);

        //mobile menu expand
        $('.header').on('click', '.header__nav-toggle', function(){
            let header_menu = $(this).closest('.header').find('.header-menu');
            if ( $('.header').hasClass('expand') ) {
                header_menu.slideUp(300);
                setTimeout(function() {
                    $('.header').removeClass('expand');
                }, 300);
            } else {
                header_menu.slideDown(300);
                $('.header').addClass('expand');
            }
        });

        //upload photo
        $('.custom-file-input').on('change', function(){
            $('.profile-photo__img').show();
        });

        //slider login page
        $('.owl-carousel.login-slider').owlCarousel({
            loop:true,
            autoWidth:true,
            items: 3,
            responsive:{
                0:{
                    margin:23,
                    items:2
                },
                600:{
                    margin:23,
                    items:3
                },
                1400:{
                    margin:91,
                    items:3
                },
                1920:{
                    margin:91,
                    items:3
                }
            }
        });

        //slider (Profile gallery) for mobile
        $('.owl-carousel.user-profile-slider').owlCarousel({
            items: 1,
            dots:true
        });

        //gallery on desktop
        $('.user-profile-gallery').on('click', '.user-profile-gallery__img', function(){
            let url = $(this).attr('src');
            $('.profile-photo-img').attr('src', url);
        });

    });


});