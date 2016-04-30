$(document).ready(function($) {
$.noConflict();
	$('#home-shop').flexslider({
		animation: "fade",
		slideshow: false,                
		directionNav: true,
		controlsContainer: ".home-shop",
		controlNav: true,
		manualControls: ".home-shop-nav li"
	});

$('.flex-prev').on('click', function(){
    $('#home-shop').flexslider('prev')
    return false;
})

$('.flex-next').on('click', function(){
    $('#home-shop').flexslider('next')
    return false;
})

});
