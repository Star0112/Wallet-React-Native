import React, { useState } from "react";
import { View, Animated, Image } from "react-native";
import { FailedStyle } from "./styles";
import { Text } from "galio-framework";

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
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
      {props.children}
    </Animated.View>
  );
}

export default FailedAnimation = props => {

  return (
    <View style = { FailedStyle.main }>
      <View style = { FailedStyle.centerBtn }>
        <Image
          style = {{ width: 50, height: 50, marginVertical:0 }}
          source = { props.icon }
        />
      </View>
      <FadeInView>
        <View style = { FailedStyle.Group }>
          <Text
            h4
            color = { "#f32f3d" }
            style = { FailedStyle.successTxt }
          >
            Transaction Has Failed
          </Text>
          <Image
            style = {{ paddingTop:10 }}
            source = { require('../../assets/images/coins/failed.png') }
          />
        </View>
      </FadeInView>
    </View>
    
  );
};
