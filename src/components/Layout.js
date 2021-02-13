import React from 'react';
import App from "./App"
import "./Layout.css"
import styled, {createGlobalStyle} from 'styled-components'
import { scrollBarWidth } from './Constants';
require(`katex/dist/katex.min.css`)
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', Arial;
  }
  .slide-content .scroller {
    width: 1024px;
  }
  ::-webkit-scrollbar {
      width: ${scrollBarWidth};
  }
  ::-webkit-scrollbar-thumb {
      background: #0e5c4f;
  }
  ::-webkit-scrollbar-track {
      background: #09293A;
  }
`;


const AppHeader = styled.header`
  background-color: #09293A;
  height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppStyle = styled.div`
  text-align: center;
`
const Layout = ({ location, children }) => {
  return (
    <>      
      <GlobalStyles/>
      <AppHeader>
        <AppStyle>
          <App location={location}>{children}</App>
        </AppStyle>
      </AppHeader>
    </>
  )
}

export default Layout
