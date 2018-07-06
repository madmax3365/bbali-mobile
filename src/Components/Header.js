import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default class Header extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>This is CustomHeader</Text>
				<View style={styles.profile}>
					<Text style={styles.profileText}>Welcome, </Text>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: -1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: deviceHeight * 0.08469,
		marginTop: 20,
		backgroundColor: '#252d5c'
	},
	profileText: {
		color: '#fff'
	}
});
