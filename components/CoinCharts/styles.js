import { StyleSheet } from "react-native";
export const ChartsSytle = StyleSheet.create({
  main: {
    margin: 5,
    marginTop: 12,
    backgroundColor: "#313342",
    borderRadius: 15,
    height: 290,
    alignItems: "center",
    opacity:0.7
  },
  buttonGroup:{
    marginTop: -20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  dateGroup:{
    flexDirection: "row",
  },
  innerBtn: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  txt: {
    marginVertical: 2,
    fontFamily: "Roboto"
  },
});
