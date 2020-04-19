import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
// import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from "@react-native-community/geolocation";
export default LocateATM = () => {
  MapboxGL.setAccessToken(
    "pk.eyJ1IjoibWVycmljazE3IiwiYSI6ImNrNW1qNGNhejAyZDYzbm5zc2gxbm43ZHkifQ.kJHwGdb3NjNno06-kr3r7Q"
  );

  const [long, setLong] = useState(0);
  const [alt, setLalt] = useState(0);
  const [info, setInfo] = useState([]);

  fetch("https://coinmap.org/api/v1/venues/?category=atm,default")
    .then(response => response.json())
    .then(responseJson => {
      setInfo(responseJson.venues);
      //console.log("My Info", info);
      Geolocation.getCurrentPosition(info => {
        setLong(info.coords.longitude);
        setLalt(info.coords.altitude);
      });
    })
    .catch(error => {
      console.error(error);
    });
 /* useEffect(() => {
   
  });*/
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {/* <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera centerCoordinate={[long, alt]} zoomLevel={9} />
          {info.map(elm => {
            //console.log("Eleeemnt",elm);
            return (
              <MapboxGL.MarkerView   coordinate={[elm.long, elm.lat]}/>
           
            );
          })}
        </MapboxGL.MapView> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});