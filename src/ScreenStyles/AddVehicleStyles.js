import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: 'center',
		alignItems: 'center',
		width: deviceWidth * 0.8735,
		height: deviceHeight * 0.58378,
		backgroundColor: '#fff',
		marginTop: deviceHeight * 0.0439,
		marginBottom: deviceHeight * 0.2536
	},
	nameTitle: {
		position: 'absolute',
		color: '#13db97',
		fontFamily: 'Poppins',
		left: deviceWidth * 0.0818,
		top: deviceHeight * 0.033
	},
	typeTitle: {
		position: 'absolute',
		color: '#13db97',
		fontFamily: 'Poppins',
		left: deviceWidth * 0.0818,
		top: deviceHeight * 0.179
	},
	searchTitle: {
		position: 'absolute',
		color: '#13db97',
		fontFamily: 'Poppins',
		left: deviceWidth * 0.0818,
		top: deviceHeight * 0.325
	},
	button: {
		marginTop: deviceHeight * 0.473,
		marginBottom: deviceHeight * 0.044
	},
	nameField: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		height: deviceHeight * 0.0643,
		width: deviceWidth * 0.7129,
		top: deviceHeight * 0.0688,
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		borderRadius: 5
	},
	typeField: {
		flex: 1,
		alignItems: 'center',
		position: 'absolute',
		height: deviceHeight * 0.0643,
		width: deviceWidth * 0.7129,
		top: deviceHeight * 0.215,
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		borderRadius: 5
	},
	searchField: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		height: deviceHeight * 0.0643,
		width: deviceWidth * 0.7129,
		top: deviceHeight * 0.3623,
		backgroundColor: 'rgba(19, 219, 151, 0.1)',
		borderRadius: 5
	},
	name: {
		width: deviceWidth * 0.7029,
		color: '#898da4',
		fontFamily: 'Poppins'
	},
	search: {
		width: deviceWidth * 0.7029,
		color: '#898da4',
		fontFamily: 'Poppins'
	},
	type: {
		width: deviceWidth * 0.7029,
		color: '#898da4'
	}
});
export default styles;
