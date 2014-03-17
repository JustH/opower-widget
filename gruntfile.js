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
              'public/js/main.min.js' : ['javascripts/vendor/fastclick.js', 'javascripts/vendor/foundation.min.js', 'javascripts/vendor/Chart.js', 'javascripts/vendor/jquery.svg.js', 'javascripts/vendor/jquery.svgdom.js', 'javascripts/*.js']
            }
          }
        },

    watch: {
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      },

      js: {
        files: ['javascripts/*.js'],
        tasks: ['uglify'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass', 'uglify']);
  grunt.registerTask('heroku', ['sass', 'uglify']);
};
