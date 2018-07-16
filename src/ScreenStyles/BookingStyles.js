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
		alignItems: 'center',
		top: deviceHeight * 0.102159,
		position: 'absolute',
		alignSelf: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	button: {
		position: 'absolute',
		top: deviceHeight * 0.469,
		alignSelf: 'center'
	},
	calendar: {
		backgroundColor: '#fff',
		width: deviceWidth * 0.0617,
		marginLeft: deviceWidth * 0.041,
		height: deviceHeight * 0.328
	},
	calendarAm: {
		backgroundColor: '#fff',
		width: deviceWidth * 0.0917,
		marginLeft: deviceWidth * 0.041,
		height: deviceHeight * 0.328
	},
	left: {
		width: deviceWidth * 0.43558,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: deviceHeight * 0.328,
		borderRightWidth: 1,
		borderRightColor: 'rgba(0,0,0, 0.1)'
	},
	right: {
		width: deviceWidth * 0.43558,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: deviceHeight * 0.328,
		borderLeftWidth: 1,
		borderLeftColor: 'rgba(0,0,0, 0.1)'
	},
	overlay: {
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		position: 'absolute',
		top: deviceHeight * 0.230897,
		width: deviceWidth * 0.87359,
		height: deviceHeight * 0.06893688,
		alignSelf: 'center'
	}
});
export default styles;
