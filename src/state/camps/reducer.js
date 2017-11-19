/**
 * External dependencies
 */
import { combineReducers } from 'redux';
import { keyBy } from 'lodash';

/**
 * Internal dependencies
 */
import {
	CAMPS_RECEIVE,
	CAMPS_REQUEST,
	CAMPS_REQUEST_FAILURE,
	CAMPS_REQUEST_SUCCESS,
} from 'state/action-types';

function requesting( state = false, action ) {
	switch ( action.type ) {
		case CAMPS_REQUEST:
		case CAMPS_REQUEST_FAILURE:
		case CAMPS_REQUEST_SUCCESS:
			return CAMPS_REQUEST === action.type;
	}

	return state;
}

function items( state = {}, action ) {
	switch ( action.type ) {
		case CAMPS_RECEIVE:
			return {
				...state,
				...keyBy( action.camps, 'slug' ),
			};
	}

	return state;
}

export default combineReducers( {
	requesting,
	items,
} );
