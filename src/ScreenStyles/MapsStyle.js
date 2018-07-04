import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: deviceHeight * 0.79,
		width: deviceWidth
	},
	map: {
		height: deviceHeight * 0.79,
		width: deviceWidth
	}
});
export default styles;
