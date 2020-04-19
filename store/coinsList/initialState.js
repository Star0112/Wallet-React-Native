import {
  BtcIcon,
  BtcCashIcon,
  LtcIcon,
  DogeIcon,
  DashIcon,
  DigiByteIcon,
  DaiIcon,
  NeoIcon,
  EthIcon,
  EthClassicIcon,
  VergeIcon,
  PotcoinIcon,
  StellarIcon,
  MoneroIcon,
  ZcashIcon,
  CardanoIcon,
  RavenIcon,
  EosIcon,
  TronIcon,
  VechainIcon,
  MakerIcon,
  VegaWalletIcon,
  BasicAttentIcon,
  ZeroIcon,
  RippleIcon
} from "./coinImage";

export const initialState = [
  {
    index: 2201,
    coinName: "VGW",
    coinDisplayName: "VegaWallet Token ",
    checkETH: true,
    hexcode: "0xff",
    logoUrl: VegaWalletIcon,
    address: "",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 1052.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 120.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 123.13,
      usdBalance: 1034.13
    }
  },

  {
    index: 0,
    coinName: "BTC",
    coinDisplayName: "Bitcoin",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: BtcIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 1.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+0.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 2.13,
      usdBalance: 103.13
    }
  },

  {
    index: 145,
    coinName: "BCH",
    coinDisplayName: "Bitcoin Cash",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: BtcCashIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 5.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 5.52,
      coinRate: "+0.53",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 5.13,
      usdBalance: 134.13
    }
  },

  {
    index: 144,
    coinName: "XRP",
    coinDisplayName: "Ripple",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: RippleIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 10.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 7.12,
      coinRate: "-1.93",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 103.13,
      usdBalance: 34.13
    }
  },

  {
    index: 2,
    coinName: "LTC",
    coinDisplayName: "Litecoin",
    checkETH: false,
    hexcode: "0x30",
    logoUrl: LtcIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 152.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 34.13,
      usdBalance: 234.13
    }
  },

  {
    index: 3,
    coinName: "DOGE",
    coinDisplayName: "Dogecoin",
    checkETH: false,
    hexcode: "0x1e",
    logoUrl: DogeIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 452.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 434.13,
      usdBalance: 534.13
    }
  },

  {
    index: 5,
    coinName: "DASH",
    coinDisplayName: "Dash",
    checkETH: false,
    hexcode: "0x4c",
    logoUrl: DashIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 1652.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 734.13,
      usdBalance: 834.13
    }
  },

  {
    index: 20,
    coinName: "DGB",
    coinDisplayName: "DigiByte",
    checkETH: false,
    hexcode: "0x1e",
    logoUrl: DigiByteIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 92.1,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 23.13,
      usdBalance: 134.13
    }
  },

  {
    index: 60,
    coinName: "ETH",
    coinDisplayName: "Ether",
    checkETH: true,
    hexcode: "0xff",
    logoUrl: EthIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 2.13,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 0.13,
      usdBalance: 4.13
    }
  },

  {
    index: 61,
    coinName: "ETC",
    coinDisplayName: "Ether Classic",
    checkETH: true,
    hexcode: "0xff",
    logoUrl: EthClassicIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 6.6,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 6.6,
      usdBalance: 66.66
    }
  },

  {
    index: 77,
    coinName: "XVG",
    coinDisplayName: "Verge",
    checkETH: false,
    hexcode: "0x1e",
    logoUrl: VergeIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 77.77,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 77.13,
      usdBalance: 88.13
    }
  },

  {
    index: 81,
    coinName: "POT",
    coinDisplayName: "Potcoin",
    checkETH: false,
    hexcode: "0x37",
    logoUrl: PotcoinIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 85.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 37.13,
      usdBalance: 96.13
    }
  },

  {
    index: 128,
    coinName: "XMR",
    coinDisplayName: "Monero",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: MoneroIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 93.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 175.13,
      usdBalance: 95.13
    }
  },

  {
    index: 133,
    coinName: "ZEC",
    coinDisplayName: "Zcash",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: ZcashIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 234.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 95.13,
      usdBalance: 245.13
    }
  },

  {
    index: 148,
    coinName: "XLM",
    coinDisplayName: "Stellar Lumens",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: StellarIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 27.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 57.34,
      usdBalance: 85.53
    }
  },

  {
    index: 175,
    coinName: "RVN",
    coinDisplayName: "Ravencoin",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: RavenIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 196.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 96.53,
      usdBalance: 83.63
    }
  },

  {
    index: 194,
    coinName: "EOS",
    coinDisplayName: "EOS",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: EosIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 564.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 84.35,
      usdBalance: 234.6
    }
  },

  {
    index: 195,
    coinName: "TRX",
    coinDisplayName: "Tron",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: TronIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 383.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 568.35,
      usdBalance: 24.13
    }
  },

  {
    index: 818,
    coinName: "VET",
    coinDisplayName: "VeChain Token",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: VechainIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 957.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 234.13,
      usdBalance: 9768.13
    }
  },

  {
    index: 888,
    coinName: "NEO",
    coinDisplayName: "NEO",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: NeoIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 123.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 123.13,
      usdBalance: 543.13
    }
  },

  {
    index: 1815,
    coinName: "ADA",
    coinDisplayName: "Cardano",
    checkETH: false,
    hexcode: "0x00",
    logoUrl: CardanoIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 976.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 96.56,
      usdBalance: 45.13
    }
  },

  {
    index: 1816,
    coinName: "BAT",
    coinDisplayName: "Basic Attention Token",
    checkETH: true,
    hexcode: "0xff",
    logoUrl: BasicAttentIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 234.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 88.13,
      usdBalance: 111.13
    }
  },

  {
    index: 1817,
    coinName: "ZRX",
    coinDisplayName: "0x",
    checkETH: true,
    hexcode: "0xff",
    logoUrl: ZeroIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 978.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 868.13,
      usdBalance: 10434.13
    }
  },

  {
    index: 1818,
    coinName: "MKR",
    coinDisplayName: "Maker",
    checkETH: true,
    hexcode: "0xff",
    logoUrl: MakerIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 111.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 777.13,
      usdBalance: 775.13
    }
  },

  {
    index: 1819,
    coinName: "DAI",
    coinDisplayName: "DAI",
    checkETH: true,
    hexcode: "0xff",
    logoUrl: DaiIcon,
    address: "0x00",
    privateKey: "",
    balance: "",
    coinPriceinUSD: "",
    coinPriceinBTC: "",
    walletTokeAmount: 444.14,
    transactionFee: 0.000002,
    coinInfo: {
      coinValue: 0.12,
      coinRate: "+1.03",
      data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      date: ["Jun", "Jul", "Aug", "Sep", "Oct"]
    },

    transactionSuccess: true,

    transactionHistory: {
      type: "Received",
      price: "4,012",
      date: "Jan 20, 2020 3:33pm"
    },

    coinBalance: {
      balance: 555.13,
      usdBalance: 666.13
    }
  }
];
