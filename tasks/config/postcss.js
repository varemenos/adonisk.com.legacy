module.exports = {
	options: {
		processors: [
			require('autoprefixer')({
				cascade: false,
				remove: false,
				browsers: 'last 2 versions'
			})
		]
	},
	dist: {
		options: {
			map: false
		},
		files: {
			'dist/css/style.css': ['dist/css/style.css'],
			'dist/css/blog.css': ['dist/css/blog.css']
		}
	}
};
