import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Button, Text, Input } from "galio-framework";
import { GlobalStyles } from "../styles/global";
import { useSelector, useDispatch } from "react-redux";
import { State } from "react-native-gesture-handler";
import { generatePassPhrase } from "../store/wallet/action";

export default SignupScreen = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    // <SafeAreaView style={{ backgroundColor: "#292732" }}>
    <View style={GlobalStyles.screen}>
      <Text h4 style={GlobalStyles.txt} color={"#56e39c"}>
        Choose Account Type
      </Text>
      <Text color={"white"} bold={true} style={GlobalStyles.label2}>
        Register with a Username and Password.This option is the best for
        beginners.Your keys will be encrypted and Attached to your account{" "}
      </Text>
      <Input
        placeholder="Email"
        rounded
        style={GlobalStyles.inputItem}
        placeholderTextColor={"white"}
        color={"white"}
      />
      <Input
        placeholder="Mobile Telephone Number"
        rounded
        style={GlobalStyles.inputItem}
        placeholderTextColor={"white"}
        color={"white"}
      />
      <Input
        placeholder="password"
        password
        rounded
        style={GlobalStyles.inputItem}
        placeholderTextColor={"white"}
        color={"white"}
      />
      <Input
        placeholder="Confirm password"
        password
        rounded
        style={GlobalStyles.inputItem}
        placeholderTextColor={"white"}
        color={"white"}
      />

      <Button
        color="error"
        round
        style={GlobalStyles.BtnStyle}
        shadowColor={"#292732"}
      >
        Register
      </Button>

      <Text color={"white"} bold={true} style={GlobalStyles.label2}>
        Or choose to bypass account registration and generate a passphrase to
        use VegaWallet anonymously.You claim sole responsiblity for your
        passphrase and account security.{" "}
      </Text>

      <Button
        color="info"
        round
        style={GlobalStyles.walletBtn}
        shadowColor={"#292732"}
        onPress={() => {
          if (state.coinList[0].address === "") {
            dispatch(generatePassPhrase());
            props.navigation.navigate("Passphrase");
          } else alert("You have already account.");
          props.navigation.navigate("Passphrase");
        }}
      >
        Generate Passphrase
      </Button>
    </View>
    // </SafeAreaView>
  );
};
