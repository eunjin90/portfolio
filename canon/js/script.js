$(function(){

    $(".util_myca").hover(function(){
        $(".my").stop().slideDown();
    },function(){
        $(".my").stop().slideUp();
    })

    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().animate({height:"400px", padding : "20px"}, "fast");
    },function(){
        $(".d_wrap").stop().animate({height:"0px", padding : "0px"}, "fast");
    })

    // slick 붙이기 move
    $(".move").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        autoplaySpeed:2000,
    })//slick

    $(".main_visual .stop").click(function(){

        if( $(this).hasClass("on") == true ){
            $(this).removeClass("on");/* 이미지가 stop이 되면 슬라이드는 play */
            $(".move").slick("slickPlay");
        }else{
            $(this).addClass("on"); /* on 일때 이미지가 paly 슬라이드멈춤*/
            $(".move").slick("slickPause")
        }

    })//click


    // main1 photo slick
    $(".photo").slick({
        autoplay:true,
        autoplaySpeed:4000,
        arrows: false,
        dots:true
    })


    // banner slick
    $(".banner").slick({
        arrows: false,
        dots:true
    })
    
    $(".viewer").slick({
        arrows: false,
        dots:true
    })


    $(".banner_wrap .b_play").click(function(){
        if( $(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".banner").slick("slickPause")
        }else{
            $(this).addClass("on");
            $(".banner").slick("slickPlay")
        }
    })

    $(".viewer_wrap .b_play").click(function(){
        if( $(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".viewer").slick("slickPause")
        }else{
            $(this).addClass("on");
            $(".viewer").slick("slickPlay")
        }
    })

    $(".store").slick({
        slidesToShow : 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        autoplay:true,

    })

    $(".notice").slick({
        autoplay:true,
        vertical:true,/* 위아래로움직이게 */
    })

    $(".main4 .n_stop").click(function(){

        if($(".main4 .n_stop").hasClass("on") == true){
            $(this).removeClass("on");
            $(".notice").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".notice").slick("slickPause");
        }
        
    })//

})//j end