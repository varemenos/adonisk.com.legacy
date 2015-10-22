module.exports = {
	options: {
		compress: {
			drop_console: false
		}
	},
	dist: {
		files: [{
			expand: true,
			src: ['dist/js/**/*.js'],
			dest: 'dist/js/',
			flatten: true,
			ext: '.js'
		}]
	}
};
