import { StyleSheet } from "react-native";
export const Btnstyles = StyleSheet.create({
  main: {
    margin: 5,
    backgroundColor: "#313342",
    borderRadius: 15,
    height: 90,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    opacity:0.7
    //justifyContent: 'space-evenly',
  },
  mainTitle:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
    //paddingHorizontal:50
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
    fontFamily: "Roboto-Bold"
  },
  titleTxt2: {
    marginVertical: 2,
    fontFamily: "Roboto-Bold",
    //marginHorizontal:50,
    position:'absolute',
    left:10,
    alignSelf:'flex-end',
    marginLeft:180
  },
  titleTxt: {
    marginVertical: 2,
    fontFamily: "Roboto-Bold",
    alignSelf:'flex-start',
    //position:'absolute',
    marginRight:250
    //marginHorizontal:50
  },
  data:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignContent:'space-between'
  },

  icn: {
    color: "white",
    fontSize: 20,
    //alignContent: "space-around",
    //justifyContent:'flex-end',
    //paddingRight:50,
    position:'absolute',
    right:20
  
  },
  solde: {
    marginVertical: 2,
    fontFamily: "Roboto-Bold",
    color:'white'
  },
  pourcentage:{
    marginVertical: 2,
    fontFamily: "Roboto-Bold",
    color:'#56e39c'
  }
});
