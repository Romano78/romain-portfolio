import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Navbar from '../Navbar/Index'

export const Wrapper = styled.div``

const Layout = ({ children, location }) => {

  return (
        <Wrapper>
          <Navbar location={location}/>
            {children}
        </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  location: PropTypes.object,
}

export default Layout
