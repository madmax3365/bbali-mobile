import React, { Component } from 'react';
import RootStack from './RootStack';
import Splash from './src/Components/Splash';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<Splash />} persistor={persistor}>
					<RootStack />
				</PersistGate>
			</Provider>
		);
	}
}
