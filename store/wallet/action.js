import { WALLET_CONSTANTS } from './action-type';
import bip39 from 'react-native-bip39';
import AsyncStorage from '@react-native-community/async-storage'

export const generatePassPhrase = () => {
    return async (dispatch) => {
        let passPhrase = await bip39.generateMnemonic();
        AsyncStorage.setItem('my-passPhrase', passPhrase);
        dispatch(createPassPhrase(passPhrase))
    }
}

export const createPassPhrase = (data)=>{
    return {
        type: WALLET_CONSTANTS.CREATE_PASSPHRASE,
        data: data
    }
}

export const setCoinNumber = (data)=>{
    return {
        type: WALLET_CONSTANTS.SET_COIN_NUMBER,
        data: data
    }
}

// export const generateKeys = (mnemonic, indexArray) => {
//     return async (dispatch) => {
//         let seed = bip39.mnemonicToSeed("gentle mutual speak consider mandate kingdom cash explain soul exile cabin squeeze");
//         let root = hdkey.fromMasterSeed(seed);

//         indexArray.map((index, i) => {
//             let addrnode = root.derive(`m/44'/${index}'/0'/0/0`);
//             let publicKey = encryptDecrypt.encrypt(addrnode.publicKey.toString('hex'), 'This is secret for publicKey.');
//             let privateKey = encryptDecrypt.encrypt(addrnode.privateKey.toString('hex'), 'This is secret for privateKey.');
//             dispatch(setKeys(index, publicKey, privateKey));
//         })
//     }
// }

// const setKeys = (index, puKey, prKey)=>{
//     return {
//         type: WALLET_CONSTANTS.SET_PRIVATE_PUBLIC_KEY,
//         index: index,
//         puKey: puKey,
//         prKey: prKey
//     }
// }

export const setSendCoinType = ( data ) => {
    return {
        type: WALLET_CONSTANTS.CHANGE_SEND_COIN_TYPE,
        data: data
    }
}

export const setSendMoney = ( wallet, usd ) => {
    return {
        type: WALLET_CONSTANTS.SET_SENDMONEY,
        wallet: wallet,
        usd: usd
    }
}

export const setSendAddress = ( data ) => {
    return {
        type: WALLET_CONSTANTS.SET_SEND_ADDRESS,
        data: data
    }
}

