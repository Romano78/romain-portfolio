import React from 'react'
import NavContext from '../../../context/NavContext'
import LandingBanner from "../../LandingBanner/index"

const IndexLayout = ({data: {landingPage: query}}) => {
    const navContext= React.useContext(NavContext)
    
    // const landing_banner = query?.data?.landing_banner?.document?.data?.banner_title?.text

    return (
        <>
            <LandingBanner  navContext={navContext}/>
        </>
    )
}

export default IndexLayout
