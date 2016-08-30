/**
 * External dependencies
 */
import { h } from 'preact';
import { connect } from 'preact-redux';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import QueryCamps from 'components/query-camps';
import Link from 'components/link';
import { getCamps } from 'state/camps/selectors';

function Home( { camps } ) {
	return (
		<div>
			<QueryCamps />
			<ul>
				{ map( camps, ( camp ) => (
					<li key={ camp.slug }>
						<Link href={ `/camp/${ camp.year }/${ camp.subdomain }` }>
							{ camp.title }
						</Link>
					</li>
				) ) }
			</ul>
		</div>
	);
}

export default connect( ( state ) => {
	return {
		camps: getCamps( state )
	};
} )( Home );
