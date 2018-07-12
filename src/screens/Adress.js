import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	BackHandler
} from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/AdressStyles';

export default class Adress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address:
				'Mr. Gildong Hong, Bldg. 102 Unit 304, Sajik- ro-3-gil 23, Jongno-gu, Seoul 30174 (South Korea)'
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
			<View style={styles.wrap}>
				<View style={styles.container}>
					<Text style={styles.text}>
						Is this address correct for delivery ?
					</Text>
					<Text style={styles.address}>Address</Text>
					<View style={styles.linkCont}>
						<TextInput
							value={this.state.address}
							underlineColorAndroid="transparent"
							multiline
							onChangeText={text => this.setState({ address: text })}
							style={styles.link}
						/>
					</View>
					<SubmitButton position={styles.button} title="CHANGE" />
				</View>
				<View style={styles.bottom}>
					<TouchableOpacity style={styles.item}>
						<Image
							source={require('../assets/find_scooter.png')}
							style={[styles.tabIcon, styles.size1]}
						/>
						<Text style={styles.itemText}>Find Scooters</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.item}>
						<Image
							source={require('../assets/charging.png')}
							style={[styles.tabIcon, styles.size2]}
						/>
						<Text style={styles.itemText}>Find Charging</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.item}>
						<Image
							source={require('../assets/current_status.png')}
							style={[styles.tabIcon, styles.size3]}
						/>
						<Text style={styles.itemText}>Current status</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
