import React from "react";
import { TouchableOpacity, Dimensions, StyleSheet, Text } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: deviceWidth * 0.7129,
    height: deviceHeight * 0.06425,
    backgroundColor: "#13db97",
    borderRadius: 5
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Poppins - Semi Bold",
    fontSize: 18
  }
});
export default props => {
  return (
    <TouchableOpacity
      style={[styles.container, props.position]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
