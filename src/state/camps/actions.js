/**
 * Internal dependencies
 */
import {
	CAMPS_RECEIVE,
	CAMPS_REQUEST,
	CAMPS_REQUEST_FAILURE,
	CAMPS_REQUEST_SUCCESS,
} from 'state/action-types';
import { CAMPS_SOURCE } from 'constant';

export function receiveCamps( camps ) {
	return {
		type: CAMPS_RECEIVE,
		camps,
	};
}

export function requestCamps() {
	return async ( dispatch ) => {
		dispatch( { type: CAMPS_REQUEST } );

		try {
			const response = await fetch( CAMPS_SOURCE );
			const camps = await response.json();
			dispatch( receiveCamps( camps ) );
			dispatch( { type: CAMPS_REQUEST_SUCCESS } );
		} catch ( error ) {
			dispatch( {
				type: CAMPS_REQUEST_FAILURE,
				error,
			} );
		}
	};
}
