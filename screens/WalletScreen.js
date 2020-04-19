import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
  SafeAreaView
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";
import { GlobalStyles } from "../styles/global";
//import { LineChart } from "react-native-chart-kit";
import { LineChart, Grid } from "react-native-svg-charts";
import { NavBar, Text, Button } from "galio-framework";
import WalletBtn from "../components/walletBtn/index";
import Icon from "react-native-vector-icons/FontAwesome";
import { setCoinNumber } from "../store/wallet/action"

import * as shape from "d3-shape";

export default MainWallet = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(state.coinList[0].address === '');  
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];


  return (
    <SafeAreaView style={{ backgroundColor: "#292732" }}>
      <ImageBackground
        source={require("../assets/images/VGWAppBackground.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={GlobalStyles.psscreen}>
          <NavBar
            title="Portfolio Overview"
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
          <Modal isVisible={showModal}>
            <View style={{ backgroundColor: '#292732',
              padding:20,
              borderRadius: 15,
            }}>
              <Text h5 style={GlobalStyles.txt} color={'white'}>
                When you use Passphrase, you can use this.
                Please generate Passphrase and login again.
              </Text>
              <View style={{ margin: 10}}>
                <Button
                  color={"#0289ca"}
                  round
                  style={GlobalStyles.AddBtnStyle2}
                  shadowColor={"#292732"}
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  OK
                </Button>
              </View>
            </View>
          </Modal>

          { state.coinList[0].address !== ''?
            <View>
              <Text h5 style={GlobalStyles.txt} color={"#50d090"}>
                $3,109.34 !
              </Text>
              <LineChart
                style={{ height: 200, marginHorizontal: 20 }}
                data={data}
                svg={{ stroke: "rgba(192, 56, 103, 1)" }}
                contentInset={{ top: 20, bottom: 20 }}
                curve={shape.curveBasis}
              //key={keys}
              ></LineChart>
              <ScrollView>
                {
                  state.coinList.map((coin, index) => {
                    return (
                      <WalletBtn
                        key={index}
                        imgs={coin.logoUrl}
                        title={coin.coinName}
                        subTitle={coin.coinDisplayName}
                        coinInfo={coin.coinInfo}
                        amount={coin.walletTokeAmount}
                        action={() => {
                          dispatch(setCoinNumber(index));
                          props.navigation.navigate('WalletDetail');
                        }}
                      />
                    )
                  })
                }
              </ScrollView>
            </View>
            :<View></View>
          }

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