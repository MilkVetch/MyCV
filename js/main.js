// aside
$('.toggle-btn').click(function() {
	$(this).toggleClass('menu-open');
	$('aside nav').toggleClass('menu-open');
	$('.btn-ctr').toggle();
});
$('.btn-ctr').click(function() {
	$('.toggle-btn').toggleClass('menu-open');
	$('aside nav').toggleClass('menu-open');
	$(this).hide();
});
$('aside nav ul li').click(function() {
	setTimeout(function(){
		$('.toggle-btn').toggleClass('menu-open');
		$('aside nav').toggleClass('menu-open');
		$('.btn-ctr').hide();
	},300);
});

// about me
$('.interest-box i').mouseover(function() {
	$('.int-des-0').hide();
	var intid = $(this).data('intid');
	$('.int-des-'+intid).show();
	$('.about .image').css("background-image", "url(img/int"+intid+".jpg)");
	var h = $('.about-content').height()+$('.about-title').height();
	if ($(window).width() <= 695) {
		$('.about .image').css("transform","translateY("+h+"px)");
	}

}).mouseout(function() {
	$('.int-des-0').show();
	var intid = $(this).data('intid');
	$('.int-des-'+intid).hide();
	$('.about .image').css("background-image", "url(img/sketch.jpg)");
	if ($(window).width() <= 695) {
		$('.about .image').css("transform","translateY(0px)");
	}
});

