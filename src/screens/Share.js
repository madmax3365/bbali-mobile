import React, { Component } from 'react';
import { View, Text, Clipboard } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/ShareStyles';

export default class Share extends Component {
	copyContent = () => Clipboard.setString('https://www.bbali.io/reffrealdummy');
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.top}>
					<Text style={styles.text}>Give this code to friends, </Text>
					<Text style={styles.text}>
						When they sign up, they will get <Text style={styles.bold}>$5</Text>{' '}
						credits
					</Text>
				</View>
				<View style={styles.linkCont}>
					<Text style={styles.link}>https://www.bbali.io/reffrealdummy</Text>
				</View>
				<SubmitButton
					position={styles.button}
					title="COPY URL"
					onPress={this.copyContent}
				/>
			</View>
		);
	}
}
