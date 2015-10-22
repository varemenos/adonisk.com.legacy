module.exports = {
	dist: {
		options: {
			sourcemap: 'none',
			style: 'compressed'
		},
		files: {
			'dist/css/style.css': 'src/scss/style.scss'
		}
	}
};
