import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../ScreenStyles/ManageStyles';
import SubmitButton from '../Components/SubmitButton';

export default class Manage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			admin: true,
			input: false,
			amount: ''
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header} />
				<Image
					source={require('../assets/admin_panel.png')}
					style={styles.profilePic}
				/>
				<Text style={styles.name}>John Smith</Text>
				<View style={styles.body}>
					<View style={styles.toggle}>
						<Text style={styles.admin}>Admin</Text>
						<TouchableOpacity
							onPress={() => this.setState({ admin: !this.state.admin })}
							style={styles.toggler}>
							{this.state.admin ? (
								<Image
									source={require('../assets/toogle_off.png')}
									style={styles.toggleImg}
								/>
							) : (
								<Image
									source={require('../assets/toogle_on.png')}
									style={styles.toggleImg}
								/>
							)}
						</TouchableOpacity>
					</View>
					<View style={styles.credits}>
						<Text style={styles.creditText}>Credits</Text>
						<View style={styles.count}>
							<Image
								source={require('../assets/currency.png')}
								style={styles.currency}
							/>
							<Text style={styles.money}>5000</Text>
						</View>
					</View>
					<TouchableOpacity
						style={styles.showInput}
						onPress={() => this.setState({ input: !this.state.input })}>
						{this.state.input ? (
							<Image
								source={require('../assets/marked.png')}
								style={styles.showImg}
							/>
						) : (
							<Image
								source={require('../assets/unmarked.png')}
								style={styles.showImg}
							/>
						)}
						<Text style={styles.showText}>Send Credits</Text>
					</TouchableOpacity>
					{this.state.input && (
						<View style={styles.inputCont}>
							<TextInput
								style={styles.amount}
								value={this.state.amount}
								name="amount"
								placeholder="Enter Amount"
								onChangeText={text => this.setState({ amount: text })}
								keyboardType="numeric"
								underlineColorAndroid="transparent"
							/>
							<SubmitButton title="SEND" position={styles.mini} />
						</View>
					)}
				</View>
				<View style={styles.buttons}>
					<TouchableOpacity style={styles.deliver} activeOpacity={0.95}>
						<Text style={styles.deliverText}>Status</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.pick} activeOpacity={0.95}>
						<Text style={styles.pickText}>Riding</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
