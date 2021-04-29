import * as React from "react"
import IndexLayout from '../components/pages/home/index'
import { graphql } from 'gatsby'


export const query = graphql`
query LandingFrPageQuery($locale: String) {
   landingPage: prismicLandingPage(lang: {eq: $locale }) {
      data {
        landing_banner {
          document {
            ... on PrismicBannerHome {
              data {
                banner_title {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`
const IndexPage = ({data, location}) => (
  <IndexLayout data={data} location={location}/>
)

export default IndexPage
