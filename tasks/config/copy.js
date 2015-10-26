module.exports = {
	assets: {
		files: [
			{
				expand: true,
				cwd: 'src/',
				src: 'CNAME',
				dest: 'dist/'
			},
			{
				expand: true,
				cwd: 'src/',
				src: 'favicon.ico',
				dest: 'dist/'
			}
		]
	}
};
