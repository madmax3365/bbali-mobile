import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		width: deviceWidth,
		flex: 1,
		alignItems: 'center',
		paddingBottom: deviceHeight * 0.0217
	}
});

export default styles;
