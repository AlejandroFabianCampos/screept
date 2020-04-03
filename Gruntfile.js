require('dotenv').config()

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-screeps');

  grunt.initConfig({
      screeps: {
          options: {
              email: process.env.ACCOUNT_EMAIL,
              password: process.env.ACCOUNT_PASSWORD,
              branch: process.env.BRANCH,
              ptr: false
          },
          dist: {
              src: ['dist/*.js']
          }
      }
  });
}