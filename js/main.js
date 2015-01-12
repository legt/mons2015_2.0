(function ($) {
	$(document).ready(function() {

        menu.init();
        btn_click.init();
        slider.init();
        
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
	   	}
    }
		
};
	



var btn_click = {
    
    init : function() {
        $("#button_Apropos").click(btn_click.clickApropos);
        $("#button_Pinteret").click(btn_click.clickPinteret);
        $('.return_maps').click(btn_click.return_maps);
        $('.nav_top').click(btn_click.click_nav_monument);
        $('.hand').click(btn_click.hand);
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
		
		

		var val_total_restaurant = listBat.monument[val_click].restaurant.length;
		
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

})(jQuery);
