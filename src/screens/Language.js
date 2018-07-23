import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../ScreenStyles/LanguageStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initialLaunch } from '../../Redux/actions/authActions';

class Language extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'english'
		};
	}
	doRoute = name => {
		this.setState({ selected: name });

		this.props.navigation.navigate('Welcome');
	};
	render() {
		return (
			<ImageBackground
				source={require('../assets/bg.jpg')}
				style={styles.container}>
				<Text style={styles.title}>Select Your Language</Text>
				<TouchableOpacity
					onPress={() => this.doRoute('korean')}
					style={
						this.state.selected === 'korean'
							? [styles.korea, styles.active]
							: styles.korea
					}>
					{this.state.selected === 'korean' && (
						<Image
							source={require('../assets/selected.png')}
							style={styles.koreanChecked}
						/>
					)}
					<Image
						source={require('../assets/korean.png')}
						style={styles.koreanImg}
					/>
					<Text style={styles.koreanText}>한국어</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => this.doRoute('english')}
					style={
						this.state.selected === 'english'
							? [styles.english, styles.active]
							: styles.english
					}>
					{this.state.selected === 'english' && (
						<Image
							source={require('../assets/selected.png')}
							style={styles.englishChecked}
						/>
					)}
					<Image
						source={require('../assets/english.png')}
						style={styles.englishImg}
					/>
					<Text style={styles.englishText}>English</Text>
				</TouchableOpacity>
			</ImageBackground>
		);
	}
}
Language.propTypes = {
	initialLaunch: PropTypes.func
};
const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ initialLaunch }
)(Language);
