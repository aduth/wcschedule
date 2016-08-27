/**
 * External dependencies
 */
var webpack = require( 'webpack' ),
	WebpackDevServer = require( 'webpack-dev-server' ),
	config = require( './webpack.config.dev' );

new WebpackDevServer( webpack( config ), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	}
} ).listen( 3000, '127.0.0.1', function( err ) {
	if ( err ) {
		console.log( err );
	}

	console.log( 'Listening on port 3000' );
} );
