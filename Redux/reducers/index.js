import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import navReducer from './navReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorsReducer,
	nav: navReducer
});
