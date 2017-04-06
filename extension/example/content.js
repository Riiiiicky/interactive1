// replace images when the page loads
$('img').attr('src', 'http://i.imgur.com/stqkUe4.png');

// replace text in the page when it loads
$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/designer/g,'Ricky') );
	$(this).html( $(this).html().replace(/look/g,'not look') );
	$(this).html( $(this).html().replace(/how/g,'no why') );
});

// when you click on an image hide it using CSS
$('img').click(function() {
	$(this).addClass('hide');
});

// when you click on the page 'body' apply .gradient to it from the CSS
$('body').click(function() {
	$(this).addClass('background');
});

$('#lga').addClass('transformed')




