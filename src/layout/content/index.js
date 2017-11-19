/**
 * External dependencies
 */
import { createElement } from 'preact';

export default function Content( { children } ) {
	return (
		<div className="content">
			{ children }
		</div>
	);
}
