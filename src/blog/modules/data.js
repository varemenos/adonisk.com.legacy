var posts = require('./data/posts');
var metadata = require('./data/metadata');
var sort = require('./data/sort');
var content = require('./data/content');
var titles = require('./data/titles');
var descriptions = require('./data/descriptions');
var categories = require('./data/categories');

var data = function (config) {
	posts(config);
	metadata(config);
	sort(config);
	content(config);
	titles(config);
	descriptions(config);
	categories(config);
};

var exports = module.exports = data;
