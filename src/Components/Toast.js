import React, { Component } from 'react';
import { Text, Animated } from 'react-native';

export default class Toast extends Component {
	render() {
		return (
			<Animated.View
				style={{
					transform: [{ translateY: new Animated.Value(0) }],
					height: 70,
					backgroundColor: 'red',
					position: 'absolute',
					left: 0,
					top: 0,
					right: 0,
					zIndex: 10,
					justifyContent: 'center'
				}}>
				<Text
					style={{
						marginLeft: 10,
						color: 'white',
						fontSize: 16,
						fontWeight: 'bold',
						textAlign: 'center'
					}}>
					{this.props.message}
				</Text>
			</Animated.View>
		);
	}
}
