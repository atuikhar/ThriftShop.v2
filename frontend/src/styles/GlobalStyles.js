import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 1.6rem;
    background: #41295a;
    background: -webkit-linear-gradient(to right, #2F0743, #41295a);
    background: linear-gradient(to right, #2F0743, #41295a);
    cursor: default;
  }
  
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`

export default GlobalStyles
