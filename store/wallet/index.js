//this is reducer

import { WALLET_CONSTANTS } from './action-type';
import { walletInitialState } from './store';

export const Wallet = (state = walletInitialState, action) => {
    switch (action.type) {
        case WALLET_CONSTANTS.CREATE_PASSPHRASE:
            return { ...state, passphrase: action.data }
            break;

        case WALLET_CONSTANTS.HIDE_PASSPHRASE:
            return { ...state, textShow: action.data }
            break;   

        case WALLET_CONSTANTS.CHANGE_SEND_COIN_TYPE:
            return { ...state, sendCoin: {...state.sendCoin, senCoinType: action.data}}
            break;

        case WALLET_CONSTANTS.SET_SENDMONEY:
            return { ...state, sendCoin: {...state.sendCoin, sendWallet: action.wallet, sendMoney: action.usd}}
            break;

        case WALLET_CONSTANTS.SET_SEND_ADDRESS:
            return { ...state, sendAddress: action.data }
            break;

        case WALLET_CONSTANTS.COPY_ADDRESS:
            return { ...state, copiedAddress: action.data }
            break;
        case WALLET_CONSTANTS.SET_COIN_NUMBER:
            return { ...state, selCoinNumber: action.data }
            break;

        // case WALLET_CONSTANTS.SET_PRIVATE_PUBLIC_KEY:
        //     // return { ...state,
        //     //     wallets: {
        //     //         ...state.wallets,
        //     //         [0]: { ...state.wallets[0], publicKey: action.puKey, privateKey: action.prKey }
        //     //     }
        //     // }
        //     return {...state,
        //         wallets: state.wallets.map(wallet => {
        //             if (wallet.coinIndex === action.index) {
        //                 return {...wallet, publicKey: action.puKey, privateKey: action.prKey }
        //             };
        //             return wallet;
        //         })
        //     }
        //     //return { ...state, BTC: {...state.BTC,  publicKey: action.puKey, privateKey: action.prKey }}
        //     break;

        default:
           return state;
           break;
    }

}