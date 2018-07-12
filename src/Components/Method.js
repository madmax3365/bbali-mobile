import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		width: deviceWidth * 0.61655,
		flex: 1,
		alignItems: 'center'
	},
	text: {
		color: '#252d5c',
		fontSize: 16,
		fontWeight: 'bold',
		fontFamily: 'Poppins'
	}
});
export default props => {
	return (
		<View style={[styles.container, props.position]}>
			<Text style={styles.text}>{props.text}</Text>
		</View>
	);
};
