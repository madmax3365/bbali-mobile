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
		top: deviceHeight * 0.106,
		textAlign: 'center',
		color: '#fff',
		fontSize: 28,
		fontWeight: '500',
		alignSelf: 'center',
		fontFamily: 'Arial Rounded MT Bold'
	},
	bottomTitle: {
		position: 'absolute',
		fontSize: 22,
		fontFamily: 'Arial Rounded MT Bold',
		fontWeight: '500',
		alignSelf: 'center',
		textAlign: 'center',
		color: '#252d5c',
		bottom: deviceHeight * 0.38633
	},
	bottomDesc: {
		position: 'absolute',
		fontSize: 14,
		fontFamily: 'Arial Rounded MT Bold',
		alignSelf: 'center',
		textAlign: 'center',
		color: '#252d5c',
		top: deviceHeight * 0.643
	},
	img: {},
	dotsContainer: {
		backgroundColor: 'transparent',
		position: 'absolute',
		bottom: deviceHeight * 0.2
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
		marginHorizontal: 1,
		backgroundColor: '#252d5c'
	},
	inactiveDots: {
		width: deviceHeight * 0.0167,
		height: deviceHeight * 0.0167,
		borderRadius: 5
	}
});
export default styles;
