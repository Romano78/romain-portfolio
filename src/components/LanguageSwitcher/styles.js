import styled from 'styled-components'

export const LanguageSwitcherContainer = styled.div`
  display: inline-flex;
  z-index: 10;
  margin-right: 30px;


  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-right: 70px;
  }

  p {
    margin-bottom: 0px !important;
  }

  p.current {
    color: ${props => props.theme.colors.tertiaryColor}
  }


  .Header__LanguageSwitcher-button {
    text-decoration: none;
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-style: normal
  }
`

export const SwitcherP = styled.p`
    color: ${props => props.open ? props.theme.colors.primaryColor: props.theme.colors.secondaryColor };
`
