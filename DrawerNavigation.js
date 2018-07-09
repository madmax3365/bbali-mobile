import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Maps from './src/screens/Maps';
import Header from './src/Components/Header';
import Drawer from './src/Components/Drawer';

const deviceWidth = Dimensions.get('window').width;
const Home = createStackNavigator({
	Home: {
		screen: Maps,
		navigationOptions: ({ navigation }) => ({
			disableBack: true,
			header: <Header navigation={navigation} />
		})
	}
});
const DrawerNavigation = createDrawerNavigator(
	{
		Home: {
			screen: Home
		}
	},
	{ contentComponent: Drawer, drawerWidth: deviceWidth * 0.775 }
);
export default DrawerNavigation;
