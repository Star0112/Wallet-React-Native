import React ,{ useState, useEffect } from "react";
import { View ,ImageBackground, Image} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { createPassPhrase } from '../store/wallet/action'
import { setKeys } from '../store/coinsList/action'
import {GlobalStyles} from '../styles/global'; 
import AsyncStorage from '@react-native-community/async-storage'
import { address } from "bitcoinjs-lib";

export default SplasScreen = (props) => {
  const state = useSelector(state=>state);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {

      AsyncStorage.getItem('my-passPhrase').then(value =>{
        if( value !== null ){
          dispatch(createPassPhrase(value));
        }
      });
      AsyncStorage.getItem('my-address').then(value =>{
        if( value !== null ){
          let addresses = JSON.parse(value);
          AsyncStorage.getItem('my-privateKey').then(value =>{
            if( value !== null ){
              dispatch(setKeys(JSON.parse(value), addresses));
            }
          });
        }
      });
        //  this._retrieveData();
      props.navigation.replace("FirstBoard");

  //    props.navigation.replace("Login");
        
    }, 1000)

  });
  return (
    <View style={GlobalStyles.splash}>
      <ImageBackground source={require("../assets/images/VGWAppBackground.png")}   style={{ width: "100%", height: "100%" ,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../assets/images/VegaWalletAppIcon1024Green.png')} style={{width: 120, height: 120,alignSelf:'center'}}/>
      </ImageBackground>
    </View>
  );
};
