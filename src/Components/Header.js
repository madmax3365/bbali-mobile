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
				<TouchableOpacity style={styles.menu} onPress={this.toggleMenu}>
					<Image source={require('../assets/menu.png')} resizeMode="contain" />
				</TouchableOpacity>
				<View style={styles.profile}>
					<Text style={styles.profileText}>Welcome, John</Text>
					<Image
						resizeMode="stretch"
						source={require('../assets/profile_placeholder.png')}
						style={styles.profilePic}
					/>
				</View>
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
		marginLeft: deviceWidth * 0.07568
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
