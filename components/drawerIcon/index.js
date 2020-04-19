import React from "react";
import { View ,StyleSheet} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
export default DrawerIcon = (props) => {
  return (
   <Icon name={props.title} style={styles.icn}/>

  );
};


const styles = StyleSheet.create({
    icn:{
        color:'white',
        fontSize:17
    }
})