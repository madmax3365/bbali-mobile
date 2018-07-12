import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import { connect } from 'react-redux';
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
	}
	onMapLayout = () => {
		navigator.geolocation.getCurrentPosition(location =>
			this.setState({
				region: {
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
					latitudeDelta: 0.002,
					longitudeDelta: 0.002
				}
			})
		);
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
				{this.props.nav.drawerOpened && (
					<Image
						source={require('../assets/cross.png')}
						style={styles.closeButton}
					/>
				)}
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
							title={this.props.title}
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
						onPress={() => this.props.navigation.navigate('Rent')}>
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
const mapStateToProps = state => ({
	nav: state.nav
});

export default connect(mapStateToProps)(Maps);
