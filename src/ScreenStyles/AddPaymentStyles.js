import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		top: deviceHeight * 0.03357,
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#fff',
		width: deviceWidth * 0.83449,
		height: deviceHeight * 0.829
	},
	title: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		paddingTop: deviceHeight * 0.026,
		paddingBottom: deviceHeight * 0.016,
		width: deviceWidth * 0.61655,
		borderBottomWidth: 1,
		borderBottomColor: '#e5e5e5'
	},
	titleText: {
		color: '#252d5c',
		fontSize: 20,
		fontWeight: '600',
		fontFamily: 'Poppins'
	},
	methods: {
		height: deviceHeight * 0.093,
		position: 'absolute',
		top: deviceHeight * 0.093
	},
	add: {
		position: 'absolute',
		top: deviceHeight * 0.42,
		left: deviceWidth * 0.10486,
		flex: 1,
		flexDirection: 'row'
	},
	addText: {
		color: '#252d5c',
		fontSize: 16,
		fontWeight: '600',
		fontFamily: 'Poppins'
	},
	plus: {
		width: deviceHeight * 0.0307,
		height: deviceHeight * 0.0307,
		borderRadius: 50,
		marginLeft: deviceWidth * 0.0101,
		borderWidth: 1,
		borderColor: '#000',
		alignItems: 'center',
		justifyContent: 'center'
	},
	plusText: {
		fontSize: 20,
		color: '#000',
		fontWeight: 'bold'
	},
	payment: {
		position: 'absolute',
		left: deviceWidth * 0.10486,
		top: deviceHeight * 0.4689
	},
	cc: {
		flex: 1,
		flexDirection: 'row'
	},
	gw: {
		flex: 1,
		flexDirection: 'row',
		marginTop: deviceHeight * 0.01964
	},
	gwImage: {
		width: deviceWidth * 0.07759,
		height: deviceHeight * 0.0275
	},
	gwText: {
		color: '#252d5c',
		fontSize: 16,
		fontFamily: 'Poppins',
		marginLeft: deviceWidth * 0.05369
	},
	ccText: {
		color: '#252d5c',
		fontSize: 16,
		fontFamily: 'Poppins',
		marginLeft: deviceWidth * 0.05369
	},
	ccImage: {
		width: deviceWidth * 0.07759,
		height: deviceHeight * 0.0275
	}
});
export default styles;
