import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	title: {
		position: 'absolute',
		top: deviceHeight * 0.0448,
		left: deviceWidth * 0.0644,
		fontSize: 18,
		color: '#252d5c',
		fontFamily: 'Poppins'
	},
	container: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center',
		alignSelf: 'center',
		backgroundColor: '#fff',
		width: deviceWidth * 0.8735,
		height: deviceHeight * 0.499,
		position: 'absolute',
		top: deviceHeight * 0.1055
	},
	cont: {
		position: 'absolute',
		flex: 1,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		bottom: deviceHeight * 0.0466,
		width: deviceWidth * 0.5209,
		height: deviceHeight * 0.06567
	},
	text: {
		fontSize: 24,
		color: '#252d5c',
		letterSpacing: 5,
		fontFamily: 'Poppins'
	},
	button: {
		position: 'absolute',
		alignSelf: 'center',
		width: deviceWidth * 0.8735,
		bottom: deviceHeight * 0.1811
	}
});
export default styles;
