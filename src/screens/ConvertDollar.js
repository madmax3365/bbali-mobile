import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	Dimensions,
	View,
	TextInput,
	Text
} from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/ConvertDollarStyles';

const deviceHeight = Dimensions.get('window').height;
export default class ConvertDollar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: '$10'
		};
	}
	render() {
		return (
			<KeyboardAvoidingView
				keyboardVerticalOffset={-deviceHeight * 0.105289}
				contentContainerStyle={{ flex: 1 }}
				style={{ flex: 1 }}
				behavior="position"
				enabled>
				<View style={styles.container}>
					<Text style={styles.title}>Amount to convert</Text>
					<TextInput
						keyboardType="numeric"
						style={styles.input}
						value={this.state.amount}
						onChangeText={text => this.setState({ amount: text })}
						underlineColorAndroid="transparent"
					/>
					<SubmitButton title="Convert to BTC" position={styles.btc} />
					<SubmitButton title="Conevrt to ETH" position={styles.eth} />
				</View>
			</KeyboardAvoidingView>
		);
	}
}
