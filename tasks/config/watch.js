module.exports = {
	views: {
		files: [
			'src/views/**/*.jade',
			'src/data.json',
			'tasks/config/svg2json.js'
		],
		tasks: ['views'],
		reload: true
	},
	style: {
		files: [
			'src/scss/style.scss',
			'src/scss/blog.scss'
		],
		tasks: ['style'],
		reload: true
	},
	script: {
		files: [
			'src/js/**/*.js'
		],
		tasks: ['script'],
		reload: true
	},
	blog: {
		files: [
			'src/blog/posts/**/*.md'
		],
		tasks: ['build']
	},
	configs: {
		files: [
			'tasks/**/*.js',
			'Gruntfile.js'
		],
		reload: true
	}
};
