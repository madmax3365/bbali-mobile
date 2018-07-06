import { GET_ERRORS } from '../actions/types';

const initialState = { error: false, message: '' };

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ERRORS:
			return { error: true, message: action.payload };
		default:
			return state;
	}
};
