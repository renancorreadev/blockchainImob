import React from "react";
import { HeaderDesktop } from "./desktop";
import { HeaderMobile } from "./mobile";

export const Header: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderDesktop />
      <HeaderMobile />
    </React.Fragment>
  );
};
