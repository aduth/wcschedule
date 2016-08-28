export function getCampApiRoot( camp, year ) {
	return `https://${ year }.${ camp }.wordcamp.org/wp-json`;
}
