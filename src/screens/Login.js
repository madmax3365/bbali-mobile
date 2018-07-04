import React, { Component } from 'react';
import {
	View,
	TextInput,
	Image,
	Text,
	TouchableOpacity,
	ScrollView
} from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/LoginStyles';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: '',
			token: ''
		};
	}
	handlePress = e => {
		e.preventDefault();

		fetch('http://api.bbali.io/authorization/login', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					this.setState({ error: data.data.message });
				} else {
					this.props.navigation.navigate('Map');
				}
			})
			.catch(err => {
				console.log(err.response);
			});
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.heading}>
					<Text style={styles.title}>Log In</Text>
					<Image source={require('../assets/logo.png')} style={styles.logo} />
					<Text style={styles.welcome}>Welcome to Bbali !</Text>
					<Text style={styles.desc}>A geek's #1 transport</Text>
				</View>
				<View style={styles.body}>
					<View style={styles.bg}>
						<Image
							source={require('../assets/illustration.png')}
							style={styles.img}
							resizeMode="contain"
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
					<Text style={styles.passwordTitle}>Password</Text>
					<TextInput
						style={styles.password}
						name="password"
						value={this.state.password}
						onChangeText={text => this.setState({ password: text })}
						secureTextEntry={true}
						underlineColorAndroid="transparent"
					/>
					<SubmitButton
						title="LOG IN"
						position={styles.login}
						onPress={this.handlePress}
					/>
					<TouchableOpacity style={styles.forgot}>
						<Text style={styles.forgotText}>Forgot Password?</Text>
					</TouchableOpacity>
					<Text style={styles.regText}>Don't have an account?</Text>
					<TouchableOpacity
						style={styles.register}
						onPress={() => this.props.navigation.navigate('Register')}>
						<Text style={styles.registerText}>Sign Up</Text>
					</TouchableOpacity>
					<Text style={styles.invalid}>{this.state.error}</Text>
				</View>
			</View>
		);
	}
}
