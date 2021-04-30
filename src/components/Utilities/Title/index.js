import React from 'react'
import PropTypes from 'prop-types'
import { TextStyled } from './styles.js'

const Text = ({
  children,
  className,
  style,
  type = 'body',
  as = 'p',
  dangerouslySetInnerHTML,
  clickHandler,
}) => {
  const textProps = {
    as,
    style: style ? style : null,
    className: `${className ? className : ''} Text ${type ? type : ''}`,
    type,
    onClick: clickHandler ? clickHandler : null,
  }

  return dangerouslySetInnerHTML ? (
    <TextStyled
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      {...textProps}
    />
  ) : (
    <TextStyled {...textProps}>{children}</TextStyled>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf([
    'body',
    'smallText500',
    'smallText400',
    'smallText700',
    'smallText800',
    'smallText900',
    'bigText400',
    'link',
    'link primary',
    'link secondary',
    'link tertiary',
  ]),
  as: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.any,
  children: PropTypes.any,
  clickHandler: PropTypes.func,
}

export default Text
