import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/BookingStyles';

export default class Booking extends Component {
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	}

	handleBackPress = () => {
		this.props.navigation.goBack();
		return true;
	};
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}
	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.title}>Booking Type : Hours</Text>
				<View style={styles.container} />
				<SubmitButton
					position={styles.button}
					title="CONFIRM"
					onPress={() => this.props.navigation.navigate('QR')}
				/>
			</View>
		);
	}
}
