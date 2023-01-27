import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 2rem;
`;

export const FooterSectionEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const LogoWrapper = styled.div``;

export const FooterInc = styled.p`
  color: #fff;
`;
export const LogoAnchory = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: #fff;
  }
`;

export const LogoFile = styled.img``;

export const FooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    text-align: start;
  }
`;
export const FooterLinkTitle = styled.h3`
  color: #fff;
  display: flex;
  align-items: start;
`;
export const FooterLink = styled.a``;
