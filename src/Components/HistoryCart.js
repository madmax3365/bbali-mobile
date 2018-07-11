import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		marginTop: deviceHeight * 0.0217,
		width: deviceWidth * 0.87359,
		height: deviceHeight * 0.1,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	left: {
		flex: 1,
		height: deviceHeight * 0.06567,
		justifyContent: 'center',
		alignItems: 'flex-start',
		borderLeftWidth: 2,
		borderLeftColor: '#13db97',
		marginLeft: deviceWidth * 0.0402,
		paddingLeft: deviceWidth * 0.037
	},
	title: {
		color: '#252d5c',
		fontFamily: 'Poppins',
		fontWeight: '400',
		fontSize: 12
	},
	bold: {
		fontWeight: 'bold'
	},
	date: {
		color: '#898da4',
		fontFamily: 'Poppins',
		fontWeight: '400',
		marginTop: deviceHeight * 0.013586,
		fontSize: 14
	},
	right: {
		flex: 1,
		height: deviceHeight * 0.06567,
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: deviceWidth * 0.0402
	},
	total: {
		color: '#252d5c',
		fontFamily: 'Poppins',
		fontSize: 12
	},
	amount: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: deviceHeight * 0.00226
	},
	amountText: {
		color: '#13db97',
		fontSize: 16
	},
	icon: {
		width: deviceWidth * 0.04267311,
		height: deviceWidth * 0.04267311,
		marginRight: deviceWidth * 0.01529
	}
});

export default props => {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<Text style={styles.title}>
					Booking Date: <Text style={styles.bold}> 7 May</Text>
				</Text>
				<Text style={styles.date}>7 May to 12 May</Text>
			</View>
			<View style={styles.right}>
				<Text style={styles.total}>Total Amount</Text>
				<View style={styles.amount}>
					<Image
						source={require('../assets/currency.png')}
						style={styles.icon}
					/>
					<Text style={styles.amountText}>12450</Text>
				</View>
			</View>
		</View>
	);
};
