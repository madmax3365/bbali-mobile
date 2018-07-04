import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../ScreenStyles/RegisterStyles';
import SubmitButton from '../Components/SubmitButton';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			password2: '',
			phoneNumber: '',
			error: '',
			token: ''
		};
	}
	handlePress = e => {
		e.preventDefault();

		fetch('http://api.bbali.io/authorization/signup', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.email,
				phoneNumber: this.state.phoneNumber,
				password: this.state.password
			})
		})
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					this.setState({ error: data.data.message });
				} else {
					this.setState({ token: data.data.token });
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
					<Text style={styles.title}>Sign Up</Text>
				</View>
				<View style={styles.body}>
					<View style={styles.bg}>
						<Image
							source={require('../assets/illustration.png')}
							style={styles.img}
							resizeMode="contain"
						/>
					</View>
					<Text style={styles.nameTitle}>Name</Text>
					<TextInput
						style={styles.name}
						value={this.state.name}
						name="email"
						onChangeText={text => this.setState({ name: text })}
						underlineColorAndroid="transparent"
						onFocus={this.onFocus}
					/>
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
					<Text style={styles.phoneNumberTitle}>Phone No.</Text>
					<TextInput
						style={styles.phoneNumber}
						name="phoneNumber"
						onChangeText={text => this.setState({ phoneNumber: text })}
						keyboardType="numeric"
						underlineColorAndroid="transparent"
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
					<Text style={styles.password2Title}>Repeat Password</Text>
					<TextInput
						style={styles.password2}
						name="password"
						value={this.state.password2}
						onChangeText={text => this.setState({ password2: text })}
						secureTextEntry={true}
						underlineColorAndroid="transparent"
					/>
					<TouchableOpacity style={styles.agreement}>
						<Text style={styles.agreementText}>
							I agree with terms & conditions
						</Text>
					</TouchableOpacity>
					<SubmitButton
						title="SIGN UP"
						position={styles.login}
						onPress={this.handlePress}
					/>

					<Text style={styles.regText}>Already have a account?</Text>
					<TouchableOpacity
						style={styles.register}
						onPress={() => this.props.navigation.navigate('Login')}>
						<Text style={styles.registerText}>Log In</Text>
					</TouchableOpacity>
					<Text style={styles.invalid}>{this.state.error}</Text>
				</View>
			</View>
		);
	}
}
