var fs = require('fs');
var marked = require('marked');

var exports = module.exports = function (config) {
	config.posts.forEach(function (post) {
		var postContent = fs.readFileSync(config.pwd + config.path.posts + post.filename + post.extension, 'utf8');
		post.content = postContent;
		post.rendered = marked(post.content.split('\n').splice(1).join('\n'));
	});

	console.log('	✔ content loaded [ ' + config.posts.length + ' ]');
};
