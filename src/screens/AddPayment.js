import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, BackHandler } from 'react-native';
import styles from '../ScreenStyles/AddPaymentStyles';
import Method from '../Components/Method';

export default class AddPayment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
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
			<View style={styles.container}>
				<View style={styles.title}>
					<Text style={styles.titleText}>Payment Methods</Text>
				</View>
				<View style={styles.methods}>
					<Method text="XXXX XXXX XXXX 7909" />
					<Method text="XXXX XXXX XXXX 3450" />
					<Method text="XXXX XXXX XXXX 3430" />
				</View>
				<TouchableOpacity
					style={styles.add}
					onPress={() => this.setState({ show: !this.state.show })}>
					<Text style={styles.addText}>Add payment Method</Text>
					<View style={styles.plus}>
						<Text style={styles.plusText}>{this.state.show ? '-' : '+'}</Text>
					</View>
				</TouchableOpacity>
				{this.state.show && (
					<View style={styles.payment}>
						<TouchableOpacity style={styles.cc}>
							<Text style={styles.ccText}>Add Credit Card</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.gw}>
							<Text style={styles.ccText}>Connect Google Wallet</Text>
						</TouchableOpacity>
					</View>
				)}
			</View>
		);
	}
}
