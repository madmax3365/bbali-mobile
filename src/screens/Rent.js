import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/RentStyles';
import RentItem from '../Components/RentItem';

export default class Rent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			short: [
				{
					title: 'Pay as I go',
					plan: '150/Minute'
				},
				{
					title: 'Hourly',
					plan: '5,000/Hour'
				}
			],
			long: [
				{
					title: 'Daily',
					plan: '20,000/Day'
				},
				{
					title: 'Weekly',
					plan: '50,000/Week'
				},
				{
					title: 'Monthly (Rent to own)',
					plan: '1,50,000/Month',
					desc: 'Own after 10 months'
				}
			],
			activeName: 'Daily'
		};
	}
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	}

	handleBackPress = () => {
		this.props.navigation.goBack();
		return true;
	};
	doRoute = e => {
		e.preventDefault();

		const from = this.props.navigation.state.params
			? this.props.navigation.state.params.from
			: undefined;
		if (this.state.activeName === 'Hourly') {
			this.props.navigation.navigate('Booking');
		} else {
			from
				? this.props.navigation.navigate('QR')
				: this.props.navigation.navigate('AddPayment');
		}
	};
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.short}>Short Terms</Text>
				<RentItem
					items={this.state.short}
					position={styles.shortPos}
					activeName={this.state.activeName}
					onPress={title => this.setState({ activeName: title })}
				/>
				<Text style={styles.long}>Long Terms</Text>
				<RentItem
					items={this.state.long}
					position={styles.longPos}
					activeName={this.state.activeName}
					onPress={title => this.setState({ activeName: title })}
				/>
				<SubmitButton
					title="NEXT"
					position={styles.button}
					onPress={this.doRoute}
				/>
			</View>
		);
	}
}
