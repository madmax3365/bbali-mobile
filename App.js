import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import RootStack from './RootStack';
import Splash from './src/Components/Splash';
import { Provider } from 'react-redux';
import store from './Redux/store';

export default class App extends Component {
	constructor(props) {
		super(props);
		this._retrieveData();
		this.state = {
			loaded: true,
			initial: true
		};
	}
	_storeData = async () => {
		try {
			await AsyncStorage.setItem('@BbaliStore:initialLoad', 'false');
		} catch (error) {
			console.log(error);
		}
	};

	_retrieveData = async () => {
		try {
			const value = await AsyncStorage.getItem('@BbaliStore:initialLoad');
			console.log(value);
			if (value !== null) {
				// We have data!!
				this.setState({ initial: value });
			} else return true;
		} catch (error) {
			console.log(error);
		}
	};

	componentDidMount() {
		setTimeout(() => this.setState({ loaded: true }), 3000);
		this._storeData();
	}
	render() {
		return this.state.loaded ? (
			<Provider store={store}>
				<RootStack />
			</Provider>
		) : (
			<Splash />
		);
	}
}
