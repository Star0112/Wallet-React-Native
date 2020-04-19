import React from "react";
import { View, Image } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import { QRSytle } from "./styles";

export default QRBoard = props => {
  return (
    <View style = { QRSytle.main }>
      <View style = { QRSytle.centerBtn }>
        <Image
          style = {{ width: 50, height: 50, marginVertical:0 }}
          source = { props.icon }
        />
      </View>
      <View style = { QRSytle.QRCodeStyle }>
        <QRCode
          size = { 200 }
          fgColor = 'white'
          value = { props.address }
        />
      </View>
    </View>
    
  );
};
