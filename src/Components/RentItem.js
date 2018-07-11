import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Dimensions,
	StyleSheet
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		width: deviceWidth * 0.87359,
		backgroundColor: '#fff'
	},
	title: {
		position: 'absolute',
		color: '#13db97',
		top: deviceHeight * 0.01,
		left: deviceWidth * 0.0426,
		fontSize: 16,
		fontFamily: 'Poppins'
	},
	item: {
		height: deviceHeight * 0.1
	},
	amount: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		top: deviceHeight * 0.0548,
		left: deviceWidth * 0.0426,
		alignItems: 'center'
	},
	check: {
		position: 'absolute',
		right: deviceWidth * 0.0386,
		top: deviceHeight * 0.0548
	},
	plan: {
		marginLeft: deviceWidth * 0.01288,
		color: '#252d5c',
		fontFamily: 'Poppins',
		fontSize: 16
	},
	delimeter: {
		height: 1,
		backgroundColor: '#e5e5e5',
		position: 'absolute',
		bottom: -1,
		width: deviceWidth * 0.7979,
		alignSelf: 'center'
	},
	description: {
		position: 'absolute',
		fontFamily: 'Poppins',
		top: deviceHeight * 0.01,
		left: deviceWidth * 0.435
	}
});

export default props => {
	return (
		<View style={[styles.container, props.position]}>
			{props.items.map((item, i) => {
				return (
					<View style={styles.item} key={item.title}>
						<Text style={styles.title}>{item.title}</Text>
						{item.desc && <Text style={styles.description}>{item.desc}</Text>}
						<View style={styles.amount}>
							<Image
								source={require('../assets/currency.png')}
								style={styles.currency}
							/>
							<Text style={styles.plan}>{item.plan}</Text>
						</View>
						<TouchableOpacity
							style={styles.check}
							onPress={() => props.onPress(item.title)}>
							{props.activeName === item.title ? (
								<Image
									source={require('../assets/marked.png')}
									style={styles.icon}
								/>
							) : (
								<Image
									source={require('../assets/unmarked.png')}
									style={styles.icon}
								/>
							)}
						</TouchableOpacity>
						{i < props.items.length - 1 && <View style={styles.delimeter} />}
					</View>
				);
			})}
		</View>
	);
};
