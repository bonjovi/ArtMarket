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

	// СЛАЙДЕР ЦЕН В ФИЛЬТРЕ
	var slider = document.getElementById('slider');

	noUiSlider.create(slider, {
		start: [20000, 80000],
		connect: true,
		range: {
			'min': 0,
			'max': 100000
		},
		format: wNumb({
            decimals: 0,
            thousand: ' ',
            postfix: ' руб.',
        })
	});

	var marginMin = document.getElementById('slider-margin-value-min'),
		marginMax = document.getElementById('slider-margin-value-max');

	slider.noUiSlider.on('update', function ( values, handle ) {
		if ( handle ) {
			marginMax.innerHTML = values[handle];
		} else {
			marginMin.innerHTML = values[handle];
		}
	});
	// end of СЛАЙДЕР ЦЕН В ФИЛЬТРЕ

	$('.filter__title').on('click', function() {
		$(this).next('.filter__sectioncontent').slideToggle();
		var toggler = $(this).find('i');

		if(toggler.text() == 'remove') {
			toggler.text('add');
		} else {
			toggler.text('remove');
		}
	});

	$('.filterToggler').on('click', function(e) {
		e.preventDefault();
		if($(this).text() == 'ПОКАЗАТЬ ФИЛЬТРЫ') {
			$(this).text('СКРЫТЬ ФИЛЬТРЫ')
		} else {
			$(this).text('ПОКАЗАТЬ ФИЛЬТРЫ')
		}

		if($('.filter').hasClass('filter_uncollapsed')) {
			$('.filter > *').hide();
			$('.filter').css('padding', '0').css('margin-right', '0');
		} else {
			$('.filter > *').show();
			$('.filter').css('padding', '40px 20px 40px 40px').css('margin-right', '20px');
		}

		$('.filter').toggleClass('filter_uncollapsed');

		changeCardMargin();

	});

	$(window).resize(function(){
	  	changeCardMargin();
	});
	
	function changeCardMargin() {
		setTimeout(function() {
			console.log($('.cards').width());
			if($('.cards').width() < 1160 && $('.cards').width() > 640) {
				$('.cards:first-child .card:nth-child(3n)').css('margin-right','15px');
			} else {
				$('.cards:first-child .card:nth-child(3n)').css('margin-right','0');
			}
		}, 500);
	}

	$('.productGallery__thumbnail img').on('click', function() {
		alert(123);
		console.log($(this).attr('src'));
		$('.productGallery__mainpic img').attr('src', $(this + ' img').attr('src'));
	});

});