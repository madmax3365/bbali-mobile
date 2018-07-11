import React from 'react';
import { View, Image, Text } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/QRStyles';

export default () => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Scan QR code</Text>
			<View style={styles.container}>
				<View style={styles.cont}>
					<Text style={styles.text}>6 6 7 6 9 0</Text>
				</View>
			</View>
			<SubmitButton title="SUBMIT" position={styles.button} />
		</View>
	);
};
