$(function(){


    //메뉴

    // $('.l_menu').click(function() {
    //     $('.l_sub').slideToggle();
    // });

    // $('.client').click(function() {
    //     $('.c_menu').slideToggle();
    // });

    $(".client").hover(function(){
        $(".c_menu").stop().slideDown();
    },function(){
        $(".c_menu").stop().slideUp();
    })

    $(".lang_menu").hover(function(){
        $(".lang_sub").stop().slideDown();
    },function(){
        $(".lang_sub").stop().slideUp();
    })

    $(".menu > li, .bg-white").hover(function(){
        $(".sub, .bg-white").stop().slideDown("fast");
    },function(){
        $(".sub, .bg-white").stop().slideUp("slow");
    })//hover



    const h_top = $('.h_top').offset();
    $( window ).scroll( function() {
        if ( $( document ).scrollTop() > h_top.top ) {
        $( '.h_bottom' ).addClass('h_fixed');
        }
        else {
        $( '.h_bottom' ).removeClass('h_fixed');
        }
    });

    // open left-menu
    $('.m-btn').click(function() {
        $('.left').fadeIn();
        $('.left_menu').addClass("on");
    });
    
    // close left-menu
    $('.x-btn').click(function() {
        $('.left').fadeOut();
        $('.left_menu').removeClass("on");
    });

        $(".m_menu > li").hover(function(){
            $(this).find(".m_sub").stop().slideDown();
            // $(this).children(".sub").stop().slideDown();
        },function(){
        $(".m_sub").stop().slideUp();
    })


    

    // img_slide
    $(".move").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        autoplaySpeed:1500,
        adaptiveHeight:true,
    })//slick

    $(".m_Lifestyle_list ").slick({
        arrows:false,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                arrows:false,
              }
            }
        ]
    })
})