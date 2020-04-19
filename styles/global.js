import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  screen: {
    backgroundColor: "#292732",
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  splash: {
    backgroundColor: "#292732",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  psscreen: {
    backgroundColor: "#292732",
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center"
  },
  Modalcreen: {
    backgroundColor: "#292732",
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    height:300,
    maxHeight:400,
    opacity:0.7,
    borderRadius:20

  },
  maincreen: {
    //backgroundColor: "#292732",
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center"
  },
  BtnStyle: {
    alignSelf: "center",
    marginVertical: 6
  },
  AddBtnStyle: {
    alignSelf: "center",
    //marginVertical: 20,
    width:"45%",
    //marginHorizontal:20
  },
  AddBtnStyle2: {
    alignSelf: "center",
    //marginVertical: 20,
    width:"45%",
    marginLeft:25
    //marginHorizontal:20
  },
  contactBtns:{
    flexDirection:'row',
    alignItems:'center',
    alignContent:'space-between',
    marginHorizontal:15,
    marginTop:20
  },
  txt: {
    alignSelf: "center",
    marginVertical: 20,
    fontFamily: "Montserrat-Bold"
  },
  inputItem: {
    backgroundColor: "#292732",
    //paddingHorizontal:150,
    width: "90%",
    alignSelf: "center",
    marginTop: 8,
    alignContent: "flex-start",
    borderRadius:30,
  },
  selectItem: {
    backgroundColor: "#292732",
    //paddingHorizontal:150,
    width: "90%",
    alignSelf: "center",
    marginTop: 8,
    alignContent: "flex-start",
    borderRadius:30,
    color:'white',
    borderWidth:0.5,
    borderColor:'white', 
  
  },
  bordardingTitle:{
      fontFamily:'Montserrat-Regular',
      textAlign:'center',
      marginTop:60
  },
  newsTitle:{
    fontFamily:'Montserrat-Regular',
    textAlign:'center',
    marginTop:7,
    marginHorizontal:4
},
  bordardingText:{
    fontFamily:'Montserrat-Bold',
    textAlign:'center',
    color:'white',
    paddingHorizontal:20,
    fontWeight:'bold',
    marginVertical:30
},
chartText:{
  fontFamily:'Montserrat-Regular',
  textAlign:'center',
  color:'#50d090',
  paddingHorizontal:20,
  fontWeight:'bold',
  marginVertical:30
},
  label: {
    alignSelf: "flex-end",
    marginVertical: 5,
    marginRight: 30
  }, //
  label2: {
    alignSelf: "center",
    paddingTop: 20,
    marginHorizontal: 10,
    textAlign: "center",
    fontFamily:'Montserrat-Regular',
    //marginRight:30
  },
  label3: {
    alignSelf: "center",
    paddingTop: 5,
    fontFamily:'Montserrat-Regular',
    //marginRight:30
  },
  walletBtn: {
    marginTop: 20,
    alignSelf: "center",
    fontFamily:'Montserrat-Regular',
    //height:80
  },
  mainLbl: {
    alignSelf: "center",
    marginVertical: 20,
    fontSize: 35,
    color: "#56e39c"
  },
  walletCard1: {
    margin: 5,
    height: 80,
    width: "47%",
    backgroundColor: "#313342",
    borderRadius: 15,
    opacity:0.7,
    alignContent: "center",
    alignItems: "center",
  },
  walletCard2: {
    margin: 5,
    height: 80,
    backgroundColor: "#313342",
    borderRadius: 15,
    opacity:0.7,
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  TextShadowStyle: {
      textShadowColor: '#000',
      textShadowOffset: { width: 0, height: 6 },
      textShadowRadius: 10
  }
});