import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center'
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
	scooter: {
		position: 'absolute',
		top: deviceHeight * 0.04027,
		zIndex: 10
	},
	login: {
		position: 'absolute',
		top: deviceHeight * 0.1276,
		zIndex: 10
	},
	howto: {
		position: 'absolute',
		top: deviceHeight * 0.238,
		zIndex: 10
	},
	howtoText: {
		textDecorationLine: 'underline',
		color: '#000',
		textAlign: 'center',
		fontFamily: 'Poppins - Semi Bold',
		fontWeight: '600'
	}
});
export default styles;
