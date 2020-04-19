import React from "react";
import { View, ImageBackground, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "react-native-elements";
import { GlobalStyles } from '../../styles/global'
import { CardStyle } from "./styles";
import { Text, Block } from "galio-framework";

export default TwoLineCard = props => {
  return (
    <View style={ GlobalStyles.walletCard2 }>
      <View style={{paddingTop:10}}>
        <Text
          p
          color={"#56e39c"}
        >
          { props.text1 }
        </Text>
      </View>
      <View style={{ padding:10, paddingTop: 0}}>
        <Text
          color="white"
        >
          { props.text2 }
        </Text>
      </View>
    </View>
  );
};
