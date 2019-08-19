module.exports = function(grunt){
        // configuration
        grunt.initConfig({
            // pass in options to plugins, references to files, etc.
            jshint: {
              files: ['js/*.js'],
              options: {
                globals: {
                  jQuery: true
                }
              }
            },
            csslint: {
              strict: {
                options: {
                  import: 2
                },
                src: ['css/*.css']
              },
              lax: {
                options: {
                  import: false
                },
                src: ['css/*.css']
              }
            },
            cssmin: {
              options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
              },
              target: {
                files: {
                  'output.css': ['css/*.css']
                }
              }
            },
            watch: {
              files: ['<%= jshint.files %>'],
              tasks: ['jshint', 'csslint']
            }
        });

        // load plugins
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-csslint');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-watch');

        // register tasks
        grunt.registerTask('checkCSS', ['jshint']);
        grunt.registerTask('checkJS', ['jshint']);
        grunt.registerTask('minifyCSS', ['cssmin']);
        grunt.registerTask('runWatch', ['watch'])
}
