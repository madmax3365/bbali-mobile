import { TOGGLE_DRAWER } from './types';
// Register User
export const toggleDrawer = status => {
	return {
		type: TOGGLE_DRAWER,
		payload: status
	};
};
