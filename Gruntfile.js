module.exports = (grunt) => {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel:{
      options:{
        sourceMap:true,
        presets:['env']
      },
      dist:{
        files:[{
          expand:true,
          cwd:'public/js/profile/controllers',
          src:['*.js'],
          dest:'public/js/profile/build',
          ext:'.js'
        },{
          expand:true,
          cwd:'client_admin/controllers',
          src:['*.js'],
          dest:'client_admin/build',
          ext:'.js'
        }]
      }
    },
    concat:{
      dist:{
        files:[{
          src:['public/js/profile/build/*.js'],
          dest:'public/js/profile/build/build.js'
        },{
          src:['client_admin/build/*.js'],
          dest:'client_admin/build/build.js'
        }]
      }
    },
    uglify:{
      js:{
        files:[{
          src:['public/js/profile/build/build.js'],
          dest:'public/js/profile/build/build.min.js'
        },{
          src:['client_admin/build/build.js'],
          dest:'client_admin/build/build.min.js'
        }]
      }
    },
    clean:{
      js:['client_admin/build/*.map','client_admin/build/*.js','!client_admin/build/build.min.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('run',['babel','concat','uglify:js','clean:js']);
}