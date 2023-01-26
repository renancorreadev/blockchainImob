import styled from "styled-components";

export const InfoMobWrapper = styled.div`
  background: url(/public/effect.svg) no-repeat bottom left;
  opacity: 1;
  width: 100%;
  height: 100%;
  padding: 5rem 0rem;
`;

export const InfoMobContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme["white"]};
`;
