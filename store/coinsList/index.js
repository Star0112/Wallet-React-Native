import { COIN_CONSTANTS } from "./action-type";
import { initialState } from "./initialState"

export const coinList = (state = initialState, action) => {
  switch (action.type) {
    case COIN_CONSTANTS.SET_PRIVATE_PUBLIC_KEY:
      return(state.map((coin, i) => {
        // if (coin.index === action.index) {
          return {...coin, privateKey: action.prKey[i], address: action.addr[i] }
        // };
        // return coin;
      }));
      break;
    default:
      return state;
      break;
  }
};
