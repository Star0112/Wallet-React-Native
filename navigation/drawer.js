import * as React from "react";
import { createDrawerNavigator ,DrawerItems} from "react-navigation-drawer";
import LocateATM from "../screens/AtmScreen";
import BackupWallet from "../screens/BackupScreen";
import MainScreen from "../screens/MainScreen";
import MainWallet from "../screens/WalletScreen";
import PayCrypto from "../screens/PaymentScreen";
import BuyCrypto from "../screens/BuyCryptocurrncy";
import UserSettings from "../screens/SettingsScreen";
import LatestNews from "../screens/NewsScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { exitIcon } from "./materialIcon";
import { settingIcon } from "./secondIcons";
import { createStackNavigator } from "react-navigation-stack";

import ReceiveVGW from "../screens/ReceiveVGWScreen";
import SendVGW from "../screens/SendVGWScreen";
import ConfirmTransaction from "../screens/ConfirmTransactionScreen";
import TransactionFailed from "../screens/TransactionFailedScreen";
import TransactionSuccess from "../screens/TransactionSuccessScreen";
import { View, Text,Image } from "react-native";
import WalletDetail from "../screens/WalletDetailScreen";
import ContactsScreen from "../screens/ContactsScreen";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";

const icnProps = {
  color: "white",
  size: 20,
  focused: false
};
const iconProprty = {
  color: "white",
  size: 20,
  focused: false
};
const DashboardLbl = {
  color: "white",
  focused: false
};
///Labels
const DashboardLabel = DashboardLbl => (
  <Text style={{ color: "white" }}>Dashboard</Text>
);
const WalletLabel = DashboardLbl => (
  <Text style={{ color: "white" }}>Cryptocurrency Wallet</Text>
);
const PayLabel = DashboardLbl => (
  <Text style={{ color: "white" }}>Mobile Payment</Text>
);
const BuyLabel = DashboardLbl => (
  <Text style={{ color: "white" }}>Buy Cryptocurrncy</Text>
);

const ATMLabel = DashboardLbl => (
  <Text style={{ color: "white" }}>Find Bitcoin ATM</Text>
);

const NewsLabel = DashboardLbl => (
  <Text style={{ color: "white" }}>Latests News</Text>
);
const ExitLabel = DashboardLbl => (
  <Text style={{ color: "white" }}>Exit Wallet</Text>
);
const backupLabel = DashboardLbl => (
  <Text style={{ color: "white" }}>Backup Wallet</Text>
);
const SettingLabel = DashboardLbl => (
  <Text style={{ color: "white" }}>User Settings</Text>
);
const ContactLabel = DashboardLbl => (
  <Text style={{ color: "white" }}>Contacts</Text>
);
const DashboardIcon = icnProps => <Icon name="home" color="white" size={20} />;
const ContactIcon = icnProps => (
  <Icon name="address-book" color="white" size={20} />
);

const walletIcon = iconProprty => (
  <Icon name="bitcoin" color="white" size={20} />
);
const buyIcon = icnProps => (
  <Icon name="shopping-bag" color="white" size={20} />
);
const atmIcon = icnProps => (
  <Icon name="location-arrow" color="white" size={20} />
);
const payIcon = icnProps => <Icon name="credit-card" color="white" size={20} />;
const newsIcon = icnProps => (
  <Icon name="newspaper-o" color="white" size={20} />
);
const refreshIcon = icnProps => <Icon name="refresh" color="white" size={20} />;
const VGWLogo = icnProps => (
  <View>
    <Image source={require("../assets/images/VegaWallet.png")} />
    <Text>User Name</Text>
  </View>
);

const Stack = createStackNavigator(
  {
    Main: { screen: MainScreen },
    wallet: { screen: MainWallet },
    WalletDetail: { screen: WalletDetail },
    ReceiveVGW: {
      screen: ReceiveVGW
    },
    SendVGW: {
      screen: SendVGW
    },
    ConfirmTransaction: {
      screen: ConfirmTransaction
    },
    TransactionSuccess: {
      screen: TransactionSuccess
    },
    TransactionFailed: {
      screen: TransactionFailed
    },
    NewsDetails: {
      screen: NewsDetailsScreen
    },
    NewsScreen: { screen: LatestNews }
  },
  {
    initialRouteName: "Main",
    stateName: "MainAppNav",
    headerMode: "none",
   
  }
);
const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Stack,
      navigationOptions: {
        drawerIcon: DashboardIcon,
        drawerLabel: DashboardLabel
      }
    },
    Contacts: {
      screen: ContactsScreen,
      navigationOptions: {
        drawerIcon: ContactIcon,
        drawerLabel: ContactLabel
      }
    },
    Walet: {
      screen: MainWallet,
      navigationOptions: {
        drawerLabel: WalletLabel,
        drawerIcon: walletIcon
      }
    },
    Payment: {
      screen: PayCrypto,
      navigationOptions: {
        drawerLabel: PayLabel,
        drawerIcon: payIcon
      }
    },
    BuyCrypto: {
      screen: BuyCrypto,
      navigationOptions: {
        drawerLabel: BuyLabel,
        drawerIcon: buyIcon
      }
    },
    ATM: {
      screen: LocateATM,
      navigationOptions: {
        drawerLabel: ATMLabel,
        drawerIcon: atmIcon
      }
    },
    News: {
      screen: LatestNews,
      navigationOptions: {
        drawerLabel: NewsLabel,
        drawerIcon: newsIcon
      }
    },
    Backup: {
      screen: MainWallet,
      navigationOptions: {
        drawerLabel: backupLabel,
        drawerIcon: refreshIcon
      }
    },
    Exit: {
      screen: MainWallet,
      navigationOptions: {
        drawerLabel: ExitLabel,
        drawerIcon: exitIcon
      }
    }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63",

      iconContainerStyle: {
        opacity: 1
      },
      itemStyle: {
        marginVertical: 20
      }
    },
    drawerBackgroundColor: "#292732",
    
  },
  {
    contentComponent: props => <CustomDrawerContent/>,
    unmountInactiveRoutes: true,
    contentOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "#000",
      inactiveTintColor: "#585c65"
    }
  }
);
const CustomDrawerContent = props => {
  const VGWLogo = require('../assets/images/VegaWalletGreen.png')
  return (
    <DrawerContentScrollView {...props}>
    
      <DrawerItem label="Help" icon={VGWLogo} onPress={() => alert("Link to help")} labelStyle={{
        color:'white',
      }}/>
    </DrawerContentScrollView>
  );
};
MyDrawerNavigator.navigationOptions = { header: null };
export default MyDrawerNavigator;

