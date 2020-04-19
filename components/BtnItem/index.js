import React from "react";
import { View, ImageBackground,StyleSheet } from "react-native";
import { Btnstyles } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "react-native-elements";
import { Text } from "galio-framework";
import LinearGradient from 'react-native-linear-gradient';
export default BtnItem = props => {
  return (
   
    <View style={Btnstyles.main}>
     
      <Button
        icon={
          <Icon
            name={props.iconName}
            size={20}
            color="white"
            style={{ alignSelf: "center" }}
          />
        }
        title=""
        buttonStyle={Btnstyles.innerBtn}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#0a4dad', '#0a6bad'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
      />
      <View>
        <Text color={"#56e39c"} style={Btnstyles.txt} size={20}>
          {props.title}
        </Text>
        <Text p size={15} style={Btnstyles.txt} color={"white"}>
          {props.subTitle}
        </Text>
      </View>
      <Icon name="right" onPress={props.action} style={Btnstyles.icn} />
      
     
    </View>
   
  );
};
