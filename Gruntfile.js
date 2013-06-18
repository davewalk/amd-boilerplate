var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
	
	var appConfig = {
		dev: 'app',
		prod: 'dist'
	};

	grunt.initConfig({
		app: appConfig,
		aws: grunt.file.readJSON('aws.json'),
		pkg: grunt.file.readJSON('package.json'),
		port: 9000,
		connect: {
			options: {
                port: 9000,
                hostname: 'localhost'
            },
			livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, 'app')
                        ];
                    }
                }
            }
		},
		watch: {
			livereload: {
				options: {
					livereload: 35729
				},
				files: ['<%= app.dev %>/*', '<%= app.dev %>/scripts/**/*', '<%= app.dev %>/styles/*.css']
			}
		},
		open: {
			dev: {
				path: 'http://localhost:<%= connect.options.port %>'
			}
		},
		jshint: {
			all: ['Gruntfile.js', '<%= app.dev %>/scripts/*.js', '<%= app.dev %>/scripts/**/*.js', 'test/*.js', '!<%= app.dev %>/scripts/vendor/**/*.js'],
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
		clean: {
			hooks: ['.git/hooks/pre-commit']
		},
		shell: {
			hooks: {
				command: 'cp git-hooks/pre-commit .git/hooks/'
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
						src: '<%= app.dev %>/scripts/collections/*',
						dest: 'scripts/collections'
					},
					{
						src: '<%= app.dev %>/scripts/models/*',
						dest: 'scripts/models'
					},
					{
						src: '<%= app.dev %>/scripts/templates/*',
						dest: 'scripts/templates'
					},
					{
						src: '<%= app.dev %>/scripts/views/*',
						dest: 'scripts/views'
					},
					{
						src: '<%= app.dev %>/scripts/app.js',
						dest: 'scripts/app.js'
					},
					{
						src: '<%= app.dev %>/scripts/boilerplate.js',
						dest: 'scripts/boilerplate.js'
					},
					{
						src: '<%= app.dev %>/scripts/router.js',
						dest: 'scripts/router.js'
					},
					{
						src: '<%= app.dev %>/scripts/main.js',
						dest: 'scripts/main.js'
					},
					{
						src: '<%= app.dev %>/index.html',
						dest: 'index.html'
					},
					{
						src: '<%= app.dev %>/styles/*.css',
						dest: 'styles'
					}

				]
			}
		}
	});

	grunt.registerTask('server', ['connect:livereload','open:dev','watch']);
	grunt.registerTask('test', ['jshint','mocha:dev']);
	grunt.registerTask('deploy', ['s3']);

	grunt.registerTask('loadhook', ['clean:hooks', 'shell:hooks']);

	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-s3');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-shell');
};