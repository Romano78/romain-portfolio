import React  from 'react'
// import PropTypes from 'prop-types'
import Layout from './src/components/Layout'
import { LocaleProvider } from './src/context/LocaleProvider'
import NavProvider from "./src/components/Provider/NavProvider";


const wrapPageElement = ({ element, props }) => {

  return (
    <LocaleProvider locale={props.pageContext.locale}>
      <NavProvider>
          <Layout {...props}>{element}</Layout>
      </NavProvider>
    </LocaleProvider>
  )
}

// wrapPageElement.propTypes = {
//   element: PropTypes.node.isRequired,
//   props: PropTypes.object,
//   location: PropTypes.object,
//   pageContext: PropTypes.node,
//   pageContextLocale: PropTypes.node,
// }

export default wrapPageElement
