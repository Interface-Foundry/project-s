const webpackConfig = require('./webpack/webpack.config.js');

module.exports = (config) => {
  	config.set({

	    // Add any browsers here
	    browsers: ['PhantomJS'],
	    frameworks: ['jasmine'],

	    // The entry point for our test suite
	    basePath: '.',
	    files: [
	    	'tests.webpack.js'
	    ],
	    preprocessors: {
	      // Run this through webpack, and enable inline sourcemaps
	      'tests.webpack.js': ['webpack', 'sourcemap'],
	    },

	    webpack: {
	      	devtool: 'inline-source-map',
			module: {
				loaders: [
				  	{
				    	test: /\.(jsx|js)?$/,
				    	exclude: /node_modules/,
				    	loader: 'react-hot-loader/webpack!babel'
				  	},
					{
						test: /\.json$/,
						exclude: /node_modules/,
						loader: 'json-loader'
					},
				  	{
				    	test: /\.css$/,
				    	loader: 'style!css!autoprefixer?browsers=last 2 versions'
				  	}
				]
			},
			resolve: {
				extensions: ['', '.js', '.jsx', '.json']
			},
			externals: {
			  	'cheerio': 'window',
			  	'react/addons': true,
			  	'react/lib/ExecutionEnvironment': true,
			  	'react/lib/ReactContext': true
			}
	    },

	    client: {
	      	// log console output in our test console
	      	captureConsole: true
	    },

	    reporters: ['dots'],
	    singleRun: true, // exit after tests have completed

	    webpackMiddleware: {
	      	noInfo: true
	    },

	    // Webpack takes a little while to compile -- this manifests as a really
	    // long load time while webpack blocks on serving the request.
	    browserNoActivityTimeout: 60000, // 60 seconds

  	});
};