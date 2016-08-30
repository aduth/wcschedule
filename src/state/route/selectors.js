export function getRouteHandler( state ) {
	return state.route.handler;
}

export function getRouteParams( state ) {
	return state.route.params || {};
}

export function getRouteParam( state, key ) {
	return getRouteParams( state )[ key ];
}
