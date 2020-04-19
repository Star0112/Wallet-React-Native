import React from "react";
import { View, Image } from "react-native";
import { Newsstyles } from "./styles";
import { Text } from "galio-framework";
import { format } from "date-fns";
import moment from "moment";
const NewsCard = props => {
  //console.log("Props",props);
  var date = new Date(props.time);
  var formattedDate = moment(date).format("YYYY-MM-DD")
  return (
    <View style={Newsstyles.card}>
      <Image
        source={{ uri: props.image }}
        style={{
          width: "100%",
          height: "75%",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15
        }}
      />
      <View style={Newsstyles.footer}>
       {/* <Image source={{ uri: props.avatar }} style={Newsstyles.avatar} />*/}
        <View style={Newsstyles.title}>
          <Text
            color={"#56e39c"}
            size={13}
            bold
          >
            {props.title}
          </Text>
          <Text p size={15} color={"white"} style={{marginTop:5}}>
            {formattedDate}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;
