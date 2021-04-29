import React from 'react'
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'

const IndexLayout = ({data: {landingPage: query}, location}) => {
    const landing_banner = query?.data?.landing_banner?.document?.data?.banner_title?.text
    return (
        <div>
            <LanguageSwitcher location={location}/>
            <h1>{landing_banner}</h1>
        </div>
    )
}

export default IndexLayout
