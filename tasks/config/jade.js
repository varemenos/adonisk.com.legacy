module.exports = function (grunt) {
	return {
		views: {
			options: {
				pretty: false,
				basedir: 'src/views',
				data: function (dest, src) {
					var data = grunt.file.readJSON('src/data.json');

					var icons = grunt.file.readJSON('dist/libs/icons.json');
					data.icons = icons;

					return data;
				}
			},
			files: [{
				expand: true,
				src: ['src/views/public/tools/*.jade'],
				dest: 'dist/tools/',
				flatten: true,
				ext: '.html'
			}, {
				expand: true,
				src: ['src/views/public/*.jade'],
				dest: 'dist/',
				flatten: true,
				ext: '.html'
			}]
		}
	};
};
