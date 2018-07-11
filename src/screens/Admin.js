import React from 'react';
import { View } from 'react-native';
import AdminItem from '../Components/AdminItem';
import styles from '../ScreenStyles/AdminStyles';

export default props => {
	return (
		<View style={styles.container}>
			<AdminItem
				title="Manage user"
				position={styles.topLeft}
				icon={require('../assets/manage_users.png')}
				doRoute={() => props.navigation.navigate('Manage')}
			/>
			<AdminItem
				title="Manage vehicle"
				icon={require('../assets/manage_vehicle.png')}
				position={styles.topRight}
				doRoute={() => props.navigation.navigate('Vehicle')}
			/>
		</View>
	);
};
