/**
 * Internal dependencies
 */
import {
	CAMPS_RECEIVE,
	CAMPS_REQUEST,
	CAMPS_REQUEST_FAILURE,
	CAMPS_REQUEST_SUCCESS
} from 'state/action-types';

export function receiveCamps( camps ) {
	return {
		type: CAMPS_RECEIVE,
		camps
	};
}

export function requestCamps() {
	return async ( dispatch ) => {
		dispatch( { type: CAMPS_REQUEST } );

		try {
			const url = 'https://central.wordcamp.org/wp-json/posts?type=wordcamp';
			const response = await fetch( url );
			const camps = await response.json();
			dispatch( receiveCamps( camps ) );
			dispatch( { type: CAMPS_REQUEST_SUCCESS } );
		} catch ( error ) {
			dispatch( {
				type: CAMPS_REQUEST_FAILURE,
				error
			} );
		}
	};
}
