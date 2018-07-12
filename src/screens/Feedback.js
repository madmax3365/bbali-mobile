import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../ScreenStyles/FeedbackStyles';
import SubmitButton from '../Components/SubmitButton';

export default class Feedback extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.title}>
					<Text style={styles.titleText}>Having Trouble?</Text>
				</View>
				<Text style={styles.desc}>Describe Problem</Text>
				<TextInput
					multiline
					underlineColorAndroid="transparent"
					style={styles.input}
					disableFullscreenUI={true}
				/>
				<SubmitButton title="SEND" position={styles.button} />
				<SubmitButton
					title="GET BACK TO ME ASAP"
					position={styles.backButton}
				/>
			</View>
		);
	}
}
