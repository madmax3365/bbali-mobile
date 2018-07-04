import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/HomeStyles';

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.heading}>
					<Image source={require('../assets/logo.png')} style={styles.logo} />
					<Text style={styles.welcome}>Welcome to Bbali !</Text>
					<Text style={styles.desc}>A geek's #1 transport</Text>
				</View>
				<View style={styles.body}>
					<Image
						source={require('../assets/illustration.png')}
						style={styles.bg}
						resizeMod="cover"
					/>
					<SubmitButton
						title="GET A SCOOTER NOW"
						position={styles.scooter}
						onPress={() => this.props.navigation.navigate('Register')}
					/>
					<SubmitButton
						title="LOG IN"
						position={styles.login}
						onPress={() => this.props.navigation.navigate('Login')}
					/>
					<TouchableOpacity style={styles.howto}>
						<Text style={styles.howtoText}>HOW TO USE?</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
