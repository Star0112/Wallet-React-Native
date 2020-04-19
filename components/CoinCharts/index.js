import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { LineChart, XAxis } from "react-native-svg-charts";
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "react-native-elements";
import { ChartsSytle } from "./styles";
import { Text, Block } from "galio-framework";
import * as shape from "d3-shape";

export default CoinCharts = props => {

  let arry = [];
  for(let i = 0; i < props.date.length; i++){
    arry.push(1);
  }

  return (
    <View style={ChartsSytle.main}>
      <View style={ChartsSytle.buttonGroup}>
        <Button
          icon={
            <Icon
              name={ "wallet" }
              size={20}
              color="white"
              style={{ alignSelf: "center" }}
            />
          }
          title=""
          buttonStyle={ChartsSytle.innerBtn}
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: ['#0a4dad', '#0a6bad'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          onPress={props.onSend}
        />
        <Image
          style={{ width: 50, height: 50, marginVertical:0 }}
          source={ props.icon }
        />
        <Button
          icon={
            <Icon
              name={ "qrcode" }
              size={20}
              color="white"
              style={{ alignSelf: "center" }}
            />
          }
          title=""
          buttonStyle={ChartsSytle.innerBtn}
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: ['#0a4dad', '#0a6bad'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          onPress={props.onReceive}
        />
      </View>
      <View>
        <Text color={"white"} style={ChartsSytle.txt} size={20}>
          { props.coinValue + '$' }
        </Text>
        <Text color={"#56e39c"} style={ChartsSytle.txt} size={12}>
          { '(' + props.coinRate + '%)' }
        </Text>
      </View>
      <LineChart
        style={{ height: 180, marginHorizontal: 20, width: "98%" }}
        data={props.data}
        svg={{ stroke: "rgba(192, 56, 103, 1)" }}
        contentInset={{ top: 20, bottom: 20 }}
        curve={shape.curveBasis}
        //key={keys}
      ></LineChart>
      <XAxis
        style={{ marginHorizontal: -30, width: "100%"}}
        data={ arry }
        formatLabel={ (value, index) => props.date[index] }
        contentInset={{ left: 25, right: 25 }}
        svg={{ fontSize: 15, fill: "#56e39c" }}
      />
    </View>
    
  );
};
