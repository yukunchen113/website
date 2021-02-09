import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./index.css"
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', Arial;
  }
  .slide-content .scroller {
    width: 1024px;
  }
  ::-webkit-scrollbar {
      width: 0.8vw;
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
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppStyle = styled.div`
  text-align: center;
`



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <AppHeader>
      <AppStyle>
        <App/>
      </AppStyle>
    </AppHeader>
  </React.StrictMode>,
  document.getElementById('root')
);
