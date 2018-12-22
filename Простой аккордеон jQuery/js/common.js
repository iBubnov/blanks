$(document).ready(function(){

	$('.accordion-title').next().hide();
		$('.accordion-title').click(function(){
		$(this).next().slideToggle();
		$('.accordion-title').not(this).next().stop(true,true).slideUp();
	});


});