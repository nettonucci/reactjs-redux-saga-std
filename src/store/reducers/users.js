const INITIAL_STATE = '';

export default function users(state = INITIAL_STATE, action) {
	if (action.type === 'GET_USERS') {
		return action.name;
	}
	return state;
}
