/**
 * External dependencies
 */

const webpack = require( 'webpack' );
const merge = require( 'lodash/merge' );

/**
 * Internal dependencies
 */

const common = require( './webpack.config.common' );

module.exports = merge( common, {
	entry: [
		'webpack-dev-server/client?/',
		'webpack/hot/only-dev-server',
	].concat( common.entry ),
	module: {
		loaders: common.module.loaders.concat( [
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		] ),
	},
	plugins: common.plugins.concat( [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	] ),
	cache: true,
	devtool: 'source-map',
} );
