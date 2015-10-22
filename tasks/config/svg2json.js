module.exports = {
	dist: {
		files: {
			'dist/libs/icons.json': [
				'home',
				'user',
				'tasks',
				'cogs',
				'comments',
				'github',
				'codepen',
				'deviantart',
				'twitter',
				'linkedin',
				'angle-up'
			].map(function (icon) {
				return 'src/libs/Font-Awesome-SVG-PNG/white/svg/' + icon + '.svg';
			})
		}
	}
};
