const INITIAL_STATE = '';

export default function emails(state = INITIAL_STATE, action) {
	if (action.type === 'GET_EMAILS') {
		return action.email;
	}
	return state;
}
