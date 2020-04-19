import React, { useState, useEffect } from "react";
import { View, FlatList, ImageBackground, StyleSheet } from "react-native";
import { GlobalStyles } from "../styles/global";
import { NavBar, Button } from "galio-framework";
import ContactItem from "../components/ContactItem/index";
import Icon from "react-native-vector-icons/FontAwesome";
import AddContact from "../components/AddContact/index";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../store/addContact/action";
import { _retrieveContacts, saveContact } from "../helpers/manageContacts";
import { DrawerActions } from "react-navigation-drawer";
const ContactsScreen = props => {
  const state = useSelector(state => state);
  console.log("Current Conatcts", state.ManageContacts);

  const dispatcher = useDispatch();
  return (
    <ImageBackground
      source={require("../assets/images/VGWAppBackground.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={GlobalStyles.maincreen}>
        <NavBar
          title="Contacts"
          transparent={true}
          titleStyle={styles.titleStyle}
          left={
            <Icon
              name="bars"
              style={{
                fontSize: 20,
                color: "white"
              }}
              onPress={() => {
                props.navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            />
          }
          right={
            <Icon
              name="heart"
              style={{
                fontSize: 20,
                color: "white"
              }}
              onPress={() => {
                props.navigation.openDrawer();
              }}
            />
          }
        />
        <Button
          color="{#ee3f78}"
          round
          style={GlobalStyles.BtnStyle}
          shadowColor={"#292732"}
          onPress={() => {
            dispatcher(showModal());
          }}
        >
          Add A New Contact
        </Button>
        <FlatList
          data={state.ManageContacts}
          renderItem={({ item }) => (
            <ContactItem
              title={item.Name}
              subTitle={item.Adr}
              coin={item.Coin}
              index={item.index}
            />
          )}
          keyExtractor={item => item.index}
        />

        <AddContact />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "Montserrat-Thin"
  }
});
export default ContactsScreen;
