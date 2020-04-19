import {
  View,
  StyleSheet,
  Platform,
  ToastAndroid,
  AlertIOS,
  PermissionsAndroid,
  ImageBackground,
  SafeAreaView
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../styles/global";
import { NavBar, Button, Text, Input } from "galio-framework";
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import {
  setSendCoinType,
  setSendMoney,
  setSendAddress
} from "../store/wallet/action"
import BtnItem from "../components/BtnItem";
import SendCoin from "../components/SendCoin";
import TwoTwoCard from "../components/TwoTwoCard";
import Icon from "react-native-vector-icons/FontAwesome";

export default SendVGW = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  var numeral = require('numeral');
  const selcoin = state.Wallet.selCoinNumber;
  const [openCamera, setOpenCamera] = useState(false);

  return (
    openCamera ?
      <View style={{ flex: 1 }}>
        <CameraKitCameraScreen
          showFrame={false}
          scanBarcode={true}
          laserColor={'blue'}
          frameColor={'yellow'}
          colorForScannerFrame={'black'}

          onReadCode={event => {
            dispatch(setSendAddress(event.nativeEvent.codeStringValue));
            setOpenCamera(false);
          }}
        />
      </View>
      :
      <SafeAreaView style={{ backgroundColor: "#292732" }}>
        <ImageBackground
          source={require("../assets/images/phone.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={GlobalStyles.psscreen}>
            <NavBar
              title={"Send " + state.coinList[selcoin].coinName}
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
            <SendCoin
              icon={state.coinList[selcoin].logoUrl}
              coinType={state.Wallet.sendCoin.senCoinType}
              startCoin={state.coinList[selcoin].coinName}
              usd={state.Wallet.sendCoin.sendMoney}
              wallet={state.Wallet.sendCoin.sendWallet} //state.coinList[selcoin].coinBalance.balance }
              onSwitch={(type) => {
                dispatch(setSendCoinType(type));
              }}

              onChange1={(value) => {
                dispatch(setSendMoney((value / state.coinList[selcoin].coinBalance.balance), value));
              }}
              onChange2={(value) => {
                dispatch(setSendMoney(value, (value * state.coinList[selcoin].coinBalance.balance)));
              }}

            />
            <TwoTwoCard
              text1={numeral(state.coinList[selcoin].coinBalance.balance).format('0,0[.]00')}
              text2={"Balance"}
              text3={numeral(state.coinList[selcoin].coinBalance.usdBalance).format('0,0[.]00')}
              text4={"$USD Value"}
            />
            <View style={{ padding: 5 }}>
              <Input
                placeholder="Input Bitcoin Address"
                color="white"
                family="antdesign"
                iconSize={18}
                iconColor="white"
                value={state.Wallet.sendAddress}
                onChangeText={(text) =>
                  dispatch(setSendAddress(text))
                }
                rounded
                placeholderTextColor="#abafb2"
                style={{
                  borderColor: "white",
                  paddingRight: 50,
                  fontSize: 18,
                  backgroundColor: "transparent"
                }} />
            </View>
            <View>
              <Icon
                name="qrcode"
                style={styles.qricon}
                onPress={() => {
                  if (Platform.OS === 'android') {
                    async function requestCameraPermission() {
                      try {
                        const granted = await PermissionsAndroid.request(
                          PermissionsAndroid.PERMISSIONS.CAMERA, {
                            'title': 'Camera Permission',
                            'message': 'App needs access to your camera '
                          }
                        )
                        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                          dispatch(setSendAddress(null));
                          setOpenCamera(true);
                        } else {
                          alert("CAMERA permission denied");
                        }
                      } catch (err) {
                        alert("Camera permission err", err);
                        console.warn(err);
                      }
                    }
                    //Calling the camera permission function
                    requestCameraPermission();
                  }
                  else {
                    dispatch(setSendAddress(null));
                    setOpenCamera(true);
                  }
                }}
              />
            </View>
            <BtnItem
              title={"View Contacts"}
              subTitle={"Choose a saved contact address"}
              iconName={"wallet"}
              action={() => {
                props.navigation.navigate('WalletDetail')
              }}
            />
            <Button
              color="#ee3f78"
              radius={15}
              style={{
                opacity: 0.7,
                margin: 5,
                width: "auto"
              }}
              onPress={() => {
                if (numeral(state.Wallet.sendCoin.sendMoney).value() == 0) {
                  if (Platform.OS == 'android')
                    ToastAndroid.show('Plese Input Send Money!', ToastAndroid.SHORT);
                  else
                    AlertIOS.alert('Plese Input Send Money!');
                }
                else if (isNaN(numeral(state.Wallet.sendCoin.sendMoney).value())) {
                  if (Platform.OS == 'android')
                    ToastAndroid.show('Plese fix Send Money!', ToastAndroid.SHORT);
                  else
                    AlertIOS.alert('Plese fix Send Money!');
                }
                else if (state.Wallet.sendAddress === '') {
                  if (Platform.OS == 'android')
                    ToastAndroid.show('Please Input Bitcoin Address!', ToastAndroid.SHORT);
                  else
                    AlertIOS.alert('Please Input Bitcoin Address!');
                }
                else props.navigation.replace("ConfirmTransaction")
              }}
            >
              <Text p color="white">Next</Text>
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
  },
  qricon: {
    fontSize: 20,
    marginTop: -75,
    marginBottom: -75,
    padding: 30,
    color: "white",
    alignSelf: 'flex-end'
  },
});