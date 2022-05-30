$(function(){
    $('.faqMenu>li').even().click(function(){
        $('.faqMenu>li').removeClass('on');
        $(this).addClass('on');
    });
});