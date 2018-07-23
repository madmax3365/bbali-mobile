import React, { Component } from 'react';
import {
	View,
	Image,
	TouchableOpacity,
	Dimensions,
	StyleSheet
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default class Stars extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 3
		};
	}

	render() {
		const items = [1, 2, 3, 4, 5].map(item => {
			return (
				<TouchableOpacity
					style={[styles.starCont, this.props.position]}
					key={item}
					onPress={() => this.setState({ count: item })}>
					{this.state.count >= item ? (
						<Image
							source={require('../assets/rate_app_g.png')}
							style={styles.star}
						/>
					) : (
						<Image
							source={require('../assets/rate_app_b.png')}
							style={styles.star}
						/>
					)}
				</TouchableOpacity>
			);
		});
		return <View style={styles.container}>{items}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row'
	},
	star: {
		width: deviceWidth * 0.065698,
		height: deviceHeight * 0.035,
		marginLeft: deviceWidth * 0.0068,
		marginRight: deviceWidth * 0.0068
	}
});
