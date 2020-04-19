import React from "react";
import { View } from "react-native";
import { GlobalStyles } from '../../styles/global'
import { Text } from "galio-framework";

export default TwoTwoCard = props => {
  return (
    <View style={{ 
      flexDirection:"row",
      width:"100%",
      justifyContent: "space-between"
    }}>
      <View style={ GlobalStyles.walletCard1 }>
        <View style={{marginTop:10}}>
          <Text
            p
            color={"#56e39c"}
          >
            { props.text1 }
          </Text>
        </View>
        <View style={{marginTop:10}}>
          <Text
            color="white"
            p
          >
            { props.text2 }
          </Text>
        </View>
      </View>
      <View style={ GlobalStyles.walletCard1 }>
        <View style={{marginTop:10}}>
          <Text
            p
            color={"#56e39c"}
          >
            { props.text3 }
          </Text>
        </View>
        <View style={{marginTop:10}}>
          <Text
            color="white"
            p
          >
            { props.text4 }
          </Text>
        </View>
      </View>
    </View>
  );
};
