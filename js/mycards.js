
//Card interactions

/////card1
$("#card1").on({
    click: function(){
      $(this).css('transform', 'scale(0.9)');
    } 
});

$("#card1").on({
mouseenter: function(){
    $("#lh1").css({
    'color' : 'var(--black, #000000)',
    'box-shadow' : '0 5px 10px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)',
    'background-color' : 'var(--yellow, #ffe565)'});
},
mouseleave: function(){
    $("#lh1").css({
        'color' : 'var(--blue, #3a4fab)',
        'box-shadow' : 'none',
        'background-color' : 'transparent'});
}
});


/////card2
$("#card2").on({
    click: function(){
      $(this).css('transform', 'scale(0.8)');
    } 
});

$("#card2").on({
mouseenter: function(){
    $("#lh2").css({
    'color' : 'var(--black, #000000)',
    'box-shadow' : '0 5px 10px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)',
    'background-color' : 'var(--yellow, #f1e72f)'});
},
mouseleave: function(){
    $("#lh2").css({
        'color' : 'var(--blue, #3a4fab)',
        'box-shadow' : 'none',
        'background-color' : 'transparent'});
}
});


/////card 3
$("#card3").on({
    click: function(){
      $(this).css('transform', 'scale(0.8)');
    } 
});

$("#card3").on({
mouseenter: function(){
    $("#lh3").css({
    'color' : 'var(--black, #000000)',
    'box-shadow' : '0 5px 10px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)',
    'background-color' : 'var(--yellow, #f1e72f)'});
},
mouseleave: function(){
    $("#lh3").css({
        'color' : 'var(--blue, #3a4fab)',
        'box-shadow' : 'none',
        'background-color' : 'transparent'});
}
});
