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
		top: deviceHeight * 0.1144,
		textAlign: 'center',
		color: '#fff',
		fontSize: 28,
		fontWeight: '500',
		alignSelf: 'center',
		fontFamily: 'Arial Rounded MT Bold'
	},

	screen4Text: {
		position: 'absolute',
		fontSize: 22,
		fontFamily: 'Arial Rounded MT Bold',
		fontWeight: '500',
		alignSelf: 'center',
		textAlign: 'center',
		color: '#252d5c',
		top: deviceHeight * 0.48,
		width: deviceWidth * 0.86
	},
	screen5Text: {
		position: 'absolute',
		fontSize: 22,
		fontFamily: 'Arial Rounded MT Bold',
		fontWeight: '500',
		alignSelf: 'center',
		textAlign: 'left',
		color: '#252d5c',
		top: deviceHeight * 0.349,
		width: deviceWidth * 0.86
	},
	screen5Desc: {
		position: 'absolute',
		fontSize: 22,
		fontFamily: 'Arial Rounded MT Bold',
		fontWeight: '500',
		alignSelf: 'center',
		textAlign: 'center',
		color: '#252d5c',
		top: deviceHeight * 0.22526,
		width: deviceWidth * 0.86
	},
	bottom: {
		position: 'absolute',
		fontSize: 22,
		fontFamily: 'Arial Rounded MT Bold',
		fontWeight: '500',
		alignSelf: 'center',
		textAlign: 'center',
		color: '#252d5c',
		bottom: deviceHeight * 0.0704,
		width: deviceWidth * 0.86
	},
	img: {},
	dotsContainer: {
		backgroundColor: 'transparent',
		position: 'absolute',
		bottom: 0
	},
	slider: {
		width: deviceWidth,
		height: deviceHeight,
		backgroundColor: 'rgb(106,195,204)'
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
	}
});
export default styles;
