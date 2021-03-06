import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	BackHandler
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/AdressStyles';

class Adress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address: props.auth.user.address
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
					<SubmitButton
						position={styles.button}
						title="CHANGE"
						onPress={() => this.props.navigation.navigate('Rent')}
					/>
				</View>
				<View style={styles.bottom}>
					<TouchableOpacity
						style={styles.item}
						onPress={() => this.props.navigation.navigate('Home')}>
						<Image
							source={require('../assets/find_scooter.png')}
							style={[styles.tabIcon, styles.size1]}
						/>
						<Text style={styles.itemText}>Find Scooters</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.item}
						onPress={() => this.props.navigation.navigate('Home')}>
						<Image
							source={require('../assets/charging.png')}
							style={[styles.tabIcon, styles.size2]}
						/>
						<Text style={styles.itemText}>Find Charging</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.item}
						onPress={() => this.props.navigation.navigate('Home')}>
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
Adress.propTypes = {
	auth: PropTypes.object
};
const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Adress);
