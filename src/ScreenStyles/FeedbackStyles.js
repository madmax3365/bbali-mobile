import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		top: deviceHeight * 0.03357,
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#fff',
		width: deviceWidth * 0.83449,
		height: deviceHeight * 0.829
	},
	title: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		paddingTop: deviceHeight * 0.026,
		paddingBottom: deviceHeight * 0.016,
		width: deviceWidth * 0.61655,
		borderBottomWidth: 1,
		borderBottomColor: '#e5e5e5'
	},
	titleText: {
		color: '#252d5c',
		fontSize: 20,
		fontWeight: '600',
		fontFamily: 'Poppins'
	},
	desc: {
		position: 'absolute',
		top: deviceHeight * 0.0875,
		color: '#252d5c',
		fontSize: 16,
		fontFamily: 'Poppins'
	},
	input: {
		position: 'absolute',
		paddingTop: 0,
		top: deviceHeight * 0.15214,
		width: deviceWidth * 0.61655,
		height: deviceHeight * 0.2375,
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		borderRadius: 5
	},
	button: {
		position: 'absolute',
		bottom: deviceHeight * 0.345,
		width: deviceWidth * 0.61655
	},
	backButton: {
		position: 'absolute',
		bottom: deviceHeight * 0.255,
		width: deviceWidth * 0.61655
	}
});
export default styles;
