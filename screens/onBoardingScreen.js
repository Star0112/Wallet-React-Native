import React, { useState, useEffect } from "react";
import {
  View, ImageBackground, Image
} from "react-native";
import { GlobalStyles } from "../styles/global";
import { Text, Button } from "galio-framework";
export default FirstBoard = props => {
  return (
    <View style={GlobalStyles.splash}>
      <ImageBackground
        source={require("../assets/images/VGWAppBackground.png")}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <Text h2 style={GlobalStyles.bordardingTitle} color={"#50d090"}>
          Are you ready ?
        </Text>
        <Text style={GlobalStyles.bordardingText}>
          VegaWallet puts the power of mobile payments and cryptocurrency right
          in the palm of your hand.Take your first steps towards financial
          freedom now.
        </Text>
        <Button color="error" round style={GlobalStyles.BtnStyle} shadowColor={'#292732'} onPress={() => {
          props.navigation.navigate('SecondBoard');
        }}>Get Started</Button>
        <Image source={require('../assets/images/phone.png')} style={{ position: 'absolute', bottom: 0 }} />
      </ImageBackground>
    </View>
  );
};
