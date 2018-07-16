import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../ScreenStyles/HistoryStyles';
import HistoryCart from '../Components/HistoryCart';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class History extends Component {
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.props.screen.userHistory}
					renderItem={({ item }) => <HistoryCart key={item.id} />}
				/>
			</View>
		);
	}
}
const mapStateToProps = state => ({
	screen: state.screen
});
History.propTypes = {
	screen: PropTypes.object
};
export default connect(mapStateToProps)(History);
