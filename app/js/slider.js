$(document).ready(function(){
    $('.slider-section__slider-control').slick(
        {
            nextArrow: $(".slider-section__right-arrow"),
            prevArrow: $(".slider-section__left-arrow"),
            centerMode: true,
            respondTo: 'min',
            centerPadding: '-5rem'
        }
    );
});
