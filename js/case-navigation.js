$(document).ready(function() {
    $(".dropdown-item").on({
        mouseenter: function() {
            $(this).css({
                'color' : 'var(--black, #000000)',
                'background-color' : 'var(--yellow, #f1e72f)'})
        },
        mouseleave: function() {
            $(this).css({
                'color' : 'var(--blue, #3a4fab)',
                'background-color' : 'white'})
        },
        click: function() {
            $(this).toggleClass("active");
            $(this).siblings(".dropdown-item").removeClass("active");
            },
    });
});


