import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		position: 'absolute',
		top: 0,
		width: deviceWidth,
		height: deviceHeight * 0.0822,
		backgroundColor: '#252d5c'
	},
	profilePic: {
		width: deviceHeight * 0.0975,
		height: deviceHeight * 0.0975,
		position: 'absolute',
		top: deviceHeight * 0.0411,
		alignSelf: 'center'
	},
	name: {
		position: 'absolute',
		top: deviceHeight * 0.1486,
		alignSelf: 'center',
		fontFamily: 'Poppins',
		color: '#252d5c',
		fontSize: 16
	},
	body: {
		flex: 1,
		alignSelf: 'center',
		width: deviceWidth * 0.8735,
		height: deviceHeight * 0.33288,
		position: 'absolute',
		bottom: deviceHeight * 0.348,
		backgroundColor: '#fff'
	},
	toggle: {
		flex: 1,
		alignSelf: 'center',
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#b6b8c7',
		width: deviceWidth * 0.7979,
		top: deviceHeight * 0.03577,
		height: deviceHeight * 0.087137
	},
	toggleImg: {
		width: deviceWidth * 0.12077,
		height: deviceHeight * 0.037137
	},
	credits: {
		flex: 1,
		alignSelf: 'center',
		position: 'absolute',
		alignItems: 'center',
		width: deviceWidth * 0.7979,
		flexDirection: 'row',
		justifyContent: 'space-between',
		top: deviceHeight * 0.146
	},
	count: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		position: 'absolute',
		right: 0,
		alignSelf: 'flex-end'
	},
	showInput: {
		flex: 1,
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-around',
		top: deviceHeight * 0.197,
		left: deviceWidth * 0.04
	},
	inputCont: {
		flex: 1,
		position: 'absolute',
		top: deviceHeight * 0.243,
		left: deviceWidth * 0.04,
		flexDirection: 'row',
		width: deviceWidth * 0.793
	},
	mini: {
		position: 'absolute',
		right: 0,
		height: deviceHeight * 0.06567,
		width: deviceWidth * 0.18438
	},
	money: {
		color: '#13db97',
		fontSize: 16,
		marginLeft: 5
	},
	creditText: {
		color: '#252d5c',
		fontSize: 16,
		marginLeft: 5
	},
	amount: {
		width: deviceWidth * 0.60869,
		height: deviceHeight * 0.06567,
		paddingLeft: 5,
		color: '#252d5c',
		backgroundColor: 'rgba(19, 219, 151, 0.1)'
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
		color: '#313a6d',
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
	},
	showText: {
		color: '#313a6d',
		fontFamily: 'Poppins',

		marginLeft: deviceWidth * 0.023349
	}
});
export default styles;
