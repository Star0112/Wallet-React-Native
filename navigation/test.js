/*import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import TabScreen from "./TabScreen";
import Index from "./SidebarScreens/index";
import Icon from "react-native-vector-icons/dist/Ionicons";
import InstaIcon from "react-native-vector-icons/FontAwesome5";
import Privacy from "./SidebarScreens/PrivacyScreen";
import About from "./SidebarScreens/AboutScreen";
const MyNotificationsScreen = props => {
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      {" "}
      {console.log("My Notification Screen rendered")}{" "}
      {props.navigation.navigate("Home")}{" "}
    </View>
  );
};
const styles = StyleSheet.create({ icon: { width: 24, height: 24 } });
const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={20} />
        )
      }
    },
    "Rate This App": {
      screen: MyNotificationsScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="ios-star" color={tintColor} size={20} />
        )
      }
    },
    "Follow us on Instagram": {
      screen: MyNotificationsScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <InstaIcon name="instagram" color={tintColor} size={20} />
        )
      }
    },
    "Share This App": {
      screen: MyNotificationsScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-share" color={tintColor} size={20} />
        )
      }
    },
    "Help & Feedback": {
      screen: MyNotificationsScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="ios-help-buoy" color={tintColor} size={20} />
        )
      }
    },
    "Privacy Policy": {
      screen: Privacy,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="ios-lock" color={tintColor} size={20} />
        )
      }
    },
    " About": {
      screen: About,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="ios-information-circle-outline"
            color={tintColor}
            size={20}
          />
        )
      }
    },
    "Version 1.0": {
      screen: MyNotificationsScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="logo-android" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    contentComponent: props => <Index {...props} />,
    unmountInactiveRoutes: true,
    contentOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "#000",
      inactiveTintColor: "#585c65"
    }
  }
);
MyDrawerNavigator.navigationOptions = { header: null };
export default MyDrawerNavigator;*/
import React, {Component} from 'react'
import {View,Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
export default class DrawerContent extends Component {
  constructor(props) {
  super(props)
}
 