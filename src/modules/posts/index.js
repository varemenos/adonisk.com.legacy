var fs = require('fs');
var path = require('path');
var jade = require('jade');

var exports = module.exports = function (config) {
	var build = function (posts) {
		var data = require('../../../src/data.json');
		data.icons = require('../../../dist/libs/icons.json');
		data.posts = posts;

		var indexContent = jade.renderFile('src/views/public/blog/index.jade', data);

		fs.writeFileSync(path.resolve(config.pwd + config.dist + config.path.posts + '/index.html'), indexContent, 'utf8');
	};

	build(config.posts);
};
