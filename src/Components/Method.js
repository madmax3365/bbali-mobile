import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		width: deviceWidth * 0.61655,
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: deviceHeight * 0.04
	},
	text: {
		color: '#252d5c',
		fontSize: 16,
		fontWeight: 'bold',
		fontFamily: 'Poppins',
		marginLeft: deviceWidth * 0.04106
	},
	ccImage: {
		width: deviceWidth * 0.09,
		height: deviceHeight * 0.03285
	}
});
const Method = props => {
	return (
		<View style={[styles.container, props.position]}>
			<Image
				source={require('../assets/credit_card.png')}
				style={styles.ccImage}
			/>
			<Text style={styles.text}>{props.text}</Text>
		</View>
	);
};
Method.propTypes = {
	text: PropTypes.string,
	position: PropTypes.object
};

export default Method;
