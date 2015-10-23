var _ = require('underscore');

var exports = module.exports = function (config) {
	config.posts = _.sortBy(config.posts, function (post) {
		var date = post.date;
		var dateNumber = date.split('/').join('');

		return -dateNumber;
	});

	console.log('	✔ posts ordered by [date DESC] [ ' + config.posts.length + ' ]');
};
