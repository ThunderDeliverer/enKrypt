import { CoingeckoPlatform, NetworkNames } from "@enkryptcom/types";
import { EvmNetwork, EvmNetworkOptions } from "../types/evm-network";
import assetsInfoHandler from "@/providers/ethereum/libs/assets-handlers/assetinfo-mew";
import mewNFTHandler from "@/libs/nft-handlers/mew";
import { EtherscanActivity } from "../libs/activity-handlers";
import wrapActivityHandler from "@/libs/activity-state/wrap-activity-handler";

const fraxtalOptions: EvmNetworkOptions = {
  name: NetworkNames.Fraxtal,
  name_long: "Fraxtal",
  homePage: "https://www.frax.com/",
  blockExplorerTX: "https://fraxscan.com/tx/[[txHash]]",
  blockExplorerAddr: "https://fraxscan.com/address/[[address]]",
  chainID: "0xfc",
  isTestNetwork: false,
  currencyName: "frxETH",
  currencyNameLong: "Frax Ether",
  node: "https://rpc.frax.com",
  icon: require("./icons/fraxtal.svg"),
  coingeckoID: "fraxtal",
  coingeckoPlatform: CoingeckoPlatform.Fraxtal,
  NFTHandler: mewNFTHandler,
  assetsInfoHandler,
  activityHandler: wrapActivityHandler(EtherscanActivity),
};

const fraxtal = new EvmNetwork(fraxtalOptions);

export default fraxtal;