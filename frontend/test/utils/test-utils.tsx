/* eslint-disable @typescript-eslint/no-explicit-any */
// test utils file

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@presentation/styles/themes/default";
import { GlobalStyle } from "@presentation/styles/global";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>{children}</BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export const renderWithRouter = (ui: any, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllTheProviders }),
  };
};
