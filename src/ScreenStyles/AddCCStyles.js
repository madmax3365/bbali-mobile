import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	container: {
		flex: 1,
		alignSelf: 'center',
		width: deviceWidth * 0.832799,
		height: deviceHeight * 0.8293,
		backgroundColor: '#fff',
		position: 'absolute',
		top: deviceHeight * 0.03357,
		alignItems: 'center'
	},
	button: {
		position: 'absolute',
		bottom: deviceHeight * 0.209578,
		width: deviceWidth * 0.638
	},
	no: {
		position: 'absolute',
		top: deviceHeight * 0.0821,
		width: deviceWidth * 0.638,
		borderBottomWidth: 1,
		paddingBottom: 0
	},
	noTitle: {
		position: 'absolute',
		top: deviceHeight * 0.0791,
		left: deviceWidth * 0.09417,
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold',
		fontSize: 16
	},
	name: {
		position: 'absolute',
		top: deviceHeight * 0.1951,
		width: deviceWidth * 0.638,
		borderBottomWidth: 1,
		paddingBottom: 0
	},
	nameTitle: {
		position: 'absolute',
		top: deviceHeight * 0.1981,
		left: deviceWidth * 0.09417,
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold',
		fontSize: 16
	},
	cvc: {
		position: 'absolute',
		top: deviceHeight * 0.2951,
		width: deviceWidth * 0.638,
		borderBottomWidth: 1,
		paddingBottom: 0
	},
	cvcTitle: {
		position: 'absolute',
		top: deviceHeight * 0.2981,
		left: deviceWidth * 0.09417,
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold',
		fontSize: 16
	},
	expire: {
		position: 'absolute',
		bottom: deviceHeight * 0.349578,
		width: deviceWidth * 0.638,
		borderBottomWidth: 1,
		paddingBottom: 10
	},
	expireTitle: {
		position: 'absolute',
		top: deviceHeight * 0.3981,
		left: deviceWidth * 0.09417,
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold',
		fontSize: 16
	},
	date: {
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold',
		fontSize: 16
	},
	picker: {
		width: deviceWidth,
		height: deviceHeight * 0.332578,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		flex: 1,
		flexDirection: 'row'
	},
	left: {
		width: deviceWidth * 0.5,
		alignSelf: 'center',
		backgroundColor: '#fff'
	},
	right: {
		width: deviceWidth * 0.5,
		alignSelf: 'center',
		backgroundColor: '#fff'
	},
	overlay: {
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		position: 'absolute',
		bottom: deviceHeight * 0.132578,
		width: deviceWidth * 0.87359,
		height: deviceHeight * 0.06893688,
		alignSelf: 'center'
	}
});
export default styles;
