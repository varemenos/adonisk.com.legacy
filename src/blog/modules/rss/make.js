var Rss = require('rss');

var make = function (config) {
	config.feed = new Rss({
		title: 'Adonis K. Blog',
		description: '',
		language: 'en',
		categories: config.categories,
		feed_url: 'http://adonisk.com/blog/rss.xml',
		site_url: 'http://adonisk.com/blog/',
		image_url: 'http://adonisk.com/img/logo.jpg',
		pubDate: new Date()
	});
};

var exports = module.exports = make;
