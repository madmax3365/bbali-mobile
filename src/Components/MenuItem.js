import React from 'react';
import {
	TouchableOpacity,
	Text,
	Image,
	StyleSheet,
	Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	active: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		height: deviceHeight * 0.077445,
		width: deviceWidth * 0.775,
		borderLeftWidth: 3,
		backgroundColor: '#252d5c',
		borderLeftColor: '#13db97'
	},
	inactive: {
		height: deviceHeight * 0.059445,
		width: deviceWidth * 0.775,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	icon: {
		marginLeft: deviceWidth * 0.05958
	},
	text: {
		marginLeft: deviceWidth * 0.0378,
		color: '#fff',
		fontFamily: 'Poppins-Regular',
		fontWeight: '400',
		fontSize: deviceHeight * 0.02
	}
});

const MenuItem = props => {
	return (
		<TouchableOpacity
			style={props.active ? styles.active : styles.inactive}
			onPress={props.doRoute}>
			<Image source={props.source} style={styles.icon} />
			<Text style={styles.text}>{props.text}</Text>
		</TouchableOpacity>
	);
};

MenuItem.propTypes = {
	active: PropTypes.bool,
	doRoute: PropTypes.func,
	source: PropTypes.number,
	text: PropTypes.string
};

export default MenuItem;
