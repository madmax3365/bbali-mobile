import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Drawer from './src/Components/Drawer';
import {
	Home,
	HistoryScreen,
	ChargerScreen,
	SettingsScreen,
	ShareScreen,
	MechanicScreen,
	CreditsScreen,
	FeedbackScreen
} from './SecondaryNavigator';

const deviceWidth = Dimensions.get('window').width;

const DrawerNavigation = createDrawerNavigator(
	{
		Home: {
			screen: Home
		},
		History: {
			screen: HistoryScreen
		},
		Charger: {
			screen: ChargerScreen
		},
		Settings: {
			screen: SettingsScreen
		},
		Share: {
			screen: ShareScreen
		},
		Mechanic: {
			screen: MechanicScreen
		},
		Credits: {
			screen: CreditsScreen
		},
		Feedback: {
			screen: FeedbackScreen
		}
	},
	{
		contentComponent: Drawer,
		drawerWidth: deviceWidth * 0.775,
		initialRouteName: 'Home'
	}
);

export default DrawerNavigation;
