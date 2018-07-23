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
		bottom: deviceHeight * 0.2
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
	nextButton: {
		position: 'absolute',
		flex: 1,
		bottom: deviceHeight * 0.11978,
		alignSelf: 'center'
	},
	next: {
		width: deviceWidth * 0.5067,
		height: deviceHeight * 0.079,
		alignSelf: 'center'
	},
	skipButton: {
		position: 'absolute',
		flex: 1,
		bottom: deviceHeight * 0.0568,
		alignSelf: 'center',
		width: deviceWidth * 0.5067
	},
	skip: {
		color: '#fff',
		fontSize: deviceHeight * 0.02266,
		fontFamily: 'Arial Rounded MT Bold',
		textAlign: 'center'
	}
});
export default styles;
