import styled from "styled-components";

export const HamburguerWrapper = styled.div``;

export const HamburguerModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
`;

export const HamburguerUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const HamburguerLi = styled.li`
  font-family: "Audiowide";
  margin: 10px 0;
  list-style: none;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-size: 1.4rem;

  a {
    text-decoration: none;
  }

  svg path {
    fill: #000;
  }
`;

export const MenuItemText = styled.span``;
