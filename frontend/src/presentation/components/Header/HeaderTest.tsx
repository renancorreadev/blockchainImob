import { HeaderWrapper, NavWrapper, NavItem, Logo } from "./styles";
import { NavLink } from "react-router-dom";
import logoFile from "@assets/icons/Logo.svg";

import { ConsultIcon } from "./icons/ConsultIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { FillsIcon } from "./icons/FillsIcon";
import { RegisterIcon } from "./icons/RegisterIcon";
import { SellerIcon } from "./icons/SellersIcon";

export const HeaderTest: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo src={logoFile} alt="Logo" />

      <NavWrapper>
        <NavLink to="/" title="Home">
          <NavItem>
            <HomeIcon />
            <span>HOME</span>
          </NavItem>
        </NavLink>
        <NavLink to="/register" title="Registro de Imoveis">
          <NavItem>
            <RegisterIcon />
            <span>REGISTRO</span>
          </NavItem>
        </NavLink>
        <NavLink to="/query" title="Consulta de Imoveis">
          <NavItem>
            <ConsultIcon />
            <span>CONSULTA</span>
          </NavItem>
        </NavLink>
        <NavLink to="/sale-and-assignment" title="Vendas e Cessão">
          <NavItem>
            <SellerIcon />
            <span>VENDA E CESSÃO</span>
          </NavItem>
        </NavLink>
        <NavLink to="/fiis" title="FIIS">
          <NavItem>
            <FillsIcon />
            <span>FIIS</span>
          </NavItem>
        </NavLink>
      </NavWrapper>
    </HeaderWrapper>
  );
};
