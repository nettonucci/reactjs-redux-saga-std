const INITIAL_STATE = {
	data: [],
	loading: false,
};

export default function banners(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'REQUEST_GET_BANNERS':
			return { ...state, loading: true };
		case 'SUCCESS_GET_BANNERS':
			return { data: action.banners, loading: false };
		default:
			return state;
	}
}
