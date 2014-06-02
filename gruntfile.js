module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        scsslint: {
            options: {
                config: 'static/scss/.scss-lint.yml',
                colorizeOutput: true // On Windows, run: `gem install windows-pr win32console`
            },
            build: [
                'static/scss/**/*.scss'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-scss-lint');

    grunt.registerTask('default', ['scsslint']);

};
