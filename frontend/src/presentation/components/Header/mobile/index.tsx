import React from "react";
import { HeaderMobileWrapper, LogoMobile } from "./styles";
import { HamburgerMenu } from "./hamburguer";

/** Icons */

import { ConsultIcon } from "../icons/ConsultIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { RegisterIcon } from "../icons/RegisterIcon";
import { SellerIcon } from "../icons/SellersIcon";

import logoFile from "@assets/icons/Logo.svg";

export const HeaderMobile: React.FC = () => {
  return (
    <HeaderMobileWrapper>
      <LogoMobile src={logoFile} alt="Logo" />
      <HamburgerMenu
        menuItems={[
          {
            item: "HOME",
            link: "/",
            icon: <HomeIcon />,
          },
          {
            item: "REGISTRO",
            link: "/register",
            icon: <RegisterIcon />,
          },
          {
            item: "CONSULTA",
            link: "/query",
            icon: <ConsultIcon />,
          },
          {
            item: "VENDA E CESSÃO",
            link: "/sale-and-assignment",
            icon: <SellerIcon />,
          },
        ]}
      />
    </HeaderMobileWrapper>
  );
};
