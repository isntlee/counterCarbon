

$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 150) {
                    $("nav").css('background-color', '#fafafa');
                    $("nav a").css('color', '#404040');
                } else {
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', '#fafafa');
                }
            });
        });
        
        
//           $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar-fixed-top");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   });
// });              $('nav').removeClass('red');
//             }