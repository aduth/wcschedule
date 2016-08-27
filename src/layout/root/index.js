/**
 * External dependencies
 */
import { h } from 'preact';
import { Provider, connect } from 'preact-redux';
import { match } from 'redux-routing';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import App from 'layout/app';
import routes from 'routes';
import { getCurrentRouteUrl } from 'state/route/selectors';

function Root( { Route, store } ) {
	return (
		<Provider store={ store }>
			<App><Route /></App>
		</Provider>
	);
}

export default connect( ( state ) => {
	const route = match( getCurrentRouteUrl( state ), routes );

	return {
		Route: get( route, 'handler' )
	};
} )( Root );
