import React, {useContext} from 'react'
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'
import NavContext from "../../../context/NavContext";
import LightTheme from '../../../utils/Theme/LightTheme'
import DarkTheme from '../../../utils/Theme/DarkTheme'

const IndexLayout = ({data: {landingPage: query}, location}) => {
    const navContext = useContext(NavContext)
    console.log(navContext)
    const landing_banner = query?.data?.landing_banner?.document?.data?.banner_title?.text

    const onClickHandlerOpen = () => {
        navContext.setTheme(LightTheme);
      };
    
      const onClickHandlerClose = () => {
        navContext.setTheme(DarkTheme);
      };
    return (
        <div>
            <LanguageSwitcher location={location}/>
            <h1>{landing_banner}</h1>
            <button id="close" onClick={onClickHandlerClose}>
            <i className="fas fa-times"></i>
          </button>
          <button id="open" onClick={onClickHandlerOpen}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
    )
}

export default IndexLayout
