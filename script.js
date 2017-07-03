$(document).ready(function() {
	alert('dd')
	//E-mail Ajax Send
	$("form").submit(function() { 
		alert('dddga')//Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "https://tishkunov.github.io//mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});