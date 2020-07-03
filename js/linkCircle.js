//Link with yellow circle

/////On about page
$("#link-to-resume").on({
    mouseenter: function(){
        $("#circle-for-link").css({
            'box-shadow' : '0 5px 10px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)',
            'background-color' : 'var(--yellow, #f1e72f)'});
        $("#download-link").css({
            'color' : 'var(--black, #000000)'});
    },
    mouseleave: function(){
        $("#circle-for-link").css({
            'box-shadow' : 'none',
            'background-color' : 'transparent'});
        $("#download-link").css({
            'color' : 'var(--blue, #3a4fab)'});
    }
});