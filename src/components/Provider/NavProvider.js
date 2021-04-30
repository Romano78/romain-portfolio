import React, { useState } from "react";
import NavContext from "../../context/NavContext";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import LightTheme from '../../utils/Theme/LightTheme'
import DarkTheme from '../../utils/Theme/DarkTheme'



const GlobalStyle = createGlobalStyle`

  body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.primaryColor};  
  color: ${props => props.theme.colors.secondaryColor};
  scroll-behavior: smooth;
  overflow: visible;
  }

  a {
    color: ${props => props.theme.colors.tertiaryColor} !important;
    font-family: 'Open Sans', sans-serif;

  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

`;

const NavProvider = ({ children }) => {
  const [theme, setTheme] = useState(DarkTheme);
  const [toggleDrawer, setToggleDrawer] = useState(false)

   return (
    <NavContext.Provider
      value={{
        theme,
        setTheme,
        toggleDrawer,
        setToggleDrawer,
      }}
    >
        <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((stateOfTheme) =>
            stateOfTheme.id === "light" ? DarkTheme : LightTheme
          );
        },
      }}
    >
      <GlobalStyle/>
      {children}
    </ThemeProvider>
    </NavContext.Provider>
  );
};

export default NavProvider;
