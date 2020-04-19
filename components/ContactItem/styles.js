import { StyleSheet } from "react-native";
export const Btnstyles = StyleSheet.create({
  main: {
    margin: 15,
    backgroundColor: "#313342",
    borderRadius: 15,
    height: 90,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    opacity:0.8
    //justifyContent: 'space-evenly',
  },
  innerBtn: {
    alignSelf: "center",
    height: 50,
    width: 50,
    borderRadius: 10,
    marginHorizontal: 10
  },
  txt: {
    marginVertical: 2,
    fontFamily: "Roboto"
  },
  icn: {
    color: "white",
    fontSize: 20,
    //alignContent: "space-around",
    //justifyContent:'flex-end',
    //paddingRight:50,
    position:'absolute',
    right:10
  
  },
  img:{
      height:50,
      width:50,
      marginHorizontal:10
  }
 
});
