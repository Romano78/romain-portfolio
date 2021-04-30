import React, {useContext} from 'react';
import { StyledBurger, BurgerLines } from './styles';
import NavContext from '../../../context/NavContext'

const Burger = () => {

  const navContext = useContext(NavContext)

  const onClickhandler = () => {
    navContext.setToggleDrawer(!navContext.toggleDrawer)
  }
  return (
    <StyledBurger onClick={onClickhandler}>
      <BurgerLines open={navContext.toggleDrawer}/>
      <BurgerLines open={navContext.toggleDrawer}/>
      <BurgerLines open={navContext.toggleDrawer}/>
    </StyledBurger>
  )
}

export default Burger;