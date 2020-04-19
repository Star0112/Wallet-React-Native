import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../styles/global";
import { NavBar } from "galio-framework";
import { Text } from "galio-framework";
import BtnItem from "../components/BtnItem";
import {
  setSendCoinType,
  setSendMoney,
  setSendAddress
} from "../store/wallet/action"
import CoinCharts from "../components/CoinCharts"
import TwoTwoCard from "../components/TwoTwoCard"
import Icon from "react-native-vector-icons/FontAwesome";

export default WalletDetail = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  var numeral = require('numeral');
  const selcoin = state.Wallet.selCoinNumber;
  //const selcoin = props.navigation.state.params.selCoinIndex;
  return (
    <SafeAreaView style={{ backgroundColor: "#292732" }}>
      <ImageBackground
        source={require("../assets/images/VGWAppBackground.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={GlobalStyles.psscreen}>
          <NavBar
            title={"VegaWallet Token"}
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
          <CoinCharts
            icon={state.coinList[selcoin].logoUrl}
            data={state.coinList[selcoin].coinInfo.data}
            date={state.coinList[selcoin].coinInfo.date}
            coinValue={state.coinList[selcoin].coinInfo.coinValue}
            coinRate={state.coinList[selcoin].coinInfo.coinRate}
            onSend={() => {
              dispatch(setSendCoinType(false));
              dispatch(setSendMoney(0, 0));
              dispatch(setSendAddress(''));
              props.navigation.navigate('SendVGW', { selcoin: selcoin })
            }}
            onReceive={() => {
              props.navigation.navigate('ReceiveVGW', { selcoin, selcoin })
            }}
          />
          <TwoTwoCard
            text1={numeral(state.coinList[selcoin].coinBalance.balance).format('0,0[.]00')}
            text2={"Balance"}
            text3={numeral(state.coinList[selcoin].coinBalance.usdBalance).format('0,0[.]00')}
            text4={"$USD Value"}
          />
          <BtnItem
            title={"Cryptocurrency Wallet"}
            subTitle={"send and recieve digital assets"}
            iconName={"wallet"}
            action={() => {
              props.navigation.navigate('wallet')
            }}
          />
          <View style={GlobalStyles.walletCard2}>
            <View style={{ marginTop: 10 }}>
              <Text
                p
                color={"#56e39c"}
              >
                {"Lastest Transactions"}
              </Text>
            </View>
            <View style={{ marginTop: 10, direction: "rtl" }}>
              <Text
                color="white"
                p
              >
                {state.coinList[selcoin].transactionHistory.type +
                  "  " + state.coinList[selcoin].transactionHistory.price + "  "}
                <Text
                  color="white"
                  size={12}
                >
                  {state.coinList[selcoin].transactionHistory.date}
                </Text>
              </Text>
            </View>
          </View>
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