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
		marginTop: deviceHeight * 0.046,
		alignSelf: 'center'
	},
	change: {
		position: 'absolute',
		bottom: deviceHeight * 0.1929,
		alignSelf: 'center'
	},
	submit: {
		position: 'absolute',
		bottom: deviceHeight * 0.10614,
		alignSelf: 'center'
	},

	nameTitle: {
		position: 'absolute',
		top: deviceHeight * 0.208,
		left: deviceWidth * 0.08,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	name: {
		marginTop: deviceHeight * 0.0486,
		width: deviceWidth * 0.66867,
		textAlignVertical: 'bottom',
		borderBottomWidth: 1,
		paddingBottom: 0,
		borderBottomColor: '#e5e5e5',
		alignSelf: 'center'
	},
	emailTitle: {
		position: 'absolute',
		top: deviceHeight * 0.299,
		left: deviceWidth * 0.08,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	email: {
		marginTop: deviceHeight * 0.0059,
		width: deviceWidth * 0.66867,
		borderBottomWidth: 1,
		paddingBottom: 0,
		textAlignVertical: 'bottom',
		borderBottomColor: '#e5e5e5',
		alignSelf: 'center'
	},
	phoneNumberTitle: {
		position: 'absolute',
		top: deviceHeight * 0.39,
		left: deviceWidth * 0.08,
		color: '#1b1b1b',
		fontFamily: 'Poppins - Semi Bold'
	},
	phoneNumber: {
		marginTop: deviceHeight * 0.0105,
		width: deviceWidth * 0.66867,
		borderBottomWidth: 1,
		textAlignVertical: 'bottom',
		paddingBottom: 0,
		borderBottomColor: '#e5e5e5',
		alignSelf: 'center'
	}
});
export default styles;
