import { Card } from "@presentation/components/Card";
import React, { useState, useEffect } from "react";
import { InfoMobContainer, InfoMobWrapper } from "./styles";
import { useSpring, animated } from "react-spring";

import Token from "@assets/imob/imob.png";
import TokenB from "@assets/imob/imob2.png";
import Note from "@assets/imob/note.png";

interface InfoMobProps {
  variation: VariationPropType;
}

type VariationPropType = "govinfo" | "imobInfo";

export const InfoMob: React.FC<InfoMobProps> = ({ variation }) => {
  const [rotation, setRotation] = useState(0);
  const [imageSrc, setImageSrc] = useState(Token);
  const { rotation: springRotation } = useSpring({
    rotation,
    config: { mass: 2, tension: 100, friction: 80 },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation(rotation + 60);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [rotation]);

  useEffect(() => {
    if (rotation >= 160) {
      setImageSrc(imageSrc === Token ? TokenB : Token);
      setRotation(0);
    }
  }, [rotation, imageSrc]);

  return (
    <InfoMobWrapper>
      {variation === "imobInfo" && (
        <InfoMobContainer
          style={{
            background: "url(/effect_reverse.png) no-repeat bottom rigth",
          }}
        >
          <animated.div
            style={{
              transform: springRotation.interpolate((r) => `rotateY(${r}deg)`),
            }}
          >
            <Card cardType="image" imageSrc={imageSrc} imageHeight="auto" />
          </animated.div>

          <Card
            cardType="text"
            title="BlockImob"
            subtitle="O Futuro do setor imobiliário"
            text="A BlockImob é uma plataforma desenvolvido para gerenciar imóveis através de tokens não fungíveis (NFTs).

            O contrato permite que os usuários mintam novos tokens, representando imóveis únicos, e atribuam informações específicas sobre esses imóveis, como o endereço, bairro e número de registro.

            Ele também permite a atualização de informações sobre os imóveis e a queima (remoção) de tokens existentes. Além disso, o contrato possui funções de permissão, permitindo que os administradores definam quais endereços podem interagir com o contrato e realizar ações como mintar e queimar tokens. Ele também possui funcionalidades para atualizar informações sobre os negócios imobiliários relacionados a cada token e para recuperar informações sobre tokens específicos através de consultas baseadas em bairro e número de registro."
          />
        </InfoMobContainer>
      )}

      {variation === "govinfo" && (
        <InfoMobContainer
          style={{
            background: "url(/effect5.svg) no-repeat top right ",
            width: "100%",
            height: "100%",
          }}
        >
          <Card
            cardType="text"
            title="Governança e controle de registros"
            subtitle="O Futuro do setor imobiliário"
            text="A governança é uma parte crítica de qualquer sistema descentralizado, incluindo contratos inteligentes. Ela é responsável por garantir que as regras e procedimentos estabelecidos sejam seguidos e que as decisões sejam tomadas de forma justa e transparente.

          Uma das principais funcionalidades do contrato de governança é a verificação de mapas rurais. Ele possui uma variável chamada 'mapRegular' que armazena o mapa rural correto e é comparado com o mapa inserido pelos oráculos. Se o mapa inserido for igual ao mapRegular, o imóvel rural é considerado regular, caso contrário, é considerado irregular.

          O objetivo do contrato do oráculo é permitir que entidades autorizadas verifiquem a regularidade de imóveis rurais e outros imóveis, através da comparação com mapas oficiais e outros metadados. Ele também é projetado para garantir que somente endereços governamentais tenham permissão para modificar essas informações."
          />

          <Card
            cardType="image"
            imageSrc={Note}
            imageWidth="560px"
            imageHeight="auto"
          />
        </InfoMobContainer>
      )}
    </InfoMobWrapper>
  );
  <p></p>;
};
