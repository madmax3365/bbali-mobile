import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		width: deviceWidth,
		height: deviceHeight,
		flex: 1,
		flexDirection: 'row'
	},
	topLeft: {
		position: 'absolute',
		top: deviceHeight * 0.0425,
		left: deviceHeight * 0.0428
	},
	topRight: {
		position: 'absolute',
		top: deviceHeight * 0.0425,
		right: deviceHeight * 0.0428
	}
});
export default styles;
