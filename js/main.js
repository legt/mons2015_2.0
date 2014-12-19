$(function toggleMenu() {
	$('.hamburger').click(function() {
		console.log('Click');
		$('.nav').show("slide", {direction : "right"}, 500);
	})
});

$(function closeMenu() {
	$('.closeMenu').click(function(e) {
		e.preventDefault;
		console.log('Click Close')
		$('.nav').hide("slide", {direction : "right"}, 500);
	})
});

var contenuSelect = 0;

$(function clickApropos() {
	$("#button_Apropos").click(function(e) {
		e.preventDefault;
		console.log('Click a propos');
		
		if($(".slide_contenu").hasClass('contenu_active')){
				
			 		if(contenuSelect==1){
							$('.slide_contenu').toggleClass('contenu_active contenu');
							contenuSelect = 0;
							$('#Apropos').hide();
						  $('#Pinteret').hide();
						}else{
							$('#Apropos').show();
							$('#Pinteret').hide();
							contenuSelect = 1;
						};
			 }else{
				$('.slide_contenu').toggleClass('contenu_active contenu');
				$('#Apropos').show();
				$('#Pinteret').hide();
				contenuSelect = 1;
			 };
		
		
	})
});

$(function clickPinteret() {
	$("#button_Pinteret").click(function(e) {
		e.preventDefault;
		console.log('Click a propos');
		
		if($(".slide_contenu").hasClass('contenu_active')){
			 		if(contenuSelect==2){
							$('.slide_contenu').toggleClass('contenu_active contenu');
							contenuSelect = 0;
							$('#Apropos').hide();
						  $('#Pinteret').hide();
						}else{
							$('#Apropos').hide();
							$('#Pinteret').show();
							contenuSelect = 2;
						};
			 }else{
				$('.slide_contenu').toggleClass('contenu_active contenu');
				$('#Apropos').hide();
				$('#Pinteret').show();
				contenuSelect = 2;
			 };
		
		
		
	});
});

