import React, { Component } from 'react';
import { View } from 'react-native';
import RootStack from './RootStack';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
	componentDidMount() {
		SplashScreen.hide();
	}
	render() {
		return <RootStack />;
	}
}
