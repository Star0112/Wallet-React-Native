import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Modal } from "react-native";
import { Phrasestyles } from "./styles";
export const PassPhraseComponent = () => {
  //to dispatch the createPassPhrase Action
  const dispatch = useDispatch();

  //you will get the global state;
  const state = useSelector(state => state);

  //dispatch(generatePassPhrase());
  return (
    <View style={Phrasestyles.comp}>
      <Text style={Phrasestyles.passPhrase}>{state.Wallet.passphrase}</Text>
    </View>
  );

  //////
};
