import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: 'center',
		marginTop: deviceHeight * 0.0439,
		width: deviceWidth * 0.87,
		height: deviceHeight * 0.3,
		backgroundColor: '#fff',
		alignItems: 'center',
		marginBottom: deviceHeight * 0.45
	},
	top: {
		width: deviceWidth * 0.688,
		flex: 1,
		alignItems: 'flex-start',
		marginTop: deviceHeight * 0.0466
	},
	text: {
		color: '#252d5c',
		fontFamily: 'Poppins',
		fontWeight: '400'
	},
	bold: {
		fontWeight: 'bold'
	},
	linkCont: {
		flex: 1,
		position: 'absolute',
		top: deviceHeight * 0.1467,
		justifyContent: 'center',
		alignItems: 'center',
		width: deviceWidth * 0.793,
		height: deviceHeight * 0.0656,
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		borderRadius: 5
	},
	link: {
		fontFamily: 'Poppins',
		color: '#252d5c'
	},
	button: {
		position: 'absolute',
		top: deviceHeight * 0.23369,
		width: deviceWidth * 0.793
	}
});
export default styles;
