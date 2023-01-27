import styled from "styled-components";

export const InfoMobWrapper = styled.div`
  opacity: 1;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
