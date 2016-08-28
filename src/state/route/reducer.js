/**
 * External dependencies
 */
import {
	NAVIGATE,
	REPLACE
} from 'redux-routing/constants';
import { match } from 'redux-routing';

/**
 * Internal dependencies
 */
import routes from 'routes';

export default function( state = {}, action ) {
	switch ( action.type ) {
		case NAVIGATE:
		case REPLACE:
			return match( action.href, routes );
	}

	return state;
}
