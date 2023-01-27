import styled from "styled-components";

interface InfoMobProp {
  backgroundDesktop?: string;
  backgroundMobile?: string;
}

export const InfoMobWrapper = styled.div<InfoMobProp>`
  opacity: 1;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    background: ${(props) => props.backgroundDesktop};
    background-size: 100% 100%;
    background-position-x: -500px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${(props) => props.backgroundMobile};
    background-size: 100% 100%;
    background-position-x: 0px;
  }
`;

export const InfoMobContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme["white"]};

  padding: 5rem 0rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
