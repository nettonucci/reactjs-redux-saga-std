export function toggleUsers(name) {
	return {
		type: 'GET_USERS',
		name,
	};
}
