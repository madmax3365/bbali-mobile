import React, { Component } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/LoginStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toast from '../Components/Toast';
import { loginUser } from '../../Redux/actions/authActions';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: '',
			token: ''
		};
	}
	clearStateAndRoute = screen => {
		this.setState({
			email: '',
			password: '',
			error: '',
			token: ''
		});
		this.props.navigation.navigate(screen);
	};
	handlePress = e => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.navigation.navigate('Map');
		// this.props.loginUser(userData);
	};

	static getDerivedStateFromProps(props, state) {
		if (props.errors.error) {
			state.error = props.errors.message;
		} else if (props.auth.isAuthenticated) {
			props.navigation.navigate('Map');
		}
		return state;
	}
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
					<TouchableOpacity
						style={styles.forgot}
						onPress={() => this.clearStateAndRoute('Forgot')}>
						<Text style={styles.forgotText}>Forgot Password?</Text>
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
// Login.propTypes = {
// 	loginUser: PropTypes.func.isRequired,
// 	auth: PropTypes.object.isRequired,
// 	errors: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
