import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fff",
    marginTop: deviceHeight * 0.0408,
    width: deviceWidth * 0.8329,
    marginBottom: deviceHeight * 0.0711
  },
  head: {
    width: deviceWidth * 0.52334,
    marginTop: deviceHeight * 0.0299,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
    paddingBottom: deviceHeight * 0.0136
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    color: "#252d5c"
  },
  menu: {
    marginTop: deviceHeight * 0.038,
    height: deviceHeight * 0.142
  }
});
export default styles;
