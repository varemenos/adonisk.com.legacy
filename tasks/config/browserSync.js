module.exports = {
	dev: {
		bsFiles: {
			src: [
				'./dist/css/**/*.css',
				'./dist/js/**/*.js',
				'./dist/**/*.html'
			]
		},
		options: {
			watchTask: true,
			server: './dist',
			open: false,
			logConnections: true
		}
	}
};
