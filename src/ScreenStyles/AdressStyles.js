import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: 'center',
		position: 'absolute',
		top: deviceHeight * 0.0439,
		width: deviceWidth * 0.87,
		height: deviceHeight * 0.3777,
		backgroundColor: '#fff',
		alignItems: 'center'
	},
	top: {
		width: deviceWidth * 0.688,
		flex: 1,
		alignItems: 'flex-start',
		marginTop: deviceHeight * 0.0466
	},
	text: {
		position: 'absolute',
		top: deviceHeight * 0.0448,
		left: deviceWidth * 0.0426,
		color: '#252d5c',
		fontFamily: 'Poppins',
		fontWeight: '400'
	},
	address: {
		position: 'absolute',
		left: deviceWidth * 0.0426,
		top: deviceHeight * 0.105,
		color: '#13db97',
		fontFamily: 'Poppins',
		fontSize: 12
	},
	linkCont: {
		flex: 1,
		position: 'absolute',
		top: deviceHeight * 0.1467,
		justifyContent: 'center',
		alignItems: 'center',
		width: deviceWidth * 0.793,
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		borderRadius: 5
	},
	link: {
		fontFamily: 'Poppins',
		color: '#000',
		paddingLeft: deviceWidth * 0.044,
		paddingRight: deviceWidth * 0.0789,
		fontSize: 14
	},
	button: {
		width: deviceWidth * 0.793,
		position: 'absolute',
		top: deviceHeight * 0.274757
	},
	wrap: {
		flex: 1
	},
	bottom: {
		position: 'absolute',
		backgroundColor: '#313a6d',
		width: deviceWidth,
		height: deviceHeight * 0.105,
		bottom: 0,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemText: {
		color: '#fff',
		fontFamily: 'Poppins',
		fontSize: 14,
		marginTop: deviceHeight * 0.0104
	},
	size1: {
		width: deviceWidth * 0.04669887,
		height: deviceHeight * 0.03577899
	},
	size2: {
		width: deviceWidth * 0.049919,
		height: deviceHeight * 0.035326
	},
	size3: {
		width: deviceWidth * 0.05636,
		height: deviceHeight * 0.03125
	}
});
export default styles;
