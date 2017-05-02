$(document).ready(function(){
	
	var name = ["BOB", "JEFF", "CHRIS", "ADELE", "KEVIN", "KATE", "VERA", "KATIE"];
	var numbers = ["2344", "3456", "45678", "2345", "789", "2356", "3498", "2459"];
	var special = ["&", "#", "*", ")", "/", "!", "@", "~"];
    var emoji = ["-_-", "@_@", "^_^", "|=_=|", "(*_*)", ">_<"]
    var element = ["A", "E", "S", "B", "P", "G", "H", "W", "J"];
    function getname() {
	   return name[Math.floor(Math.random() * name.length)];
	}

	$('#part-1').click(function() {
		// updates the body's html with the first value in the name array
		var value = name[Math.floor(Math.random() * name.length)];
		$(this).html(value);			
		$('#newpassword').append(value);	
	});	


	$('#part-2').click(function() {
		// updates the body's html with the first value in the numbers array
		var value = numbers[Math.floor(Math.random() * numbers.length)];
		$(this).html(value);			
		$('#newpassword').append(value);	
	});	
    
    $('#part-3').click(function() {
		// updates the body's html with the first value in the special array
		var value = special[Math.floor(Math.random() * special.length)];
		$(this).html(value);			
		$('#newpassword').append(value);	
	});	

 
    $('#part-4').click(function() {
		// updates the body's html with the first value in the emoji array
		var value = emoji[Math.floor(Math.random() * emoji.length)];
		$(this).html(value);			
		$('#newpassword').append(value);	
	});

	$('#part-5').click(function() {
		// updates the body's html with the first value in the element array
		var value = element[Math.floor(Math.random() * element.length)];
		$(this).html(value);			
		$('#newpassword').append(value);	
	});    
});



