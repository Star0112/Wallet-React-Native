import React from 'react'
import { View,Image,StyleSheet,Dimensions } from 'react-native'
import { Text } from "galio-framework";
import {GlobalStyles} from '../../styles/global';
import { format } from "date-fns";
import { pure } from 'recompose';
import moment from "moment";
const NewsDetailsItems = (props) => {
    const item = props.item; 
    //console.log("iteem",item); 
    const dateFormatter = value => {
        var date = new Date(value);
        var formattedDate = moment(date).format("YYYY-MM-DD")
        return formattedDate;
      };
    return (
        <View
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
        </View>
      );
}
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
 
export default   pure(NewsDetailsItems);
