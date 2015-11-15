var fs = require('fs');
var path = require('path');

var prepare = require('./modules/prepare');
var data = require('./modules/data');
var posts = require('./modules/posts');
var rss = require('./modules/rss');

var pwd = process.cwd() + '/src';

var projectConfig = require(pwd + '/data/');
config = projectConfig.blog;
config.pwd = pwd;

module.exports = exports = function () {
	prepare(config);
	data(config);
	posts(config);
	rss(config);
};
