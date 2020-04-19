import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
  SafeAreaView
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../styles/global";
//import { LineChart } from "react-native-chart-kit";
import { LineChart, Grid } from "react-native-svg-charts";
import { NavBar } from "galio-framework";
import { Text } from "galio-framework";
import BtnItem from "../components/BtnItem/index";
import Icon from "react-native-vector-icons/FontAwesome";
import * as shape from "d3-shape";
export default MainScreen = props => {
  const state = useSelector(state => state);
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const keys = ["apples", "bananas", "cherries", "dates"];
  return (
    <SafeAreaView style={{backgroundColor:"#292732"}}>
      <ImageBackground
        source={require("../assets/images/VGWAppBackground.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={GlobalStyles.psscreen}>
          <NavBar
            title="Dashboard"
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
                  props.navigation.openDrawer();
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
          <Text h5 style={GlobalStyles.txt} color={"#50d090"}>
            $3,109.34 !
        </Text>
          <LineChart
            style={{ height: 200, marginHorizontal: 20 }}
            data={data}
          svg={{
            stroke: "rgba(192, 56, 103, 1)",
            strokeWidth: 5,
            shadowColor: "#fff",
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10
          }}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveBasis}
          //key={keys}
          ></LineChart>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            marginVertical: 10,
            marginBottom: 20
          }}
        >
          <Text style={GlobalStyles.chartText}>Jun</Text>
          <Text style={GlobalStyles.chartText}>Jul</Text>
          <Text style={GlobalStyles.chartText}>Aug</Text>
          <Text style={GlobalStyles.chartText}>Sep</Text>
          <Text style={GlobalStyles.chartText}>Oct</Text>
        </View>
          <ScrollView>
            <BtnItem
              title={"Cryptocurrency Wallet"}
              subTitle={"send and recieve digital assets"}
              iconName={"wallet"}
              action={() => {
                props.navigation.navigate('wallet')
              }}
            />
            <BtnItem
              title={"Mobile Payment"}
              subTitle={"Store your cards for quick payments"}
              iconName={"mobile1"}
              action={() => { }}
            />
            <BtnItem
              title={"Buy Cryptocurrency"}
              subTitle={"Purchase in-app of find Bitcoin ATM"}
              iconName={"shoppingcart"}
              action={() => { }}
            />
            <BtnItem
              title={"Latest News"}
              subTitle={"Stay up to date on crypto news"}
              iconName={"rocket1"}
            action={() => {
              props.navigation.navigate("NewsScreen");
            }}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "Montserrat-Thin"
  }
});

/**   <LineChart
        data={{
          labels: ["January", "February", "March", "April"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel={""}
        chartConfig={chart}
        bezier
        withInnerLines={false}
        withOuterLines={false}
        style={{
          marginVertical: 8,
          borderRadius: 16,

        }}
      /> */