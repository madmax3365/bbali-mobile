import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Image,
	FlatList
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default class Drawer extends Component {
	render() {
		const items = {
			key: 'Home'
		};
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image
						source={require('../assets/place_holder.png')}
						style={styles.avatar}
					/>
					<View style={styles.profile}>
						<Text style={styles.name}>Harold Cuninghm</Text>
						<View style={styles.loc}>
							<Text style={styles.locText}>Austin</Text>
						</View>
					</View>
				</View>
				<FlatList
					data={items}
					renderItem={({ item }) => <Text>{item.key}</Text>}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		position: 'absolute'
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
});
