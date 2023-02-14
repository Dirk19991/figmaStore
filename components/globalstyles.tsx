import { createGlobalStyle } from 'styled-components';
import Whyte from '../public/assets/fonts/WhyteRegular.woff2';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Whyte";
  src: local("Whyte"), url('/fonts/Whyte-Regular.ttf') format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: "Whyte";
  src: local("Whyte"), url('/fonts/Whyte-Medium.ttf') format("truetype");
  font-weight: 500;
}

@font-face {
  font-family: "Whyte";
  src: local("Whyte"), url('/fonts/Whyte-Bold.ttf') format("truetype");
  font-weight: 700;
}

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
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
   
  }
`;

export default GlobalStyle;
