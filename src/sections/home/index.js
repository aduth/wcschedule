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
import { getCamps } from 'state/camps/selectors';

function Home( { camps } ) {
	return (
		<div>
			<QueryCamps />
			<ul>
				{ map( camps, ( camp ) => (
					<li key={ camp.slug }>
						{ camp.title }
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
