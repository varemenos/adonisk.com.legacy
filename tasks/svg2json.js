var Buffer = require('buffer').Buffer;

var base64 = function (str) {
	'use strict';

	return new Buffer(str).toString('base64');
};

module.exports = function (grunt) {
	'use strict';

	grunt.registerMultiTask('svg2json', 'svg -> base64 -> json', function () {
		this.files.map(function (fileset) {
			var result = fileset.src.map(function (file) {
				var name = file.split('/');
				name = name[name.length - 1].replace('.svg', '');

				return {
					name: name,
					value: base64(grunt.file.read(file))
				};
			});

			result = result.reduce(function (memo, next) {
				memo[next.name] = next.value;
				return memo;
			}, {});

			grunt.file.write(fileset.dest, JSON.stringify(result));
		});
	});
};
