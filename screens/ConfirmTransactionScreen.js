import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { GlobalStyles } from "../styles/global";
import { NavBar, Button, Text } from "galio-framework";
import TwoLineCard from "../components/TwoLineCard";
import Icon from "react-native-vector-icons/FontAwesome";

export default ConfirmTransaction = props => {
  const state = useSelector(state => state);
  var numeral = require('numeral');
  const selcoin = state.Wallet.selCoinNumber;

  return (
    <SafeAreaView style={{ backgroundColor: "#292732" }}>
      <ImageBackground
        source={require("../assets/images/phone.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={GlobalStyles.psscreen}>
          <NavBar
            title="Confirm Transaction"
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
          <View style={{
            margin: 5,
            marginTop: 30,
            backgroundColor: "#313342",
            borderRadius: 15,
            height: 100,
            alignItems: "center",
            opacity: 0.7,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
            <Image
              style={{ width: 50, height: 50, marginVertical: 0 }}
              source={state.coinList[selcoin].logoUrl}
            />
            <Text
              h4
              color="#56e39c"
            >
              {state.coinList[selcoin].coinDisplayName + " (ERC20)"}
            </Text>
          </View>
          <TwoLineCard
            text1={"Amount in $USD"}
            text2={numeral(state.Wallet.sendCoin.sendMoney).value() + "$"}
          />
          <TwoLineCard
            text1={"VegaWallet Token Amount"}
            text2={state.coinList[selcoin].walletTokeAmount + " " + state.coinList[selcoin].coinName}
          />
          <TwoLineCard
            text1={"Recipient Address"}
            text2={state.Wallet.sendAddress}
          />
          <TwoLineCard
            text1={"Transaction Fees"}
            text2={state.coinList[selcoin].transactionFee + " ETH"}
          />
          <Button
            color="#ee3f78"
            radius={15}
            style={{
              opacity: 0.7,
              margin: 5,
              width: "auto"
            }}
            onPress={() =>
              state.Wallet.transactionSuccess ?
                props.navigation.replace("TransactionSuccess")
                : props.navigation.replace("TransactionFailed")
            }
          >
            <Text p color="white">Confirm And Send</Text>
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