import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../ScreenStyles/CreditsStyles';
import SubmitButton from '../Components/SubmitButton';

export default class Credits extends Component {
	constructor(props) {
		super(props);
		this.state = {
			credits: '5.50',
			available: '1.50'
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.amount}>
					<Image
						source={require('../assets/doller.png')}
						style={styles.dollar}
					/>
					<Text style={styles.money}>{this.state.credits}</Text>
				</View>
				<View style={styles.available}>
					<Text style={styles.desc}>Available to send</Text>
					<Text style={styles.availableMoney}>$ {this.state.available}</Text>
				</View>
				<SubmitButton
					title="SEND"
					position={styles.send}
					onPress={() => this.props.navigation.navigate('SendCredits')}
				/>
				<SubmitButton
					title="CONVERT"
					position={styles.convert}
					onPress={() => this.props.navigation.navigate('Convert')}
				/>
			</View>
		);
	}
}
