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

// owl
  var owl = $("#owl-demo");

  owl.owlCarousel({
      items : 1, //10 items above 1000px browser width
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })