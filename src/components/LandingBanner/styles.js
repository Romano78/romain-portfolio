import styled from 'styled-components'

export const LandingBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;

    @media(min-width: ${props => props.theme.breakpoints.md}) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        margin: 0;
        padding: 0;

    }
`

export const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;

    @media(min-width: ${props => props.theme.breakpoints.md}) {
        flex-grow: 1;
    width: 45%;
    }
`
export const IntroductionContainer = styled.div`

    @media(min-width: ${props => props.theme.breakpoints.md}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 55%;
    }

`

export const BannerTextContainer = styled.div`
    padding-left: 70px;
`