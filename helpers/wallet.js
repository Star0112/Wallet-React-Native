import * as hdkey from 'hdkey';
import * as bip39 from 'react-native-bip39';
createWallet = async (mnemonic, coinBip44Index) => {
    const { index, addressPrefix } = getIndexAndAddressPrefix(coinType);
    if (getIndexAndAddressPrefix(coinType) == null) {
        return "Please specify your coin type";
    } else {
        const seed = await bip39.mnemonicToSeedSync(mnemonic);

        const root = hdkey.fromMasterSeed(seed);
        const xprv = root.privateKey.toString("hex");

        const addrnode = root.derive(`m/44'/${coinBip44Index}'/0'/0/0`);

        const step1 = addrnode.publicKey;
        const step2 = createHash("sha256")
            .update(step1)
            .digest();
        const step3 = createHash("rmd160")
            .update(step2)
            .digest();

        var step4 = Buffer.allocUnsafe(21);
        step4.writeUInt8(addressPrefix, 0);
        step3.copy(step4, 1); //step4 now holds the extended RIPMD-160 result
        const step9 = bs58check.encode(step4);
        console.log("Base58Check: " + step9);
        return { privateKey: addrnode.privateKey, address: step9 }
    }
};

module.exports.generateAddress = (coin, seed, addressNumber) => {
    try {
        const { index, addressPrefix } = getIndexAndAddressPrefix(coin);
        const root = hdkey.fromMasterSeed(seed);
        const addrnode = root.derive(`m/44'/${index}'/0'/0/${addressNumber}`);
        if (index == 0 || index == 5) {
            console.log("addrnodePublicKey: " + addrnode._publicKey);
            const step1 = addrnode._publicKey;
            const step2 = createHash("sha256")
                .update(step1)
                .digest();
            const step3 = createHash("rmd160")
                .update(step2)
                .digest();

            var step4 = Buffer.allocUnsafe(21);
            step4.writeUInt8(addressPrefix, 0);
            step3.copy(step4, 1); //step4 now holds the extended RIPMD-160 result
            const step9 = bs58check.encode(step4);
            console.log("Base58Check: " + step9);
            return step9;
        } else if (index == 60) {
            const pubKey = ethUtil.privateToPublic(addrnode._privateKey);
            const addr = ethUtil.publicToAddress(pubKey).toString("hex");
            const address = ethUtil.toChecksumAddress(addr);
            return address;
        }
    } catch (ex) {
        console.log(ex);
    }
};

const getIndexAndAddressPrefix = coinType => {
    switch (coinType.toLowerCase()) {
        case "btc":
            return { index: 0, addressPrefix: 0x00 };
        case "tbtc":
            return { index: 0, addressPrefix: 0x6f };
        case "dash":
            return { index: 5, addressPrefix: 0x4c };
        case "tdash":
            return { index: 5, addressPrefix: 0x8c };
        case "eth": {
            return { index: 60, addressPrefix: "" };
        }
        case "vgw": {
            return { index: 60, addressPrefix: "" };
        }
        default:
            return null;
    }
};

  // const importWallet = (coinType,seed)=>{
  //   const root = hdkey.fromMasterSeed(seed);
  //   var privateKey = new Buffer(root.privateKey, 'hex');
  //   var key = wif.encode(128, privateKey, true);
  //   console.log(key);

  // var myWifString = key;
  // var decoded = wif.decode(myWifString)
  // console.log(decoded.privateKey.toString());

  // var encryptedKey = bip38.encrypt(decoded.privateKey, decoded.compressed, 'TestingOneTwoThree')
  // console.log(encryptedKey)
  // }

  // importWallet('tdash',`fire midnight denial slim turkey vapor prepare shaft zero release sing rude`);

  // const paymentRequest = {
  //   address: 'yXbAW6teHcTMy6kKQdvU6cnoUoGvbDEXsa',
  //   amount: 120000 //satoshis
  // };

//   const getPrivateKeyToSign = (coinType, mnemonic, addressNumber) => {
//     const { index, addressPrefix } = getIndexAndAddressPrefix(coinType);
//     if (getIndexAndAddressPrefix(coinType) == null) {
//       return "Please specify your coin type";
//     } else {
//       let node = hdkey.fromMasterSeed(mnemonic);
//       let hdKeyy = new bitcore.HDPrivateKey(node.privateExtendedKey);
//       console.log(hdKeyy);
//       var derivationPath = `m/44'/${index}'/0'/0'`;
//       var derivedPrivKey = hdKeyy.derive(derivationPath);
//       var derivedPubKey = hdKeyy.derive(derivationPath).hdPublicKey;
//     }
//   };

//   getPrivateKeyToSign(
//     "btc",
//     "guess tiny intact poet process segment pelican bright assume avocado view lazy",
//     0
//   );
