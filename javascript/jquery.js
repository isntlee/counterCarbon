$(document).ready(function(){ 
            var scroll_pos = 0;
           
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop(); 
                
                
                
                {if(($(window).width() >= 1350 && scroll_pos > 50)) {
                    $("nav").removeClass("visible").addClass("hidden");
                    $("nav a").removeClass("visible").addClass("hidden");
                    $("nav span").removeClass("visible").addClass("hidden");
                    
                } 
                if(($(window).width() >= 1350 && scroll_pos > 690)) {
                    $("nav").removeClass("hidden").addClass("visible");
                    $("nav a").removeClass("hidden").addClass("visible");
                    $("nav span").removeClass("hidden").addClass("visible");
                    $("nav").css('background-color', '#fafafa');
                    
                    $("nav a").css('color', '#404040');
                    $('nav span').css('color','#404040');
                }
                else {
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', '#fafafa');
                    $("nav span").css('color', '#fafafa');
                }
                if(($(window).width() >= 1350 && scroll_pos > 1270)) {
                    $("nav a").css('color', '#33adff');
                    $("nav span").css('color', '#33adff');
                }
                if(($(window).width() >= 1350 && scroll_pos > 1290)) {
                    $("nav").css('background-color', '#fafafa');
                }
                
                if(($(window).width() >= 1350 && scroll_pos < 50)) {
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', '#fafafa');
                    $('nav span').css('color','#fafafa');
                    $("nav").removeClass("hidden").addClass("visible");
                    $("nav a").removeClass("hidden").addClass("visible");
                    $("nav span").removeClass("hidden").addClass("visible");
                }}
                
                
                
                
                
                if(($(window).width() >= 1020 && scroll_pos > 45)) {
                    $("nav").removeClass("visible").addClass("hidden");
                    $("nav a").removeClass("visible").addClass("hidden");
                    $("nav span").removeClass("visible").addClass("hidden");
                    
                } 
                if(($(window).width() >= 1020 && scroll_pos > 650)) {
                    $("nav").removeClass("hidden").addClass("visible");
                    $("nav a").removeClass("hidden").addClass("visible");
                    $("nav span").removeClass("hidden").addClass("visible");
                    $("nav").css('background-color', '#fafafa');
                    
                    $("nav a").css('color', '#404040');
                    $('nav span').css('color','#404040');
                }
                else {
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', '#fafafa');
                    $("nav span").css('color', '#fafafa');
                }
                if(($(window).width() >= 1020 && scroll_pos > 1220)) {
                    $("nav a").css('color', '#33adff');
                    $("nav span").css('color', '#33adff');
                }
                if(($(window).width() >= 1020 && scroll_pos > 1245)) {
                    $("nav").css('background-color', '#fafafa');
                }
                
                if(($(window).width() >= 1020 && scroll_pos < 45)) {
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', '#fafafa');
                    $('nav span').css('color','#fafafa');
                    $("nav").removeClass("hidden").addClass("visible");
                    $("nav a").removeClass("hidden").addClass("visible");
                    $("nav span").removeClass("hidden").addClass("visible");
                }
                
                
                
                
                {if(($(window).width() >= 750 && scroll_pos > 40)) {
                    $("nav").removeClass("visible").addClass("hidden");
                    $("nav a").removeClass("visible").addClass("hidden");
                    $("nav span").removeClass("visible").addClass("hidden");
                    
                } 
                if(($(window).width() >= 750 && scroll_pos > 620)) {
                    $("nav").removeClass("hidden").addClass("visible");
                    $("nav a").removeClass("hidden").addClass("visible");
                    $("nav span").removeClass("hidden").addClass("visible");
                    $("nav").css('background-color', '#fafafa');
                    
                    $("nav a").css('color', '#404040');
                    $('nav span').css('color','#404040');
                }
                else {
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', '#fafafa');
                    $("nav span").css('color', '#fafafa');
                }
                if(($(window).width() >= 750 && scroll_pos > 1200)) {
                    $("nav a").css('color', '#33adff');
                    $("nav span").css('color', '#33adff');
                }
                if(($(window).width() >= 750 && scroll_pos > 1220)) {
                    $("nav").css('background-color', '#fafafa');
                }
                
                if(($(window).width() >= 750 && scroll_pos < 40)) {
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', '#fafafa');
                    $('nav span').css('color','#fafafa');
                    $("nav").removeClass("hidden").addClass("visible");
                    $("nav a").removeClass("hidden").addClass("visible");
                    $("nav span").removeClass("hidden").addClass("visible");
                }}
            });
        });
        
    