import React, { Component } from 'react';
import { View, Text, Clipboard, TouchableOpacity, Image } from 'react-native';
import styles from '../ScreenStyles/ShareStyles';

export default class Share extends Component {
	constructor(props) {
		super(props);
		this.state = {
			promocode: '667690'
		};
	}
	copyContent = () => Clipboard.setString(this.state.promocode);
	render() {
		return (
			<View style={styles.wrap}>
				<Text style={styles.title}>Share this promo code</Text>
				<View style={styles.container}>
					<View style={styles.linkCont}>
						<Text style={styles.link}>{this.state.promocode}</Text>
					</View>
					<TouchableOpacity style={styles.copy} onPress={this.copyContent}>
						<Image
							source={require('../assets/copy.png')}
							style={styles.copyImg}
						/>
					</TouchableOpacity>

					<Text style={styles.text}>
						When your friends wil sign up{'\n'}
						with your promo code,{'\n'}
						You will get <Text style={styles.bold}>$5</Text> after thier{'\n'}
						first ride over <Text style={styles.bold}>$5</Text>
					</Text>
				</View>
			</View>
		);
	}
}
