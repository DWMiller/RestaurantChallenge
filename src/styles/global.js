import { createGlobalStyle } from 'styled-components';

import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing:inherit;
    font-family: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: ${props => props.theme.typeScale.base};
    line-height: 1.5;
    color: ${props => props.theme.palette['warm-grey-900']}
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1;
    font-size:  ${props => props.theme.typeScale.large};
  }

  a {
    text-decoration:none;
    color: ${props => props.theme.palette['warm-grey-800']}
  }


  svg {
    width: 48px;
 
    .primary {
      fill: ${props => props.theme.palette['yellow-vivid-600']}
    }

    .secondary {
      fill: ${props => props.theme.palette['yellow-vivid-900']}
    }
  }



`;

export default GlobalStyle;
