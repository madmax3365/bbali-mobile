import React from 'react';
import { Animated, Easing, Dimensions } from 'react-native';
import {
	createDrawerNavigator,
	createStackNavigator,
	createTopTabNavigator
} from 'react-navigation';
import Drawer from './src/Components/Drawer';
// Screens
import Maps from './src/screens/Maps';
import History from './src/screens/History';
import Charger from './src/screens/Charger';
import Settings from './src/screens/Settings';
import Share from './src/screens/Share';
import Mechanic from './src/screens/Mechanic';
import Credits from './src/screens/Credits';
import Admin from './src/screens/Admin';

// Headers
import Header from './src/Components/Header';
import ScreenHeader from './src/Components/ScreenHeader';
import SecondaryHeader from './src/Components/SecondaryHeader';
import AddVehicle from './src/screens/AddVehicle';
import Adress from './src/screens/Adress';
import UserSettings from './src/screens/UserSettings';
import QR from './src/screens/QR';
import Rent from './src/screens/Rent';
import Manage from './src/screens/Manage';

const deviceWidth = Dimensions.get('window').width;
export const transitionConfig = () => {
	return {
		transitionSpec: {
			duration: 250,
			easing: Easing.out(Easing.poly(4)),
			timing: Animated.timing,
			useNativeDriver: true
		},
		screenInterpolator: sceneProps => {
			const { position, layout, scene, index, scenes } = sceneProps;
			const toIndex = index;
			const thisSceneIndex = scene.index;
			const height = layout.initHeight;
			const width = layout.initWidth;

			const translateX = position.interpolate({
				inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
				outputRange: [width, 0, 0]
			});

			// Since we want the card to take the same amount of time
			// to animate downwards no matter if it's 3rd on the stack
			// or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
			const translateY = position.interpolate({
				inputRange: [0, thisSceneIndex],
				outputRange: [height, 0]
			});

			const slideFromRight = { transform: [{ translateX }] };
			const slideFromBottom = { transform: [{ translateY }] };

			const lastSceneIndex = scenes[scenes.length - 1].index;

			// Test whether we're skipping back more than one screen
			if (lastSceneIndex - toIndex > 1) {
				// Do not transoform the screen being navigated to
				if (scene.index === toIndex) return;
				// Hide all screens in between
				if (scene.index !== lastSceneIndex) return { opacity: 0 };
				// Slide top screen down
				return slideFromBottom;
			}

			return slideFromRight;
		}
	};
};
// Home
const Home = createStackNavigator(
	{
		Home: {
			screen: Maps,
			navigationOptions: ({ navigation }) => ({
				disableBack: true,
				header: <Header navigation={navigation} />
			})
		},
		Address: {
			screen: Adress,
			navigationOptions: ({ navigation }) => ({
				header: <ScreenHeader title="Address" navigation={navigation} />
			})
		},
		QR: {
			screen: QR,
			navigationOptions: ({ navigation }) => ({
				header: (
					<SecondaryHeader title="Pick up scooter" navigation={navigation} />
				)
			})
		},
		Rent: {
			screen: Rent,
			navigationOptions: ({ navigation }) => ({
				header: (
					<SecondaryHeader title="Rent a scooter" navigation={navigation} />
				)
			})
		}
	},
	{
		initialRouteName: 'Home',
		transitionConfig
	}
);
// History
const HistoryScreen = createStackNavigator({
	History: {
		screen: History,
		navigationOptions: ({ navigation }) => ({
			disableBack: true,
			header: <ScreenHeader title="My History" navigation={navigation} />
		})
	}
});
//Become a charger
const ChargerScreen = createStackNavigator({
	History: {
		screen: Charger,
		navigationOptions: ({ navigation }) => ({
			disableBack: true,
			header: <ScreenHeader title="Become a charger" navigation={navigation} />
		})
	}
});
//Settings
const SettingsScreen = createStackNavigator(
	{
		Settings: {
			screen: Settings,
			navigationOptions: ({ navigation }) => ({
				disableBack: true,
				header: <ScreenHeader title="Settings" navigation={navigation} />
			})
		},
		UserSettings: {
			screen: UserSettings,
			navigationOptions: ({ navigation }) => ({
				header: <SecondaryHeader title="Settings" navigation={navigation} />
			})
		},
		Admin: {
			screen: Admin,
			navigationOptions: ({ navigation }) => ({
				header: <SecondaryHeader title="Admin" navigation={navigation} />
			})
		},
		Vehicle: {
			screen: AddVehicle,
			navigationOptions: ({ navigation }) => ({
				header: <SecondaryHeader title="Add vehicle" navigation={navigation} />
			})
		},
		Manage: {
			screen: Manage,
			navigationOptions: ({ navigation }) => ({
				header: <SecondaryHeader title="Manage Users" navigation={navigation} />
			})
		}
	},
	{
		initialRouteName: 'Settings',
		transitionConfig
	}
);
const ShareScreen = createStackNavigator({
	History: {
		screen: Share,
		navigationOptions: ({ navigation }) => ({
			disableBack: true,
			header: <ScreenHeader title="Share a free ride" navigation={navigation} />
		})
	}
});
const MechanicScreen = createStackNavigator({
	History: {
		screen: Mechanic,
		navigationOptions: ({ navigation }) => ({
			disableBack: true,
			header: <ScreenHeader title="Become a mechanic" navigation={navigation} />
		})
	}
});
const CreditsScreen = createStackNavigator({
	History: {
		screen: Credits,
		navigationOptions: ({ navigation }) => ({
			disableBack: true,
			header: <ScreenHeader title="My credits" navigation={navigation} />
		})
	}
});
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
		}
	},
	{
		contentComponent: Drawer,
		drawerWidth: deviceWidth * 0.775,
		initialRouteName: 'Home'
	}
);

export default DrawerNavigation;
