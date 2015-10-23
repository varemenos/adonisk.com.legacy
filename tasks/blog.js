var fs = require('fs');
var path = require('path');

var prepare = require('../src/modules/prepare');
var data = require('../src/modules/data');
var posts = require('../src/modules/posts');
var rss = require('../src/modules/rss');

var config = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/../src/data.json'), 'utf8'));
config = config.blog;
config.pwd = path.resolve(__dirname + '/../src/');

module.exports = function (grunt) {
	grunt.registerMultiTask('blog', 'generate blog', function () {
		prepare(config);
		data(config);
		posts(config);
		rss(config);

		grunt.config.config = config;

		console.log('	✔ posts loaded [ ' + config.posts.length + ' ]');
	});
};
