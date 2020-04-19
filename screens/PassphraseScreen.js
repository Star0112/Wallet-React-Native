import React, { useState, useRef } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { PassPhraseComponent } from "../components/passphrase";
import { Text } from "galio-framework";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../styles/global";
import { Button } from "react-native-elements";
import { generateKeys } from "../store/coinsList/action";
import { generatePassPhrase } from "../store/wallet/action";
import AnimateLoadingButton from "react-native-animate-loading-button";

export default PassphraseScreen = props => {
  const state = useSelector(state => state);
  const [passphrase, setPassphrase] = useState("");
  const dispatch = useDispatch();
  const refContainer = useRef();
  const refContainer1 = useRef();

  const onPressHandler = () => {
    const { current } = refContainer;
    current.showLoading(true);

    // mock
    setTimeout(() => {
      current.showLoading(false);
      dispatch(generateKeys(state.Wallet.passphrase, state.coinList));
      // props.navigation.navigate('Main');
    }, 1000);
  };

  const onPressHandler1 = () => {
    const { current } = refContainer1;
    current.showLoading(true);

    setTimeout(() => {
      current.showLoading(false);
      dispatch(generatePassPhrase());
    }, 1000);
  };

  return (
    // <SafeAreaView style={{ backgroundColor: "#292732" }}>
    <View style={GlobalStyles.psscreen}>
      <Text style={{ padding: 20 }}></Text>
      <Text h4 style={GlobalStyles.txt} color={"#56e39c"}>
        Your passphrase is{" "}
      </Text>
      <PassPhraseComponent />
      <View
        style={{
          padding: 5,
          margin: 20,
          justifyContent: "space-around",
          alignContent: "center",
          flexDirection: "row"
        }}
      >
        <Button
          raised
          icon={{ name: "share-alt", color: "#fff", type: "font-awesome" }}
          title="Share into social Media "
          buttonStyle={styles.btn}
        />
      </View>
      <Text style={{ padding: 5 }}></Text>
      <AnimateLoadingButton
        ref={refContainer1}
        width={350}
        height={45}
        title="Regenerate Passphrase"
        titleFontSize={18}
        titleColor="rgb(255,255,255)"
        backgroundColor="#1232ff"
        borderRadius={20}
        onPress={() => {
          onPressHandler1();
        }}
      />
      <Text style={{ padding: 10 }}></Text>
      <AnimateLoadingButton
        ref={refContainer}
        width={350}
        height={45}
        title="Use Wallet Passphrase"
        titleFontSize={18}
        titleColor="rgb(255,255,255)"
        backgroundColor="#1232ff"
        borderRadius={20}
        onPress={() => {
          if (state.Wallet.passphrase === "") alert("Please set Passpharase.");
          else onPressHandler();
        }}
      />
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    //marginVertical: 15,
    //paddingHorizontal: 20,
    borderRadius: 20
  }
});
