$('.toggle-btn').click(function() {
	$(this).toggleClass('menu-open');
	$('aside nav').toggleClass('menu-open');
	$('.btn-ctr').show();
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
	},300);
});