import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 6rem;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
export const InfoWrapper = styled.div`
  margin-top: 170px;
  margin-left: 38px;
  width: 30%;
  height: 680px;
  display: block;

  @media (max-width: 720px) {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
`;
export const ImageWrapper = styled.div`
  width: 70%;
  margin-top: 33px;
`;

export const Title = styled.h1`
  font-family: "Audiowide";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 76px;

  color: #ffffff;
`;

export const TextContent = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  color: #ffffff;
  margin-top: 0.625rem;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 220px;
  height: 48px;
  margin-top: 1.25rem;

  background: rgba(0, 0, 0, 0.12);
  border: 1px solid #ffffff;
  border-radius: 34px;

  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 19.4677px;
  line-height: 21px;
  text-align: center;

  color: #ffffff;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: rgb(174 14 14 / 12%);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  top: 44px;
  bottom: 0;
`;

export const LineWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  position: relative;

  bottom: 3rem;
`;
export const Line = styled.div`
  width: 100%;
  height: 2px;
  display: flex;

  background: rgba(255, 255, 265, 0.6);
`;
