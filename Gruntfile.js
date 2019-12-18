module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './dist',
          src: ['all.css'],
          dest: './dist',
          ext: '.min.css'
        }]
      }
    },
    concat_css: {       
      all: {
        src: ['./css/*.css'],
        dest: './dist/all.css'
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['./js/*.js'],
        dest: './dist/main.js',
      }
    },
    uglify: {
        my_target: {
          files: {
            'dist/main.min.js': ['./dist/main.js']
          }
        }
      },
  });

  // Register packages
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-concat-css');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat_css', 'cssmin', 'concat', 'uglify']);
};