import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView
} from "react-native";
import React from "react";
import { ToastAndroid, Clipboard } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../styles/global";
import { NavBar, Button, Text } from "galio-framework";
import BtnItem from "../components/BtnItem";
import QRBoard from "../components/QRBoard"
import TwoLineCard from "../components/TwoLineCard"
import Icon from "react-native-vector-icons/FontAwesome";

export default ReceiveVGW = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const selcoin = state.Wallet.selCoinNumber;

  const writeToClipboard = async () => {
    await Clipboard.setString(state.coinList[selcoin].address);
    alert('Wallet Address Copied !');
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#292732" }}>
      <ImageBackground
        source={require("../assets/images/VGWAppBackground.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={GlobalStyles.psscreen}>
          <NavBar
            title={"Receive " + state.Wallet.coinName}
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
          <QRBoard
            icon={state.coinList[selcoin].logoUrl}
            address={state.coinList[selcoin].address}
          />
          <TwoLineCard
            text1={"Your " + state.coinList[selcoin].coinName + " Address"}
            text2={state.coinList[selcoin].address}
          />
          <Text style={{ color: 'white', textAlign: 'center' }}>Key: {state.coinList[selcoin].privateKey}</Text>
          <Button
            color="#313342"
            radius={15}
            style={{
              opacity: 0.7,
              margin: 5,
              width: "auto"
            }}
            onPress={() => {
              writeToClipboard()
            }}
          >
            <Text p color={"#56e39c"}>Click here To Copy Address</Text>
          </Button>
          <BtnItem
            title={"Buy Crytocurency"}
            subTitle={"Purchase in-app or find Bitcoin ATM"}
            iconName={"wallet"}
            action={() => {
              props.navigation.navigate('wallet')
            }}
          />
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