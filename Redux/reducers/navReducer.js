import { TOGGLE_DRAWER } from '../actions/types';

const initialState = { drawerOpened: false };

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_DRAWER:
			return { drawerOpened: action.payload };
		default:
			return state;
	}
};
