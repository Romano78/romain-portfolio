import styled from 'styled-components'

export const TitleStyled = styled.p`
  &.heading1 {
    font-size: ${props => props.theme.fonts.heading2};
    font-weight: bold;
    font-family: 'Be Vietnam', sans-serif;
    font-style: normal;
    line-height: 1;
    margin: 0;
    padding: 0;

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
      font-size: ${(props) => props.theme.fonts.heading1};
    }
  }
  &.heading2 {
    font-size: ${props => props.theme.fonts.heading6};
    font-family: ${props => props.theme.fontFamily.secondary};
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    text-transform: capitalize;
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fonts.heading2};
    }
  }
  &.heading3 {
    font-family: ${props => props.theme.fontFamily.primary};
    font-size: ${props => props.theme.fonts.heading6};
    font-weight: normal;
    font-style: normal;
    line-height: 1.3;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fonts.heading3};
      line-height: 1.3;
    }
  }
  &.heading4 {
    font-family: ${props => props.theme.fontFamily.secondary};
    font-size: ${props => props.theme.fonts.heading6};
    font-weight: normal;
    font-style: normal;
    line-height: 1.3;
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fonts.heading4};
      line-height: 1.3;
    }
  }
  &.heading5 {
    font-family: ${props => props.theme.fontFamily.primary};
    font-size: ${props => props.theme.fonts.heading7};
    line-height: 1.3;
    font-weight: normal;
    font-style: normal;
  }
  &.heading6 {
    font-family: ${props => props.theme.fontFamily.secondary};
    font-size: ${props => props.theme.fonts.overline};
    line-height: 1.3;
    font-style: normal;
    font-weight: normal;
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fonts.heading6};
      line-height: 1.3;
    }
  }

  &.heading7 {
    font-family: ${props => props.theme.fontFamily.secondary};
    font-size: ${props => props.theme.fonts.overline};
    color: ${props => props.theme.colors.secondary};
    line-height: 1.3;
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: -1px;
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fonts.heading6};
      line-height: 1.3;
    }
  }

  &.heading8 {
    font-family: ${props => props.theme.fontFamily.primary};
    font-size: ${props => props.theme.fonts.heading6};
    text-transform: capitalize;
    line-height: 1.3;
    font-style: normal;
    font-weight: normal;
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fonts.heading4};
      line-height: 1.3;
    }
  }

`
