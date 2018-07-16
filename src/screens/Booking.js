import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/BookingStyles';
import { Picker } from 'react-native-wheel-datepicker';

export default class Booking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startTimeHour: '',
			startTimeMin: '',
			startTimeType: '',
			endTimeHour: '',
			endTimeMin: '',
			endTimeType: ''
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
		const minutes = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59
		];
		const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		const date = new Date();
		const currentHour =
			date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
		const currentMinutes = date.getMinutes();

		return (
			<View style={styles.wrapper}>
				<Text style={styles.title}>Booking Type : Hours</Text>
				<View style={styles.container}>
					<View style={styles.left}>
						<Picker
							style={styles.calendar}
							selectedValue={currentHour}
							pickerData={hours}
							mode="time"
							onValueChange={value => this.setState({ startTimeHour: value })}
						/>
						<Picker
							style={styles.calendar}
							selectedValue={currentMinutes}
							pickerData={minutes}
							mode="time"
							onValueChange={value => this.setState({ startTimeMin: value })}
						/>
						<Picker
							style={styles.calendarAm}
							selectedValue={date.getHours() > 12 ? 'PM' : 'AM'}
							pickerData={['AM', 'PM']}
							mode="time"
							onValueChange={value => this.setState({ startTimeType: value })}
						/>
					</View>
					<View style={styles.right}>
						<Picker
							style={styles.calendar}
							mode="time"
							selectedValue={currentHour + 1}
							pickerData={hours}
							onValueChange={value => this.setState({ endTimeHour: value })}
						/>
						<Picker
							style={styles.calendar}
							selectedValue={currentMinutes}
							mode="time"
							pickerData={minutes}
							onValueChange={value => this.setState({ endTimeMin: value })}
						/>
						<Picker
							style={styles.calendarAm}
							selectedValue={date.getHours() + 1 > 12 ? 'PM' : 'AM'}
							mode="time"
							pickerData={['AM', 'PM']}
							onValueChange={value => this.setState({ endTimeVal: value })}
						/>
					</View>
				</View>
				<View style={styles.overlay} pointerEvents="none" />
				<SubmitButton
					position={styles.button}
					title="CONFIRM"
					onPress={() => this.props.navigation.navigate('QR')}
				/>
			</View>
		);
	}
}
