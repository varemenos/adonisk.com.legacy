var scroll2top = function () {
	'use strict';

	var applyScroll = function (el) {
		var top = $(window).scrollTop();
		if (top > $(window).height() / 3) {
			el.fadeIn(100);
		} else {
			el.fadeOut(100);
		}
	};

	var el = $('#scroll2top');

	el.on('click', function () {
		$('html, body').animate({scrollTop: 0}, 300);
		return false;
	});

	$(window).scroll(function () {
		applyScroll(el);
	});
};

var getPath = function (str) {
	'use strict';

	return str
		.replace('/', '')
		.replace('index', '')
		.replace('.html', '');
};

$(function () {
	'use strict';

	scroll2top();

	// add active class to the currently viewed page
	var path = window.location.pathname.split('/');
	path.shift();

	$('#navigation a, #sub-navigation a').each(function (i, item) {
		var target = $(item).attr('href');

		if (getPath(path[0]) === getPath(target)) {
			$(item).addClass('active');
		}
	});

	// mobile header menu
	$('#menu').on('click', function () {
		$('header').toggleClass('opened');
	});
});
