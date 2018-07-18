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
					id: 1,
					title: 'Foot Placement',
					bottom: 'Place both feet on footboard\nwhile riding',
					img: require('../assets/howTo/howTo1.png')
				},
				{
					id: 2,
					title: 'Where to Ride',

					bottom:
						'Ride in bike lanes when available.\nDo not ride on sidewalks.',
					img: require('../assets/howTo/howTo2.png')
				},
				{
					id: 3,
					title: 'Find & Unlock',
					bottom: 'Find a Scooter near you and\ntap the button to unlock.',
					img: require('../assets/howTo/howTo6.png')
				},
				{
					id: 4,
					title: 'Ending your Ride',
					bottom:
						'when you\'re done, just tap\n"finished ride" and it will get\npickedup by Bbali for a small\nfee or you can return it where\nyou got it from at no charge.',
					img: require('../assets/howTo/howTo7.png')
				},
				{
					id: 5,
					title: 'Brakes',
					bottom: 'Squeeze brake with left hand\nto slow down.',
					img: require('../assets/howTo/howTo3.png')
				},
				{
					id: 6,
					img: require('../assets/howTo/howTo5.png'),
					title: 'Local Rules',
					screen5Text:
						'-Riding on sidewalks\n\n-Riding on public parking\n  structues\n\n-Riding without helmet\n\n-Riding without a valid driver’s\n  license',
					screen5Desc: 'Local traffic regulations prohibit\nthe following:',
					bottom: 'Squeeze brake with left hand \n to slow down.'
				},
				{
					id: 7,
					title: 'Parking',
					bottom: 'Park by bike racks\nwhen available.',
					img: require('../assets/howTo/howTo8.png')
				},
				{
					id: 8,
					title: 'Start the Scooter',
					screen4Text: 'To start, just kick one\nand squeeze the acceleration.',
					bottom: 'Then push throttle button with  \n right thumb.',
					img: require('../assets/howTo/howTo4.png')
				}
			]
		};
	}

	_renderItem = ({ item }) => {
		return (
			<View style={styles.slider} key={`image${item.id}`}>
				<Text style={styles.title}>{item.title}</Text>
				{item.screen4Text && (
					<Text style={styles.screen4Text}>{item.screen4Text}</Text>
				)}
				{item.screen5Desc && (
					<Text style={styles.screen5Desc}>{item.screen5Desc}</Text>
				)}
				{item.screen5Text && (
					<Text style={styles.screen5Text}>{item.screen5Text}</Text>
				)}
				<Text style={styles.bottom}>{item.bottom}</Text>
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
