import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';
import MapView from 'react-native-maps';
import styles from '../ScreenStyles/MapsStyle';

export default class Maps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMapReady: false,
			region: {
				latitude: 40.163986,
				longitude: 44.513113,
				latitudeDelta: 0.02,
				longitudeDelta: 0.02
			}
		};
	}
	static navigationOptions = ({ navigation }) => {
		return { headerRight: 'Welcome,' };
	};

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	}

	handleBackPress = () => {
		BackHandler.exitApp(); // works best when the goBack is async
		return true;
	};
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}
	onMapLayout = () => {
		this.setState({ isMapReady: true });
	};

	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					provider="google"
					mapType="hybrid"
					minZoomLevel={15}
					region={this.state.region}
					onLayout={this.onMapLayout}>
					{this.state.isMapReady && (
						<MapView.Marker
							title={this.props.title}
							coordinate={{
								latitude: this.state.region.latitude,
								longitude: this.state.region.longitude
							}}
						/>
					)}
				</MapView>
			</View>
		);
	}
}
