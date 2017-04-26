$(document).ready(function(){
	
	var name = ["BOB", "JEFF", "CHRIS", "ADELE", "KEVIN", "KATE"];
	var numbers = ["2344", "3456", "45678", "2345", "789", "2356"];

    function getname() {
	   return name[Math.floor(Math.random() * name.length)];
	}

	$('#part-1').click(function() {
		// updates the body's html with the first value in the name array
		$(this).html(name[2]);	
		$('#newpassword').append(name[2]);	
	});

	$('#part-2').click(function() {
		// updates the body's html with the first value in the numbers array
		$(this).html(numbers[1]);	
		$('#newpassword').append(numbers[1]);	
	});	
    
    $('#part-3').click(function() {
		// updates the body's html with the first value in the colors array
		$(this).html(colors[1]);	
		$('#newpassword').append(colors[1]);	
	});	
    
});


