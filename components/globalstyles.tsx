import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family:"Whyte";
    font-size: 12px;
      --black: #000;
      --white: #fff;
      --red: #f24e1e;
      --green: #0fa958;
      --yellow: #ffc700;
      --purple: #c7b9ff;
  }

  a {
    all: unset
  }

  button {
    all: unset
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  font-display: optional
`;

export default GlobalStyle;
