module.exports = function (grunt) {
  grunt.registerMultiTask('wordcount', function () {
    var options = this.options({
      threshold: 0
    });
    var running = 0;

    this.files.forEach(function (file) {
      file.src.forEach(function (src) {
        if (grunt.file.isDir(src)) {
          return;
        }
        var data = grunt.file.read(src);
        var words = count(data);
        running += words;
        grunt.verbose.writeln(src, 'contains', words, 'words.');
      });
    });

    if (options.threshold) {
      if (running > options.threshold) {
        grunt.log.error('Threshold of', options.threshold, 'exceeded. Found', running, 'words.');
        grunt.fail.warn('ETOOMANYWORDS');
      } else {
        grunt.log.ok(running, 'words found in total.');
      }
    } else {
      grunt.log.writeln(running, 'words found in total.');
    }
  });

  function count (data) {
    return data.split(/[^\w]+/g).length;
  }
};
