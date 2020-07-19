let b = 15;

$(".inc-panel").each(function () {
    $(this).on('mouseover', function() {
        $(this).find(".inc-menu").css({display: 'flex'});
    });
    $(this).on('mouseout', function() {
        $(this).find(".inc-menu").css({display: 'none'});
    });
})

