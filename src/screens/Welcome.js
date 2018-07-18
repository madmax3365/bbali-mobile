import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from '../ScreenStyles/WelcomeStyles';

const deviceWidth = Dimensions.get('window').width;
export default class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSlide: 0,
			carousel: [
				{
					id: 1,
					title: 'Find a Scooter',
					bottomTitle: 'Find Scooter Around You',
					bottomDesc:
						'ride anywhere you want within the whole\ncity without restriction',
					img: require('../assets/howTo/howTo1.png')
				},
				{
					id: 2,
					title: 'Order to your home',
					bottomTitle: 'Get Scooter At Home',
					bottomDesc: 'use the app to have a scooter delivered to\nyou',
					img: require('../assets/howTo/howTo2.png')
				},
				{
					id: 3,
					title: 'Refer a Friend',
					bottomTitle: 'Get a Free Ride ',
					bottomDesc: 'get a free ride when friend signs up',
					img: require('../assets/howTo/howTo3.png')
				}
			]
		};
	}
	_renderItem = ({ item }) => {
		return (
			<View style={styles.slider} key={`image${item.id}`}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.bottomTitle}>{item.bottomTitle}</Text>
				<Text style={styles.bottomDesc}>{item.bottomDesc}</Text>
			</View>
		);
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
			<View style={styles.container}>
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
			</View>
		);
	}
}
