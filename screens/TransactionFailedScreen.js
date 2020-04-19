import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Sound from 'react-native-sound';
import { GlobalStyles } from "../styles/global";
import { NavBar, Button, Text, Input } from "galio-framework";
import BtnItem from "../components/BtnItem";
import FailedAnimation from "../components/FailedAnimation";
import Icon from "react-native-vector-icons/FontAwesome";

export default TransactionFailed = props => {
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
        <View style={GlobalStyles.psscreen}>
          <NavBar
            title={"Transaction Has Failed"}
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
          <FailedAnimation
            icon={state.coinList[selcoin].logoUrl}
          />
          <View style={GlobalStyles.walletCard2}>
            <View style={{ marginTop: 10 }}>
              <Text
                p
                color={"#ef2f3d"}
              >
                Something Went Wrong!
            </Text>
            </View>
            <View>
              <Text
                color="white"
              >
                Please check transaction details and try again
            </Text>
            </View>
          </View>
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