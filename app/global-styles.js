import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    background-color: #fafafa;
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    display: flex;
    flexDirection: column;
    margin: 0;
  }

  body.fontLoaded {
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  h1, h2, h3, {
    font-family: Rokkit, Garamond, Georgia, serif; 
  }

  p,
  label {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }
`;
