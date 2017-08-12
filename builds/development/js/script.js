
$(function() {
    $('ul.menu.flex').flexMenu();

    $("head").append("<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />");
	
	//anchor links

	
	$('.menu li a').click(function () {
		$('.menu li').removeClass('active');
		$(this).parent().addClass('active');
		return true;
	});
	
	//Scroll Top
	
	$('#scrollUp').mouseover(function(){
		$( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click(function(e){
		e.preventDefault();
		$('body,html').animate({ scrollTop: 1 }, 1000);
	});
	
	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('#scrollUp').fadeIn('fast');
		} else {
			$('#scrollUp').fadeOut('fast');
		}
	});

    //ion.rangeslider

    var $range = $(".range_slider");

    $range.ionRangeSlider({
        type: "double",
        min: 0,
        max: 30000,
        from: 870,
        to: 22750,
        hide_from_to: false,
        hide_min_max: true,
        prettify_enabled: true,
        prettify_separator: "."
    });

});
