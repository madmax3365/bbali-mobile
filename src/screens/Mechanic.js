import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/MechanicStyles';

export default class Mechanic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'christina.alvarez@gmail.com'
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.top}>
					<Text style={styles.text}>
						You will get notifications locations when a
					</Text>
					<Text style={styles.text}>vehicle needs to be prepared</Text>
				</View>
				<View style={styles.linkCont}>
					<TextInput
						value={this.state.email}
						underlineColorAndroid="transparent"
						keyboardType="email-address"
						onChangeText={text => this.setState({ email: text })}
						style={styles.link}
					/>
				</View>
				<SubmitButton position={styles.button} title="E-MAIL ME MORE INFO" />
			</View>
		);
	}
}
