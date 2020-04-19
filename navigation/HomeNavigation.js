import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import DetailWallet from "../screens/WalletDetailScreen";
import MainWallet from "../screens/WalletScreen";

export default function HomeNav() {
  const Stack = createStackNavigator({
    Main: { screen: MainScreen },
    wallet: { screen: MainWallet },
    Detail: {screen: DetailWallet }
  },{
    initialRouteName:'Main'
  });

  return <Stack />;
}
