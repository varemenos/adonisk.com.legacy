var fs = require('fs');
var path = require('path');

var exports = module.exports = function (config) {
	config.posts = [];

	var directory = fs.readdirSync(path.resolve(config.pwd + config.path.posts));

	directory.forEach(function (file) {
		var filetype = file.substr(-('.md').length);

		if (filetype === '.md') {
			config.posts.push({
				filename: file.replace('.md', '')
			});
		}
	});

	console.log('	✔ posts loaded [ ' + config.posts.length + ' ]');
};
