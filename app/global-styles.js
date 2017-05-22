import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    background-color: #fafafa;
    height: 100%;
    width: 100%;
    margin: 0;
  }

  body {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    display: flex;
    flexDirection: column;
    margin: 0;
  }

  body.fontLoaded {
    font-family: 'Share Tech Mono', monospace;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    margin: 0;
  }

  h1, h2, h3 {
    font-family:'Share Tech Mono', monospace;
    color: #900014;
  }

  p,
  label {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }
`;
