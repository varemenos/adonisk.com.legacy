document.addEventListener('DOMContentLoaded', function () {
	var encode = function (decoded) {
		return encodeURIComponent(decoded).replace(/'/g, '%27').replace(/"/g, '%22');
	};

	var decode = function (encoded) {
		return decodeURIComponent(encoded.replace(/\+/g, ' '));
	};

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
		var encoded = encode(decoded);

		output.setValue(encoded, 1);
		editor.clearSelection();
		output.clearSelection();
	});

	decodeBtn.addEventListener('click', function () {
		var encoded = editor.getValue();
		var decoded = decode(encoded);

		output.setValue(decoded, 1);
		editor.clearSelection();
		output.clearSelection();
	});
});
