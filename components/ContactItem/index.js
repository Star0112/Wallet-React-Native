import React from "react";
import { View, Image } from "react-native";
import { Btnstyles } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "react-native-elements";
import { Text } from "galio-framework";
import { VegaWalletIcon } from "../../store/coinsList/coinImage";
import { useSelector, useDispatch } from "react-redux";
import { showManageModal } from "../../store/manageModal/actions";
import ManageContact from "../manageContactModal/index";
import EditContact from "../EditContact/index";
export default ContactItem = props => {
  const dispatcher = useDispatch();
  const coinName = CoinIconName(props.coin);
  const userName = props.title;
  const userAddress = props.subTitle;
  const index = props.index;

  return (
    <View style={Btnstyles.main}>
      <Image source={CoinIconName(props.coin)} style={Btnstyles.img} />
      <View>
        <Text color={"#56e39c"} size={20}>
          {props.title}
        </Text>
        <Text p size={15} color={"white"}>
          {props.subTitle}
        </Text>
      </View>
      <Icon
        name="right"
        onPress={() => {
          dispatcher(showManageModal());
        }}
        style={Btnstyles.icn}
      />
      <ManageContact
        coin={coinName}
        title={userName}
        subTitle={userAddress}
        index={index}
      />
      <EditContact userIndex={index} Name={userName} Adr={userAddress} />
    </View>
  );
};

CoinIconName = name => {
  const state = useSelector(state => state.coinList);
  const selectedCoin = state.find(elm => elm.coinName == name);

  return selectedCoin.logoUrl;
};
