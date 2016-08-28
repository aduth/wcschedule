/**
 * External dependencies
 */
import { Component } from 'preact';
import { connect } from 'preact-redux';

/**
 * Internal dependencies
 */
import { requestSessions } from 'state/sessions/actions';
import { isRequestingSessions } from 'state/sessions/selectors';

class QuerySessions extends Component {
	componentDidMount() {
		this.request( this.props );
	}

	componentWillReceiveProps( nextProps ) {
		const { camp, year } = this.props;
		if ( camp !== nextProps.camp || year !== nextProps.year ) {
			this.request( nextProps );
		}
	}

	request( props ) {
		const { requesting, camp, year } = props;
		if ( ! requesting ) {
			props.requestSessions( camp, year );
		}
	}

	render() {
		return null;
	}
}

export default connect(
	( state, { camp, year } ) => {
		return {
			isRequesting: isRequestingSessions( state, camp, year )
		};
	},
	{ requestSessions }
)( QuerySessions );
