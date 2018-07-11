import React, { Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default class SecondaryHeader extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => this.props.navigation.goBack()}>
					<Text style={styles.left}>{'<'}</Text>
					<Text style={styles.right}>-</Text>
				</TouchableOpacity>
				<Text style={styles.title}>{this.props.title}</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: -1,
		flexDirection: 'row',
		alignItems: 'center',
		width: deviceWidth,
		height: deviceHeight * 0.08469,
		justifyContent: 'center',
		backgroundColor: '#252d5c'
	},
	menu: {
		flex: 1,
		position: 'absolute',
		left: deviceWidth * 0.07568
	},
	title: {
		alignSelf: 'center',
		textAlign: 'center',
		color: '#fff',
		fontWeight: '500',
		fontSize: 20
	},
	backButton: {
		width: deviceWidth * 0.049,
		height: deviceHeight * 0.0322,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		left: deviceWidth * 0.0636
	},
	left: {
		color: '#fff',
		fontSize: 30
	},
	right: {
		color: '#fff',
		fontSize: 30,
		marginLeft: -1
	}
});
