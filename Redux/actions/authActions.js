import axios from 'axios';
import { REGISTER_USER, GET_ERRORS, LOGIN_USER } from './types';
import { NavigationActions } from 'react-navigation';
// Register User
export const registerUser = userData => dispatch => {
	axios
		.post('http://api.bbali.io/authorization/signup', userData)
		.then(res => {
			userData.token = res.data.data.token;
			return {
				type: REGISTER_USER,
				payload: {
					email: userData.email,
					token: res.data.data.token
				}
			};
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data.data.message
			})
		);
};

// Login - Get User JWT
export const loginUser = userData => dispatch => {
	axios
		.post('http://api.bbali.io/authorization/login', userData)
		.then(res => {
			dispatch(NavigationActions.navigate({ routeName: 'Route' }));
			return {
				type: LOGIN_USER,
				payload: {
					email: userData.email,
					token: res.data.data.token
				}
			};
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data.data.message
			})
		);
};
