var scroll2top = function () {
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

$(function () {
	scroll2top();

	// add active class to the currently viewed page
	$('#navigation a, #sub-navigation a').each(function (i, item) {
		if (window.location.pathname.indexOf($(item).attr('href')) > -1) {
			$(item).addClass('active');
		}
	});

	// mobile header menu
	$('#menu').on('click', function () {
		$('header').toggleClass('opened');
	});
});
