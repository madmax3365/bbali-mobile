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

	img: {
		alignSelf: 'center',
		flex: 1,
		width: deviceWidth,
		height: deviceHeight
	},
	dotsContainer: {
		backgroundColor: 'transparent',
		position: 'absolute',
		bottom: 0
	},
	slider: {
		width: deviceWidth,
		height: deviceHeight,
		backgroundColor: 'transparent'
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
	},
	skipButton: {
		position: 'absolute',
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		bottom: deviceHeight * 0.0568,
		top: deviceHeight * 0.03,
		right: deviceWidth * 0.05,
		width: deviceWidth * 0.5067,
		height: deviceHeight * 0.2
	},
	skip: {
		color: '#fff',
		fontSize: deviceHeight * 0.03266,
		fontWeight: '100',
		fontFamily: 'Arial Rounded MT Bold',
		textAlign: 'center'
	}
});
export default styles;
