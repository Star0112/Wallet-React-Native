import React from 'react';
import { View } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import PassphraseScreen from './screens/PassphraseScreen';
import MainScreen from './screens/MainScreen';
import MyDrawerNavigator from './navigation/drawer';  

import SplashScreen from './screens/SplashScreen';
import FirstBoard from './screens/onBoardingScreen'; 
import SecondBoard from './screens/OnboardingScreen2';
import ThirdBoard from './screens/OnBoardingScreen3';
import { BackHandler } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
Icon.loadFont();
AntIcon.loadFont();
Ionicons.loadFont();

const NavigationStack = createStackNavigator({
  Splash:{screen:SplashScreen},
  Signup: { screen: SignupScreen },
  Login: {
    screen: LoginScreen
  },
  FirstBoard: {
    screen: FirstBoard
  },
  SecondBoard: {
    screen: SecondBoard
  },
  thirdBoard: {
    screen: ThirdBoard
  },
  Passphrase:{
    screen:PassphraseScreen
  },

}, {
  headerMode: 'none',
  initialRouteName:'Splash'
})

const MainNavigation = createSwitchNavigator({
  HomeDrawer: MyDrawerNavigator,
  AuthStack: NavigationStack, // You will use this.props.navigation.replace('HomeDrawer') after login process.
},{
  initialRouteName:'AuthStack'
})

const App = () => {
  const Navigation = createAppContainer(MainNavigation);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
