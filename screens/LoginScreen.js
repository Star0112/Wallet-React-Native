import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, TouchableOpacity, ImageBackground,
  SafeAreaView
} from 'react-native';
import { Button, Text, Input } from 'galio-framework';
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import { GlobalStyles } from '../styles/global';

export default function LoginScreen(props) {

  const state = useSelector(state => state);
  const [showModal, setShowModal] = useState(false);
  const [mnimonic, setMnimonic] = useState('');

  return (
    <SafeAreaView style={{ backgroundColor: "#292732" }}>
      <ImageBackground source={require('../assets/images/VGWAppBackground.png')} style={{ width: '100%', height: '100%' }}>
        <View style={GlobalStyles.screen}>
          <Text h4 style={GlobalStyles.txt} color={'#50d090'}>Welcome to VegaWallet!</Text>
          <Text h5 style={GlobalStyles.txt} color={'white'}>Please Choose A sign In Method </Text>
          <Input placeholder="Email" rounded style={GlobalStyles.inputItem} placeholderTextColor={'white'} color={'white'} />
          <Input placeholder="password" password rounded style={GlobalStyles.inputItem} placeholderTextColor={'white'} color={'white'} />
          <TouchableOpacity>
            <Text color={'#FE2472'} bold={true} style={GlobalStyles.label}>Forgot password ? </Text>
          </TouchableOpacity>

          <Button color="error" round style={GlobalStyles.BtnStyle} shadowColor={'#292732'} onPress={() => {
            props.navigation.navigate('Main');
            //props.navigation.navigate('Main');
            // console.log(props.navigation.navigate('HomeDrawer')) ; 
          }}>Sign in</Button>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('Signup')
          }}>
            <Text color={'#FE2472'} bold={true} style={GlobalStyles.label2}>Don't Have an Account? Sign up</Text>
          </TouchableOpacity>

          <Text color={'white'} bold={true} style={GlobalStyles.label2}>Or bypass account login for anonymos key recovery </Text>
          <Text color={'#898989'} bold={true} style={GlobalStyles.label3}>Note: some services may be un available </Text>
          <Button color="info" round style={GlobalStyles.walletBtn} shadowColor={'#292732'}
            onPress={() => { setShowModal(true); }}
          >
            Use Wallet Passphrase
          </Button>
        </View>
        <Modal isVisible={showModal}>
          <View style={{ backgroundColor: '#292732',
            padding:20,
            borderRadius: 15,
          }}>
            <Text h5 style={GlobalStyles.txt} color={'white'}>
              Please input your PassPharse
            </Text>
            <Input
              placeholder="Your Passphrase"
              onChangeText={(text) => { setMnimonic(text); }}
              style={GlobalStyles.inputItem}
              placeholderTextColor={"white"}
              color={"white"}
            />
            <View style={GlobalStyles.contactBtns}>
              <Button
                color={"#ec1035"}
                size="small"
                round
                style={GlobalStyles.AddBtnStyle}
                shadowColor={"#292732"}
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                color={"#0289ca"}
                round
                style={GlobalStyles.AddBtnStyle2}
                shadowColor={"#292732"}
                onPress={() => {
                  console.log("pass:", state.Wallet.passphrase );
                  if(mnimonic.toLowerCase() === state.Wallet.passphrase.toLowerCase()
                    && state.Wallet.passphrase.toLowerCase() !== '')
                    props.navigation.navigate('Main');
                  else
                    alert("PassPhrase is not correct.")
                  setShowModal(false);
                }}
              >
                OK
              </Button>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}

