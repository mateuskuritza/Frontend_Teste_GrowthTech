import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  box-sizing: border-box;
  transition: all ease .2s;
  margin: 0;
  padding: 0;
}

strong {
    font-weight: 700;
}

a {
    text-decoration: none;
    color: inherit;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: ${props => props.theme.colors.background_secondary};
}

`;
