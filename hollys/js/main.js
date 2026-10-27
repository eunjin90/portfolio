$(function(){


    // 메뉴

    $(".main > li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown("fast");
    },function(){
        $(".sub, .sub_bg").stop().slideUp("slow");
    })//hover

    $(".move").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        autoplaySpeed:2000,
        adaptiveHeight:true,
    })//slick

    // 팝업

    $(".close").click(function(){
        $(".popup").hide();
    })//click


})//j end