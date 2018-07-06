import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../ScreenStyles/RegisterStyles';
import SubmitButton from '../Components/SubmitButton';
import Toast from '../Components/Toast';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			password2: '',
			phoneNumber: '',
			error: '',
			agreed: false,
			token: ''
		};
	}
	clearStateAndRoute = screen => {
		this.setState({
			email: '',
			password: '',
			password2: '',
			phoneNumber: '',
			error: '',
			agreed: false,
			token: ''
		});
		this.props.navigation.navigate(screen);
	};
	handlePress = e => {
		e.preventDefault();
		if (!this.state.agreed) {
			this.setState({ error: 'You must agree with our terms & conditions' });
		} else if (this.state.password !== this.state.password2) {
			this.setState({ error: 'Password does not match the confirm password' });
		} else {
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
						this.clearStateAndRoute('Map');
					}
				});
		}
	};

	render() {
		return (
			<View style={styles.container}>
				{this.state.error !== '' && <Toast message={this.state.error} />}
				<View style={styles.heading}>
					<Text style={styles.title}>Sign Up</Text>
				</View>
				<View style={styles.body}>
					<View style={styles.bg}>
						<Image
							source={require('../assets/illustration.png')}
							style={styles.img}
							resizeMode="stretch"
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
					<TouchableOpacity
						style={styles.agreement}
						onPress={() => this.setState({ agreed: !this.state.agreed })}>
						{this.state.agreed ? (
							<Image
								source={require('../assets/marked.png')}
								style={styles.check}
							/>
						) : (
							<Image
								source={require('../assets/unmarked.png')}
								style={styles.check}
							/>
						)}
						<Text style={styles.agreementText}>
							I agree with terms & conditions
						</Text>
					</TouchableOpacity>
					<SubmitButton
						title="SIGN UP"
						position={styles.login}
						onPress={this.handlePress}
					/>
					<View style={styles.register}>
						<Text style={styles.regText}>Already have a account?</Text>
						<TouchableOpacity
							style={styles.cont}
							onPress={() => this.clearStateAndRoute('Login')}>
							<Text style={styles.registerText}>Log In</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
