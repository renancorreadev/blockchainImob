import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
  }

  body{
    font-family: "Poppins";
    font-weight: 400;
    background: ${(props) => props.theme.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0;
    line-height: normal;
    height: 100%;
  }

  .mySwiper{
    display: flex;
    height: 680px;
    flex-direction: row-reverse;
  }
  .swiper-wrapper {
    height: 100%;
    width: unset;
  }

 .swiper-pagination-vertical.swiper-pagination-bullets, .swiper-vertical>.swiper-pagination-bullets {
    position: relative;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-right: 38px;
    width: unset;
    right: 0 !important;
  }

  .swiper-pagination-bullet {
    background: #FFFFFF;
    opacity: 0.4;
  }

  .swiper-pagination-bullet-active {
    background: #FFFFFF !important;
    opacity: 1 !important;
  }

  .swiper-slide{
    height: 680px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .ReactModal__Overlay{
    background-color: rgb(255 255 255 / 95%) !important;
    border-radius: 40px;
    height: 90%;
    margin: 3rem;
    width: 50%;
    left: 22% !important;
    top: 100px !important;
    height: 730px;
  }

  .ReactModal__Content{
    background-color: transparent !important;
    border: none !important;
    overflow: unset !important;
  }
:root {
  /* fonts */
  --font-font-awesome-6-pro: "Font Awesome 6 Pro";
  --font-archivo: Archivo;
  --font-poppins: Poppins;
  --font-audiowide: Audiowide;

  /* font sizes */
  --font-size-sm: 19.28px;
  --font-size-base: 19.47px;

  /* Colors */
  --color-white: #fff;
  --color-gray-100: rgba(0, 0, 0, 0.12);

  /* border radiuses */
  --br-md: 34px;
}


`;
