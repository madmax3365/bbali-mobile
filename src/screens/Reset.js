import React, { Component } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/ResetStyles';
import Toast from '../Components/Toast';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
			password2: ''
		};
	}
	clearStateAndRoute = screen => {
		this.setState({
			password: '',
			password2: ''
		});
		this.props.navigation.navigate(screen);
	};
	handlePress = e => {
		e.preventDefault();
		if (this.state.password !== this.state.password2) {
			this.setState({ error: 'Password does not match the confirm password' });
		}
		fetch('http://api.bbali.io/authorization/changePassword', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				password: this.state.password
			})
		})
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					this.setState({
						error: data.data.message
					});
				} else {
					this.clearStateAndRoute('Map');
				}
			});
	};
	render() {
		return (
			<View style={styles.container}>
				{this.state.error !== '' && <Toast message={this.state.error} />}
				<View style={styles.heading}>
					<Text style={styles.title}>Forgot Password</Text>
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
					<Text style={styles.emailTitle}>Password</Text>
					<TextInput
						style={styles.email}
						value={this.state.password}
						name="password"
						onChangeText={text => this.setState({ password: text })}
						secureTextEntry={true}
						underlineColorAndroid="transparent"
						onFocus={this.onFocus}
					/>
					<Text style={styles.passwordTitle}>Repeat Password</Text>
					<TextInput
						style={styles.password}
						name="password2"
						value={this.state.password2}
						onChangeText={text => this.setState({ password2: text })}
						secureTextEntry={true}
						underlineColorAndroid="transparent"
					/>
					<SubmitButton
						title="SUBMIT"
						position={styles.login}
						onPress={this.handlePress}
					/>
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
