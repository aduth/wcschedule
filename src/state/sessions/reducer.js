/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import {
	SESSIONS_RECEIVE,
	SESSIONS_REQUEST,
	SESSIONS_REQUEST_FAILURE,
	SESSIONS_REQUEST_SUCCESS
} from 'state/action-types';

export function requesting( state = {}, action ) {
	const { type } = action;
	switch ( type ) {
		case SESSIONS_REQUEST:
		case SESSIONS_REQUEST_FAILURE:
		case SESSIONS_REQUEST_SUCCESS:
			const { camp, year } = action;
			return {
				...state,
				[ camp ]: {
					...state[ camp ],
					[ year ]: SESSIONS_REQUEST === type
				}
			};
	}

	return state;
}

export function items( state = {}, action ) {
	switch ( action.type ) {
		case SESSIONS_RECEIVE:
			const { camp, year, sessions } = action;
			return {
				...state,
				[ camp ]: {
					...state[ camp ],
					[ year ]: sessions
				}
			};
	}

	return state;
}

export default combineReducers( {
	requesting,
	items
} );
