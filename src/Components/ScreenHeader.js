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
class ScreenHeader extends Component {
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
				<Text style={styles.title}>{this.props.title}</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: -1,
		flexDirection: 'row',
		alignItems: 'center',
		width: deviceWidth,
		height: deviceHeight * 0.08469,
		justifyContent: 'center',
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
		width: deviceWidth * 0.29159
	},
	title: {
		alignSelf: 'center',
		textAlign: 'center',
		color: '#fff',
		fontWeight: '500',
		fontSize: 20
	}
});

const mapStateToProps = state => ({
	nav: state.nav
});

export default connect(
	mapStateToProps,
	{ toggleDrawer }
)(ScreenHeader);
