module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true,
                precision: 5,
                outputStyle: 'expanded',
                noCache: false,
                spawn: false
            },
            dist: {
                files: {
                    'stylesheets/application.css': 'sass/application.scss',
                    'stylesheets/scm.css': 'sass/scm.scss'
                }
            }
        },
        cssmin: {
            minify: {
                files: [
                  {
                    src: 'stylesheets/application.css',
                    dest: 'stylesheets/application.min.css'
                  }, {
                    src: 'stylesheets/scm.css',
                    dest: 'stylesheets/scm.min.css'
                  }
                ],
                options: {
                    report:'min',
                    keepSpecialComments: 0
                }
            }
        },
        watch: {
            styles: {
                files: ['sass/**/*.scss'],
                tasks: ['sass']
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'minelab-ritz.tar.gz',
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
                dest: '/minelab-ritz'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['compile-css']);
    grunt.registerTask('compile-css', ['sass', 'cssmin']);
    grunt.registerTask('dist', ['compile-css', 'compress']);
};
