import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import Maps from "./src/screens/Maps";
import History from "./src/screens/History";
import Charger from "./src/screens/Charger";
import Settings from "./src/screens/Settings";
import Share from "./src/screens/Share";
import Mechanic from "./src/screens/Mechanic";
import Header from "./src/Components/Header";
import ScreenHeader from "./src/Components/ScreenHeader";
import Drawer from "./src/Components/Drawer";
import Credits from "./src/screens/Credits";

const deviceWidth = Dimensions.get("window").width;
const Home = createStackNavigator({
  Home: {
    screen: Maps,
    navigationOptions: ({ navigation }) => ({
      disableBack: true,
      header: <Header navigation={navigation} />
    })
  }
});
const HistoryScreen = createStackNavigator({
  History: {
    screen: History,
    navigationOptions: ({ navigation }) => ({
      disableBack: true,
      header: <ScreenHeader title="My History" navigation={navigation} />
    })
  }
});
const ChargerScreen = createStackNavigator({
  History: {
    screen: Charger,
    navigationOptions: ({ navigation }) => ({
      disableBack: true,
      header: <ScreenHeader title="Become a charger" navigation={navigation} />
    })
  }
});
const SettingsScreen = createStackNavigator({
  History: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      disableBack: true,
      header: <ScreenHeader title="Settings" navigation={navigation} />
    })
  }
});
const ShareScreen = createStackNavigator({
  History: {
    screen: Share,
    navigationOptions: ({ navigation }) => ({
      disableBack: true,
      header: <ScreenHeader title="Share a free ride" navigation={navigation} />
    })
  }
});
const MechanicScreen = createStackNavigator({
  History: {
    screen: Mechanic,
    navigationOptions: ({ navigation }) => ({
      disableBack: true,
      header: <ScreenHeader title="Become a mechanic" navigation={navigation} />
    })
  }
});
const CreditsScreen = createStackNavigator({
  History: {
    screen: Credits,
    navigationOptions: ({ navigation }) => ({
      disableBack: true,
      header: <ScreenHeader title="My credits" navigation={navigation} />
    })
  }
});
const DrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    History: {
      screen: HistoryScreen
    },
    Charger: {
      screen: ChargerScreen
    },
    Settings: {
      screen: SettingsScreen
    },
    Share: {
      screen: ShareScreen
    },
    Mechanic: {
      screen: MechanicScreen
    },
    Credits: {
      screen: CreditsScreen
    }
  },
  {
    contentComponent: Drawer,
    drawerWidth: deviceWidth * 0.775,
    initialRouteName: "Credits"
  }
);

export default DrawerNavigation;
