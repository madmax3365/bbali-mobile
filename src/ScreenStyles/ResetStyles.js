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
	logo: {
		width: deviceWidth * 0.2448,
		height: deviceHeight * 0.04072,
		marginTop: deviceHeight * 0.157466
	},
	welcome: {
		textAlign: 'center',
		color: '#fff',
		marginTop: deviceHeight * 0.025339,
		fontSize: 18,
		fontFamily: 'Poppins - Semi Bold',
		fontWeight: '400'
	},
	desc: {
		color: '#13db97',
		textAlign: 'center',
		marginTop: deviceHeight * 0.0208,
		fontFamily: 'Poppins - Semi Bold',
		fontWeight: '600',
		fontSize: 20
	},
	body: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center',
		position: 'absolute',
		top: deviceHeight * 0.339366,
		width: deviceWidth * 0.8656,
		height: deviceHeight * 0.557,
		backgroundColor: '#fff'
	},
	bg: {
		position: 'absolute',
		bottom: 0,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'stretch'
	},
	img: {
		flex: 1,
		height: deviceHeight * 0.164
	},
	login: {
		position: 'absolute',
		bottom: deviceHeight * 0.25158
	},
	emailTitle: {
		position: 'absolute',
		top: deviceHeight * 0.05055,
		left: deviceWidth * 0.080645,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	email: {
		position: 'absolute',
		top: deviceHeight * 0.07149,
		left: deviceWidth * 0.080645,
		width: deviceWidth * 0.66867,
		borderBottomWidth: 1,
		paddingBottom: 0,
		borderBottomColor: '#e5e5e5'
	},
	passwordTitle: {
		position: 'absolute',
		top: deviceHeight * 0.13167,
		left: deviceWidth * 0.080645,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	password: {
		width: deviceWidth * 0.66867,
		position: 'absolute',
		top: deviceHeight * 0.14656,
		left: deviceWidth * 0.080645,
		borderBottomWidth: 1,
		paddingBottom: 0,
		borderBottomColor: '#e5e5e5'
	},
	forgot: {
		position: 'absolute',
		top: deviceHeight * 0.2,
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
		bottom: deviceHeight * 0.209,
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
