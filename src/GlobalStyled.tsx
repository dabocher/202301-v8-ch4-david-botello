import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    padding: 0;
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: #181646;
  }

ol, ul {
  list-style: none;
  padding: 0;
}

button {
  font-family: inherit;
  border: none;
  background: transparent;

}

`;

export default GlobalStyled;
