import React from "react";
import { Subtitle, Text, Title } from "../Calligraphy";
import {
  CardContainer,
  CardImage,
  CardImageContainer,
  CardTextContainer,
  CardWrapper,
} from "./styles";

interface CardPropsType {
  cardType: "image" | "text";
  title?: string;
  subtitle?: string;
  text?: string;
  imageSrc?: string;
  imageWidth?: number | string | undefined;
  imageHeight?: number | string | undefined;
  alt?: string;
}

export const Card: React.FC<CardPropsType> = ({
  cardType,
  title,
  subtitle,
  imageSrc,
  imageWidth,
  imageHeight,
  text,
  alt,
}) => {
  return (
    <CardWrapper>
      <CardContainer>
        {cardType === "image" && (
          <CardImageContainer>
            <CardImage
              src={imageSrc}
              alt={alt}
              width={imageWidth}
              height={imageHeight}
            />
          </CardImageContainer>
        )}

        {cardType === "text" && (
          <CardTextContainer>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{text}</Text>
          </CardTextContainer>
        )}
      </CardContainer>
    </CardWrapper>
  );
};
