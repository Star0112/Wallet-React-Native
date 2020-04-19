import React from "react";
import { View, ImageBackground,StyleSheet ,Image} from "react-native";
import { Btnstyles } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "react-native-elements";
import { Text } from "galio-framework";
import LinearGradient from 'react-native-linear-gradient';
export default WalletBtn = props => {

  return (
   
    <View style={Btnstyles.main}>
     <Image
          style={{width: 50, height: 50,marginHorizontal:20}}
          source={props.imgs}
        />
    
      <View>
        <View style={Btnstyles.mainTitle}>
        <Text color={"#56e39c"} style={Btnstyles.titleTxt} size={20}>
          {props.title}
        </Text>
        <Text color={"#56e39c"} style={Btnstyles.titleTxt2} size={20}>
          {props.amount}
        </Text>
      
        </View>
        
       
        <Text p size={15} style={Btnstyles.txt} color={"white"}>
          {props.subTitle}
        </Text>
        <View style={Btnstyles.data}>
            <Text style={Btnstyles.solde}>${ props.coinInfo.coinValue }</Text>
            <Text style={Btnstyles.pourcentage}> ({ props.coinInfo.coinRate })</Text>
        </View>
      </View>
      <Icon name="right" onPress={props.action} style={Btnstyles.icn} />
      
     
    </View>
   
  );
};

