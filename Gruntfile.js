module.exports = function (grunt) {
	// Project configuration
	grunt.initConfig({
		aws: grunt.file.readJSON('aws.json'),
		pkg: grunt.file.readJSON('package.json'),
		port: 9000,
		connect: {
			server: {
				options: {
					port: 9000,
					keepalive: true,
					base: 'app/'
				}
			}
		},
		open: {
			dev: {
				path: 'http://localhost:<%= connect.server.options.port %>'
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'app/scripts/*.js', 'app/scripts/**/*.js', 'test/*.js', '!app/scripts/vendor/**/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		mocha: {
			dev: {
				src: ['testrunner.html'],
				run: false,
				options: {
					log: true,
					reporter: 'Spec'
				}
			}
		},
		s3: {
			options: {
				key: '<%= aws.key %>',
				secret: '<%= aws.secret %>',
				bucket: '<%= aws.bucket %>',
				access: 'public-read'
			},
			prod: {
				upload: [
					{
						src: 'app/scripts/collections/*',
						dest: 'scripts/collections'
					},
					{
						src: 'app/scripts/models/*',
						dest: 'scripts/models'
					},
					{
						src: 'app/scripts/templates/*',
						dest: 'scripts/templates'
					},
					{
						src: 'app/scripts/views/*',
						dest: 'scripts/views'
					},
					{
						src: 'app/scripts/app.js',
						dest: 'scripts/app.js'
					},
					{
						src: 'app/scripts/boilerplate.js',
						dest: 'scripts/boilerplate.js'
					},
					{
						src: 'app/scripts/router.js',
						dest: 'scripts/router.js'
					},
					{
						src: 'app/scripts/main.js',
						dest: 'scripts/main.js'
					},
					{
						src: 'app/index.html',
						dest: 'index.html'
					},
					{
						src: 'app/styles/*.css',
						dest: 'styles'
					}

				]
			}
		}	
	});

	grunt.registerTask('server', ['open:dev','connect']);
	grunt.registerTask('test', ['jshint','mocha:dev']);
	grunt.registerTask('deploy', ['s3'])

	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-s3');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
};