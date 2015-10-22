var stickyHeader = function () {
	var applyStick = function (el) {
		var top = $(window).scrollTop();

		if (top >= el.height()) {
			el.addClass('sticky');
			$('body').css('padding-top', el.height());
		} else {
			el.removeClass('sticky');
			$('body').css('padding-top', 0);
		}
	};

	var el = $('#sub-navigation');
	applyStick(el);

	$(window).scroll(function () {
		applyStick(el);
	});
};

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
	// stickyHeader();
});
