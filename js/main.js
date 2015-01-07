(function ($) {
	$('document').ready(function () {

		console.log('poke');
		toggleMenu();
		closeMenu();
		clickApropos();
		clickPinteret();
		slider();
		generate_nom_nav();
		click_nav_monument();

	});



})(jQuery);




function toggleMenu() {
	$('.hamburger').click(function () {
		////console.log('Click');
		$('.nav').show("slide", {
			direction: "right"
		}, 500);
	})
};

function closeMenu() {
	$('.closeMenu').click(function (e) {
		e.preventDefault;
		////console.log('Click Close')
		$('.nav').hide("slide", {
			direction: "right"
		}, 500);
	})
};

var contenuSelect = 0;


function clickApropos() {
	$("#button_Apropos").click(function (e) {
		e.preventDefault;
		//console.log('Click a propos');

		if ($(".slide_contenu").hasClass('contenu_active')) {

			if (contenuSelect == 1) {
				$('.slide_contenu').toggleClass('contenu_active contenu');
				contenuSelect = 0;
				$('#Apropos').hide();
				$('#Pinteret').hide();
			} else {
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
						
			    $('.return_maps').css( "display", "block" );
	});

		

	};

function clickPinteret() {
	$("#button_Pinteret").click(function (e) {
		e.preventDefault;
		//console.log('Click a propos');

		if ($(".slide_contenu").hasClass('contenu_active')) {
			if (contenuSelect == 2) {
				$('.slide_contenu').toggleClass('contenu_active contenu');
				contenuSelect = 0;
				$('#Apropos').hide();
				$('#Pinteret').hide();
			} else {
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

		$('.return_maps').css( "display", "block" );

	});
	
};


function generate_nom_nav() {

	var val_total_monument = listBat.monument.length;

	for (var i = 0; i < val_total_monument; i++) {

		$('.ul_top li').append('<a class="nav_top" id="mnt-' + i + '" href="#"><span>' + listBat.monument[i].nom + '</span><img src="img/nav_test.png" class="nav_icone" alt=""></a>');

	}

};


function click_nav_monument() {

	$('.nav_top').click(function () {

		var val_click = Number($(this).attr('id').slice(4));
		console.log(val_click);
		$('.titre_h2','').html('<h2>' + listBat.monument[val_click].nom + '</h2>');
		$('.header_contenu_info_rep').html(listBat.monument[val_click].adresse + ', ' + listBat.monument[val_click].commune + '<br>' + listBat.monument[val_click].Telephone + '<br>' + listBat.monument[val_click].Mail);
		$('.nav').hide("slide", {
			direction: "right"
		}, 500);


	});
};


// slise 


var listImg_slider = ["img/15213124199_8907cf9d3a_o.jpg", "img/15213201559_b2e7086112_o.jpg", "img/15213216999_ff1e0ceefa_o.jpg"];

function slider() {
	//console.log(listImg_slider);
	$('.slider_container_img').append('<div class="slider_img"></div>');
	$('.slider_img').css('background-image', 'url(' + listImg_slider[0] + ')');
	for (i = 0; i < listImg_slider.length; i++) {
		//console.log('i est égale a'+i);
		$('.slider_bullets').append('<span id="bullet_' + i + '"></span>');
	};

	$('.slider_bullets span').first().addClass('is_active');

	img_slider = $('.slider_img');
	bullet = $('.slider_bullets span');
	i = 0;
	j = 0;

	// Slide automatique			

	setInterval(function () {
		var $next = $("span.is_active").next();
		img_slider.fadeOut(1000, function () {
			$("span.is_active").removeClass("is_active");
			img_slider.css('background-image', 'url(' + listImg_slider[i+++1] + ')');
			img_slider.fadeIn(1000);

			if (i == listImg_slider.length) {
				i = 0;
				$('.slider_img').css('background-image', 'url(' + listImg_slider[0] + ')');
			};
			$("span#bullet_" + i).addClass("is_active");
		});
	}, 5000);

	// Changement d'image au click sur bulle

	$('.slider_bullets span').click(function () {

		bullet_index = $(this).index();

		$("span.is_active").removeClass("is_active");
		$(this).addClass("is_active");

		$('.slider_img').css('background-image', 'url(' + listImg_slider[bullet_index] + ')').fadeIn(3000);

		//console.log(bullet_index);

	});
};
