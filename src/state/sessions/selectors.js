/**
 * External dependencies
 */
import { get } from 'lodash';

export function isRequestingSessions( state, camp, year ) {
	return get( state.sessions.requesting, [ camp, year ], false );
}
