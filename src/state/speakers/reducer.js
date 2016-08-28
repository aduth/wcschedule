/**
 * External dependencies
 */
import { combineReducers } from 'redux';
import { map, keyBy, pick } from 'lodash';

/**
 * Internal dependencies
 */
import { SESSIONS_RECEIVE } from 'state/action-types';

function items( state = {}, action ) {
	switch ( action.type ) {
		case SESSIONS_RECEIVE:
			const { camp, year, sessions } = action;
			return {
				...state,
				[ camp ]: {
					...state[ camp ],
					[ year ]: keyBy( map( sessions, ( session ) => {
						return pick( session.speaker, 'title', 'slug' );
					} ), 'slug' )
				}
			};
	}

	return state;
}

export default combineReducers( {
	items
} );
