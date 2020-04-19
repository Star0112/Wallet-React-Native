import React from "react";
import { View,StyleSheet,Dimensions,Image} from "react-native";
import { format } from "date-fns";
import {Text} from 'galio-framework';
import {GlobalStyles} from '../../styles/global';  
import moment from "moment";
const NewsDetailsComponent = props => {
  const dateFormatter = value => {
    var date = new Date(value);
    var formattedDate = moment(date).format("YYYY-MM-DD")
    return formattedDate;
  };
  //console.log("Daataa", props.data);
  return (
    <View style={GlobalStyles.psscreen}>
      <Image
        style={styles.image}
        source={{ uri: props.data.originalImageUrl }}
      />
      <View style={styles.news}>
        <Text h5 style={GlobalStyles.newsTitle} color={"#50d090"}>
          {props.data.title}
        </Text>
        <View style={styles.footer}>
          {/* <Image  source={{ uri: selectedNews.source.favicon }} style={styles.avatar} />*/}
          <View style={styles.title}>
            <Text color={"white"} size={15} bold>
              {props.data.source.name}
            </Text>
            <Text
              p
              size={15}
              color={"white"}
              style={{ marginTop: 5, marginBottom: 10 }}
            >
              {dateFormatter(props.data.publishedAt)}
            </Text>
          </View>
        </View>
        <Text p color={"white"} size={14} style={styles.desription}>
          {props.data.description}
        </Text>
      </View>
    </View>
  );
};
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
    },
    container:{
      flex: 1,
      justifyContent: "flex-start",
      alignContent: "center"
    }
  });
  
export default NewsDetailsComponent;
