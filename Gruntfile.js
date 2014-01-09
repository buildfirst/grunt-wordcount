module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'tasks/**.js']
    },
    wordcount: {
      everything: {
        files: {
          src: ['**/*', '!node_modules/**']
        }
      },
      capped: {
        files: {
          src: ['**/*', '!node_modules/**']
        },
        options: {
          threshold: 30
        }
      }
    }
  });
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['wordcount']);
};
