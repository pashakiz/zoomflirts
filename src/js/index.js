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
            let imageUrl = 'img/photos/ava.jpg';
            $('.profile-photo').css('background-image', 'url(' + imageUrl + ')');
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
            loop: true,
            dots: false,
            items: 1,
            margin: 6,
            autoWidth: true
        });

        //gallery on desktop
        $('.user-profile-gallery').on('click', '.user-profile-gallery__item', function(){
            let url = $(this).css('background-image');
            url = url.replace('url(','').replace(')','').replace(/\"/gi, "");
            $('.user-profile-photo').css('background-image', 'url(' + url + ')');;
        });

    });


});