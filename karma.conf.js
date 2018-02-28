const webpackConf = require('./webpack.conf')

module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files:[
            {pattern: 'node_modules/stencil-components/dist/aepp-components/**/*', included:false, served:true},
            'node_modules/stencil-components/dist/aepp-components.js',
            'src/**/*.test.js'
        ],
        preprocessors: {
            'src/**/*.test.js': [ 'webpack', 'sourcemap' ],
            'src/**/*.vue': [ 'webpack', 'sourcemap' ]
        },
        webpack:webpackConf,
        browsers: ['Firefox']
    });
};