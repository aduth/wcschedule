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
	devServer: {
		historyApiFallback: true,
		hot: true,
		port: 3000,
		publicPath: common.output.publicPath,
		stats: {
			colors: true,
		},
	},
	plugins: common.plugins.concat( [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	] ),
	cache: true,
	devtool: 'source-map',
} );
