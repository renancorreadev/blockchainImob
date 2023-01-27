import styled from "styled-components";

export const HeaderMobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoMobile = styled.img`
  width: 110px;
  height: auto;
  padding: 0.4rem;
`;

export const GhostDiv = styled.div``;

export const HamburguerWrapper = styled.div``;
