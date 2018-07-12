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
		width: deviceWidth * 0.87359,
		height: deviceHeight * 0.328,
		backgroundColor: '#fff',
		top: deviceHeight * 0.102159,
		alignSelf: 'center'
	},
	button: {
		position: 'absolute',
		top: deviceHeight * 0.469,
		alignSelf: 'center'
	}
});
export default styles;
