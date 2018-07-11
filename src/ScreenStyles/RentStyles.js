import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	short: {
		position: 'absolute',
		left: deviceWidth * 0.0636,
		top: deviceHeight * 0.045289,
		fontSize: 18,
		color: '#252d5c',
		fontFamily: 'Poppins'
	},
	long: {
		position: 'absolute',
		left: deviceWidth * 0.0636,
		top: deviceHeight * 0.3374,
		fontSize: 18,
		color: '#252d5c',
		fontFamily: 'Poppins'
	},
	button: {
		position: 'absolute',
		bottom: deviceHeight * 0.105
	},
	shortPos: {
		position: 'absolute',
		top: deviceHeight * 0.09067,
		height: deviceHeight * 0.20289
	},
	longPos: {
		position: 'absolute',
		top: deviceHeight * 0.385
	}
});
export default styles;
