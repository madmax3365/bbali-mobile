import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#fff',
		position: 'absolute',
		top: deviceHeight * 0.041,
		width: deviceWidth * 0.83285,

		height: deviceHeight * 0.7588
	},
	profilePic: {
		width: deviceHeight * 0.11447,
		height: deviceHeight * 0.11447,
		marginTop: deviceHeight * 0.066
	},
	change: {
		position: 'absolute',
		bottom: deviceHeight * 0.1829
	},
	submit: {
		position: 'absolute',
		bottom: deviceHeight * 0.08614
	},

	nameTitle: {
		position: 'absolute',
		top: deviceHeight * 0.218,
		left: deviceWidth * 0.090864,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	name: {
		marginTop: deviceHeight * 0.0506,
		width: deviceWidth * 0.66867,
		borderBottomWidth: 1,
		paddingBottom: 0,
		borderBottomColor: '#e5e5e5'
	},
	emailTitle: {
		position: 'absolute',
		top: deviceHeight * 0.299,
		left: deviceWidth * 0.090864,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	email: {
		marginTop: deviceHeight * 0.0229,
		width: deviceWidth * 0.66867,
		borderBottomWidth: 1,
		paddingBottom: 0,
		borderBottomColor: '#e5e5e5'
	},
	phoneNumberTitle: {
		position: 'absolute',
		top: deviceHeight * 0.39,
		left: deviceWidth * 0.090864,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	phoneNumber: {
		marginTop: deviceHeight * 0.0375,
		width: deviceWidth * 0.66867,
		borderBottomWidth: 1,
		paddingBottom: 0,
		borderBottomColor: '#e5e5e5'
	}
});
export default styles;
