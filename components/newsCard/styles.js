import { StyleSheet } from "react-native";

export const Newsstyles = StyleSheet.create({
  card: {
    height: 300,
    width: "92%",
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "#313342",
    opacity:0.7,
    marginVertical:4,
    alignContent:'center'
    //flex: 1
  },
  footer:{
    flexDirection:'row',
    alignContent:'flex-start'
  },
  avatar:{
      width:60,
      height:60,
      borderRadius:60/2,
      margin:5
  },
  title:{
      marginTop:5,
      marginLeft:3,
      paddingLeft:4
  }
});
