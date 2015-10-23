module.exports = {
	dist: {
		options: {
			sourceMap: false,
			advanced: false,
			aggressiveMerging: false,
			keepSpecialComments: false
		},
		files: {
			'dist/css/style.css': ['dist/css/style.css'],
			'dist/css/blog.css': ['dist/css/blog.css']
		}
	}
};
