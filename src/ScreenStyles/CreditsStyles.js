import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth * 0.87359,
    height: deviceHeight * 0.4438,
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    marginTop: deviceHeight * 0.043,
    marginBottom: deviceHeight * 0.4,
    backgroundColor: "#fff"
  },
  emptyCont: {
    position: "absolute",
    top: deviceHeight * 0.303,
    flex: 1,
    alignItems: "center"
  },
  oops: {
    fontSize: 16,
    color: "#212121",
    fontFamily: "Poppins"
  },
  desc: {
    color: "#212121",
    fontFamily: "Poppins"
  },
  text: {
    position: "absolute",
    bottom: deviceHeight * 0.116
  },
  amount: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: deviceHeight * 0.04755
  },
  money: {
    fontSize: 26,
    color: "#252d5c"
  }
});
export default styles;
