/* jshint globalstrict: true */

'use strict';

module.exports = {
  options: {
    globals: {
      module: true,
      process: true,
      require: true
    }
  },
  allFiles: [
    'Gruntfile.js',
    'tasks/**/*.js'
  ]
};