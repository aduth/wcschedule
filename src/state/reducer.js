/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import route from './route/reducer';
import sessions from './sessions/reducer';
import speakers from './speakers/reducer';

export default combineReducers( {
	route,
	sessions,
	speakers
} );
