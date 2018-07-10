import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "../ScreenStyles/CreditsStyles";

export default class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: true
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.credits && <Text style={styles.text}>Your Credits</Text>}
        {this.state.credits ? (
          <View style={styles.amount}>
            <Text style={styles.money}>1260.50</Text>
          </View>
        ) : (
          <View style={styles.emptyCont}>
            <Text style={styles.oops}>Opps!</Text>
            <Text style={styles.desc}>Seems like you don’t have Credits!</Text>
          </View>
        )}
        <Text
          style={{ position: "absolute", bottom: 1 }}
          onPress={() => this.setState({ credits: !this.state.credits })}
        >
          TOGGLE
        </Text>
      </View>
    );
  }
}
