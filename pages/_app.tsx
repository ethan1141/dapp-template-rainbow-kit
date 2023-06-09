import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import Head from "next/head";
import { links } from "../metadata";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
  bsc,
  zkSync,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import BNavbar from "../components/Navber";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { ethers } from "ethers";
export const web3 = new ethers.providers.JsonRpcProvider(
  "http://localhost:8545"
);
// Contract deployment: Detasker
// Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
// Transaction:         0x1bc900e6f3960feddfb4c3bbc180580c08675c9df2f4aeb1e20153f9f872b97b
// From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
// Value:               0 ETH
// Gas used:            5477774 of 5477774
// Block #1:            0x9bf8d93812930b9dd11e74039600e651fab87724271c73c2479a81906b2779f8

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    bsc,
    zkSync,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Head>
          <title>Dapp template</title>
          <meta
            content="Generated by @rainbow-me/create-rainbowkit"
            name="description"
          />
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <header>
          <BNavbar links={links} />
        </header>
        <Container>
          <Component {...pageProps} />
          <Footer />
        </Container>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
