module.exports = function(grunt) {

    grunt.initConfig({
	    jshint: {
		    all: ['src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    _: false,
                    $: false,
                    jasmine: false,
                    describe: false,
                    it: false,
                    expect: false,
                    beforeEach: false,
                    afterEach: false,
					module: false,
					inject: false
                },
                browser: true,
                devel: true
            }
        },
        testem: {
		unit: {
			options: {
				framework: 'jasmine2',
				launch_in_dev: ['PhantomJS'],
				launch_in_ci: ['PhantomJS'],
				before_tests: 'grunt jshint',
				serve_files: [
					'node_modules/lodash/lodash.js',
					'node_modules/jquery/dist/jquery.js',
					//'angular.js',
					//'angular-mock.js',
					'lib/angular.js',
					'lib/angular-mocks.js',
					'src/**/*.js',
					'test/**/*.js'
				],
				watch_files: [
					'src/**/*.js',
					'test/**/*.js'
				]
			}
		}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-testem');
    grunt.registerTask('dev', ['testem:run:unit']);
    grunt.registerTask('default', ['testem:ci:unit']);
};
