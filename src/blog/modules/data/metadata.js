var fs = require('fs');
var path = require('path');
var _ = require('underscore');

var exports = module.exports = function (config) {
	config.posts.forEach(function (post) {
		var metadataFile = fs.readFileSync(path.resolve(config.pwd + config.path.posts + post.filename + '.json'), 'utf8');

		var metadata = JSON.parse(metadataFile);

		metadata.extension = '.md';
		metadata.path = './' + post.filename + '.html';
		metadata.image = './' + post.image;
		post = _.extend(post, metadata);
	});
};
