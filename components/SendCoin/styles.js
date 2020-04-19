import { StyleSheet } from "react-native";
export const SendStyle = StyleSheet.create({
  main: {
    margin: 5,
    marginTop: 12,
    backgroundColor: "#313342",
    borderRadius: 15,
    height: 230,
    alignItems: "center",
    opacity:0.7
  },
  centerBtn:{
    marginTop: -20,
  },
  txtGroup:{
    paddingTop: 25,
    paddingHorizontal: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    
  },
  moneyTxt: {
    alignItems: 'center',
    flexDirection: "row",
    padding: 20
  },
  txt: {
    marginVertical: 2,
    fontFamily: "Roboto"
  },
  input: {
    fontSize: 50,
    color: 'white',
    fontFamily: "Roboto",
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 6 },
    textShadowRadius: 10
  }
});
