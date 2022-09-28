import { createGlobalStyle } from "styled-components";
import Normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${Normalize};
 
  * {
  margin: 0;
  padding: 0;
}
html,
body,
#root,
.App {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  margin: 0;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}


`;

export default GlobalStyle;
