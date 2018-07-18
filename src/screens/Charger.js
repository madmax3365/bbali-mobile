import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Image } from 'react-native';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import styles from '../ScreenStyles/ChargerStyles';
import SubmitButton from '../Components/SubmitButton';

class Charger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: props.auth.user.address,
			calloutVisible: false,
			isMapReady: false,
			region: {
				latitude: props.auth.user.location.latitude,
				longitude: props.auth.user.location.longitude,
				latitudeDelta: 0.02,
				longitudeDelta: 0.02
			}
		};
	}
	handleChange = e => {
		e.preventDefault();
	};

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
					minZoomLevel={17}
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
				</MapView>
				<View style={styles.popup}>
					<Text style={styles.tytle}>Is this location correct?</Text>
					<View style={styles.location}>
						<TextInput
							value={this.state.location}
							style={styles.locationText}
							underlineColorAndroid="transparent"
							multiline
							onChangeText={text => this.setState({ location: text })}
						/>
					</View>
					<SubmitButton
						title="ADD MY CHARGING LOCATION"
						position={styles.button}
						onPress={this.handleChange}
					/>
				</View>
			</View>
		);
	}
}
Charger.propTypes = {
	auth: PropTypes.object
};
const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Charger);
