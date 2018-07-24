import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		alignItems: 'center',
		width: deviceWidth * 0.8735,
		height: deviceHeight * 0.3777,
		backgroundColor: '#fff',
		alignSelf: 'center',
		top: deviceHeight * 0.258
	},
	title: {
		position: 'absolute',
		top: deviceHeight * 0.033,
		left: deviceWidth * 0.04,
		color: '#13db97',
		fontSize: deviceHeight * 0.018
	},
	input: {
		position: 'absolute',
		width: deviceWidth * 0.793,
		height: deviceHeight * 0.0656,
		top: deviceHeight * 0.0688,
		backgroundColor: 'rgba(19, 219, 151, 0.1)'
	},
	btc: {
		width: deviceWidth * 0.793,
		position: 'absolute',
		bottom: deviceHeight * 0.132
	},
	eth: {
		width: deviceWidth * 0.793,
		position: 'absolute',
		bottom: deviceHeight * 0.045
	}
});
export default styles;
