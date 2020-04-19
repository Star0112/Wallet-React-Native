import AsyncStorage from "@react-native-community/async-storage";

export const _retrieveContacts = async () => {
  var result;
  try {
    result = await AsyncStorage.getItem("Contacts");
  } catch (error) {
    // Error retrieving data
    console.log(error);
  }
  if (result == null) {
    result = [];
  }
  return result;
};

export const saveContact = async data => {
  //console.log("My data", data);
  const currentContacts = await _retrieveContacts();
  //console.log("hello", currentContacts);
  try {
    if (currentContacts == []) {
      await AsyncStorage.setItem(
        "Contacts",
        JSON.stringify([...currentContacts, data])
      );
      //console.log("Data Saved");
    }
  } catch (e) {
    // saving error
    console.log("Error", e);
  }
};
