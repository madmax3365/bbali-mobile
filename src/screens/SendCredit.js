import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	Dimensions,
	View,
	Text,
	TextInput,
	Picker
} from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/SendCreditStyles';

const deviceHeight = Dimensions.get('window').height;
export default class SendCredit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			amount: '$'
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
					<Text style={styles.emailTitle}>User E-mail</Text>
					<TextInput
						style={styles.email}
						underlineColorAndroid="transparent"
						value={this.state.email}
						keyboardType="email-address"
						onChangeText={text => this.setState({ email: text })}
					/>
					<Text style={styles.amountTitle}>Amount</Text>
					<Picker
						selectedValue={this.state.amount}
						style={styles.amount}
						onValueChange={itemValue => this.setState({ amount: itemValue })}>
						<Picker.Item label="$" value="USD" />
						<Picker.Item label="₩" value="KRW" />
					</Picker>
					<SubmitButton title="SEND" position={styles.button} />
				</View>
			</KeyboardAvoidingView>
		);
	}
}
