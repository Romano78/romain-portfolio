/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.div``

const Layout = ({ children }) => {

  return (
        <Wrapper>
            {children}
        </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  location: PropTypes.object,
}

export default Layout
