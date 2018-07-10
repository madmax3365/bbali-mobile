import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../ScreenStyles/HistoryStyles';
import HistoryCart from '../Components/HistoryCart';

export default class History extends Component {
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={[
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'a' },
						{ key: 'b' }
					]}
					renderItem={({ item }) => <HistoryCart />}
				/>
			</View>
		);
	}
}
