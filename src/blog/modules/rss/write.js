var path = require('path');
var fs = require('fs');

var write = function (config) {
	var writePath = path.resolve(config.pwd + config.dist + config.path.blog + '/rss.xml');
	var xml = config.feed.xml({indent: true});
	fs.writeFileSync(writePath, xml);
};

var exports = module.exports = write;
