import React, { useState ,useEffect} from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { useSelector } from "react-redux";
import { Text, Button } from "galio-framework";
import { GlobalStyles } from "../styles/global";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavBar, Card } from "galio-framework";
import { DrawerActions } from "react-navigation-drawer";
import { format } from "date-fns";
import SwiperFlatList from "react-native-swiper-flatlist";
import NewsDetailsItems from "../components/newsDetailsItem/index";
const NewsDetailsScreen = props => {
  const news = useSelector(state => state.News);
  //const news = props.navigation.getParam("news");
  const newsId = props.navigation.getParam("id");
  const selectedIndex = news.findIndex(elm => elm._id == newsId);
//console.log("Selected News",selectedIndex);

  const dateFormatter = value => {
    var date = new Date(value);
    var formattedDate = format(date, "MMMM Do, yyyy H:mma");
    return formattedDate;
  };
  return (
    <View style={GlobalStyles.psscreen}>
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
      <SwiperFlatList
      
        index={selectedIndex}
        data={news}
        renderItem={({ item }) => {
          return (

            <NewsDetailsItems item={item} />
         
          );
        }}
      />
      
    </View>
  );
};

export default NewsDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.5,
    zIndex: 1
  },
  news: {
    //bottom: 0,
    //position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#313342",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    opacity: 0.9,
    alignContent: "center"
    //height: Dimensions.get("window").height * 0.4
  },
  desription: {
    marginLeft: 5,
    textAlign: "left",
    alignSelf: "flex-end",
    bottom: 0
  },
  footer: {
    flexDirection: "row",
    alignContent: "flex-start"
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    margin: 5
  },
  title: {
    marginTop: 5,
    marginLeft: 3,
    paddingLeft: 4
  },
  titleStyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "Roboto-Regular"
  }
});
{ /**<View
  key={item._id}
  style={{
    backgroundColor: "tomato",
    width: Dimensions.get("window").width,
    height: "100%"
  }}
>
  <Image
    style={styles.image}
    source={{ uri: item.originalImageUrl }}
  />
  <View style={styles.news}>
    <Text h5 style={GlobalStyles.newsTitle} color={"#50d090"}>
      {item.title}
    </Text>
    <View style={styles.footer}>
      <View style={styles.title}>
        <Text color={"white"} size={15} bold>
          {item.source.name}
        </Text>
        <Text p size={15} color={"white"} style={{ marginTop: 5 }}>
          {dateFormatter(item.publishedAt)}
        </Text>
      </View>
    </View>
    <Text p color={"white"} size={14} style={styles.desription}>
      {item.description}
    </Text>
  </View>
</View> */}
/**/
