import React from 'react'
import { LandingBannerContainer, AnimationContainer, IntroductionContainer, BannerTextContainer } from './styles'
import BannerAnimation from '../BannerAnimation/index'
import Title from '.././Utilities/Title/index'

const LandingBanner = ({navContext}) => {
    return (
        <LandingBannerContainer>
            <IntroductionContainer>
                <BannerTextContainer>
                    <Title type="heading1" as="h1">Hi,</Title>
                    <br/>
                    <Title type="heading1"as="h1">I'am Romain</Title>
                    <br/>
                    <Title type="heading1"as="h1"> a Web Developer</Title>
                </BannerTextContainer>
            </IntroductionContainer>
            <AnimationContainer>
                <BannerAnimation navContext={navContext}/>
            </AnimationContainer>
        </LandingBannerContainer>
    )
}

export default LandingBanner
