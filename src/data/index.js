var data = {
	title: 'Adonis K.',
	pretty: false,
	basedir: 'src/views'
};

data.blocks = require('./blocks');
data.subheader = require('./subheader');
data.navigation = require('./navigation');
data.projects = require('./projects');
data.blog = require('./blog');

exports = module.exports = data;
