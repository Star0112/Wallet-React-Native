import { MANAGE_CONTACTS } from "./action-type";

import { _retrieveContacts, saveContact } from "../../helpers/manageContacts";
import AsyncStorage from "@react-native-community/async-storage";
import { getAllContacts } from "./action";
const contactsInitialState = [];

export const ManageContacts = (state = contactsInitialState, action) => {
  switch (action.type) {
    case MANAGE_CONTACTS.ADD_CONTACT:
      const contacts = [...state, action.data];
      saveAllData(contacts);
      return contacts;

    case MANAGE_CONTACTS.GET_CONTACTS:
      return action.data;
    case MANAGE_CONTACTS.UPDATE_CONTACT:
      const newData = [
        ...state.filter(elm => elm.index !== action.data.index),
        action.data
      ];
      mergeAllData(newData);
      return newData;
    case MANAGE_CONTACTS.REMOVE_CONTACT:
      console.log("Action Data", action.data);
      const newValues = state.filter(elm => elm.index !== action.data);
      console.log("new Values", newValues);
      mergeAllData(newValues);
      return newValues;
    default:
      return state;
  }
};

const saveAllData = async state => {
  try {
    await AsyncStorage.setItem("CONTACTS", JSON.stringify(state));
  } catch (error) {
    console.log("AsyncStorage save error: " + error.message);
  }
};
const mergeAllData = async state => {
  try {
    let value = JSON.stringify(state);
    console.log("Valuuuue", value);
    await AsyncStorage.setItem("CONTACTS", JSON.stringify(state));
  } catch (error) {
    console.log("AsyncStorage save error: " + error.message);
  }
};
const fetchAllData = () => {
  return dispatch => {
    return AsyncStorage.getItem("CONTACTS").then(contacts => {
      dispatch(getAllContacts(JSON.parse(contacts)));
    });
  };
};
