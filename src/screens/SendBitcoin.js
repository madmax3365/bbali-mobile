import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	Dimensions,
	View,
	TextInput,
	TouchableOpacity,
	Text
} from 'react-native';
import styles from '../ScreenStyles/SendBitcoinStyles';
import SubmitButton from '../Components/SubmitButton';

const deviceHeight = Dimensions.get('window').height;
export default class SendBitcoin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: '$'
		};
	}
	render() {
		return (
			<KeyboardAvoidingView
				keyboardVerticalOffset={-deviceHeight * 0.205289}
				contentContainerStyle={{ flex: 1 }}
				style={{ flex: 1 }}
				behavior="position"
				enabled>
				<View style={styles.container}>
					<Text style={styles.title}>Amount</Text>
					<TextInput
						keyboardType="numeric"
						value={this.state.amount}
						onChangeText={text => this.setState({ amount: text })}
						underlineColorAndroid="transparent"
						style={styles.input}
					/>
					<Text style={styles.fee}>
						<Text style={styles.bold}>Fee</Text> .001 BTC
					</Text>
					<TouchableOpacity style={styles.change}>
						<Text style={styles.changeText}>Change</Text>
					</TouchableOpacity>
					<SubmitButton title="SEND" position={styles.button} />
				</View>
			</KeyboardAvoidingView>
		);
	}
}
