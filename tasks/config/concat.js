module.exports = {
	options: {
		separator: ';\n'
	},
	main: {
		src: [
			'src/libs/jquery/dist/jquery.min.js',
			'src/js/main.js'
		],
		dest: 'dist/js/main.js'
	},
	resume: {
		src: [
			'src/js/resume.js'
		],
		dest: 'dist/js/resume.js'
	},
	base64: {
		src: [
			'src/js/tools/base64.js'
		],
		dest: 'dist/js/base64.js'
	},
	prefixer: {
		src: [
			'src/libs/autoprefixer-rails/vendor/autoprefixer.js',
			'src/js/tools/prefixer.js'
		],
		dest: 'dist/js/prefixer.js'
	},
	url: {
		src: [
			'src/js/tools/url.js'
		],
		dest: 'dist/js/url.js'
	},
	prettify: {
		src: [
			'src/libs/js-beautify/js/lib/beautify.js',
			'src/libs/js-beautify/js/lib/beautify-html.js',
			'src/libs/js-beautify/js/lib/beautify-css.js',
			'src/js/tools/prettify.js'
		],
		dest: 'dist/js/prettify.js'
	}
};
