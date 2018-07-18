import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Forgot from './src/screens/Forgot';
import { connect } from 'react-redux';
import Home from './src/screens/Home';
import PropTypes from 'prop-types';
import Reset from './src/screens/Reset';
import DrawerNavigation from './DrawerNavigation';
import Language from './src/screens/Language';
import HowTo from './src/screens/HowTo';

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

const InitialLaunch = createStackNavigator(
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
			screen: DrawerNavigation,
			navigationOptions: {
				header: null
			}
		},
		Home: {
			screen: Home,
			navigationOptions: {
				header: null
			}
		},
		HowTo: {
			screen: HowTo,
			navigationOptions: {
				header: null
			}
		},
		Language: {
			screen: Language,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: 'Language',
		transitionConfig
	}
);
const SecondLaunches = createStackNavigator(
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
			screen: DrawerNavigation,
			navigationOptions: {
				header: null
			}
		},
		Home: {
			screen: Home,
			navigationOptions: {
				header: null
			}
		},
		HowTo: {
			screen: HowTo,
			navigationOptions: {
				header: null
			}
		},
		Language: {
			screen: Language,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: 'HowTo',
		transitionConfig
	}
);

class RootStack extends Component {
	render() {
		return this.props.auth.initialLaunch ? (
			<InitialLaunch />
		) : (
			<SecondLaunches />
		);
	}
}
RootStack.propTypes = {
	auth: PropTypes.object
};
const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(RootStack);
