import React, { PureComponent } from 'react';
import {
	View,
	ImageBackground,
	Dimensions,
	Image,
	TouchableOpacity,
	BackHandler
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from '../ScreenStyles/HowToStyles';

const deviceWidth = Dimensions.get('window').width;
export default class HowTo extends PureComponent {
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	}

	handleBackPress = () => {
		this.state.activeSlide === 0
			? this.props.navigation.goBack()
			: this._carousel.snapToItem(this.state.activeSlide - 1);
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
					screen: 'howto1'
				},
				{
					id: 2,
					screen: 'howto2'
				},
				{
					id: 3,
					screen: 'howto3'
				},
				{
					id: 4,
					screen: 'howto4'
				},
				{
					id: 5,
					screen: 'howto5'
				},
				{
					id: 6,
					screen: 'howto6'
				},
				{
					id: 7,
					screen: 'howto7'
				},
				{
					id: 8,
					screen: 'howto8'
				}
			]
		};
	}
	_renderItem = ({ item }) => {
		return (
			<View style={styles.wrapper}>
				<Image
					key={item.id}
					source={{ uri: item.screen }}
					style={styles.screen}
				/>
			</View>
		);
	};

	get pagination() {
		const { activeSlide } = this.state;
		return (
			<Pagination
				dotsLength={this.state.carousel.length}
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
					removeClippedSubviews={false}
					initialNumToRender={2}
					maxToRenderPerBatch={2}
					windowSize={3}
					data={this.state.carousel}
					renderItem={this._renderItem}
					sliderWidth={deviceWidth}
					itemWidth={deviceWidth}
					onSnapToItem={index => this.setState({ activeSlide: index })}
				/>
				{this.pagination}
				<TouchableOpacity
					style={styles.backCont}
					onPress={() => this.props.navigation.goBack()}>
					<Image
						source={require('../assets/howTo/back.png')}
						style={styles.back}
					/>
				</TouchableOpacity>
			</ImageBackground>
		);
	}
}
