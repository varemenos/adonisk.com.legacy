var path = require('path');
var fs = require('fs');
var jade = require('jade');
var marked = require('marked');

var exports = module.exports = function (config) {
	var build = function (post) {
		var postPath = path.resolve(config.pwd + config.dist + config.path.posts + post.filename + '.html');
		fs.writeFileSync(postPath, post.rendered, 'utf8');
	};

	var layout = function () {
		var data = require('../../../src/data.json');
		data.icons = require('../../../dist/libs/icons.json');

		config.posts.forEach(function (post) {
			data.post = post;

			var result = jade.renderFile('src/views/public/blog/post.jade', data);

			post.rendered = result;

			build(post);
		});
	};

	layout();
};
