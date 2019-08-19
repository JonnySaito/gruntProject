module.exports = function(grunt){
        // configuration
        grunt.initConfig({
            // pass in options to plugins, references to files, etc.
        });

        // load plugins
        grunt.loadNpmTasks('');

        // register tasks
        grunt.registerTask('run1', function(){
            console.log('task 1 is running');

        });
        grunt.registerTask('run2', function(){
            console.log('task 2 is running');

        });
}
