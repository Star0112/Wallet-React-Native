import React, { useState, useEffect } from "react";
import { View, Picker } from "react-native";
import Modal from "react-native-modal";
import { ContactStyles } from "./styles";
import { NavBar, Button, Input, Text } from "galio-framework";
import { GlobalStyles } from "../../styles/global";
import { useDispatch, useSelector } from "react-redux";

import { editContact } from "../../store/manageContacts/action";
import { hideEditModal } from "../../store/EditModal/actions";
const EditContact = props => {
  const [coinSelected, SetCoinSelected] = useState({
    coinDisplayName: "Bitcoin",
    coinName: "BTC"
  });

  const [contactName, setContactName] = useState(props.Name);
  const [contactAdress, setContactAddress] = useState(props.Adr);
 /* useEffect(() => {
    setContactName(props.Name);
    setContactAddress(props.Adr);
  });*/
  const state = useSelector(state => state);
  //console.log("State of ADD", state.Modal);
  //console.log("State of EDIT ", state.EditModal);
  const dispatcher = useDispatch();
  const pickerChange = index => {
    state.coinList.map((v, i) => {
      if (index === i) {
        SetCoinSelected({
          coinDisplayName: state.coinList[index].coinDisplayName,
          coinName: state.coinList[index].coinName
        });
      }
    });
  };

  return (
    <Modal isVisible={state.EditModal}>
      <View style={GlobalStyles.Modalcreen}>
        <Input
          placeholder="Contact Name"
          onChangeText={text => setContactName(text)}
          style={GlobalStyles.inputItem}
          placeholderTextColor={"white"}
          color={"white"}
          value={contactName}
        />
        <Input
          placeholder="Address"
          onChangeText={text => setContactAddress(text)}
          style={GlobalStyles.inputItem}
          placeholderTextColor={"white"}
          color={"white"}
          value={contactAdress}
        />
        <View style={GlobalStyles.selectItem}>
          <Picker
            style={{ color: "white" }}
            itemStyle={{ color: "white" }}
            selectedValue={coinSelected.coinName}
            onValueChange={(itemValue, itemIndex) => {
              let newCoin = state.coinList[itemIndex];
              SetCoinSelected({
                coinDisplayName: newCoin.coinDisplayName,
                coinName: newCoin.coinName
              });
              //console.log(coinSelected);
            }}
          >
            {state.coinList.map(coin => {
              return (
                <Picker.Item
                  label={coin.coinDisplayName}
                  value={coin.coinName}
                  key={coin.index}
                />
              );
            })}
          </Picker>
        </View>
        <View style={GlobalStyles.contactBtns}>
          <Button
            color={"#ec1035"}
            size="small"
            round
            style={GlobalStyles.AddBtnStyle}
            shadowColor={"#292732"}
            onPress={() => {
              setContactName("");
              setContactAddress("");
              dispatcher(hideEditModal());
            }}
          >
            Cancel
          </Button>
          <Button
            color={"#0289ca"}
            round
            style={GlobalStyles.AddBtnStyle2}
            shadowColor={"#292732"}
            onPress={() => {
              dispatcher(
                editContact({
                  Name: contactName,
                  Adr: contactAdress,
                  Coin: coinSelected.coinName,
                  index: props.userIndex
                })
              );
              dispatcher(hideEditModal());
            }}
          >
            Save
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default EditContact;
