import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	View,
	TextInput,
	Text,
	Image,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import styles from '../ScreenStyles/RegisterStyles';
import SubmitButton from '../Components/SubmitButton';
import Toast from '../Components/Toast';

const deviceHeight = Dimensions.get('window').height;
export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			regTypeEmail: true,
			email: '',
			phoneNumber: '',
			error: '',
			token: ''
		};
	}
	clearStateAndRoute = screen => {
		this.setState({
			email: '',
			phoneNumber: '',
			error: '',
			token: ''
		});
		this.props.navigation.navigate(screen);
	};
	toggle = () => {
		this.setState({
			email: '',
			phoneNumber: '',
			error: '',
			token: '',
			regTypeEmail: !this.state.regTypeEmail
		});
	};
	handlePress = e => {
		e.preventDefault();

		this.clearStateAndRoute('Map');
		// fetch('http://api.bbali.io/authorization/signup', {
		// 	method: 'post',
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		email: this.state.email,
		// 		phoneNumber: this.state.phoneNumber,
		// 		password: this.state.password
		// 	})
		// })
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		if (data.error) {
		// 			this.setState({ error: data.data.message });
		// 		} else {
		// 			this.clearStateAndRoute('Map');
		// 		}
		// 	});
	};

	render() {
		return (
			<KeyboardAvoidingView
				keyboardVerticalOffset={-deviceHeight * 0.255289}
				behavior="position"
				style={styles.container}
				enabled>
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
					{this.state.regTypeEmail ? (
						<Text style={styles.inputTitle}>Email</Text>
					) : (
						<Text style={styles.inputTitle}>Phone No.</Text>
					)}

					{this.state.regTypeEmail ? (
						<TextInput
							style={styles.input}
							value={this.state.email}
							name="email"
							onChangeText={text => this.setState({ email: text })}
							keyboardType="email-address"
							underlineColorAndroid="transparent"
							onFocus={this.onFocus}
						/>
					) : (
						<TextInput
							style={styles.input}
							name="phoneNumber"
							onChangeText={text => this.setState({ phoneNumber: text })}
							keyboardType="numeric"
							underlineColorAndroid="transparent"
						/>
					)}
					<TouchableOpacity style={styles.toggler} onPress={this.toggle}>
						<Text style={styles.togglerText}>
							{this.state.regTypeEmail
								? 'Use phone no. instead'
								: 'Use email instead'}
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
			</KeyboardAvoidingView>
		);
	}
}
