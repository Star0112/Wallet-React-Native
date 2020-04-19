import React, { useState } from "react";
import { View, Animated, Image } from "react-native";
import { GlobalStyles } from '../../styles/global'
import { SuccessStyle } from "./styles";
import { Text, Block } from "galio-framework";

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect( () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
      }
    ).start();
  }, []);
  return (
    <Animated.View                 // Special animatable View
      style = {{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      { props.children }
    </Animated.View>
  );
}

export default SuccessAnimation = props => {

  return (
    <View style = { SuccessStyle.main }>
      <View style = { SuccessStyle.centerBtn }>
        <Image
          style = {{ width: 50, height: 50, marginVertical:0 }}
          source={ props.icon }
        />
      </View>
      <FadeInView>
        <View style={SuccessStyle.Group}>
          <Text
            h4
            color={"#56e39c"} 
            style={SuccessStyle.successTxt}
          >
            Transaction Successful
          </Text>
          <Image
            style={{ paddingTop:10}}
            source={ require('../../assets/images/coins/successful.png') }
          />
        </View>
      </FadeInView>
    </View>
    
  );
};
