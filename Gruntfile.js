module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        bower: {
            dev: {
                dest: 'dist/js/lib/'
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['*.js', '!*.min.js'],
                    dest: 'dist/js',
                    extDot: 'last'
                }]
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css',
                    extDot: 'last'
                }]
            }
        },
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/js',
                    src: ['*.js', '!*.min.js'],
                    dest: 'dist/js',
                    ext: '.min.js',
                    extDot: 'last'
                }]
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'src/scss/',
                    cssDir: 'dist/css/'
                }
            }
        },
        watch: {
            all: {
                files: ['**/*.html', '**/*.js', '**/*.css'],
                options: {
                    livereload: true
                }
            },
            scripts: {
              files: 'src/**/*.js',
              tasks: ['copy:dist', 'uglify:dist']
            },
            styles: {
              files: 'src/**/*.scss',
              tasks: ['compass:dist', 'cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask("default", ["copy", "compass", "cssmin", "uglify"]);
};