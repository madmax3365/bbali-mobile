import React from 'react';
import {
	TouchableOpacity,
	Text,
	Image,
	StyleSheet,
	Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		width: deviceWidth * 0.3985,
		height: deviceHeight * 0.1816,
		backgroundColor: '#fff'
	},
	icon: {
		flex: 1,
		position: 'absolute',
		top: deviceHeight * 0.0448,
		width: deviceWidth * 0.11352657,
		height: deviceHeight * 0.0638587
	},
	title: {
		position: 'absolute',
		bottom: deviceHeight * 0.02128,
		color: '#252d5c',
		fontFamily: 'Poppins'
	}
});
export default props => {
	return (
		<TouchableOpacity
			style={[styles.container, props.position]}
			onPress={props.doRoute}>
			<Image style={styles.icon} source={props.icon} resizeMode="stretch" />
			<Text style={styles.title}>{props.title}</Text>
		</TouchableOpacity>
	);
};
