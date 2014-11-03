/* jshint globalstrict: true */

'use strict';

module.exports = function(grunt) {

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env
  };

  require('load-grunt-tasks')(grunt);

  // Load task options from tasks/options/
  function loadConfig(path) {
    var glob = require('glob');
    var key;
    var obj = {};

    glob.sync('*', { cwd: path }).forEach(function(option) {
      var key = option.replace(/\.js$/, '');
      obj[key] = require(path + option);
    });

    return obj;
  }

  grunt.util._.extend(config, loadConfig('./tasks/options/'));
 
  grunt.initConfig(config);

  grunt.loadTasks('tasks');

  grunt.registerTask('default', 'helloWorld');

};
 