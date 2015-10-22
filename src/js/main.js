$(function () {
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
