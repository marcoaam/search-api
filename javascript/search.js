$(document).ready(function() {
	var restaurantsLocations = []
	var map = new GMaps({
	    div: '#map',
	    lat: 51.5138687,
	    lng: -0.1129165,
	    zoom: 12
	});
	$('#search_form').on('submit', function(event) {
		event.preventDefault();
		var url = 'https://api.foursquare.com/v2/venues/search?near=' + $('#city:checked').val() + ',London,Uk&query=' + $("#interest").val() + '&radius=1000&client_id=VQZAZ1KSE1ARUSEB14NOPUIIA0GOUZWQQCSVMCV4GITH0EHN&client_secret=FOXUGMDYG2EWRLZAT3A5MDXOWV1MUZLR1WRT4EOVVGYOYVNU&v=20140806';
		$.get(url, function(search) {
			$('#results').text('');
			map.removeMarkers();
			search.response.venues.forEach(function(restaurant) {
				$('<li id="result">' + restaurant.name + '<br>' + restaurant.location.formattedAddress[0] + '</li>').prependTo('#results');
				console.log(restaurant.location);
				map.setCenter(51.5138687,-0.1129165);
				map.setZoom(12);
				map.addMarker({
				  lat: restaurant.location.lat,
				  lng: restaurant.location.lng,
				  infoWindow: {
             content: restaurant.name
          }
				});
			});
		});
	});
});