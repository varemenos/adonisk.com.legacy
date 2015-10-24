var structure = require('./prepare/structure');
var clean = require('./prepare/clean');

var prepare = function (config) {
	clean(config);
	structure(config);
};

var exports = module.exports = prepare;
