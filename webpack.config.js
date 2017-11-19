/**
 * External dependencies
 */

const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const config = {
	entry: [
		'whatwg-fetch',
		__dirname + '/src/index.js',
	],
	output: {
		path: __dirname + '/public',
		filename: 'app-[hash].js',
		publicPath: '/',
	},
	resolve: {
		modules: [ 'node_modules', 'src' ],
		alias: {
			'redux-routing': 'redux-routing/src',
		},
	},
	plugins: [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV ),
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
				'</html>',
		} ),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
					__dirname + '/src',
					__dirname + '/node_modules/redux-routing',
				],
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
				},
			},
		],
	},
};

if ( process.env.NODE_ENV === 'production' ) {
	config.output.filename = 'app-[hash].min.js';

	config.module.loaders.push( {
		test: /\.scss$/,
		loaders: ExtractTextPlugin.extract( 'raw-loader!postcss-loader!sass-loader' ),
	} );

	config.plugins.push(
		new webpack.LoaderOptionsPlugin( {
			minimize: true,
			debug: false,
		} ),
		new webpack.optimize.UglifyJsPlugin( {
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
			sourceMap: false,
		} ),
		new ExtractTextPlugin( {
			filename: 'app-[hash].min.css',
			allChunks: true,
		} ),
	);
} else {
	config.entry.unshift(
		'webpack-dev-server/client?/',
		'webpack/hot/only-dev-server',
	);

	config.devServer = {
		historyApiFallback: true,
		hot: true,
		port: 3000,
		publicPath: config.output.publicPath,
		stats: {
			colors: true,
		},
	};

	config.devtool = 'cheap-module-source-map';

	config.module.loaders.push( {
		test: /\.scss$/,
		loaders: [
			'style-loader',
			'css-loader',
			'postcss-loader',
			'sass-loader',
		],
	} );

	config.plugins.push(
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	);
}

module.exports = config;
