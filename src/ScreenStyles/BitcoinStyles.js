import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: deviceWidth * 0.873,
		height: deviceHeight * 0.72,
		backgroundColor: '#fff',
		alignSelf: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: deviceHeight * 0.0756
	},
	amount: {
		marginLeft: deviceWidth * 0.006,
		fontSize: deviceHeight * 0.0226,
		color: '#252d5c'
	},
	usd: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		top: deviceHeight * 0.033,
		left: deviceWidth * 0.039,
		alignItems: 'center'
	},
	btc: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		top: deviceHeight * 0.033,
		left: deviceWidth * 0.406,
		alignItems: 'center'
	},
	qr: {
		width: deviceWidth * 0.516,
		height: deviceHeight * 0.29,
		position: 'absolute',
		flex: 1,
		top: deviceHeight * 0.109
	},
	scanner: {
		width: deviceWidth * 0.516,
		height: deviceHeight * 0.29
	},
	convert: {
		position: 'absolute',
		width: deviceWidth * 0.793,
		bottom: deviceHeight * 0.1236
	},
	send: {
		position: 'absolute',
		width: deviceWidth * 0.793,
		bottom: deviceHeight * 0.0457,
		backgroundColor: '#252d5c'
	},
	linkCont: {
		flex: 1,
		position: 'absolute',
		bottom: deviceHeight * 0.2346,
		left: deviceWidth * 0.176,
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		alignItems: 'center',
		width: deviceWidth * 0.398,
		height: deviceHeight * 0.0656,
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		borderRadius: 5
	},
	scroll: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	copy: {
		flex: 1,
		position: 'absolute',
		bottom: deviceHeight * 0.2346,
		right: deviceWidth * 0.1779,
		justifyContent: 'center',
		alignItems: 'center',
		width: deviceWidth * 0.105,
		height: deviceHeight * 0.0656,
		backgroundColor: '#13db97',
		borderRadius: 5
	},
	copyImg: {
		width: deviceWidth * 0.059,
		height: deviceHeight * 0.0356
	},
	link: {
		fontFamily: 'Poppins',
		fontSize: deviceHeight * 0.01811,
		color: '#252d5c'
	}
});
export default styles;
