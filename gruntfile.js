module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          'public/stylesheets/application.css' : 'sass/application.scss'
        }
      }
    },

    uglify: {
          dist: {
            files: {
              'public/js/main.min.js' : 'javascripts/*'
            }
          }
        },

    watch: {
      source: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
