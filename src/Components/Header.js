import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Dimensions,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../Redux/actions/navActions';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerOpen: this.props.nav.drawerOpen
		};
	}

	toggleMenu = () => {
		this.props.navigation.openDrawer();
	};
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.menuWrap} onPress={this.toggleMenu}>
					<View style={styles.menu}>
						<Image
							source={require('../assets/menu.png')}
							resizeMode="contain"
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.profile}
					onPress={() => this.props.navigation.navigate('QR', { from: 'QR' })}>
					<Text style={styles.profileText}>Scan QR</Text>
					<Image
						resizeMode="stretch"
						source={require('../assets/qrcode.png')}
						style={styles.profilePic}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: -1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: deviceWidth,
		height: deviceHeight * 0.08469,

		backgroundColor: '#252d5c'
	},
	menu: {
		flex: 1,
		marginLeft: deviceWidth * 0.07568,
		marginTop: deviceHeight * 0.025
	},
	menuWrap: {
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		justifyContent: 'center',
		width: deviceWidth * 0.39159
	},
	profile: {
		position: 'absolute',
		right: deviceWidth * 0.077,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	profilePic: {
		width: deviceWidth * 0.07,
		height: deviceWidth * 0.07
	},
	profileText: {
		color: '#fff',
		marginRight: deviceWidth * 0.0169,
		fontFamily: 'Poppins - Semi Bold',
		fontWeight: '500'
	}
});

const mapStateToProps = state => ({
	nav: state.nav
});

export default connect(
	mapStateToProps,
	{ toggleDrawer }
)(Header);
