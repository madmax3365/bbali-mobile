import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		width: deviceWidth * 0.87359,
		height: deviceHeight * 0.4438,
		flex: 1,
		alignSelf: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: deviceHeight * 0.23,

		backgroundColor: '#fff'
	},

	amount: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		alignItems: 'center',
		top: deviceHeight * 0.03755
	},
	money: {
		fontSize: deviceHeight * 0.069,
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold',
		fontWeight: 'bold'
	},
	dollar: {
		width: deviceWidth * 0.109,
		height: deviceWidth * 0.109
	},
	send: {
		position: 'absolute',
		width: deviceWidth * 0.793,
		bottom: deviceHeight * 0.123
	},
	convert: {
		position: 'absolute',
		width: deviceWidth * 0.793,
		bottom: deviceHeight * 0.039289,
		backgroundColor: '#252d5c'
	},
	available: {
		width: '100%',
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		top: deviceHeight * 0.16259,
		justifyContent: 'space-around'
	},
	desc: {
		position: 'absolute',
		left: deviceWidth * 0.041,
		fontSize: deviceHeight * 0.01811,
		color: '#252d5c'
	},
	availableMoney: {
		position: 'absolute',
		right: deviceWidth * 0.041,
		fontSize: deviceHeight * 0.02717,
		color: '#13db97'
	}
});
export default styles;
