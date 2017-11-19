/**
 * External dependencies
 */
import { createElement } from 'preact';
import { Provider, connect } from 'preact-redux';

/**
 * Internal dependencies
 */
import App from 'layout/app';
import { getRouteHandler } from 'state/route/selectors';

function Root( { Route, store } ) {
	return (
		<Provider store={ store }>
			<App><Route /></App>
		</Provider>
	);
}

export default connect( ( state ) => {
	return {
		Route: getRouteHandler( state ),
	};
} )( Root );
