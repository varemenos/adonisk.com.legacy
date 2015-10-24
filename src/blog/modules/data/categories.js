var _ = require('underscore');

var exports = module.exports = function (config) {
	var categories = [];
	config.posts.forEach(function (post) {
		post.categories.forEach(function (category) {
			categories.push(category);
		});
	});

	config.categories = _.uniq(categories);
};
