import React from 'react'
import { LandingBannerContainer, AnimationContainer, IntroductionContainer, BannerTextContainer } from './styles'
import BannerAnimation from '../BannerAnimation/index'
import AnimatedText from "../AnimatedText/index"

const LandingBanner = ({navContext}) => {
    return (
        <LandingBannerContainer>
            <IntroductionContainer>
                <BannerTextContainer>
                <AnimatedText>
                  Hi,
                </AnimatedText>
                <AnimatedText>
                  I'm  Romain , 
                </AnimatedText>
                <AnimatedText>
                  web  developer
                </AnimatedText>
                
                </BannerTextContainer>
            </IntroductionContainer>
            <AnimationContainer>
                <BannerAnimation navContext={navContext}/>
            </AnimationContainer>
        </LandingBannerContainer>
    )
}

export default LandingBanner
