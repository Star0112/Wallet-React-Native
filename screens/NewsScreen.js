import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../styles/global";
import { DrawerActions } from "react-navigation-drawer";
import { NavBar, Card } from "galio-framework";
import Icon from "react-native-vector-icons/FontAwesome";
import NewsCard from "../components/newsCard";
import { FlatList } from "react-native-gesture-handler";
import { showNewsModal } from "../store/newsDetails/actions";
import { fetchAllData } from "../store/FetchNews/actions";
import {NavigationActions} from 'react-navigation'; 
export default LatestNews = props => {
  const dispatch = useDispatch();
  dispatch(fetchAllData());
  const state = useSelector(state => state);

  //console.log("Neeeews", state.News);

  return (
    <ImageBackground
      source={require("../assets/images/VGWAppBackground.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={GlobalStyles.maincreen}>
        <NavBar
          title="Latest News"
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
                props.navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            />
          }
        />
        <FlatList
          data={state.News}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {

                console.log("Nav Props",props.navigation); 
                //dispatcher(showNewsModal());
                props.navigation.navigate('NewsDetails',{
                  id:item._id,
                  news:state.News 
                });
              }}
            >
              <NewsCard
                title={item.title}
                image={item.originalImageUrl}
                avatar={item.thumbnail}
                time={item.publishedAt}
              />
             
            </TouchableOpacity>
          )}
          keyExtractor={item => item._id}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "Roboto-Regular"
  }
});