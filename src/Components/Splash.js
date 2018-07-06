import React from 'react';
import { Image, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default () => {
	return (
		<Image
			style={{ width: deviceWidth, height: deviceHeight }}
			source={require('../assets/screen.png')}
		/>
	);
};
