import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SettingsItem from '../Components/SettingsItem';
import styles from '../ScreenStyles/SettingsStyles';

export default class Settings extends Component {
	doRoute = name => {
		this.props.navigation.navigate(name);
	};
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('UserSettings')}
					style={styles.head}>
					<Text style={styles.title}>User Settings</Text>
				</TouchableOpacity>
				<View style={styles.menu}>
					<SettingsItem
						title="Admin Panel"
						doRoute={() => this.doRoute('Admin')}
					/>
					<SettingsItem title="Credit Cards" />
					<SettingsItem title="Term and Condition" />
				</View>
			</View>
		);
	}
}
