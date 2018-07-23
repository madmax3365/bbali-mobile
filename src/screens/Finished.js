import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/FinishStyles';
import PropTypes from 'prop-types';
import Stars from '../Components/Stars';

export default class Finished extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.container}>
					<View style={styles.title}>
						<Text style={styles.titleText}>Ride Finished</Text>
					</View>
					<Text style={styles.desc}>How was your ride?</Text>
					<Stars position={styles.stars} />
					<Text style={styles.feed}>Feedback (optional)</Text>
					<View style={styles.inputCont}>
						<TextInput
							multiline
							underlineColorAndroid="transparent"
							style={styles.input}
							disableFullscreenUI={true}
						/>
					</View>
					<SubmitButton title="SEND" position={styles.button} />
				</View>
				<TouchableOpacity style={styles.close} onPress={this.props.onPress}>
					<Text style={styles.closeText}>X</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
Finished.propTypes = {
	onPress: PropTypes.func
};
