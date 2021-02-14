import React from 'react';
import App from "./App"
import "./Layout.css"
import styled, {createGlobalStyle} from 'styled-components'
import { backgroundColor, scrollBarWidth } from './Constants';
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
      background: ${backgroundColor};
  }
`;


const AppHeader = styled.header`
  background-color: ${backgroundColor};
  height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppStyle = styled.div`
  text-align: center;
`
const Layout = ({ location, children }) => {
  // This is a hack to only mount in browser
  // This disregards the benefits of SSR, but also no need to worry about the side effects
  // Since my website is small this is good. The website can be expanded on in the future
  // I use gatsby mainly for the markdown, and routing.
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

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
