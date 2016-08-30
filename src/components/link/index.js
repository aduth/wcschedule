/**
 * External dependencies
 */
import { h } from 'preact';
import { connect } from 'preact-redux';

/**
 * Internal dependencies
 */
import { navigate } from 'state/route/actions';

function Link( props ) {
	function onNavigate( event ) {
		props.navigate( props.href );
		event.preventDefault();
	}

	return <a { ...props } onClick={ onNavigate } />;
}

export default connect( null, { navigate } )( Link );
