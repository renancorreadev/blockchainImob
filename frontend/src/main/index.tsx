import ReactDOM from 'react-dom/client'
import App from './App'
import { WagmiConfig } from 'wagmi';
import RainbowKitProvider, {chains, wagmiClient} from '@infra/web3Injector/'
import '@rainbow-me/rainbowkit/styles.css';

import React from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)
