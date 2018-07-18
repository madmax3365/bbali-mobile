import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native';
import styles from '../ScreenStyles/AddCCStyles';
import { Picker } from 'react-native-wheel-datepicker';
import SubmitButton from '../Components/SubmitButton';

export default class AddCC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: '',
			name: '',
			cvc: '',
			expireMonth: 'MM',
			expireYear: 'YYY',
			showDatePicker: false
		};
	}
	years = () => {
		const date = new Date();
		let years = [];
		for (let i = date.getFullYear(); i < date.getFullYear() + 75; i++) {
			years.push(i);
		}
		return years;
	};
	months = () => {
		let res = [];
		for (let i = 1; i < 13; i++) {
			i < 10 ? res.push(`0${i}`) : res.push(i);
		}
		return res;
	};
	render() {
		const date = new Date();
		const years = this.years();
		const months = this.months();
		return (
			<View style={styles.wrapper}>
				<TouchableWithoutFeedback
					onPress={() => this.setState({ showDatePicker: false })}>
					<View style={styles.container}>
						<Text style={styles.noTitle}>Credit Card No.</Text>
						<TextInput
							style={styles.no}
							value={this.state.number}
							onChangeText={text => this.setState({ number: text })}
							keyboardType="numeric"
							underlineColorAndroid="transparent"
						/>
						<Text style={styles.nameTitle}>Card Holder Name</Text>
						<TextInput
							style={styles.name}
							value={this.state.name}
							onChangeText={text => this.setState({ name: text })}
							underlineColorAndroid="transparent"
						/>
						<Text style={styles.cvcTitle}>CVC</Text>
						<TextInput
							style={styles.cvc}
							value={this.state.cvc}
							onChangeText={text => this.setState({ cvc: text })}
							keyboardType="numeric"
							underlineColorAndroid="transparent"
						/>
						<Text style={styles.expireTitle}>Expire</Text>
						<TouchableOpacity
							style={styles.expire}
							onPress={() =>
								this.setState({ showDatePicker: !this.state.showDatePicker })
							}>
							<Text style={styles.date}>
								{this.state.expireMonth}/{this.state.expireYear}
							</Text>
						</TouchableOpacity>
						<SubmitButton title="REGISTER" position={styles.button} />
					</View>
				</TouchableWithoutFeedback>
				{this.state.showDatePicker && (
					<View style={styles.picker}>
						<Picker
							style={styles.left}
							pickerData={months}
							mode="date"
							selectedValue={`0${date.getMonth()}`}
							onValueChange={date => this.setState({ expireMonth: date })}
						/>
						<Picker
							style={styles.right}
							pickerData={years}
							mode="date"
							selectedValue={date.getFullYear()}
							onValueChange={date => this.setState({ expireYear: date })}
						/>
					</View>
				)}
				{this.state.showDatePicker && (
					<View style={styles.overlay} pointerEvents="none" />
				)}
			</View>
		);
	}
}
