import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html{
    @media (max-width: 1080px){
        font-size: 93.75%; //15px
    }

    @media (max-width: 720px){
        font-size: 87.5%; //14px
    }
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
  }

  body{
    background-color: var(--white);
  }

  h1, h2, h3, h4, h5, h6, strong, small{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  :root{
    --blue: #0096DB;
    --darkblue: #0B6AA4;
    --gray-900: #181b23;
    --gray-700: #353646;
    --gray-500: #616480;
    --gray-300: #9699B0;
    --gray-100:#E5E4E5;
    --gray-50: #F1F1F1;
    --white: #ffffff
  }

`
