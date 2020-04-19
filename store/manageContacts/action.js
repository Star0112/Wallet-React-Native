import { MANAGE_CONTACTS } from "./action-type";
import AsyncStorage from "@react-native-community/async-storage";

export const addNewContact = data => {
  //console.log("Dispatchiiing");

  return {
    type: MANAGE_CONTACTS.ADD_CONTACT,
    data: data
  };
};

export const getAllContacts = data => {
  return {
    type: MANAGE_CONTACTS.GET_CONTACTS,
    data: data || []
  };
};

export const editContact = data => {
  console.log("edit Values", data);
  return {
    type: MANAGE_CONTACTS.UPDATE_CONTACT,
    data: data
  };
};

export const removeContact = data => {
  console.log("Remove Data",data); 
  return {
    type: MANAGE_CONTACTS.REMOVE_CONTACT,
    data: data
  };
};

/*export const _retrieveContacts = () => dispatch => {
  AsyncStorage.getItem("Contacts").then(value => {
    const data = JSON.parse(value);
    if (data !== null) {
      dispatch(getAllContacts(data));
    } else {
      dispatch(getAllContacts([]));
    }
  });
};

export const saveContact = data => dispatch => {
  AsyncStorage.getItem("Contacts").then(value => {
    const Data = JSON.parse(value);

    if (Data !== null) {
      let newValues = [...Data, data];
      AsyncStorage.mergeItem("Contacts", newValues).then(data => {
        dispatch(addNewContact(newValues));
      });
    }
  });
};
export const editOldContact = data => dispatch => {
  AsyncStorage.getItem("Contacts").then(value => {
    const Data = JSON.parse(value);

    if (Data !== null) {
      let contactIndex = Data.findIndex(elm => elm.index == data.index);
      Data[contactIndex].Name = data.Name;
      Data[contactIndex].Adr = data.Adr;
      Data[contactIndex].Coin = data.Coin;
      let newValues = [...Data];
      AsyncStorage.mergeItem("Contacts", newValues).then(data => {
        dispatch(editContact(newValues));
      });
    }
  });
};

export const RemoveContact = data => dispatch => {
  AsyncStorage.getItem("Contacts").then(value => {
    const Data = JSON.parse(value);

    if (Data !== null) {
      let newValues = Data.filter(elm => elm.index != data);
      AsyncStorage.mergeItem("Contacts", newValues).then(data => {
        dispatch(removeContact(newValues));
      });
    }
  });
};*/
