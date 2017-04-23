$(document).ready(function(){
	
	var colors = ["red", "bbb", "green", "yellow", "black", "white"];

	$('#part-1').click(function() {
		// updates the body's html with the first value in the colors array
		$(this).html(colors[2]);	
		$('#newpassword').append(colors[2]);	
	});

	$('#part-2').click(function() {
		// updates the body's html with the first value in the colors array
		$(this).html(colors[1]);	
		$('#newpassword').append(colors[1]);	
	});	
    
    $('#part-3').click(function() {
		// updates the body's html with the first value in the colors array
		$(this).html(colors[1]);	
		$('#newpassword').append(colors[1]);	
	});	
    
});


