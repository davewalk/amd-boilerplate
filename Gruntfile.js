module.exports = function (grunt) {
	// Project configuration
	grunt.initConfig({
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
		}
	});

	grunt.registerTask('server', ['open:dev','connect']);
	grunt.registerTask('test', ['jshint','mocha:dev']);

	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
};