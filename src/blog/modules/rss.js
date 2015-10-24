var make = require('./rss/make');
var populate = require('./rss/populate');
var write = require('./rss/write');

var rss = function (config) {
	make(config);
	populate(config);
	write(config);
};

var exports = module.exports = rss;
