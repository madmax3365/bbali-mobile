import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center',
		width: deviceWidth,
		height: deviceHeight
	},
	title: {
		position: 'absolute',
		top: deviceHeight * 0.432,
		color: '#fff',
		fontFamily: 'Poppins',
		fontSize: 22,
		fontWeight: '500'
	},
	english: {
		height: deviceHeight * 0.097,
		width: deviceWidth * 0.44579,
		position: 'absolute',
		top: deviceHeight * 0.529,
		right: deviceWidth * 0.074,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	englishChecked: {
		position: 'absolute',
		left: deviceWidth * 0.031
	},
	englishImg: {
		position: 'absolute',
		left: deviceWidth * 0.1227
	},
	englishText: {
		position: 'absolute',
		left: deviceWidth * 0.25417,
		color: '#fff',
		fontSize: 18,
		fontFamily: 'Poppins-Regular'
	},
	korea: {
		height: deviceHeight * 0.097,
		width: deviceWidth * 0.44579,
		position: 'absolute',
		top: deviceHeight * 0.529,
		left: deviceWidth * 0.044,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	koreanChecked: {
		position: 'absolute',
		left: deviceWidth * 0.031
	},
	koreanImg: {
		position: 'absolute',
		left: deviceWidth * 0.1227
	},
	koreanText: {
		position: 'absolute',
		left: deviceWidth * 0.25417,
		color: '#fff',
		fontSize: 18,
		fontFamily: 'Poppins'
	},
	active: {
		borderWidth: 1,
		borderColor: '#fff'
	}
});
export default styles;
