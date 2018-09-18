// Прокрутка страницы к нужному блоку через navbar
$(document).ready(function(){
	$("#menu").on("click",".a1",function(event){
		event.preventDefault();
        $("#layer").fadeIn('slow');
         $("#ind_brand").slideUp('slow');
          $("#menu").removeClass("transparent");
            $("#menu").addClass("nav2");
    });
     $("#menu").on("click",".a2",function(event){
        event.preventDefault();

		var id = $(this).attr('href'),

			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});
});

// Прокрутка вверх
$(document).ready(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            }
            else
            {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    });

window.onscroll = function(){
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let  layer = $('#layer');
    let divs = $("#ind_brand");
    let nav = $("#menu");
    let ind_brand = $("#ind_brand");

        if (scrolled > 10)
        {
            nav.removeClass("transparent");
            nav.addClass("nav2");
                divs.css('z-index',0);
                    $(this).css('z-index',10);
                layer.fadeIn('slow');
                ind_brand.slideUp('slow');
        }

        if (scrolled == 0)
        {
            nav.removeClass("nav2");
            nav.addClass("transparent");
           layer.fadeOut('slow');
           ind_brand.slideDown('slow');
        }


 };


//timer

$(document).ready(function(){
    $('#chat_timer').click(function(){
        $('#big_chat_timer');
        chat_timer.style.display = "none";
        big_chat_timer.style.display = "block"
    });
});

//close timer
$(document).ready(function(){
    $("#close_btn_timer").click(function(){
        big_chat_timer.style.display = "none";
        chat_timer.style.display = "block";
    });
});

////////////////////////////////////////////////////////////

//bot helper
// Chat with bot
$(document).ready(function(){
    $('#chat').click(function(){
        $('#big_chat');
        chat.style.display = "none";
        big_chat.style.display = "block"
    });
});

//close chat
$(document).ready(function(){
    $("#close_btn").click(function(){
        big_chat.style.display = "none";
        chat.style.display = "block";
    });
});

//brain of bot
$(document).ready(function(){

    $("#btn").click(function(){
let input = document.getElementById("input").value;
let say = document.getElementById("output");
let div = document.createElement('div');
let big_chat = document.getElementById("output");

let words = ["КП МУС:<br>ДИРЕКТОР:<br>ТОВМАШЕНКО РОМАН ФЕДОРОВИЧ<br> ТЕЛЕФОН: 744-62-82;",
 "КП МУС: <br>Зверніться до адміністратора<br>'Email:'"];
 let err = ["ERROR COMMAND IS NOT DEFINED!"];


    if (input == "/help"){
        div.className = "text_box";
        say.appendChild(div);
        div.innerHTML = words[1];
    }

    if (input == "/contacts"){
        div.className = "text_box";
        say.appendChild(div);
        div.innerHTML = words[0];
    }

    if (input == "help_bd"){
        let hl_1 = $("#select1");
        let hl_2 = $("#select2");
        let select1 = $("#option1");
        let select2 = $("#option2");
        let select3 = $("#option3");

        hl_1.addClass("pulse_select floating pulse");

            select1.click(function(){
                hl_1.removeClass("pulse_select floating pulse");
                hl_1.addClass("pulse_selected");
            });
            select2.click(function(){
                hl_1.removeClass("pulse_select floating pulse");
                hl_1.addClass("pulse_selected");
            });
            select3.click(function(){
                hl_1.removeClass("pulse_select floating pulse");
                hl_1.addClass("pulse_selected");
            });

        hl_1.click(function(){
             hl_2.addClass("v-tabl pulse_select floating pulse");
        });

        $("#tab").change(function(){
            hl_2.removeClass("v-tabl pulse_select floating pulse");
            hl_2.addClass("pulse_selected");
        });

        }

        if (input == "/weather"){
           $("#weather").fadeIn(800);
           function fadeout_weather(){
            $("#weather").fadeOut(800);
           };
           setTimeout(fadeout_weather, 15000);
        }
     if (input == "/devs"){
        $("#layer2").fadeIn(1000);
            $("#devs").fadeIn(100);
        $("#devs").css({"display" : "block"});
        function animate(){
            $("#devs").fadeOut(1000);
            $("#layer2").fadeOut(1500);
    };
        setTimeout(animate, 11000);
     }


      // else
      // {
      //   div.className = "text_box";
      //   say.appendChild(div);
      //   div.innerHTML = err[0];
      // }
      $("#input").val('').change();
     say.scrollIntoView(false);
});
});
