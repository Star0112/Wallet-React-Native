import { COIN_CONSTANTS } from "./action-type";
import hdkey from "hdkey";
import bip39 from "react-native-bip39";
import etherHDkey from "ethereumjs-wallet/hdkey";
import createHash from "create-hash";
import bs58check from "bs58check";
import AsyncStorage from "@react-native-community/async-storage";

let encryptDecrypt = require("react-native-encrypt-decrypt");

export const getCoinList = () => {
  return {
    type: "GET_COIN_LIST"
  };
};

export const generateKeys = (mnemonic, coinList) => {
  return async dispatch => {
    let seed = bip39.mnemonicToSeed(
      "gentle mutual speak consider mandate kingdom cash explain soul exile cabin squeeze"
    );
    let root = hdkey.fromMasterSeed(seed);
    let HDwallet = etherHDkey.fromMasterSeed(seed);
    let privateKeys = [];
    let addresses = [];

    coinList.map((coin, i) => {
      let address = "0x123";
      let privateKey = "0x000";
      let publicKey = "0x000";
      if (coin.checkETH) {
        let zeroWallet = HDwallet.derivePath(
          `m/44'/${coin.index}'/0'/0/0`
        ).getWallet();
        address = `0x${zeroWallet.getAddress().toString("hex")}`;
      } else {
        let addrnode = root.derive(`m/44'/${coin.index}'/0'/0/0`);
        if (coin.index == 145) addrnode = root.derive(`m/44'/0'/0'/0/0`);
        publicKey = encryptDecrypt.encrypt(
          addrnode.publicKey.toString("hex"),
          "This is secret for publicKey."
        );
        privateKey = encryptDecrypt.encrypt(
          addrnode.privateKey.toString("hex"),
          "This is secret for privateKey."
        );
        let step1 = addrnode.publicKey;
        let step2 = createHash("sha256")
          .update(step1)
          .digest();
        let step3 = createHash("rmd160")
          .update(step2)
          .digest();
        let step4 = Buffer.allocUnsafe(21);
        step4.writeUInt8(coin.hexcode, 0);
        step3.copy(step4, 1);
        address = bs58check.encode(step4);
      }

      privateKeys.push(privateKey);
      addresses.push(address);
      console.log("coin", coin.coinName, ": ", address);
    });
    AsyncStorage.setItem("my-privateKey", JSON.stringify(privateKeys));
    AsyncStorage.setItem("my-address", JSON.stringify(addresses));
    dispatch(setKeys(privateKeys, addresses));
  };
};

export const setKeys = (prKey, addr) => {
  return {
    type: COIN_CONSTANTS.SET_PRIVATE_PUBLIC_KEY,
    prKey: prKey,
    addr: addr
  };
};
