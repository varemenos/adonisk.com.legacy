var generate = require('../src/blog/generate');

module.exports = function (grunt) {
	'use strict';

	grunt.registerTask('blog', 'generate blog', function () {
		generate();
	});
};
