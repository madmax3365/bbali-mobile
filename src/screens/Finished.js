import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/FinishStyles';

export default class Finished extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.container}>
					<View style={styles.title}>
						<Text style={styles.titleText}>Ride Finished</Text>
					</View>
					<Text style={styles.desc}>How was your ride?</Text>
					<Text style={styles.feed}>Feedback (optional)</Text>
					<TextInput
						multiline
						underlineColorAndroid="transparent"
						style={styles.input}
						disableFullscreenUI={true}
					/>
					<SubmitButton title="SEND" position={styles.button} />
				</View>
				<TouchableOpacity style={styles.close} onPress={this.props.onPress}>
					<Text style={styles.closeText}>X</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
