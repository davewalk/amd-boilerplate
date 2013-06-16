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
		}
	});

	grunt.registerTask('server', ['open:dev','connect']);

	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-contrib-connect');	
};