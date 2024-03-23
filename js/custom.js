$(document).ready(function() {
    $('.banner-animation').addClass('banner-box');
    
    $('.slider').click(function() {
        var target = '#' + $(this).data('target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 100);
    });

    $('.navbar-toggler').click(function(){
        $('header').toggleClass('black-header');  
    });
    
});
