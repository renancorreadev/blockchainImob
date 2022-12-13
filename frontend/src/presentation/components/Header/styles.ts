import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
  height: 100px;
`

export const NavWrapper = styled.nav`
  display: flex;
  gap: 1.375rem;

  a {
    font-family: "Archivo";
    color: #fff;
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    padding-bottom: 1rem;


    &:hover {
      border-bottom: 3px solid #fff;
      margin-top: 0.3rem;
    }

    &.active {
      border-bottom: 3px solid #989494;
    }
  }
`

export const NavItem = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`

export const Logo = styled.img`
  width: 101px;
  height: 101px;
  margin-left: 20px;
  margin-top: 8px;
`


