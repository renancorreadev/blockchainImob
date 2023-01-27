import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {
  HamburguerWrapper,
  HamburguerModal,
  CloseButton,
  HamburguerUl,
  HamburguerLi,
  MenuItemText,
} from "./styles";
import { WalletConnectWrapper } from "../../desktop/styles";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NavLink } from "react-router-dom";

interface HamburguerPropsType {
  menuItems: menuItem[];
}

type menuItem = {
  item: string;
  link: string;
  icon: JSX.Element;
};

export const HamburgerMenu: React.FC<HamburguerPropsType> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <HamburguerWrapper>
      <GiHamburgerMenu
        color="#fff"
        size={35}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <HamburguerModal>
          <CloseButton onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineClose size={30} />
          </CloseButton>

          <HamburguerUl>
            {menuItems.map((item, index) => (
              <HamburguerLi key={index}>
                {item.icon}
                <MenuItemText>
                  <NavLink onClick={handleNavLinkClick} to={item.link}>
                    {item.item}
                  </NavLink>
                </MenuItemText>
              </HamburguerLi>
            ))}
          </HamburguerUl>

          <WalletConnectWrapper
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "6rem",
            }}
          >
            <ConnectButton accountStatus={"address"} showBalance={true} />
          </WalletConnectWrapper>
        </HamburguerModal>
      )}
    </HamburguerWrapper>
  );
};
