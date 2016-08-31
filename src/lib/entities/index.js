const getElement = ( () => {
	let element;
	return function() {
		if ( ! element ) {
			let doc = document;
			if ( doc.implementation && doc.implementation.createHTMLDocument ) {
				doc = doc.implementation.createHTMLDocument( '' );
			}

			element = doc.createElement( 'textarea' );
		}

		return element;
	};
} )();

export function decode( text ) {
	const element = getElement();
	element.innerHTML = text;
	return element.textContent;
}
