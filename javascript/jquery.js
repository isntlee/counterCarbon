
$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                
                if(scroll_pos > 50) {
                    $("nav").removeClass("visible").addClass("hidden");
                    $("nav a").removeClass("visible").addClass("hidden");
                    
                } 
                if(scroll_pos > 690) {
                    $("nav").removeClass("hidden").addClass("visible");
                    $("nav a").removeClass("hidden").addClass("visible");
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', '#404040');
                    $('nav span').css('color','#404040');
                }
                else {
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', 'transparent');
                }
                if(scroll_pos > 1270) {
                    $("nav a").css('color', '#33adff');
                    $("nav span").css('color', '#33adff');
                }
                if(scroll_pos > 1290) {
                    $("nav").css('background-color', '#fafafa');
                }
                
                if(scroll_pos < 50) {
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', '#fafafa');
                    $('nav span').css('color','#fafafa');
                    $("nav").removeClass("hidden").addClass("visible");
                    $("nav a").removeClass("hidden").addClass("visible");
                }
            });
        });
        
    
        
                            //THIS IS A FUCKING MESS, BUT IT WORKS//
