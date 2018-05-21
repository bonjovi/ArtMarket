$(function() {
	$('.footer__toggler i').on('click', function() {
		$('.footer__left .footer__section').slideToggle();
	});

	

	$('.header__toggler i').on('click', function() {
		if($('.topmenu__wrapper').hasClass('topmenu__wrapper_hidden')) {
			$('.main, .footer').hide();
		} else {
			$('.main, .footer').show();
		}
		$('.topmenu__wrapper').toggleClass('topmenu__wrapper_hidden');
		$('.header__toggler i').toggleClass('active');
		$('.header__toggler i').text('menu');
		$('.header__toggler i.active').text('close');
	});

	

});