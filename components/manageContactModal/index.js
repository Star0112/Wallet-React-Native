import React, { useState } from "react";
import { View, Image,Clipboard } from "react-native";
import Modal from "react-native-modal";
import { ContactStyles } from "./styles";
import { NavBar, Button, Input, Text } from "galio-framework";
import { GlobalStyles } from "../../styles/global";
import { useDispatch, useSelector } from "react-redux";
import { HideManageModal } from "../../store/manageModal/actions";
import { hideEditModal, showEditModal } from "../../store/EditModal/actions";
import {removeContact} from '../../store/manageContacts/action'; 
import { Btnstyles } from "../ContactItem/styles";
const ManageContact = props => {
  const dispatcher = useDispatch();

  const state = useSelector(state => state);
  const coinName = props.coin;
  const contactName = props.title;
  const contactAdress = props.subTitle;
  const contactIndex = props.index;
  //console.log("Managin COntact",contactIndex);
  return (
    <Modal isVisible={state.ManaginModal}>
      <View style={GlobalStyles.Modalcreen}>
        <View style={ContactStyles.contactField}>
          <Image source={props.coin} style={Btnstyles.img} />
          <View>
            <Text color={"#56e39c"} style={Btnstyles.txt} size={20}>
              {props.title}
            </Text>
            <Text p size={15} style={Btnstyles.txt} color={"white"}>
              {props.subTitle}
            </Text>
          </View>
        </View>

        <Button
          color="success"
          round
          style={ContactStyles.innerBtn}
          shadowColor={"#292732"}
          onPress={() => {}}
        >
          Sending Funds
        </Button>
        <Button
          color="{#ee3f78}"
          round
          style={ContactStyles.innerBtn2}
          shadowColor={"#292732"}
          onPress={() => {
            //dispatcher(showModal());
            Clipboard.setString(contactAdress); 
            dispatcher(HideManageModal());
          }}
        >
          Copy Address
        </Button>
        <Button
          color="{#ee3f78}"
          round
          style={ContactStyles.innerBtn2}
          shadowColor={"#292732"}
          onPress={() => {
            dispatcher(showEditModal());
            dispatcher(HideManageModal());
          }}
        >
          Edit Info
        </Button>
        <Button
          color="{#ee3f78}"
          round
          style={ContactStyles.innerBtn2}
          shadowColor={"#292732"}
          onPress={() => {
            dispatcher(removeContact(contactIndex));
            dispatcher(HideManageModal());
          }}
        >
          Remove Contact
        </Button>
        <Button
          color="{#ee3f78}"
          round
          style={ContactStyles.CancelButton}
          shadowColor={"#292732"}
          onPress={() => {
            dispatcher(HideManageModal());
          }}
        >
          Cancel
        </Button>
      </View>
    </Modal>
  );
};

export default ManageContact;
