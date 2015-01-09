
//MAP DE BASE
function initialize() {
        var mapOptions = {
          center: { lat: 50.450831 , lng: 3.950822},
          zoom: 14,
					minZoom: 12,
					panControl: false,
					zoomControl: true,
					zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.TOP_LEFT
    },
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					overviewMapControl: false
        };
        var map = new google.maps.Map(document.getElementById('maps'),
            mapOptions);
		
	var i = 0;

	
//POINTEUR+INFO
function pointeur(i){
	// for(i=0; i<listBat.monument.length; i++) {listBat.monument[i]};
	var myLatlng = new google.maps.LatLng(listBat.monument[i].lat,listBat.monument[i].long);
//	console.log(listBat.monument[i].lat+','+listBat.monument[i].long);
 
	var imgIcone = 'img/pointer.png';
	var contentString = '<div style="color:#d45a45; text-align:center; font-weight:500; min-width:200px; margin-left:24px;">'+listBat.monument[i].nom+'</div>';
	var infowindow = new google.maps.InfoWindow({
      content: contentString
  		});

//	console.log(contentString);
	var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
			icon: imgIcone,
			 title: 'titre par default'


      
  		});
	google.maps.event.addListener(marker, 'mouseover', function() {
		if (typeof( window.infoopened ) != 'undefined')infoopened.close();
		infowindow.open(map,marker);
		infoopened = infowindow;
  });	
		google.maps.event.addListener(marker, 'click', function() {
		$('.titre_h2','').html('<h2>' + listBat.monument[i].nom + '</h2>').css({opacity:0, marginTop:-20}).delay(200).animate({opacity:1, marginTop:0});
		$('.header_contenu_info_rep').html('<span>' + listBat.monument[i].adresse + ', ' + listBat.monument[i].commune + '<br/>' + listBat.monument[i].Telephone + '<br/>' + listBat.monument[i].Mail + '</span>').css({opacity:0, marginTop:-20}).delay(200).animate({opacity:1, marginTop:0});
		$('.contenu_propos_regular').html(listBat.monument[i].architecte);
		$('.contenu_propos_small').html(listBat.monument[i].info_architecte);
		$('.contenu_propos_red').html(listBat.monument[i].chapeau);
		$('.contenu_propos_p').html(listBat.monument[i].paragraphe);
		$('.contenu_propos_sponsor_info').html(listBat.monument[i].Maître_douvrage);
		$('.header_contenu_info').html('<span>Adresse <br> Téléphone <br> E-mail </span>').css({opacity:0, marginTop:-20}).delay(200).animate({opacity:1, marginTop:0});
  		listImg_slider =listBat.monument[i].img_1;
		$('.slider_img').css('background-image', 'url(' + listImg_slider[0] + ')');
		$('.header_contenu_emploi').css("display","none");
		$('.contenu_top').css({"background-color": "#FFF"});
		$('.button_champs').css("display","block");

  });
    // marker.setCenter(map.getCenter());
	marker.setMap(map);

	
};
	
for(i=0; i<listBat.monument.length; i++) {pointeur(i)};
 
//Style map	
				var styles = [{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFFAF0"}]},{"featureType":"water","stylers":[{"color":"#d9edf7"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"lightness":40}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"on","color":"#c5dac6"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#CCAA88"},{"lightness":40}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#EEEEEE"}]},{"featureType":"road","stylers":[{"visibility":"simplified"},{"color":"#FF0000"},{"gamma":9}]},{"featureType":"road.highway","stylers":[{"visibility":"on"},{"color":"#FF0000"},{"gamma":8}]},{"featureType":"road.highway.controlled_access","stylers":[{"visibility":"on"},{"color":"#FF0000"},{"gamma":4}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#DDDDDD"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#CCCCCC"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#AAAAAA"},{"gamma":4}]}];
	
	map.setOptions({styles: styles});
}


google.maps.event.addDomListener(window, 'load', initialize);