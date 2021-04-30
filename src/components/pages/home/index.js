import React from 'react'

const IndexLayout = ({data: {landingPage: query}}) => {
    const landing_banner = query?.data?.landing_banner?.document?.data?.banner_title?.text

    return (
        <div>
            <h1>{landing_banner}</h1>
        </div>
    )
}

export default IndexLayout
