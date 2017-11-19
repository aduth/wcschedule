/**
 * External dependencies
 */

const webpack = require( 'webpack' );
const merge = require( 'lodash/merge' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

/**
 * Internal dependencies
 */

const common = require( './webpack.config.common' );

module.exports = merge( common, {
	output: {
		filename: 'app-[hash].min.js',
	},
	module: {
		loaders: common.module.loaders.concat( [
			{
				test: /\.scss$/,
				loaders: ExtractTextPlugin.extract( 'raw-loader!postcss-loader!sass-loader' ),
			},
		] ),
	},
	plugins: common.plugins.concat( [
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
	] ),
} );
