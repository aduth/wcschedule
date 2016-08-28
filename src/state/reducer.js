/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import camps from './camps/reducer';
import route from './route/reducer';
import sessions from './sessions/reducer';
import speakers from './speakers/reducer';

export default combineReducers( {
	camps,
	route,
	sessions,
	speakers
} );
