var generate = require('../src/blog/generate');

module.exports = function (grunt) {
	grunt.registerTask('blog', 'generate blog', function () {
		generate();
	});
};
