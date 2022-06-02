$(function(){
    var i=0;
    var wd = $(window).width();
    if(wd > 1024){
        $('.cnt02 .btns span').eq(1).click(function(){
            i++;
            if(i>=6){
                i=6;
            }
            $('.artView>.artGroup').css('margin-left',i*-33.3+'%');
        });
        $('.cnt02 .btns span').eq(0).click(function(){
            i--;
            if(i<=0){
                i=0;
            }
            $('.artView>.artGroup').css('margin-left',i*-33.3+'%');
        });
    }else{
        $('.artView>.artGroup').swipeleft(function(){
            i++;
            if(i>=2){
                i=2;
            }
            $('.artView>.artGroup').css('margin-left',i*-100+'%');
            $('.paging>li').removeClass('on');
            $('.paging>li').eq(i).addClass('on');
        });
        $('.artView>.artGroup').swiperight(function(){
            i--;
            if(i<=0){
                i=0;
            }
            $('.artView>.artGroup').css('margin-left',i*-100+'%');
            $('.paging>li').removeClass('on');
            $('.paging>li').eq(i).addClass('on');
        });
    }
});