import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Clipboard,
	ScrollView,
	Dimensions
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from '../ScreenStyles/BitcoinStyles';
import SubmitButton from '../Components/SubmitButton';

const deviceHeight = Dimensions.get('window').height;
export default class Bitcoin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usd: '5.50',
			bitcoin: '0012',
			bitcoinUrl: '1HZTpqdYkRDahk95ZqBjUR82kBdFVPET3n'
		};
	}
	copyContent = () => Clipboard.setString(this.state.bitcoinUrl);
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.usd}>
					<Image
						source={require('../assets/dollar_coin.png')}
						style={styles.usdImg}
					/>
					<Text style={styles.amount}>{this.state.usd}</Text>
				</View>
				<View style={styles.btc}>
					<Image
						source={require('../assets/bitcoin.png')}
						style={styles.btcImg}
					/>
					<Text style={styles.amount}>.{this.state.bitcoin} BTC</Text>
				</View>
				<View style={styles.qr}>
					<QRCodeScanner cameraStyle={styles.scanner} onRead={this.onSuccess} />
				</View>
				<View style={styles.linkCont}>
					<ScrollView
						horizontal
						height={deviceHeight * 0.0656}
						contentContainerStyle={styles.scroll}
						showsHorizontalScrollIndicator={false}>
						<Text style={styles.link}>{this.state.bitcoinUrl}</Text>
					</ScrollView>
				</View>
				<TouchableOpacity style={styles.copy} onPress={this.copyContent}>
					<Image
						source={require('../assets/copy.png')}
						style={styles.copyImg}
					/>
				</TouchableOpacity>
				<SubmitButton
					title="CONVERT TO CREDIT"
					position={styles.convert}
					onPress={() => this.props.navigation.navigate('Convert')}
				/>
				<SubmitButton
					title="SEND"
					position={styles.send}
					onPress={() => this.props.navigation.navigate('SendBitcoin')}
				/>
			</View>
		);
	}
}
