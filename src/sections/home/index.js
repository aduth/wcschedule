/**
 * External dependencies
 */
import { h } from 'preact';
import { connect } from 'preact-redux';

/**
 * Internal dependencies
 */
import QuerySessions from 'components/query-sessions';
import { getSessions } from 'state/sessions/selectors';

function Home( { sessions = [] } ) {
	return (
		<div>
			<QuerySessions
				camp="cincinnati"
				year={ 2016 } />
			<ul>
				{ sessions.map( ( session ) => (
					<li key={ session.id }>
						{ session.title }
					</li>
				) ) }
			</ul>
		</div>
	);
}

export default connect( ( state ) => {
	return {
		sessions: getSessions( state, 'cincinnati', 2016 )
	};
} )( Home );
