$('aside li').click(function() {
	var menuname = $(this).data('menu');
	if (menuname == '.contact') {
		$('.social').animatescroll({padding:-1300});
	} else{
		$(menuname).animatescroll();
	};
});

$('.welcome i').click(function() {
	$('.about').animatescroll();
});

$('.btt').click(function() {
	$('.welcome').animatescroll();
});

$('.hire').click(function() {
	$('.social').animatescroll({padding:-1300});
});


$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	if ( wScroll > $('.about').offset().top) {
		$('.btt').css('display', 'block');
	} else{
		$('.btt').css('display', 'none');
	};
});