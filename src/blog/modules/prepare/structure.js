var fs = require('fs');

var structure = function (config) {
	try {
		fs.mkdirSync(config.pwd + config.dist + config.path.blog);
	} catch (e) {}
};

var exports = module.exports = structure;
