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
		top: deviceHeight * 0.103,
		width: deviceWidth * 0.8656,
		height: deviceHeight * 0.793,
		backgroundColor: '#fff'
	},
	bg: {
		position: 'absolute',
		bottom: -35,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'stretch'
	},
	img: {
		flex: 1
	},
	login: {
		position: 'absolute',
		bottom: deviceHeight * 0.225
	},
	nameTitle: {
		position: 'absolute',
		top: deviceHeight * 0.05055,
		left: deviceWidth * 0.080645,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	name: {
		position: 'absolute',
		top: deviceHeight * 0.07149,
		left: deviceWidth * 0.080645,
		width: deviceWidth * 0.66867
	},
	emailTitle: {
		position: 'absolute',
		top: deviceHeight * 0.13331,
		left: deviceWidth * 0.080645,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	email: {
		position: 'absolute',
		top: deviceHeight * 0.1567,
		left: deviceWidth * 0.080645,
		width: deviceWidth * 0.66867
	},
	phoneNumberTitle: {
		position: 'absolute',
		top: deviceHeight * 0.221,
		left: deviceWidth * 0.080645,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	phoneNumber: {
		position: 'absolute',
		top: deviceHeight * 0.245,
		left: deviceWidth * 0.080645,
		width: deviceWidth * 0.66867
	},
	passwordTitle: {
		position: 'absolute',
		top: deviceHeight * 0.307,
		left: deviceWidth * 0.080645,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	password: {
		width: deviceWidth * 0.334,
		position: 'absolute',
		top: deviceHeight * 0.32,
		left: deviceWidth * 0.080645
	},
	password2Title: {
		position: 'absolute',
		bottom: deviceHeight * 0.38496,
		left: deviceWidth * 0.080645,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	password2: {
		width: deviceWidth * 0.334,
		position: 'absolute',
		bottom: deviceHeight * 0.32,
		left: deviceWidth * 0.080645
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
		position: 'absolute',
		bottom: deviceHeight * 0.19,
		left: deviceWidth * 0.080645,
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold'
	},
	register: {
		position: 'absolute',
		bottom: deviceHeight * 0.19,
		right: deviceWidth * 0.315
	},
	registerText: {
		textDecorationLine: 'underline',
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold'
	},
	agreement: {
		position: 'absolute',
		bottom: deviceHeight * 0.30978,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	agreementText: {
		color: '#252d5c',
		fontFamily: 'Poppins'
	}
});
export default styles;
