import React, { Component } from 'react';
import {
	ImageBackground,
	Dimensions,
	Image,
	Text,
	TouchableOpacity,
	BackHandler
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from '../ScreenStyles/WelcomeStyles';

const deviceWidth = Dimensions.get('window').width;
export default class Welcome extends Component {
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	}

	handleBackPress = () => {
		return true;
	};
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}
	constructor(props) {
		super(props);
		this.state = {
			activeSlide: 0,
			carousel: [
				{
					id: 1,
					img: 'welcome1'
				},
				{
					id: 2,
					img: 'welcome2'
				},
				{
					id: 3,
					img: 'welcome3'
				}
			]
		};
	}
	_renderItem = ({ item }) => {
		return <Image source={{ uri: item.img }} style={styles.img} />;
	};

	doRoute = () => {
		this.state.activeSlide < 2
			? this > this._carousel.snapToItem(this.state.activeSlide + 1)
			: this.props.navigation.navigate('Home');
	};

	get pagination() {
		const { carousel, activeSlide } = this.state;
		return (
			<Pagination
				dotsLength={carousel.length}
				activeDotIndex={activeSlide}
				containerStyle={styles.dotsContainer}
				dotStyle={styles.dots}
				inactiveDotStyle={styles.inactiveDots}
				inactiveDotOpacity={0.2}
				inactiveDotScale={1}
			/>
		);
	}
	render() {
		return (
			<ImageBackground
				source={require('../assets/howTo/bg.png')}
				style={styles.container}>
				<Carousel
					ref={c => {
						this._carousel = c;
					}}
					data={this.state.carousel}
					renderItem={this._renderItem}
					sliderWidth={deviceWidth}
					itemWidth={deviceWidth}
					onSnapToItem={index => this.setState({ activeSlide: index })}
				/>
				{this.pagination}
				<TouchableOpacity
					style={styles.skipButton}
					onPress={() => this.props.navigation.navigate('Home')}>
					<Text style={styles.skip}>X</Text>
				</TouchableOpacity>
			</ImageBackground>
		);
	}
}
