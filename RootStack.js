import { createStackNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Forgot from './src/screens/Forgot';
import Home from './src/screens/Home';
import Maps from './src/screens/Maps';

const RootStack = createStackNavigator(
	{
		Login: {
			screen: Login,
			navigationOptions: {
				header: null
			}
		},
		Register: {
			screen: Register,
			navigationOptions: {
				header: null
			}
		},
		Forgot: {
			screen: Forgot
		},
		Map: {
			screen: Maps
		},
		Home: {
			screen: Home,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: 'Home'
	}
);

export default RootStack;
