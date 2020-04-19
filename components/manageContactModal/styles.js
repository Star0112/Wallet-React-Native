import { StyleSheet } from "react-native";
export const ContactStyles = StyleSheet.create({
  main: {
    margin: 15,
    backgroundColor: "#313342",
    borderRadius: 15,
    height: 400,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    opacity: 0.8
    //justifyContent: 'space-evenly',
  },
  innerBtn: {
    alignSelf: "center",
    //height: 50,
    //width: 50,
    //borderRadius: 10,
    marginHorizontal: 50,
    width: "90%",
    marginVertical: 10
  },
  innerBtn2: {
    alignSelf: "center",
    borderColor: "blue",
    borderWidth: 1,
    marginHorizontal: 50,
    width: "90%",
    marginVertical: 10
  },
  CancelButton: {
    alignSelf: "center",
    borderColor: "#ec1035",
    borderWidth: 1,
    marginHorizontal: 50,
    width: "90%",
    marginVertical: 10
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
    position: "absolute",
    right: 20
  },
  img: {
    height: 50,
    width: 50,
    marginHorizontal: 10
  },
  contactField:{
    margin: 15,
    //backgroundColor: "#313342",
    borderRadius: 15,
    height: 50,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    //opacity:0.8
  }
});
export const Btnstyles = StyleSheet.create({
  main: {
    margin: 15,
    //backgroundColor: "#313342",
    borderRadius: 15,
    height: 50,
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
