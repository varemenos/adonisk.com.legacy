var post = require('./posts/post');
var index = require('./posts/index');

var posts = function (config) {
	post(config);
	index(config);
};

var exports = module.exports = posts;
