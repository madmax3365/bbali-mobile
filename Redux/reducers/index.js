import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import navReducer from './navReducer';
import screenDataReducer from './screenDataReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorsReducer,
	nav: navReducer,
	screen: screenDataReducer
});
