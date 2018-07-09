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
		height: deviceHeight * 0.83,
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
		fontWeight: '400',
		zIndex: 10,
		position: 'absolute',
		alignSelf: 'center',
		top: deviceHeight * 0.00121
	},

	buttons: {
		position: 'absolute',
		flex: 1,
		bottom: 0,
		flexDirection: 'row',
		height: deviceHeight * 0.105,
		width: deviceWidth
	},
	deliver: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: deviceWidth * 0.5,
		backgroundColor: '#13db97'
	},
	icon: {
		width: deviceWidth * 0.04669887,
		height: deviceHeight * 0.035326
	},
	pick: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: deviceWidth * 0.5,
		backgroundColor: '#313a6d'
	},
	deliverText: {
		color: '#fff',
		fontFamily: 'Poppins',
		fontSize: 18,
		fontWeight: '500',
		marginLeft: deviceWidth * 0.023349
	},
	pickText: {
		color: '#fff',
		fontFamily: 'Poppins',
		fontSize: 18,
		fontWeight: '500',
		marginLeft: deviceWidth * 0.023349
	}
});
export default styles;
