import React, { useState } from "react";
import { View, Text, Picker } from "react-native";
import Modal from "react-native-modal";
import { ContactStyles } from "./styles";
import { NavBar, Button, Input } from "galio-framework";
import { GlobalStyles } from "../../styles/global";
import { useDispatch, useSelector } from "react-redux";
import { HideModal } from "../../store/addContact/action";
import { saveContact } from "../../helpers/manageContacts";
import { addNewContact } from "../../store/manageContacts/action";
const AddContact = props => {
 
  const [coinSelected, SetCoinSelected] = useState({
    coinDisplayName: "Bitcoin",
    coinName: "BTC"
  });
  

  const [contactName, setContactName] = useState("");
  const [contactAdress, setContactAddress] = useState("");

  const state = useSelector(state => state);
  //console.log("State of ADD",state.Modal); 
  //console.log("State of EDIT ",state.EditModal); 
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
    <Modal isVisible={state.Modal}>
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
              setContactName(''); 
              setContactAddress(''); 
              dispatcher(HideModal());
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
                addNewContact({
                  Name: contactName,
                  Adr: contactAdress,
                  Coin: coinSelected.coinName,
                  index: Math.random().toString()
                })
              );
              setContactName(''); 
              setContactAddress(''); 
              dispatcher(HideModal());
            }}
          >
            Save
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default AddContact;
