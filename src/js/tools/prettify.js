document.addEventListener('DOMContentLoaded', function () {
	'use strict';

	var editor = ace.edit('edit');
	var output = ace.edit('output');

	editor.setOptions({
		mode: 'ace/mode/html',
		theme: 'ace/theme/tomorrow_night_eighties',
		tabSize: 2,
		showPrintMargin: false,
		wrap: true,
		useWorker: true,
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
		mode: 'ace/mode/html',
		theme: 'ace/theme/tomorrow_night_eighties',
		tabSize: 2,
		showPrintMargin: false,
		wrap: true,
		useWorker: true,
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
	var prettifyBtn = document.querySelector('#action-prettify');
	var settings = document.querySelector('#settings');
	var langSel = document.querySelector('select[name=lang]');
	var tabsSel = document.querySelector('select[name=tabs]');

	// settingsBtn.addEventListener('click', function () {
	// 	if (settings.classList.contains('active')) {
	// 		settings.classList.remove('active');
	// 	} else {
	// 		settings.classList.add('active');
	// 	}
	// });

	spacesBtn.addEventListener('click', function () {
		editor.setOption('useSoftTabs', spacesBtn.checked);
		output.setOption('useSoftTabs', spacesBtn.checked);
	});

	langSel.addEventListener('change', function () {
		editor.setOption('mode', 'ace/mode/' + langSel.value);
		output.setOption('mode', 'ace/mode/' + langSel.value);
	});

	tabsSel.addEventListener('change', function () {
		editor.setOption('tabSize', tabsSel.value);
		output.setOption('tabSize', tabsSel.value);
	});

	prettifyBtn.addEventListener('click', function () {
		var code = editor.getValue();
		var result;

		if (langSel.value === 'js') {
			try {
				result = js_beautify(code);
			} catch (e) {
				console.log(e);
			}
		} else if (langSel.value === 'javascript') {
			try {
				result = js_beautify(code);
			} catch (e) {
				console.log(e);
			}
		} else if (langSel.value === 'html') {
			try {
				result = html_beautify(code);
			} catch (e) {
				console.log(e);
			}
		} else if (langSel.value === 'css') {
			try {
				result = css_beautify(code);
			} catch (e) {
				console.log(e);
			}
		} else {
			throw new Error('Unsupported or invalid language selected');
		}

		output.setValue(result);
		editor.clearSelection();
		output.clearSelection();
	});
});
