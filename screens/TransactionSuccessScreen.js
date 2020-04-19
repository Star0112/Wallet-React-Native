import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { GlobalStyles } from "../styles/global";
import { NavBar, Button, Text } from "galio-framework";
import Sound from 'react-native-sound';
import BtnItem from "../components/BtnItem";
import TwoLineCard from "../components/TwoLineCard";
import SuccessAnimation from "../components/SuccessAnimation";
import Icon from "react-native-vector-icons/FontAwesome";

export default TransactionSuccess = props => {
  const state = useSelector(state => state);
  const selcoin = state.Wallet.selCoinNumber;
  const sound = new Sound(require("../assets/audio/failed.wav"), (error) => {
    if (error) {
      return;
    }
    sound.play();
  });

  return (
    <SafeAreaView style={{ backgroundColor: "#292732" }}>
      <ImageBackground
        source={require("../assets/images/phone.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={GlobalStyles.psscreen} >
          <NavBar
            title="Transaction Success"
            transparent={true}
            titleStyle={styles.titleStyle}
            left={
              <Icon
                name="bars"
                style={{
                  fontSize: 20,
                  color: "white"
                }}
                onPress={() => {
                  props.navigation.openDrawer();
                }}
              />
            }
            right={
              <Icon
                name="heart"
                style={{
                  fontSize: 20,
                  color: "white"
                }}
                onPress={() => {
                  props.navigation.openDrawer();
                }}
              />
            }
          />
          <SuccessAnimation
            icon={state.coinList[selcoin].logoUrl}
          />
          <TwoLineCard
            text1={state.coinList[selcoin].walletTokeAmount + " " + state.coinList[selcoin].coinName}
            text2={state.coinList[selcoin].address}
          />
          <BtnItem
            title={"Block Explorer"}
            subTitle={"View Blockchain Transaction Details"}
            iconName={"wallet"}
            action={() => {
              props.navigation.navigate('wallet')
            }}
          />
          <Button
            color="#0289ca"
            radius={15}
            style={{
              opacity: 0.7,
              margin: 5,
              width: "auto"
            }}
            onPress={() => {
              props.navigation.replace("wallet");
            }}
          >
            <Text p color="white">Back To Wallet</Text>
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "Roboto-Regular"
  }
});