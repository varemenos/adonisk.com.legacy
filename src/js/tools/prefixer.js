var getBrowsers = function (browsers) {
	'use strict';

	return browsers.split(', ').join(',').split(' ,').join(',').split(',');
};

document.addEventListener('DOMContentLoaded', function () {
	'use strict';

	var editor = ace.edit('edit');
	var output = ace.edit('output');
	var defaultBrowsers = getBrowsers('> 1%, last 2 versions, Firefox ESR, Opera 12.1');

	editor.setOptions({
		mode: 'ace/mode/css',
		theme: 'ace/theme/tomorrow_night_eighties',
		tabSize: 2,
		showPrintMargin: false,
		wrap: true,
		useWorker: false,
		fontSize: 12,
		showInvisibles: false,
		behavioursEnabled: true,
		useSoftTabs: true,
		highlightActiveLine: false,
		showGutter: true,
		showFoldWidgets: true,
		readOnly: false
	});

	output.setOptions({
		mode: 'ace/mode/css',
		theme: 'ace/theme/tomorrow_night_eighties',
		tabSize: 2,
		showPrintMargin: false,
		wrap: true,
		useWorker: false,
		fontSize: 12,
		showInvisibles: false,
		behavioursEnabled: true,
		useSoftTabs: true,
		highlightActiveLine: false,
		showGutter: true,
		showFoldWidgets: true,
		readOnly: false
	});

	var settingsBtn = document.querySelector('#action-settings');
	var spacesBtn = document.querySelector('#action-spaces');
	var browserInput = document.querySelector('#action-browser');
	var resetBrowsersBtn = document.querySelector('#action-reset-browsers');
	var prefixBtn = document.querySelector('#action-prefix');
	var settings = document.querySelector('#settings');
	var tabsSel = document.querySelector('select[name=tabs]');

	settingsBtn.addEventListener('click', function () {
		if (settings.classList.contains('active')) {
			settings.classList.remove('active');
		} else {
			settings.classList.add('active');
		}
	});

	// spacesBtn.addEventListener('click', function () {
	// 	editor.setOption('useSoftTabs', spacesBtn.checked);
	// 	output.setOption('useSoftTabs', spacesBtn.checked);
	// });

	// tabsSel.addEventListener('change', function () {
	// 	editor.setOption('tabSize', tabsSel.value);
	// 	output.setOption('tabSize', tabsSel.value);
	// });

	resetBrowsersBtn.addEventListener('click', function () {
		browserInput.value = defaultBrowsers;
	});

	prefixBtn.addEventListener('click', function () {
		var css = editor.getValue();
		var prefixed;

		try {
			prefixed = autoprefixer({
				browsers: getBrowsers(browserInput.value),
				cascade: false
			}).process(css).css;
		} catch (e) {
			if (e.reason) {
				prefixed = e.reason + ' at line ' + e.line;
			} else {
				prefixed = e.message;
			}
		}

		output.setValue(prefixed, 1);
		editor.clearSelection();
		output.clearSelection();
	});
});
