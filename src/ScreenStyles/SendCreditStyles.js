import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		width: deviceWidth * 0.8735,
		height: deviceHeight * 0.436,
		backgroundColor: '#fff',
		position: 'absolute',
		top: deviceHeight * 0.2287,
		flex: 1,
		alignSelf: 'center'
	},
	emailTitle: {
		position: 'absolute',
		left: deviceWidth * 0.04586,
		fontFamily: 'Poppins',
		top: deviceHeight * 0.0317,
		color: '#13db97',
		fontSize: deviceHeight * 0.01811
	},
	email: {
		position: 'absolute',
		top: deviceHeight * 0.0717,
		alignSelf: 'center',
		height: deviceHeight * 0.06567,
		width: deviceWidth * 0.793,
		backgroundColor: 'rgba(19, 219, 151, 0.1)'
	},
	amountTitle: {
		position: 'absolute',
		left: deviceWidth * 0.04586,
		fontFamily: 'Poppins',
		top: deviceHeight * 0.179,
		color: '#13db97',
		fontSize: deviceHeight * 0.01811
	},
	amount: {
		position: 'absolute',
		top: deviceHeight * 0.21,
		alignSelf: 'center',
		width: deviceWidth * 0.793,
		backgroundColor: 'rgba(19, 219, 151, 0.1)'
	},
	button: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: deviceHeight * 0.045,
		width: deviceWidth * 0.793
	}
});
export default styles;
