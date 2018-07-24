import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	wrap: { flex: 1 },
	title: {
		position: 'absolute',
		top: deviceHeight * 0.214,
		left: deviceWidth * 0.0644,
		color: '#252d5c',
		fontSize: deviceHeight * 0.0226
	},
	container: {
		flex: 1,
		alignSelf: 'center',
		position: 'absolute',
		top: deviceHeight * 0.275,
		width: deviceWidth * 0.87,
		height: deviceHeight * 0.3,
		backgroundColor: '#fff',
		alignItems: 'center'
	},

	linkCont: {
		flex: 1,
		position: 'absolute',
		top: deviceHeight * 0.045,
		left: deviceWidth * 0.109,
		justifyContent: 'center',
		alignItems: 'center',
		width: deviceWidth * 0.52,
		height: deviceHeight * 0.0656,
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		borderRadius: 5
	},
	copy: {
		flex: 1,
		position: 'absolute',
		top: deviceHeight * 0.045,
		right: deviceWidth * 0.109,
		justifyContent: 'center',
		alignItems: 'center',
		width: deviceWidth * 0.105,
		height: deviceHeight * 0.0656,
		backgroundColor: '#13db97',
		borderRadius: 5
	},
	copyImg: {
		width: deviceWidth * 0.057,
		height: deviceHeight * 0.0356
	},
	link: {
		fontFamily: 'Poppins',
		fontSize: 22,
		letterSpacing: deviceWidth * 0.0361,
		color: '#252d5c'
	},
	text: {
		position: 'absolute',
		top: deviceHeight * 0.152,
		color: '#000',
		textAlign: 'center',
		fontSize: deviceHeight * 0.0226,
		fontFamily: 'Poppins'
	},
	bold: {
		fontWeight: 'bold'
	}
});
export default styles;
