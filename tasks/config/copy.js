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
			},
			{
				expand: true,
				cwd: 'src/libs/ace-builds/src-min-noconflict',
				src: '**/*',
				dest: 'dist/libs/ace/'
			}
		]
	}
};
