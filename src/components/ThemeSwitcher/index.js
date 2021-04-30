import React, { useContext } from 'react'
import NavContext from "../../context/NavContext";
import LightTheme from '../../utils/Theme/LightTheme'
import DarkTheme from '../../utils/Theme/DarkTheme'


const ThemeSwitcher = () => {
    const navContext = useContext(NavContext)

    const onClickHandlerOpen = () => {
        navContext.setTheme(LightTheme);
      };
    
      const onClickHandlerClose = () => {
        navContext.setTheme(DarkTheme);
      };
    return (
        <div>
            <button id="close" onClick={onClickHandlerClose}>
                <i className="fas fa-times"></i>
            </button>
            <button id="open" onClick={onClickHandlerOpen}>
                <i className="fas fa-bars"></i>
            </button>
        </div>
    )
}

export default ThemeSwitcher
