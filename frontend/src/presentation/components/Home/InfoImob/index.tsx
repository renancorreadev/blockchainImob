import { Card } from "@presentation/components/Card";
import React, { useState, useEffect } from "react";
import { InfoMobContainer, InfoMobWrapper } from "./styles";
import { useSpring, animated } from "react-spring";

import Token from "@assets/imob/imob.png";
import TokenB from "@assets/imob/imob2.png";

interface InfoMobProps {
  variation: VariationPropType;
}

type VariationPropType = "contractInfo" | "imobInfo";

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
        <InfoMobContainer>
          <animated.div
            style={{
              transform: springRotation.interpolate((r) => `rotateY(${r}deg)`),
            }}
          >
            <Card
              cardType="image"
              imageSrc={imageSrc}
              imageWidth="858"
              imageHeight="auto"
            />
          </animated.div>

          <Card
            cardType="text"
            title="BlockImob"
            subtitle="O Futuro do setor imobiliário"
            text="A BlockImob é uma plataforma desenvolvido para gerenciar imóveis
            através de tokens não fungíveis (NFTs). O contrato permite que os
            usuários mintam novos tokens, representando imóveis únicos, e
            atribuam informações específicas sobre esses imóveis, como o
            endereço, bairro e número de registro. Ele também permite a
            atualização de informações sobre os imóveis e a queima (remoção) de
            tokens existentes. Além disso, o contrato possui funções de
            permissão, permitindo que os administradores definam quais endereços
            podem interagir com o contrato e realizar ações como mintar e
            queimar tokens. Ele também possui funcionalidades para atualizar
            informações sobre os negócios imobiliários relacionados a cada token
            e para recuperar informações sobre tokens específicos através de
            consultas baseadas em bairro e número de registro."
          />
        </InfoMobContainer>
      )}
    </InfoMobWrapper>
  );
};
