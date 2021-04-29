import React, { useState } from "react";
import NavContext from "../../context/NavContext";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import LightTheme from '../../utils/Theme/LightTheme'
import DarkTheme from '../../utils/Theme/DarkTheme'



const GlobalStyle = createGlobalStyle`
  body {
  font-family: "Lato", "sans-serif";
  margin: 0;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bodyBackgroundColor};
  
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Kaushan Script";
  }
`;

const NavProvider = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <NavContext.Provider
      value={{
        theme,
        setTheme,
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
