import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		width: deviceWidth * 0.52334,
		borderBottomColor: '#e5e5e5'
	},
	title: {
		color: '#252d5c'
	}
});
export default props => {
	return (
		<TouchableOpacity
			style={[styles.container, props.position]}
			onPress={props.doRoute}>
			<Text style={styles.title}>{props.title}</Text>
		</TouchableOpacity>
	);
};
