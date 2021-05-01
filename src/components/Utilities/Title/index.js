import React from 'react'
import PropTypes from 'prop-types'
import { TitleStyled } from './styles'

const Title = ({
  children,
  as = 'span',
  type = 'heading1',
  style,
  className,
}) => {
  const textProps = {
    as,
    type,
    children,
    style: style ? style : null,
    className: `${className ? className : ''} Title ${type ? type : ''}`,
  }

  return <TitleStyled {...textProps}>{children}</TitleStyled>
}

Title.propTypes = {
  children: PropTypes.any,
  as: PropTypes.string,
  type: PropTypes.oneOf([
    'heading1',
    'heading2',
    'heading3',
    'heading4',
    'heading5',
    'heading6',
    'heading7',
    'heading8',
    'overline',
    'menuHeading',
    'contactHeading',
    'backgroundHeading',
    'calendarTitle',
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Title
