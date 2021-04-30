import styled from 'styled-components'

export const NavContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
`

export const BurgerContainer = styled.div`
    @media(min-width: ${props => props.theme.breakpoints.md}) {
        display: none;
    }
`

export const DesNavItemContainer = styled.div`
    display: none;
    @media(min-width: ${props => props.theme.breakpoints.md}) {
        display: flex;
        align-items: center;
    }
`

export const MenuItemContainer = styled.div`
    padding-top: 1px;

    a {
        padding-right: 10px;
        text-decoration: none;
        text-transform: uppercase;
    }
`
