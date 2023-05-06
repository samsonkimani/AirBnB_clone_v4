
$(document).ready(function() {
	var amenities = {};

	$('input[type=checkbox]').change(function() {
		var amenityId = $(this).data('id');
		if ($(this).is(':checked')) {
			amenities[amenityId] = $(this).data('name');
		} else {
			delete amenities[amenityId];
		}

		const amenitylist = Object.values(amenities);

		$('div.amenities h4').text(amenitylist.sort().join(', '));
	});
});
