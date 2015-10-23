var rmdir = require('rimraf');

var clean = function (config) {
	try {
		rmdir.sync(config.pwd + config.dist + '/blog/');
		console.log('	✔ cleaned dist');
	} catch (e) {
		throw e;
	}
};

var exports = module.exports = clean;
