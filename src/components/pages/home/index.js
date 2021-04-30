import React from 'react'
import BannerAnimation from '../../BannerAnimation/index'
import NavContext from '../../../context/NavContext'

const IndexLayout = ({data: {landingPage: query}}) => {
    const navContext= React.useContext(NavContext)
    
    const landing_banner = query?.data?.landing_banner?.document?.data?.banner_title?.text

    return (
        <div>
            <h1>{landing_banner}</h1>
            <BannerAnimation navContext={navContext}/> 
        </div>
    )
}

export default IndexLayout
