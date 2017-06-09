var selectInput = function (inputTypeEl) {
	'use strict';

	var el1 = document.querySelector('#edit');
	var el2 = document.querySelector('#file');

	if (inputTypeEl.value === 'text') {
		el1.style.display = 'block';
		el2.style.display = 'none';
	} else {
		el1.style.display = 'none';
		el2.style.display = 'block';
	}
};

document.addEventListener('DOMContentLoaded', function () {
	'use strict';

	var editor = ace.edit('edit');
	var output = ace.edit('output');

	editor.setOptions({
		mode: 'ace/mode/text',
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
		mode: 'ace/mode/text',
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
	var encodeBtn = document.querySelector('#action-encode');
	var decodeBtn = document.querySelector('#action-decode');

	// var settings = document.querySelector('#settings');
	var tabsSel = document.querySelector('select[name=tabs]');

	var inputTypeEl = document.querySelector('select[name=input]');
	var inputFileEl = document.querySelector('input[name=file_input]');

	selectInput(inputTypeEl);
	inputTypeEl.addEventListener('change', function () {
		selectInput(inputTypeEl);
	});

	inputFileEl.addEventListener('change', function () {
		var file = inputFileEl.files[0];
		var reader = new FileReader();

		reader.onloadend = function (f) {
			var encoded = f.target.result;

			var fileEl = document.querySelector('#file');
			fileEl.style.backgroundImage = 'url(' + encoded + ')';
			output.setValue(encoded, 1);
		};

		try {
			reader.readAsDataURL(file);
		} catch (e) {
			console.log(e);
		}
	});

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

	tabsSel.addEventListener('change', function () {
		editor.setOption('tabSize', tabsSel.value);
		output.setOption('tabSize', tabsSel.value);
	});

	encodeBtn.addEventListener('click', function () {
		var decoded = editor.getValue();
		var encoded = btoa(decoded);

		output.setValue(encoded, 1);
		editor.clearSelection();
		output.clearSelection();
	});

	decodeBtn.addEventListener('click', function () {
		var encoded = editor.getValue();

		try {
			var decoded = atob(encoded);
			output.setValue(decoded, 1);
		} catch (e) {
			output.setValue(e.message, 1);
		}

		editor.clearSelection();
		output.clearSelection();
	});
});
