(function ($) {
	$(document).ready(function() {

		menu.init();
        btn_click.init();
        slider.init();
        face_connection.init();
        
	});


var listImg_slider = listBat.monument[0].img_1;
var i =0;


	
var menu = {
    init : function() {
				
			
        menu.generate_nom_nav();
        
				$('.hamburger').click(menu.toggleMenu);
				
				if(window.matchMedia("(max-width: 960px)").matches) {
					$('.closeMenu').click(menu.closeMenu);
        }
        
    },
    
    toggleMenu : function() {
		////console.log('Click');
		$('.nav').show("slide", {direction: "right"}, 500);
		},
    
    closeMenu : function() {
        ////console.log('Click Close')
        $('.nav').hide("slide", {direction: "right"}, 500);
    },
    
    generate_nom_nav : function() {

	   	var val_total_monument = listBat.monument.length;

	   	for (i = 0; i < val_total_monument; i++) {
						
            $('.ul_top li').append('<a class="nav_top" id="mnt-' + i + '" href="#"><img src="img/'+ listBat.monument[i].img +'" class="nav_icone" alt=""><span>' + listBat.monument[i].nom + '</span></a>');
						console.log(i);
		
			if (Modernizr.mq('only screen and (min-width: 960px)')==true){
					$(".nav_top").hover(menu.menu_hover, menu.menu_nothover);
					console.log(listBat.monument[i].img_1[1]);
			}
				
	   	}
    },

    menu_hover : function(){
			var selec_hover = $(this).attr("id").slice(4);
			console.log(selec_hover);
				$(this).css({"background":"url(../"+ listBat.monument[selec_hover].img_1[0] +" ) center", "background-size": "cover"});
    	
    },


		menu_nothover : function() {
			$('.nav_top').css("background","#343434");	
		}
};
	



var btn_click = {
    
    init : function() {
        $("#button_Apropos").click(btn_click.clickApropos);
        $("#button_Pinteret").click(btn_click.clickPinteret);
        $('.return_maps').click(btn_click.return_maps);
        $('.nav_top').click(btn_click.click_nav_monument);
        $('#newsletter').click(btn_click.mail);
        $('.hand').click(btn_click.hand);
       
        
    },
    
    mail : function(e){
    	$('.contenu_mail').css("display","block");
    	$('#container').css("display","none");
    },

    hand : function(e){
    	$('.maps_black').css("display","none");
    },

    clickApropos : function (e) {
		e.preventDefault;
        var contenuSelect = 0;
		//console.log('Click a propos');

		if ($(".slide_contenu").hasClass('contenu_active')) {
			
			
			if (contenuSelect != 1) {
				$('#Apropos').show();
				$('#Pinteret').hide();
				contenuSelect = 1;
			};
		} else {
			$('.slide_contenu').toggleClass('contenu_active contenu');
			$('#Apropos').show();
			$('#Pinteret').hide();
			contenuSelect = 1;
		};
			
		$('.return_maps').css("display","block");
		$('.maps_black').css("display","block");
			    
	},
    
    clickPinteret : function(e) {
		e.preventDefault;
        var contenuSelect = 0;
		//console.log('Click a propos');
		$('.return_maps').css( "display", "block" );
		if ($(".slide_contenu").hasClass('contenu_active')) {
			

			if (contenuSelect != 2) {
					$('#Apropos').hide();
					$('#Pinteret').show();
					contenuSelect = 2;
			};
		} else {
			$('.slide_contenu').toggleClass('contenu_active contenu');
			$('#Apropos').hide();
			$('#Pinteret').show();
			contenuSelect = 2;
		};
		
		$('.return_maps').css("display","block");
		$('.maps_black').css("display","block");
		
	},
    
    return_maps : function (){
				$('.slide_contenu').toggleClass('contenu_active contenu');
				contenuSelect = 0;
				$('#Apropos').hide();
				$('#Pinteret').hide();
				$('.return_maps').hide();
				$('.maps_black').css("display","none");
	},
   
    click_nav_monument : function () {

        var val_click = Number($(this).attr('id').slice(4));
        $('.contenu_mail').css("display","none");
        $('#container').css("display","block");
		console.log(val_click);
		$('.titre_h2','').html('<h2>' + listBat.monument[val_click].nom + '</h2>').css({opacity:0, marginTop:-20}).delay(200).animate({opacity:1, marginTop:0});
		$('.header_contenu_info_rep').html('<span">'+listBat.monument[val_click].adresse + ', ' + listBat.monument[val_click].commune + '<br/>' + listBat.monument[val_click].Telephone + '<br/>' + listBat.monument[val_click].Mail+'</span>').css({opacity:0, marginTop:-20}).delay(200).animate({opacity:1, marginTop:0});
		$('.contenu_propos_regular').html(listBat.monument[val_click].architecte);
		$('.contenu_propos_small').html(listBat.monument[val_click].info_architecte);
		$('.contenu_propos_red').html(listBat.monument[val_click].chapeau);
		$('.contenu_propos_p').html(listBat.monument[val_click].paragraphe);
		$('.contenu_propos_sponsor_info').html(listBat.monument[val_click].Maître_douvrage);
		$('.header_contenu_info').html('<span>Adresse <br> Téléphone <br> E-mail </span>').css({opacity:0, marginTop:-20}).delay(200).animate({opacity:1, marginTop:0});
		$('.header_contenu_emploi').css("display","none");
		$('.contenu_top').css({"background-color": "#FFF"});
		$('.button_champs').css("display","block");
		$('.maps_black').css("display","none");

		
		

		var val_total_restaurant = listBat.monument[val_click].restaurant.length;
			$('#pt_interet_lieu').html("");
		for (var i = 0; i < val_total_restaurant; i++) {

            $('#pt_interet_lieu').append('<div class="pt_interet_lieu"><div class="pt_ic"><div class="resto pt_icone"></div><div class="hosto pt_icone"></div><div class="parking pt_icone"></div></div><div class="pt_interet_logo"><img src="img/'+ listBat.monument[val_click].restaurant[i].logo +'" alt=""></div><article><h3>' + listBat.monument[val_click].restaurant[i].nom + '</h3><p>' + listBat.monument[val_click].restaurant[i].adresse + ', ' + listBat.monument[val_click].restaurant[i].commune +'</p><p class="pt_interet_right">' + listBat.monument[val_click].restaurant[i].distance +'</article></div>' );

	   	}

        listImg_slider =listBat.monument[val_click].img_1;
		

        $('.slider_img').css('background-image', 'url(' + listImg_slider[0] + ')');
	}
};

var slider = {
    
    init : function() {
        $('.slider_container_img').append('<div class="slider_img"></div>');
        slider.gener_bullet();
        $('.slider_bullets span').first().addClass('is_active');
        setInterval(slider.slide_auto,4000);
        $('.slider_bullets span').click(slider.slide_click);
        
    },
    
    gener_bullet : function() {
        
        for (i = 0; i < listImg_slider.length; i++) {
		      //console.log('i est égale a'+i);
		      $('.slider_bullets').append('<span id="bullet_' + i + '"></span>');
		};
    },
    
    slide_click : function() {
        bullet_index = $(this).index();

		$("span.is_active").removeClass("is_active");
		$(this).addClass("is_active");

		$('.slider_img').css('background-image', 'url(' + listImg_slider[bullet_index] + ')').fadeIn(3000);
    }
};

var face_connection = {
        init : function() {
            
            function statusChangeCallback(response) {
                console.log('statusChangeCallback');
                console.log(response);
                // The response object is returned with a status field that lets the
                // app know the current login status of the person.
                // Full docs on the response object can be found in the documentation
                // for FB.getLoginStatus().
                if (response.status === 'connected') {
                  // Logged into your app and Facebook.
                  testAPI();
                } else if (response.status === 'not_authorized') {
                  // The person is logged into Facebook, but not your app.
                  document.getElementById('status').innerHTML = 'Please log ' +
                    'into this app.';
                } else {
                  // The person is not logged into Facebook, so we're not sure if
                  // they are logged into this app or not.
                  document.getElementById('status').innerHTML = 'Please log ' +
                    'into Facebook.';
                }
              }
            
            window.fbAsyncInit = function() {
                
                FB.init({
                    appId      : '321376851405004',
                    status     : true,
                    cookie     : true,
                    oauth	   : true,
                    xfbml      : true,
                    frictionlessRequests: true,
                    version    : 'v2.1'
                });
            };

            
             function checkLoginState() {
                FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
            }
            

            (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&appId=321376851405004&version=v2.0";
                  fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            
            function testAPI() {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                  console.log('Successful login for: ' + response.name);
                  document.getElementById('status').innerHTML =
                    'Thanks for logging in, ' + response.name + '!';
                });
            }
        }
        
}

})(jQuery);
