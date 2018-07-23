import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center',
		width: deviceWidth,
		height: deviceHeight * 0.9
	},
	wrapper: {
		flex: 1
	},
	title: {
		position: 'absolute',
		top: deviceHeight * 0.1144,
		textAlign: 'center',
		color: '#fff',
		fontSize: deviceHeight * 0.037,
		fontWeight: '500',
		alignSelf: 'center',
		fontFamily: 'Arial Rounded MT Bold'
	},
	screen: {
		flex: 1,
		alignSelf: 'center',
		width: deviceWidth * 0.95,
		height: deviceHeight * 0.95,
		marginBottom: deviceHeight * 0.03
	},
	dotsContainer: {
		backgroundColor: 'transparent',
		position: 'absolute',
		bottom: 0
	},
	slider: {
		width: deviceWidth,
		height: deviceHeight
	},
	dots: {
		width: deviceHeight * 0.0167,
		height: deviceHeight * 0.0167,
		borderRadius: 5,
		marginHorizontal: 3,
		backgroundColor: '#252d5c'
	},
	inactiveDots: {
		width: deviceHeight * 0.0167,
		height: deviceHeight * 0.0167,
		borderRadius: 5
	},
	bg: { width: deviceWidth * 0.5, height: deviceHeight * 0.5 },
	backCont: {
		position: 'absolute',
		top: -deviceHeight * 0.0156,
		flex: 1,
		height: deviceHeight * 0.1538,
		width: deviceWidth * 0.16222,
		alignItems: 'center',
		justifyContent: 'center',
		left: -deviceWidth * 0.0239
	},
	back: {
		height: deviceHeight * 0.0338,

		width: deviceWidth * 0.04222
	}
});
export default styles;
