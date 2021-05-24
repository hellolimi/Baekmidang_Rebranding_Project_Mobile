/* panel & pop_up & main_slider  */
$(document).ready(function(){
    var panel_btn = '.body_wrap .panel_icon';
    var panel = '.panel';
    var bg = '.panel_bg';
    
    var main_nav = '.main_nav';
    var sub_nav = '.sub_nav';

    var swiper = new Swiper('main .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true,
      autoplay:{
          delay: 5000,
          disableOnInteraction: false,
      }
    });
    
    function setCookie(name, value, expiredays){
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
    }
    
    var popup = '.pop_up';
    var chkbox = '#chck_box';
    
   
    $(popup).find('form a').click(function(e){
        e.preventDefault();
        
        var chk = $(chkbox).prop('checked');
        
        if(chk){ 
            setCookie('exCookie','done',1); 
        }
        
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
        swiper.autoplay.start();
    });
    var chk = $(chkbox).prop('checked');
    
    var cookieData = document.cookie;
    
    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('html, body').css('overflow','hidden');
        swiper.autoplay.stop();
    }else{
        $(popup).fadeOut(0);
        $('html, body').css('overflow','visible');
        swiper.autoplay.start();
    }
    
    $(panel_btn).click(function(e){
        e.preventDefault();
        
        var has = $(this).hasClass('active');
        
        $(panel + ', html, body').toggleClass('active');
        
        if(has){
            swiper.autoplay.start();
            $(bg).stop().delay(100).fadeOut(100,function(){
                $(panel_btn).removeClass('active');
                
                $(main_nav).parent().removeClass('active');
                $(sub_nav).slideUp(0);
                
            });
        }else{
            $(bg).stop().fadeIn(100);
            $(this).addClass('active');
            swiper.autoplay.stop();
        }
    });
    
    $(bg).click(function(){ 
        $(panel_btn).trigger('click');
    });
    $('.panel_top a').click(function(){
        $(panel_btn).trigger('click');
    });
    
     $(main_nav).click(function(e){
        e.preventDefault();
        
        var has = $(this).hasClass('active');
        
        if(has){ 
            $(this).removeClass('active'); 
            $(this).parent().removeClass('active');
            $(this).next().stop().slideUp('fast');
        }else{
            $(main_nav).removeClass('active'); 
            $(this).addClass('active'); 
            
            $(main_nav).parent().removeClass('active');
            $(this).parent().addClass('active');
            
            $(sub_nav).stop().slideUp('fast'); 
            $(this).next().stop().slideDown('fast'); 
        }
    });

});

/* header_search */
$(document).ready(function(){
    $('.search_icon').click(function(e){
        e.preventDefault();
        
        
        
        var has = $('.header_search').hasClass('active');
        if(has){
            $('.header_search').stop().slideUp('fast');
            $('.header_search').removeClass('active');
            $('.search_bg').fadeOut('fast');
        }else{
            $('.header_search').stop().slideDown('fast', function(){
            $('.header_search').addClass('active');
            $('.search_bg').fadeIn('fast');
            });
        }
         
    });
    
    $('.search_bg').click(function(){
        $('.search_icon').trigger('click');
    });
});



