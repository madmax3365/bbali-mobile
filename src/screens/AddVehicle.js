import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	Text,
	TextInput,
	View,
	Picker,
	Dimensions
} from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/AddVehicleStyles';

const deviceHeight = Dimensions.get('window').height;
export default class AddVehicle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Haryvastava',
			type: 'Adult Scooter',
			search: 'Mr. Gildong Hong, Bldg. 102 Unit 304, Sajik..'
		};
	}
	render() {
		return (
			<KeyboardAvoidingView
				keyboardVerticalOffset={-deviceHeight * 0.255289}
				contentContainerStyle={{ flex: 1 }}
				style={{ flex: 1 }}
				behavior="position"
				enabled>
				<View style={styles.container}>
					<Text style={styles.nameTitle}>Name</Text>
					<View style={styles.nameField}>
						<TextInput
							style={styles.name}
							value={this.state.name}
							name="name"
							onChangeText={text => this.setState({ name: text })}
							underlineColorAndroid="transparent"
						/>
					</View>
					<Text style={styles.typeTitle}>Type</Text>
					<View style={styles.typeField}>
						<Picker
							selectedValue={this.state.type}
							style={styles.type}
							onValueChange={itemValue => this.setState({ type: itemValue })}>
							<Picker.Item label="Adult Scooter" value="Adult Scooter" />
							<Picker.Item label="Option 2" value="Option 2" />
							<Picker.Item label="Option 3" value="Option 3" />
						</Picker>
					</View>
					<Text style={styles.searchTitle}>Initial Location</Text>
					<View style={styles.searchField}>
						<TextInput
							style={styles.search}
							value={this.state.search}
							name="name"
							onChangeText={text => this.setState({ location: text })}
							underlineColorAndroid="transparent"
						/>
					</View>
					<SubmitButton title="Submit" position={styles.button} />
				</View>
			</KeyboardAvoidingView>
		);
	}
}
