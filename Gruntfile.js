module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            expanded: {
                options: {
                    style:'expanded'
                },
                files: {
                    'stylesheets/application.css': ['sass/application.scss']
                }
            }
        },
        cssmin: {
            minify: {
                files:[{
                    src: 'stylesheets/application.css',
                    dest: 'stylesheets/application.min.css'
                }],
                options: {
                    report:'min',
                    keepSpecialComments: 0
                }
            }
        },
        watch: {
            styles: {
                files: ['sass/**/*.scss'],
                tasks: ['compile-css']
            }
        },
		compress: {
			main: {
				options: {
					archive: 'minelab.tar.gz',
					pretty: true,
				},
				expand: true,
				src: [
					'fonts/**',
					'images/**',
					'javascripts/**',
					'stylesheets/**',
					'README.md'
				],
				dest: '/minelab'
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['compile-css']);
    grunt.registerTask('compile-css', ['sass', 'cssmin']);
    grunt.registerTask('dist', ['compile-css', 'compress']);
};
