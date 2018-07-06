import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Forgot from './src/screens/Forgot';
import Home from './src/screens/Home';
import Maps from './src/screens/Maps';
import Reset from './src/screens/Reset';
import Header from './src/Components/Header';

const transitionConfig = () => {
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
			screen: Forgot,
			navigationOptions: {
				header: null
			}
		},
		Reset: {
			screen: Reset,
			navigationOptions: {
				header: null
			}
		},
		Map: {
			screen: Maps,
			navigationOptions: {
				disableBack: true,
				header: <Header />
			}
		},
		Home: {
			screen: Home,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: 'Home',
		transitionConfig
	}
);

export default RootStack;
