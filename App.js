import React, { Component } from 'react';
import RootStack from './RootStack';
import Splash from './src/Components/Splash';
import { Provider } from 'react-redux';
import store from './Redux/store';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}
	componentDidMount() {
		setTimeout(() => this.setState({ loaded: true }), 3000);
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
