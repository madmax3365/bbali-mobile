import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	getUserLocation,
	getUserAddress
} from '../../Redux/actions/authActions';
import MapView from 'react-native-maps';
import styles from '../ScreenStyles/MapsStyle';
class Maps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calloutVisible: false,
			isMapReady: false,
			region: {
				latitude: 1.317605,
				longitude: 103.852776,
				latitudeDelta: 0.002,
				longitudeDelta: 0.002
			}
		};
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	}

	handleBackPress = () => {
		return true;
	};
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
		navigator.geolocation.getCurrentPosition(location => {
			this.props.getUserLocation({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude
			});
			this.setState({
				region: {
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
					latitudeDelta: 0.002,
					longitudeDelta: 0.002
				}
			});
			axios
				.get(
					'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
						location.coords.latitude +
						',' +
						location.coords.longitude +
						'&key=AIzaSyAMC2YX6ZzFUNnbj4Y6IUr1JBOJRQmhcmw'
				)
				.then(res =>
					this.props.getUserAddress(res.data.results[0].formatted_address)
				);
		});
	}
	onMapLayout = () => {
		this.setState({ isMapReady: true });
	};

	toggle = () => {
		this.state.calloutVisible
			? this._userOnMap.hideCallout()
			: this._userOnMap.showCallout();
		this.setState({ calloutVisible: !this.state.calloutVisible });
	};

	render() {
		const mapStyle = [
			{
				featureType: 'poi',
				elementType: 'labels.text',
				stylers: [
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'poi.business',
				stylers: [
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'road',
				elementType: 'labels.icon',
				stylers: [
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'transit',
				stylers: [
					{
						visibility: 'off'
					}
				]
			}
		];
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					provider="google"
					customMapStyle={mapStyle}
					calloutOffset={{ x: -8, y: 28 }}
					calloutAnchor={{ x: 4, y: 5 }}
					region={this.state.region}
					onLayout={this.onMapLayout}>
					{this.state.isMapReady && (
						<MapView.Marker
							ref={component => (this._userOnMap = component)}
							onPress={this.toggle}
							image={require('../assets/user_on_map.png')}
							coordinate={{
								latitude: this.state.region.latitude,
								longitude: this.state.region.longitude
							}}>
							<MapView.Callout tooltip={true}>
								<View style={styles.calloutCont}>
									<Text style={styles.calloutText}>You are here</Text>
									<Image
										source={require('../assets/callout.png')}
										style={styles.calloutImage}
									/>
								</View>
							</MapView.Callout>
						</MapView.Marker>
					)}
					{this.state.isMapReady && (
						<MapView.Marker
							ref={component => (this._scooterOnMap = component)}
							image={require('../assets/scooter_indicator.png')}
							onPress={() => this.props.navigation.navigate('Rent')}
							coordinate={{
								latitude: this.state.region.latitude + 0.000245,
								longitude: this.state.region.longitude + 0.000245
							}}
						/>
					)}
					{this.state.isMapReady && (
						<MapView.Marker
							ref={component => (this._scooterOnMap = component)}
							image={require('../assets/scooter_indicator.png')}
							onPress={() => this.props.navigation.navigate('Rent')}
							coordinate={{
								latitude: this.state.region.latitude - 0.000245,
								longitude: this.state.region.longitude - 0.000245
							}}
						/>
					)}
					{this.state.isMapReady && (
						<MapView.Marker
							ref={component => (this._scooterOnMap = component)}
							image={require('../assets/scooter_indicator.png')}
							onPress={() => this.props.navigation.navigate('Rent')}
							coordinate={{
								latitude: this.state.region.latitude + 0.000445,
								longitude: this.state.region.longitude - 0.000345
							}}
						/>
					)}
				</MapView>
				<View style={styles.buttons}>
					<TouchableOpacity
						style={styles.deliver}
						activeOpacity={0.95}
						onPress={() => this.props.navigation.navigate('Address')}>
						<Image
							source={require('../assets/delivery.png')}
							style={styles.icon}
						/>
						<Text style={styles.deliverText}>Deliver to me</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.pick}
						activeOpacity={0.95}
						onPress={() =>
							this.props.navigation.navigate('Rent', { from: 'Pick Up' })
						}>
						<Image
							source={require('../assets/pickup.png')}
							style={styles.icon}
						/>
						<Text style={styles.pickText}>Pick up</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
Maps.propTypes = {
	getUserLocation: PropTypes.func,
	getUserAddress: PropTypes.func
};

const mapStateToProps = state => ({
	nav: state.nav
});

export default connect(
	mapStateToProps,
	{ getUserAddress, getUserLocation }
)(Maps);
