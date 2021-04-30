import React from 'react'
// import ThemeSwitcher from '../ThemeSwitcher/index'
import {NavContainer, BurgerContainer, DesNavItemContainer, MenuItemContainer} from './styles'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import Burger from './Burger/index'
import Menu from './Menu/index'

const Navbar = ({location}) => {
    return (
        <NavContainer>
            <DesNavItemContainer>
                {/* <ThemeSwitcher/>  */}
                    <MenuItemContainer>
                        <a href="/">About</a>
                        <a href="/">Skils</a>
                        <a href="/">Work</a>
                        <a href="/">Contact</a>
                    </MenuItemContainer>
            </DesNavItemContainer>
            <LanguageSwitcher location={location}/>
            <BurgerContainer>
                <Burger/>
                <Menu/>
            </BurgerContainer>
        </NavContainer>
    )
}

export default Navbar
