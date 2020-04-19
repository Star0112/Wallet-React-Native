import React, { useState, useEffect } from "react";
import {
  View, ImageBackground, Image
} from "react-native";
import { GlobalStyles } from "../styles/global";
import { Text, Button } from "galio-framework";
export default SecondBoard = props => {
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
          Send & Receive
        </Text>
        <Text style={GlobalStyles.bordardingText}>
          Send or receive any supported cryptocurrency with just a few taps.
          Don't worry,we make things easy!
        </Text>
        <Button
          color="error"
          round
          style={GlobalStyles.BtnStyle}
          shadowColor={"#292732"}
          onPress={() => {
            props.navigation.navigate('thirdBoard');
          }}
        >
          Next
        </Button>
        <Image
          source={require("../assets/images/phone.png")}
          style={{ position: "absolute", bottom: 0 }}
        />
      </ImageBackground>
    </View>
  );
};
