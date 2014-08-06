$(document).ready(function() {
	$('#search_form').on('submit', function(event) {
		event.preventDefault();
		var url = 'https://api.foursquare.com/v2/venues/search?near=' + $('#city:checked').val() + ',venezuela&query=' + $("#interest").val() + '&client_id=VQZAZ1KSE1ARUSEB14NOPUIIA0GOUZWQQCSVMCV4GITH0EHN&client_secret=FOXUGMDYG2EWRLZAT3A5MDXOWV1MUZLR1WRT4EOVVGYOYVNU&v=20140806';
		$.get(url, function(search) {
			$('#results').text('');
			search.response.venues.forEach(function(restaurant) {
				$('<div id="result">' + restaurant.name + '</div>').prependTo('#results');
			});
		});
	});
});