import React, { Component } from 'react';
import { View, Text, BackHandler, Modal } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/QRStyles';
import Finished from './Finished';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Toast from '../Components/Toast';

export default class QR extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			code: '0000',
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
	checkQr = () => {
		if (this.state.code !== '') {
			const from = this.props.navigation.state.params
				? this.props.navigation.state.params.from
				: '';
			this.props.navigation.navigate('AddPayment', { from: from });
		} else {
			this.setState({ error: 'You must scan QR code first!' });
		}
	};
	onSuccess = e => {
		try {
			this.setState({ code: e.target });
		} catch (err) {
			console.log(err);
		}
	};
	render() {
		return (
			<View style={styles.wrapper}>
				{this.state.error !== '' && <Toast message={this.state.error} />}
				<Text style={styles.title}>Scan QR code</Text>
				<View style={styles.container}>
					<QRCodeScanner onRead={this.onSuccess} />
					<View style={styles.cont}>
						<Text style={styles.text}>{this.state.code}</Text>
					</View>
				</View>
				<SubmitButton
					title="SUBMIT"
					position={styles.button}
					onPress={this.checkQr}
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
