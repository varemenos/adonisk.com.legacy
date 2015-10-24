var rmdir = require('rimraf');

var clean = function (config) {
	try {
		rmdir.sync(config.pwd + config.dist + config.path.blog);
	} catch (e) {}
};

var exports = module.exports = clean;
