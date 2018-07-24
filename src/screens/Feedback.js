import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	Dimensions,
	View,
	Text,
	TextInput
} from 'react-native';
import styles from '../ScreenStyles/FeedbackStyles';
import SubmitButton from '../Components/SubmitButton';

const deviceHeight = Dimensions.get('window').height;
export default class Feedback extends Component {
	render() {
		return (
			<KeyboardAvoidingView
				keyboardVerticalOffset={-deviceHeight * 0.205289}
				contentContainerStyle={{ flex: 1 }}
				style={{ flex: 1 }}
				behavior="position"
				enabled>
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
			</KeyboardAvoidingView>
		);
	}
}
