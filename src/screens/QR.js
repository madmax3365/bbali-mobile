import React, { Component } from 'react';
import { View, Image, Text, BackHandler, Modal } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/QRStyles';
import Finished from './Finished';

export default class QR extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	}

	handleBackPress = () => {
		this.props.navigation.goBack();
		return true;
	};
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}
	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.title}>Scan QR code</Text>
				<View style={styles.container}>
					<View style={styles.cont}>
						<Text style={styles.text}>6 6 7 6 9 0</Text>
					</View>
				</View>
				<SubmitButton
					title="SUBMIT"
					position={styles.button}
					onPress={() => this.props.navigation.navigate('AddPayment')}
				/>
				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modal}
					onRequestClose={() => {
						alert('Modal has been closed.');
					}}>
					<Finished onPress={() => this.setState({ modal: false })} />
				</Modal>

				<Text
					style={styles.modal}
					onPress={() => this.setState({ modal: true })}>
					Show Modal
				</Text>
			</View>
		);
	}
}
