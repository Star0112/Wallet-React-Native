import React from "react";
import { View, ImageBackground, Image, TextInput } from "react-native";
import NumericInput from 'react-native-numeric-input'
import { GlobalStyles } from '../../styles/global'
import { SendStyle } from "./styles";
import { Text, Block, Input } from "galio-framework";

export default SendCoin = props => {
  var numeral = require('numeral');

  return (
    <View style = { SendStyle.main }>
      <View style = { SendStyle.centerBtn }>
        <Image
          style = {{ width: 50, height: 50, marginVertical:0 }}
          source = { props.icon }
        />
      </View>
      <View style = { SendStyle.txtGroup }>
        { props.coinType == true ?
          <Text
            h5
            color = "#56e39c"
            style = { GlobalStyles.TextShadowStyle }
            onPress = { () => {props.onSwitch(true)} }
          >
            {props.startCoin}
          </Text>
          :
          <Text
            h5
            color = "white"
            style = { GlobalStyles.TextShadowStyle }
            onPress = { () => {props.onSwitch(true)}}
          >
            {props.startCoin}
          </Text>
        }
        { props.coinType == false ?
          <Text
            h5
            color = "#56e39c"
            style = { GlobalStyles.TextShadowStyle }
            onPress = { () => {props.onSwitch(false)} }
          >
            USD
          </Text>
          :
          <Text
            h5
            color ="white"
            style = { GlobalStyles.TextShadowStyle }
            onPress = { () => {props.onSwitch(false)} }
          >
            USD
          </Text>
        }
      </View>
      <View style={ SendStyle.moneyTxt }>
        {props.coinType == false ?
          <NumericInput type='plus-minus'
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={350} 
            totalHeight={60} 
            iconSize={0}
            step={1}
            initValue = { props.usd }
            value = { props.usd }
            valueType='real'
            minValue={0}
            rounded 
            textColor='#fff' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'
            onChange={ (value) => {
              props.onChange1(value);
            }}
          />
          :
          <NumericInput type='plus-minus'
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={350} 
            totalHeight={60} 
            iconSize={0}
            step={1}
            initValue = { props.wallet }
            value = { props.wallet }
            valueType='real'
            minValue={0}
            rounded 
            textColor='#fff' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#E56B70' 
            leftButtonBackgroundColor='#EA3788'
            onChange={ (value) => {
              props.onChange2(value);
            }}
          />
        }
      </View>
      <Text
        color = "#56e39c"
      >
        { "Learn About ETH Network Fees" }
      </Text>
    </View>
  );
};
