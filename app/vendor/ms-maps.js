$(document).ready(function(){

	function initialize() {

		var marker1 = new google.maps.LatLng(-12.042, -77.028333);
		var openedInfoWindow = null;

		var mapProp = {
			center: new google.maps.LatLng(-12.043333, -77.028333),
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("map"),mapProp);

		var marker = new google.maps.Marker({
			position: marker1,
			title: 'Marker with InfoWindow'
		});
		marker.setMap(map);
		var infoWindowContent = $('.map-card-container').html();

		var infoWindow = new InfoBubble({
			maxWidth: 630,
			padding: 0,
			borderWidth: 0,
			borderRadius: 0,
			maxHeight: 163,
			content: infoWindowContent
		});

		google.maps.event.addListener(marker, 'click', function() {
			if (openedInfoWindow != null) {
				openedInfoWindow.close();
				openedInfoWindow = null;
			} else {
				infoWindow.open(map,marker);
				openedInfoWindow = infoWindow;
			}
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);
	// var map = new GMaps({
	// 	el: '#map',
	// 	lat: -12.043333,
	// 	lng: -77.028333,
	// 	scrollwheel: false
	// });
	// var marker = map.addMarker({
	// 	lat: -12.042,
	// 	lng: -77.028333,
	// 	title: 'Marker with InfoWindow',
	// 	maxWidth: 640,
	// 	infoWindow: {
	// 		content: infowindow
	// 	}
	// });
	// var infowindow = new google.maps.InfoWindow({
	// 	content: contentString
	// });
	// google.maps.event.addListener(marker, 'click', function() {
	// 	infowindow.open(map,marker);
	// });
});