import React from 'react'
import NavContext from '../../../context/NavContext'
import LandingBanner from "../../LandingBanner/index"
import { PageOuter } from './styles'

const IndexLayout = ({data: {landingPage: query}}) => {
    const navContext= React.useContext(NavContext)
    
    // const landing_banner = query?.data?.landing_banner?.document?.data?.banner_title?.text

    return (
        <PageOuter>
            <LandingBanner  navContext={navContext}/>
        </PageOuter>
    )
}

export default IndexLayout
