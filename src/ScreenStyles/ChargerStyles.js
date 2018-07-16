import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: deviceHeight * 0.83,
		width: deviceWidth
	},
	map: {
		height: deviceHeight * 0.99,
		width: deviceWidth
	},
	calloutCont: {
		width: deviceWidth * 0.275,
		height: deviceHeight * 0.043,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	calloutImage: {
		width: deviceWidth * 0.275,
		height: deviceHeight * 0.043
	},
	calloutText: {
		color: '#fff',
		fontWeight: '500',
		zIndex: 10,
		position: 'absolute',
		alignSelf: 'center',
		top: deviceHeight * 0.00121
	},
	tytle: {
		position: 'absolute',
		top: deviceHeight * 0.0357,
		left: deviceWidth * 0.081,
		fontSize: 16
	},
	popup: {
		flex: -1,
		alignItems: 'center',
		backgroundColor: '#fff',
		position: 'absolute',
		height: deviceHeight * 0.256,
		width: deviceWidth * 0.8711,
		bottom: deviceHeight * 0.0448,
		alignSelf: 'center'
	},
	location: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		height: deviceHeight * 0.0643,
		width: deviceWidth * 0.7129,
		top: deviceHeight * 0.0824,
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		borderRadius: 5
	},
	locationText: {
		fontSize: 12
	},
	button: {
		position: 'absolute',
		bottom: deviceHeight * 0.022
	}
});
export default styles;
