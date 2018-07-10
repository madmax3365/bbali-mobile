import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import { HeaderBackButton } from "react-navigation";
import { connect } from "react-redux";
import { toggleDrawer } from "../../Redux/actions/navActions";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
class SecondaryHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderBackButton
          style={styles.menu}
          onPress={this.props.navigation.goBack()}
        />
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: "row",
    alignItems: "center",
    width: deviceWidth,
    height: deviceHeight * 0.08469,
    justifyContent: "center",
    backgroundColor: "#252d5c"
  },
  menu: {
    flex: 1,
    position: "absolute",
    left: deviceWidth * 0.07568
  },
  title: {
    alignSelf: "center",
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 20
  }
});

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(
  mapStateToProps,
  { toggleDrawer }
)(SecondaryHeader);
