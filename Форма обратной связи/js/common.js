$(document).ready(function(){

	$('.open-poup').magnificPopup({
		type:'inline',
		midClick: true,
		removalDelay: 300,
        mainClass: 'mfp-fade'
      });
      
    $(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.form').fadeOut('slow');
			$('.succes').fadeIn('slow');
			setTimeout(function() {
				th.trigger("reset");
				$('.open-poup').magnificPopup('close');
			}, 2500);
			setTimeout(function() {
				$('.succes').fadeOut('slow');
				$('.form').fadeIn('slow');
			}, 2750);


		});
		return false;
    });
    

});