import React, { Component } from "react";
import { View, Text } from "react-native";
import SettingsItem from "../Components/SettingsItem";
import styles from "../ScreenStyles/SettingsStyles";

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.title}>User Settings</Text>
        </View>
        <View style={styles.menu}>
          <SettingsItem title="Admin Panel" />
          <SettingsItem title="Credit Cards" />
          <SettingsItem title="Term and Condition" />
        </View>
      </View>
    );
  }
}
