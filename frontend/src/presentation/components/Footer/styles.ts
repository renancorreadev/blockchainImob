import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 768px) {
    align-items: center;
    margin: 1rem 0;
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

export const LineWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 2rem;
`;

export const LineMobile = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
  height: 1px;

  margin: 3rem 0;
`;

export const FooterLine = styled.div`
  width: 100%;
  height: 3px;

  background: linear-gradient(
    238deg,
    rgba(35, 36, 0, 0.6012780112044818) 12%,
    rgba(65, 5, 98, 0.8337710084033614) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;
