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
    });
});


// Slider + Bulle
$(function carousel() { 
		var current       = 0,
	        buttonActive    = true,
	        divSlider     = $('.slider'),
	        sliderImg   = $('.slider_img'),
	        firstImg    = sliderImg.first(),
            totalImgs	  = sliderImg.length;
        
	   firstImg.css('display','block');
	   
       sliderBullets = divSlider.append('<div class="slider-bullets"></div>');
	
	   if(totalImgs) {
		  for(i = 0; i < totalImgs; i++){
			  $('<span></span>').appendTo('.slider-bullets');
		  }
	   }

	   var bullet = $('.slider-bullets span');
       
       bullet.first().addClass('is-active');
	
    
	   $('[data-src]').each(function(){
		  $(this).css('background-image', 'url(' + $(this).data('src') + ')');
	   });
        
    
       $('.slider-bullets span').click(function(){
           
                   var $this  = $(this),
                       bullet_index = $this.index();

		  
				$("span.is-active").removeClass("is-active");
			    $(this).addClass("is-active");
			    sliderImg.hide().css('z-index', 2000000);
				
                sliderImg.eq(bullet_index).css('z-index', 3000000).fadeIn().addClass('img_active');	
                
                setTimeout(function(){
                    buttonActive = true;
                }, 600);
       });
    // slide automatique 
        
//        setInterval(function() {
    
//                $('.slider_container_img :first')
//                        .fadeOut(2000)
//                        .next()
//                        .fadeIn(2000)
//                        .end()
//                        .appendTo('.slider_container_img');
//                
//            },  5000);
    
    
    
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

