module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            demo: {
                options: {
                    open: true,
                    keepalive: true
                }
            }
        },
        bump: {
            options: {
                commit: true,
                commitFiles: ['bower.json', 'package.json'],
                commitMessage: 'Release v%VERSION%',
                createTag: true,
                files: ['bower.json', 'package.json'],
                push: true,
                pushTo: 'origin gh-pages',
                tagMessage: '',
                tagName: 'v%VERSION%'
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect']);

};
