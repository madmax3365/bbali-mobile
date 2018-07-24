import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center'
	},
	title: {
		position: 'absolute',
		top: deviceHeight * 0.0461,
		color: '#fff',
		fontWeight: 'bold',
		fontFamily: 'Poppins',
		fontSize: 18
	},
	heading: {
		width: deviceWidth,
		height: deviceHeight * 0.4072,
		backgroundColor: '#282f5e',
		alignItems: 'center',
		alignContent: 'center'
	},
	body: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center',
		position: 'absolute',
		top: deviceHeight * 0.24,
		width: deviceWidth * 0.8656,
		height: deviceHeight * 0.517,
		backgroundColor: '#fff',
		alignSelf: 'center'
	},
	bg: {
		position: 'absolute',
		bottom: 0,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'stretch'
	},
	toggler: {
		position: 'absolute',
		top: deviceHeight * 0.1509,
		left: deviceWidth * 0.080645
	},
	togglerText: {
		textDecorationLine: 'underline',
		color: '#252d5c'
	},
	img: {
		flex: 1,
		height: deviceHeight * 0.164
	},
	login: {
		position: 'absolute',
		bottom: deviceHeight * 0.209
	},
	inputTitle: {
		position: 'absolute',
		top: deviceHeight * 0.05055,
		left: deviceWidth * 0.080645,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	input: {
		position: 'absolute',
		top: deviceHeight * 0.04649,
		left: deviceWidth * 0.080645,
		textAlignVertical: 'bottom',
		width: deviceWidth * 0.66867,

		borderBottomWidth: 1,
		paddingBottom: 0,
		borderBottomColor: '#e5e5e5'
	},

	forgot: {
		position: 'absolute',
		bottom: deviceHeight * 0.19,
		left: deviceWidth * 0.080645,
		zIndex: 10
	},
	forgotText: {
		textDecorationLine: 'underline',
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold'
	},
	regText: {
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold'
	},
	register: {
		position: 'absolute',
		bottom: deviceHeight * 0.17,
		flex: 1,
		flexDirection: 'row',
		left: deviceWidth * 0.080645
	},
	cont: {
		marginLeft: 5
	},
	registerText: {
		textDecorationLine: 'underline',
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold'
	}
});
export default styles;
