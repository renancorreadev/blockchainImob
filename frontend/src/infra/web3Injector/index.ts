import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

export const { chains, provider, webSocketProvider } = configureChains(
  [Alfajores, Celo],
  [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
);

export const { connectors } = getDefaultWallets({
  appName: "OmnesBlockchain App",
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export default RainbowKitProvider;
