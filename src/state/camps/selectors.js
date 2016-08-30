export function isRequestingCamps( state ) {
	return state.camps.requesting;
}

export function getCamps( state ) {
	return state.camps.items;
}
