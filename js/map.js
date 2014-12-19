//MAP DE BASE
function initialize() {
        var mapOptions = {
          center: { lat: 50.450831 , lng: 3.950822},
          zoom: 14,
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
	console.log(listBat.monument[i].lat+','+listBat.monument[i].long);
 
	var imgIcone = 'img/pointer.png';
  
	var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
			icon: imgIcone,
      
  });
	
	marker.setMap(map);
	
};
	
for(i=0; i<listBat.monument.length; i++) {pointeur(i)};
 
//Style map	
				var styles = [{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFFAF0"}]},{"featureType":"water","stylers":[{"color":"#d9edf7"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"lightness":40}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"on","color":"#c5dac6"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#CCAA88"},{"lightness":40}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#EEEEEE"}]},{"featureType":"road","stylers":[{"visibility":"simplified"},{"color":"#FF0000"},{"gamma":9}]},{"featureType":"road.highway","stylers":[{"visibility":"on"},{"color":"#FF0000"},{"gamma":8}]},{"featureType":"road.highway.controlled_access","stylers":[{"visibility":"on"},{"color":"#FF0000"},{"gamma":4}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#DDDDDD"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#CCCCCC"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#AAAAAA"},{"gamma":4}]}];
	
	map.setOptions({styles: styles});
}


google.maps.event.addDomListener(window, 'load', initialize);