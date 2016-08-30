/**
 * External dependencies
 */
import { Component } from 'preact';
import { connect } from 'preact-redux';

/**
 * Internal dependencies
 */
import { requestCamps } from 'state/camps/actions';
import { isRequestingCamps } from 'state/camps/selectors';

class QueryCamps extends Component {
	componentDidMount() {
		if ( ! this.props.requesting ) {
			this.props.requestCamps();
		}
	}

	render() {
		return null;
	}
}

export default connect(
	( state ) => {
		return {
			isRequesting: isRequestingCamps( state )
		};
	},
	{ requestCamps }
)( QueryCamps );
