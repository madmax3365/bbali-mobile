import {
	LOGIN_USER,
	REGISTER_USER,
	INITIAL_LAUNCH,
	GET_USER_LOCATION,
	GET_USER_ADDRESS
} from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
	initialLaunch: true,
	isAuthenticated: false,
	user: {
		address: '',
		location: {}
	}
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
		case GET_USER_LOCATION:
			state.user.location = action.payload;
			return state;
		case GET_USER_ADDRESS:
			state.user.address = action.payload;
			return state;
		default:
			return state;
	}
};
