import React, { Component } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/LoginStyles';
import Toast from '../Components/Toast';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			error: '',
			token: ''
		};
	}
	clearStateAndRoute = screen => {
		this.setState({
			email: '',
			error: '',
			token: ''
		});
		this.props.navigation.navigate(screen);
	};
	handlePress = e => {
		e.preventDefault();
		this.clearStateAndRoute('Reset');
		// fetch('http://api.bbali.io/authorization/forgotten', {
		// 	method: 'post',
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		email: this.state.email,
		// 		password: this.state.password
		// 	})
		// })
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		if (data.error) {
		// 			this.setState({ error: data.data.message });
		// 		} else {
		// 			this.clearStateAndRoute('Reset');
		// 		}
		// 	});
	};
	render() {
		return (
			<View style={styles.container}>
				{this.state.error !== '' && <Toast message={this.state.error} />}
				<View style={styles.heading}>
					<Text style={styles.title}>Log In</Text>
					<Image source={require('../assets/logo.png')} style={styles.logo} />
					<Text style={styles.welcome}>Welcome to Bbali !</Text>
					<Text style={styles.desc}>A {'geek\'s'} #1 transport</Text>
				</View>
				<View style={styles.body}>
					<View style={styles.bg}>
						<Image
							source={require('../assets/illustration.png')}
							style={styles.img}
							resizeMode="stretch"
						/>
					</View>
					<Text style={styles.emailTitle}>Email</Text>
					<TextInput
						style={styles.email}
						value={this.state.email}
						name="email"
						onChangeText={text => this.setState({ email: text })}
						keyboardType="email-address"
						underlineColorAndroid="transparent"
						onFocus={this.onFocus}
					/>
					<SubmitButton
						title="SUBMIT"
						position={styles.login}
						onPress={this.handlePress}
					/>
					<TouchableOpacity
						style={styles.forgot}
						onPress={() => this.clearStateAndRoute('Login')}>
						<Text style={styles.forgotText}>Back to Login</Text>
					</TouchableOpacity>
					<View style={styles.register}>
						<Text style={styles.regText}>{'Don\'t'} have an account?</Text>
						<TouchableOpacity
							style={styles.cont}
							onPress={() => this.clearStateAndRoute('Register')}>
							<Text style={styles.registerText}>Sign Up</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
