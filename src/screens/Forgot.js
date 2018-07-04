import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default class Forgot extends Component {
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

		fetch('http://api.bbali.io/authorization/forgotten', {
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
					this.setState({ token: 'Token sent to your email' });
				}
			})
			.catch(err => {
				console.log(err.response);
			});
	};
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.error}>{this.state.error}</Text>
				<Text style={styles.ok}>{this.state.token}</Text>
				<TextInput
					style={styles.email}
					value={this.state.email}
					name="email"
					onChangeText={text => this.setState({ email: text })}
					placeholder="email"
					keyboardType="email-address"
				/>
				<Button onPress={this.handlePress} title="Submit" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	email: { width: '90%' },
	password: { width: '90%' },
	error: {
		position: 'absolute',
		top: 50,
		alignSelf: 'center',
		fontSize: 18,
		color: 'red'
	},
	ok: {
		position: 'absolute',
		top: 50,
		alignSelf: 'center',
		fontSize: 18,
		color: 'green'
	}
});
