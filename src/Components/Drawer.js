import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Image,
	ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../Redux/actions/navActions';
import MenuItem from './MenuItem';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
class Drawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routeName: 'Home'
		};
	}
	componentDidUpdate(prevProps) {
		if (
			this.props.navigation.state.isDrawerOpen !==
			prevProps.navigation.state.isDrawerOpen
		) {
			this.props.toggleDrawer(this.props.navigation.state.isDrawerOpen);
		}
	}
	doRoute = name => {
		this.setState({ routeName: name });
		this.props.navigation.navigate(name);
	};
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.header}
					onPress={() => this.doRoute('UserSettings')}>
					<ImageBackground
						style={styles.header}
						source={require('../assets/wave_shape.png')}>
						<Image
							source={require('../assets/profile_placeholder.png')}
							style={styles.avatar}
						/>
						<Text style={styles.name}>Harold Cuninghm</Text>
						<View style={styles.loc}>
							<Image source={require('../assets/location.png')} />
							<Text style={styles.locText}>Austin</Text>
						</View>
					</ImageBackground>
				</TouchableOpacity>
				<View style={styles.menu}>
					<View style={styles.items}>
						<View style={styles.itemWrapper}>
							<MenuItem
								source={
									this.state.routeName === 'Home'
										? require('../assets/home_g.png')
										: require('../assets/home_blue.png')
								}
								doRoute={() => this.doRoute('Home')}
								active={this.state.routeName === 'Home'}
								text="Home"
							/>
						</View>
						<View style={styles.itemWrapper}>
							<MenuItem
								source={
									this.state.routeName === 'History'
										? require('../assets/history_g.png')
										: require('../assets/history_b.png')
								}
								doRoute={() => this.doRoute('History')}
								active={this.state.routeName === 'History'}
								text="My History"
							/>
						</View>
						<View style={styles.itemWrapper}>
							<MenuItem
								source={
									this.state.routeName === 'Settings'
										? require('../assets/setting_g.png')
										: require('../assets/setting_b.png')
								}
								doRoute={() => this.doRoute('Settings')}
								active={this.state.routeName === 'Settings'}
								text="Settings"
							/>
						</View>
						<View style={styles.itemWrapper}>
							<MenuItem
								source={
									this.state.routeName === 'Credits'
										? require('../assets/my_credits_g.png')
										: require('../assets/my_credits_b.png')
								}
								doRoute={() => this.doRoute('Credits')}
								active={this.state.routeName === 'Credits'}
								text="My Credits"
							/>
						</View>
						<View style={styles.itemWrapper}>
							<MenuItem
								source={
									this.state.routeName === 'Share'
										? require('../assets/share_a_ride_g.png')
										: require('../assets/share_a_ride_b.png')
								}
								doRoute={() => this.doRoute('Share')}
								active={this.state.routeName === 'Share'}
								text="Share a ride"
							/>
						</View>
						<View style={styles.itemWrapper}>
							<MenuItem
								source={
									this.state.routeName === 'Feedback'
										? require('../assets/feedback_g.png')
										: require('../assets/feedback_b.png')
								}
								active={this.state.routeName === 'Feedback'}
								text="Feedback"
								doRoute={() => this.doRoute('Feedback')}
							/>
						</View>
						<View style={styles.itemWrapper}>
							<MenuItem
								source={
									this.state.routeName === 'Rate'
										? require('../assets/rate_app_g.png')
										: require('../assets/rate_app_b.png')
								}
								active={this.state.routeName === 'Rate'}
								text="Rate this app"
							/>
						</View>
						<View style={styles.itemWrapper}>
							<MenuItem
								source={
									this.state.routeName === 'Charger'
										? require('../assets/become_a_charger_g.png')
										: require('../assets/become_a_charger_b.png')
								}
								doRoute={() => this.doRoute('Charger')}
								active={this.state.routeName === 'Charger'}
								text="Become a charger"
							/>
						</View>
						<View style={styles.itemWrapper}>
							<MenuItem
								source={
									this.state.routeName === 'Mechanic'
										? require('../assets/become_a_mechanic_g.png')
										: require('../assets/become_a_mechanic_b.png')
								}
								doRoute={() => this.doRoute('Mechanic')}
								active={this.state.routeName === 'Mechanic'}
								text="Become a mechanic"
							/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		position: 'absolute'
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 10,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		height: deviceHeight * 0.22826,
		width: deviceWidth * 0.775
	},
	avatar: {
		position: 'absolute',
		top: deviceHeight * 0.03725,
		left: deviceWidth * 0.0628,
		width: deviceHeight * 0.11,
		height: deviceHeight * 0.11
	},
	name: {
		color: '#252d5c',
		position: 'absolute',
		top: deviceHeight * 0.066956,
		left: deviceWidth * 0.322,
		fontFamily: 'Poppins',
		fontSize: 18
	},
	loc: {
		position: 'absolute',
		top: deviceHeight * 0.109,
		left: deviceWidth * 0.322,
		flex: 1,
		flexDirection: 'row'
	},
	locText: {
		color: '#252d5c',
		marginLeft: deviceWidth * 0.0201288,
		fontFamily: 'Poppins',
		fontSize: 16
	},
	menu: {
		width: deviceWidth * 0.775,
		backgroundColor: '#313a6d',
		height: deviceHeight,
		flex: 1
	},
	items: {
		position: 'absolute',
		top: deviceHeight * 0.218
	}
});

const mapStateToProps = state => ({
	nav: state.nav
});

export default connect(
	mapStateToProps,
	{ toggleDrawer }
)(Drawer);
