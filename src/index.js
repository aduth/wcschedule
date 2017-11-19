/**
 * External dependencies
 */
import { createElement, render } from 'preact';
import { navigate } from 'redux-routing';

/**
 * Internal dependencies
 */
import configureStore from 'state';
import Root from 'layout/root';
import 'stylesheets/index.scss';

/**
 * Module variables
 */

const node = document.getElementById( 'app' );
const store = configureStore();
store.dispatch( navigate( window.location.href ) );

/**
 * Render
 */

function initialize() {
	render( <Root store={ store } />, node, node.lastChild );
}
initialize();

/**
 * Hot reloading
 */

if ( module.hot ) {
	module.hot.accept( 'layout/root', initialize );
}
