import { LOGIN_USER, REGISTER_USER, INITIAL_LAUNCH } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
	initialLaunch: true,
	isAuthenticated: false,
	user: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload
			};
		case REGISTER_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			};
		case INITIAL_LAUNCH:
			return {
				...state,
				initialLaunch: false
			};
		default:
			return state;
	}
};
