import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Audiowide";
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  font-family: "Poppins";
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;

  padding: 0 6rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const SeparatorWrapper = styled.div``;

interface SeparatorLineProps {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}
export const SeparatorLine = styled.div<SeparatorLineProps>`
  width: 100%;
  height: 3px;
  margin-top: ${(props) => props.marginTop}rem;
  margin-bottom: ${(props) => props.marginBottom}rem;
  margin-left: ${(props) => props.marginLeft}rem;
  margin-right: ${(props) => props.marginRight}rem;

  background: linear-gradient(
    238deg,
    rgba(35, 36, 0, 0.6012780112044818) 12%,
    rgba(65, 5, 98, 0.8337710084033614) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;
