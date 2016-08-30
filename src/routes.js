/**
 * External dependencies
 */
import { route } from 'redux-routing';

/**
 * Internal dependencies
 */
import Home from 'sections/home';
import Camp from 'sections/camp';

export default [
	route( '/', Home ),
	route( '/camp/:year/:camp', Camp )
];
