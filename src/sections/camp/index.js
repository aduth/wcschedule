/**
 * External dependencies
 */
import { createElement } from 'preact';
import { connect } from 'preact-redux';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import QuerySessions from 'components/query-sessions';
import { getSessions } from 'state/sessions/selectors';
import { getRouteParam } from 'state/route/selectors';
import { decode } from 'lib/entities';

function Camp( { sessions = [], camp, year } ) {
	return (
		<div>
			<QuerySessions
				camp={ camp }
				year={ year } />
			<ul>
				{ map( sessions, ( session ) => (
					<li key={ session.slug }>
						{ decode( session.title ) }
					</li>
				) ) }
			</ul>
		</div>
	);
}

export default connect( ( state ) => {
	const camp = getRouteParam( state, 'camp' );
	const year = Number( getRouteParam( state, 'year' ) );

	return {
		camp,
		year,
		sessions: getSessions( state, camp, year ),
	};
} )( Camp );
