import React from "react";
import {
  FooterInc,
  FooterLink,
  FooterLinkTitle,
  FooterLinkWrapper,
  FooterSection,
  FooterSectionEnd,
  FooterWrapper,
  LogoAnchory,
  LogoFile,
  LogoWrapper,
} from "./styles";

import Logo from "@assets/omnes.png";
import Celo from "@assets/celo.png";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <LogoWrapper>
          <LogoAnchory href="/">
            <LogoFile src={Logo} height={130} width={"auto"} alt="Logo image" />
          </LogoAnchory>
        </LogoWrapper>

        <FooterLinkWrapper>
          <FooterLinkTitle>Informação Hackatoon</FooterLinkTitle>
          <FooterLink href="https://www.blocknews.com.br/governos/divulgados-os-vencedores-do-hackathon-web3-tokenizacao-do-patrimonio-da-uniao/">
            <p>BlockNews</p>
          </FooterLink>

          <FooterLink href="https://exame-com.cdn.ampproject.org/c/s/exame.com/future-of-money/desafio-do-governo-para-tokenizar-patrimonio-da-uniao-anuncia-vencedores/amp/">
            <p>Exame</p>
          </FooterLink>

          <FooterLink href="https://www.enap.gov.br/pt/acontece/noticias/desafio-hackathon-web3-tokenizacao-do-patrimonio-da-uniao-anuncia-vencedores">
            <p>Enap</p>
          </FooterLink>
        </FooterLinkWrapper>

        <FooterLinkWrapper>
          <FooterLinkTitle>Sobre o Projeto</FooterLinkTitle>
          <FooterLink href="/content-policy/">
            <p>Devesenvolvimento</p>
          </FooterLink>

          <FooterLink href="https://muitainformacao.com.br/post/62953-conheca-o-futuro-da-tokenizacao-no-mercado-imobiliario">
            <p>Tokenização imobiliária</p>
          </FooterLink>

          <FooterLink href="/">
            <p>BlockImob</p>
          </FooterLink>
        </FooterLinkWrapper>

        <FooterLinkWrapper>
          <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
          <FooterLink href="https://www.instagram.com/omnesblockchain/">
            <p>Instagram</p>
          </FooterLink>

          <FooterLink href="https://www.linkedin.com/company/omnes-blockchain-tech/">
            <p>Linkedin</p>
          </FooterLink>

          <FooterLink href="https://www.omnes.skynance.net">
            <p>WebSite</p>
          </FooterLink>
        </FooterLinkWrapper>

        <LogoWrapper>
          <LogoAnchory href="/">
            <LogoFile src={Celo} height={130} width={"auto"} alt="Logo image" />
            <span>Celo Network</span>
          </LogoAnchory>
        </LogoWrapper>
      </FooterSection>

      <FooterSectionEnd>
        <FooterInc>© 2022 Omnes BlockChain Tech, Inc. - Versão 0.001</FooterInc>
      </FooterSectionEnd>
    </FooterWrapper>
  );
};
