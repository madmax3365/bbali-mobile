import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		width: deviceWidth * 0.87359,
		height: deviceHeight * 0.4438,
		flex: 1,
		alignSelf: 'center',
		alignItems: 'center',
		marginTop: deviceHeight * 0.043,
		marginBottom: deviceHeight * 0.4,
		backgroundColor: '#fff'
	},
	emptyCont: {
		position: 'absolute',
		top: deviceHeight * 0.303,
		flex: 1,
		alignItems: 'center'
	},
	oops: {
		fontSize: 16,
		color: '#212121',
		fontFamily: 'Poppins'
	},
	desc: {
		color: '#212121',
		fontFamily: 'Poppins'
	},
	text: {
		position: 'absolute',
		bottom: deviceHeight * 0.116
	},
	amount: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		alignItems: 'center',
		bottom: deviceHeight * 0.03755
	},
	money: {
		fontSize: 26,
		color: '#252d5c',
		fontFamily: 'Poppins - Semi Bold',
		fontWeight: 'bold'
	},
	image: {
		position: 'absolute',
		top: deviceHeight * 0.044,
		width: deviceWidth * 0.40257,
		height: deviceHeight * 0.17527174,
		flex: 1
	},
	dollar: {
		width: deviceWidth * 0.109,
		height: deviceWidth * 0.109
	}
});
export default styles;
