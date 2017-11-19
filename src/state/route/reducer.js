/**
 * External dependencies
 */
import {
	NAVIGATE,
	REPLACE,
} from 'redux-routing/constants';
import { match, reducer } from 'redux-routing';

/**
 * Internal dependencies
 */
import routes from 'routes';

export default function( state = {}, action ) {
	state = reducer( state, action );

	switch ( action.type ) {
		case NAVIGATE:
		case REPLACE:
			return {
				...state,
				...match( action.href, routes ),
			};
	}

	return state;
}
