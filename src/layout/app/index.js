/**
 * External dependencies
 */
import { createElement } from 'preact';

/**
 * Internal dependencies
 */
import MasterBar from 'layout/master-bar';
import Content from 'layout/content';

export default function App( { children } ) {
	return (
		<main className="app">
			<MasterBar />
			<Content>
				{ children }
			</Content>
		</main>
	);
}
