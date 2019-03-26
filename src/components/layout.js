import React from "react"
// import Header from "./header"
import MainMenu from "./MainMenu"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts/googleapis.com/css?family=open+sans');
body, html{
  font-family: 'Open Sans', sans-serif;
  margin: 0 !important;
  padding: 0 !important;
}`
const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper />
    {children}
  </div>
)

export default Layout
