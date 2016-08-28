/**
 * Internal dependencies
 */
import { getCampApiRoot } from 'lib/api';
import {
	SESSIONS_RECEIVE,
	SESSIONS_REQUEST,
	SESSIONS_REQUEST_FAILURE,
	SESSIONS_REQUEST_SUCCESS
} from 'state/action-types';

export function receiveSessions( camp, year, sessions ) {
	return {
		type: SESSIONS_RECEIVE,
		camp,
		year,
		sessions
	};
}

export function requestSessions( camp, year ) {
	return async ( dispatch ) => {
		dispatch( {
			type: SESSIONS_REQUEST,
			camp,
			year
		} );
		const apiRoot = getCampApiRoot( camp, year );

		try {
			const response = await fetch( `${ apiRoot }/posts/?type=wcb_session` );
			const sessions = await response.json();
			dispatch( receiveSessions( camp, year, sessions ) );
			dispatch( {
				type: SESSIONS_REQUEST_SUCCESS,
				camp,
				year
			} );
		} catch ( error ) {
			dispatch( {
				type: SESSIONS_REQUEST_FAILURE,
				error
			} );
		}
	};
}
