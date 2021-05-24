
/* icecream_slider */
$(document).ready(function(){
     var swiper = new Swiper('.icecream_slider .swiper-container', {
      slidesPerView: 1.3,
      spaceBetween: 15,
      
    });
});

/* bakery */
$(document).ready(function(){
     var swiper = new Swiper('.bakery .swiper-container', {
      slidesPerView: 2.3,
      spaceBetween: 15,
      
    });
});

/* video */
$(document).ready(function(){
    
    var video01 = document.getElementById('bmd_v01');
    var video02 = document.getElementById('bmd_v02');
    var video03 = document.getElementById('bmd_v03');
    var video04 = document.getElementById('bmd_v04');
    
     var swiper = new Swiper('.video .swiper-container', {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                    speed: 400,
                    loop: true,
                    centeredSlides: true,
                    pagination: {
                         el: '.video_slider .swiper-pagination',
                         clickable: true,
                    },
                    on:{
                        init: function(){
                        $('.play_btn').stop().fadeIn(0);
                    },
                         slideChange: function(){
                             $('.video_slider .swiper-slide video').trigger('pause');
                             $('.video_slider .swiper-slide video').prop('controls', false);
                             video01.currentTime =0;
                             video02.currentTime =0;
                             video03.currentTime =0;
                             video04.currentTime =0;
                             $('.video_slider button').stop().fadeOut(0);
                             $('.play_btn').stop().fadeIn(300);
                         },
                    }
                     
     });
    
        
        $('.play_btn').click(function(){
        $('.video .swiper-slide-active video').trigger('play');
        $('.swiper-slide-active video').prop('controls', true);
        $('.play_btn').stop().fadeOut(0);
        $('.pause_btn').stop().fadeIn(0);
    });
    $('.pause_btn').click(function(){
        $('.video .swiper-slide-active video').trigger('pause');
        $('.swiper-slide-active video').prop('controls', false);
        $('.play_btn').stop().fadeIn(0);
        $('.pause_btn').stop().fadeOut(0);
    }); 

    
});


 /* board */
$(document).ready(function(){
     var swiper = new Swiper('.board .swiper-container', {
      direction: 'vertical',
      loop: true,
      autoplay: {
          delay:3000,
          disableOnInteraction: false,
      },
    });
});
