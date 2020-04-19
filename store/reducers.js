import { combineReducers } from "redux";
import { NewsModal } from "./newsDetails";
import { Wallet } from "./wallet";
import { coinList } from "./coinsList";
import { Modal } from "./addContact";
import { ManageContacts } from "./manageContacts";
import { ManaginModal } from "./manageModal";
import { EditModal } from "./EditModal";
import { News } from "./FetchNews";
export default combineReducers({
  Wallet,
  coinList,
  Modal,
  ManageContacts,
  ManaginModal,
  EditModal,
  NewsModal,
  News
});