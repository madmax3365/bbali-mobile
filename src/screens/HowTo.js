import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from '../ScreenStyles/HowToStyles';

const deviceWidth = Dimensions.get('window').width;
export default class HowTo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSlide: 0,
			carousel: [
				{
					title: 'Catch risks early',
					text:
						'We analyze and trend your health data to stay on top of your risks (today and in the future) for everything from Diabetes to Heart Disease. ',
					img: 'screen1'
				},
				{
					title: 'Take control',
					text:
						'We connect the dots so it’s easy for you to know why HDL matters and what you can do to lower it and your risk of Heart Disease.',
					img: 'screen2'
				},
				{
					title: 'Your personal plan',
					text:
						'We create a plan just for you to stay on top of your health including annual physicals and follow ups if there are any early alerts.',
					img: 'screen3'
				}
			]
		};
	}
	_renderItem = ({ item, index }) => {
		return (
			<View style={styles.slider}>
				<Text style={styles.title}>{item.title.toUpperCase()}</Text>
				<Text style={styles.text}>{item.text}</Text>
				<Image source={{ uri: item.img }} style={styles.img} />
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
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 5,
					marginHorizontal: 8,
					backgroundColor: 'rgba(255, 255, 255, 0.92)'
				}}
				inactiveDotStyle={
					{
						// Define styles for inactive dots here
					}
				}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
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
