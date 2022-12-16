/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RenderOptions, render } from "@testing-library/react";
import { default as userEvent } from "@testing-library/user-event";
import * as React from "react";

import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@presentation/styles/themes/default";
import { GlobalStyle } from "@presentation/styles/global";

import {
  CreateClientConfig,
  WagmiConfig,
  WagmiConfigProps,
  createClient,
  defaultChains,
} from "wagmi";
import { MockConnector } from "wagmi/connectors/mock";

import { WalletSigner, getProvider, getSigners } from "./utils/mockProvider";

type SetupClient = Partial<CreateClientConfig> & { signer?: WalletSigner };
export function setupClient({
  signer = getSigners()[0],
  ...config
}: SetupClient = {}) {
  return createClient({
    //@ts-ignore
    connectors: [new MockConnector({ options: { signer } })],
    provider: ({ chainId }) => getProvider({ chainId, chains: defaultChains }),
    ...config,
  });
}

type ProvidersProps = {
  children: React.ReactNode;
  client?: WagmiConfigProps["client"];
};
export function Providers({
  children,
  client = setupClient(),
}: ProvidersProps) {
  return (
    <WagmiConfig client={client}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>{children}</BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </WagmiConfig>
  );
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };

export type UserEvent = ReturnType<typeof userEvent.setup>;
export { default as userEvent } from "@testing-library/user-event";

export {
  addressRegex,
  getSigners,
  getProvider,
  getWebSocketProvider,
} from "./utils/mockProvider";
