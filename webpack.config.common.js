/**
 * External dependencies
 */
var webpack = require( 'webpack' ),
	HtmlWebpackPlugin = require( 'html-webpack-plugin' ),
	autoprefixer = require( 'autoprefixer' );

module.exports = {
	entry: [
		'whatwg-fetch',
		__dirname + '/src/index.js'
	],
	output: {
		path: __dirname + '/public',
		filename: 'app-[hash].js',
		publicPath: '/'
	},
	resolve: {
		modules: [ 'node_modules', 'src' ],
		extensions: [ '', '.js' ],
		alias: {
			'redux-routing': 'redux-routing/src'
		}
	},
	plugins: [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV )
		} ),
		new HtmlWebpackPlugin( {
			templateContent: '' +
				'<!DOCTYPE html>' +
				'<html>' +
				'<head>' +
					'<title>WordCamp Schedule</title>' +
				'</head>' +
				'<body>' +
				'<div id="app"></div>' +
				'</body>' +
				'</html>'
		} )
	],
	postcss: function() {
		return [ autoprefixer ];
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
					__dirname + '/src',
					__dirname + '/node_modules/redux-routing'
				],
				loader: 'babel',
				query: {
					cacheDirectory: true
				}
			}
		]
	}
};
