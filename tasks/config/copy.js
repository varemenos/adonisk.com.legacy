module.exports = {
	assets: {
		files: [
			{
				expand: true,
				cwd: 'src/',
				src: 'CNAME',
				dest: 'dist/'
			}
		]
	}
};
