import {HeaderWrapper, NavWrapper, NavItem, Logo} from './styles'
import { NavLink } from 'react-router-dom'
import logoFile from '@assets/icons/Logo.svg'

import {
  ConsultIcon,
  HomeIcon,
  FillsIcon,
  RegisterIcon,
  SellerIcon,
} from './icons'

 export const Header: React.FC = () => {
  return (
      <HeaderWrapper>
        <Logo src={logoFile}  alt="Logo"/>

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

        <div></div>

      </HeaderWrapper>
  )
}


