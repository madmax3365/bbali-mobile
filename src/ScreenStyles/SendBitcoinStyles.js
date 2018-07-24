import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		width: deviceWidth * 0.8735,
		height: deviceHeight * 0.3414,
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#fff',
		top: deviceHeight * 0.224
	},
	button: {
		width: deviceWidth * 0.793,
		position: 'absolute',
		bottom: deviceWidth * 0.045
	},
	title: {
		position: 'absolute',
		top: deviceHeight * 0.033,
		left: deviceWidth * 0.04,
		fontSize: deviceHeight * 0.018,
		color: '#13db97',
		fontFamily: 'Poppins'
	},
	input: {
		width: deviceWidth * 0.793,
		position: 'absolute',
		height: deviceHeight * 0.065,
		top: deviceWidth * 0.12,
		backgroundColor: 'rgba(19, 219, 151, 0.1)'
	},
	fee: {
		position: 'absolute',
		bottom: deviceHeight * 0.149,
		left: deviceWidth * 0.04,
		fontSize: deviceHeight * 0.0158,

		fontFamily: 'Poppins'
	},
	change: {
		position: 'absolute',
		bottom: deviceHeight * 0.149,
		right: deviceWidth * 0.04
	},
	bold: {
		fontWeight: 'bold',
		color: '#13db97',
		fontSize: deviceHeight * 0.018
	},
	changeText: {
		textDecorationLine: 'underline',
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold'
	}
});
export default styles;
