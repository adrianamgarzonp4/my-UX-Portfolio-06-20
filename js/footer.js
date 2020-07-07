//Footer interactions

/////Linkedin
$("#footer-item1").on({
    mouseenter: function(){
        $("#footer-hover1").css({
            'transform' : 'scale(1.5)',
            'box-shadow' : '0 5px 10px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)'});
        $("#footer-label1").css({
            'color' : 'var(--black, #000000)'});
    },
    mouseleave: function(){
        $("#footer-hover1").css({
            'transform' : 'none',
            'box-shadow' : 'none'});
        $("#footer-label1").css({
            'color' : 'var(--blue, #3a4fab)'});
    }
});

/////Email
$("#footer-item2").on({
    mouseenter: function(){
        $("#footer-hover2").css({
            'transform' : 'scale(1.5)',
            'box-shadow' : '0 5px 10px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)'});
        $("#footer-label2").css({
            'color' : 'var(--black, #000000)'});
        },
    mouseleave: function(){
        $("#footer-hover2").css({
            'transform' : 'none',
            'box-shadow' : 'none'});
        $("#footer-label2").css({
            'color' : 'var(--blue, #3a4fab)'});
        }
    });

/////Resume
$("#footer-item3").on({
    mouseenter: function(){
        $("#footer-hover3").css({
            'transform' : 'scale(1.5)',
            'box-shadow' : '0 5px 10px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)'});
        $("#footer-label3").css({
            'color' : 'var(--black, #000000)'});
        },
    mouseleave: function(){
        $("#footer-hover3").css({
            'transform' : 'none',
            'box-shadow' : 'none'});
        $("#footer-label3").css({
            'color' : 'var(--blue, #3a4fab)'});
        }
    });