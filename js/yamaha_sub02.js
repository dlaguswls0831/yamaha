$(function(){
    var wd = $(window).width();
    var artG = $('.artGroup');

    $('.artGroup').find('.article:last').prependTo('.artGroup');
    $('.artGroup').css('margin-left','-100%');

    $('.btns>.btn>i').click(function(){
        artG.animate({
            marginLeft : 0
        },500,function(){
            artG.find('.article:last').prependTo(artG);
            artG.css('margin-left','-100%');
        });
    })

    if(wd <= 1024){
        artG.swiperight(function(){
            artG.animate({
                marginLeft : 0
            },500,function(){
                artG.find('.article:last').prependTo(artG);
                artG.css('margin-left','-100%');
            });
        });
    }
});