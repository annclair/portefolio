'use strict'
exports.config = {
    paths: {
        watched: ['public'],
        public: 'public'
    },
    files: {
        javascripts: {
            joinTo: {
                'compil/js/vendor.min.js': /^node_modules/,
                'compil/js/app.min.js': /^public\/js/
            },
            order: {
                before: [
                    'node_modules/angular/*.js',
                    'public/js/app.js',
                    'public/js/**/*.md.js',
                    'public/js/components/**/*.js'
                ]
            }
        },
        stylesheets: {
            joinTo: {
                'compil/css/vendor.min.css': [],
                'compil/css/app.min.css': /^public\/scss/
            }
        }
    },
    npm: {
        enabled: true,
        compilers: ['angular', 'angular-ui-router', 'angular-materialize']
    },
    modules: {
        wrapper: false,
        definition: 'commonjs'
    },
    conventions: {
        ignored: ['public/**/*.min.js', 'public/css/*']
    },
    plugins: {
        copycat: {
            "js": ['node_modules/angular/angular.min.js',
            'node_modules/angular-ui-router/release/angular-ui-router.min.js'],
            verbose: true,
            onlyChanged: true
        },
        autoReload: {
            match: {
                javascripts: ['*.js']
            }
        }
    },
    overrides: {
        production: {
            sourceMaps: true,
            plugins: {
                autoReload: {
                    enabled: true
                }
            }
        }
    },
    server: {
        path: 'server.js',
        port: 8000,
        run: true
    }
}