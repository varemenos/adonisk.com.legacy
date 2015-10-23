module.exports = function (grunt) {
	require('jit-grunt')(grunt);

	var taskConfigs = require('load-grunt-configs')(grunt, {
		config: {
			src: 'tasks/config/*.js'
		}
	});

	grunt.initConfig(taskConfigs);

	grunt.task.loadTasks('./tasks');

	grunt.registerTask('style', ['sass', 'postcss', 'cssmin']);
	grunt.registerTask('script', ['concat', 'uglify']);
	grunt.registerTask('views', ['svg2json', 'jade', 'blog', 'clean:svg2json']);

	grunt.registerTask('build', ['copy', 'style', 'script', 'views']);
	grunt.registerTask('publish', ['build', 'gh-pages']);

	grunt.registerTask('default', ['browserSync', 'watch']);
};
