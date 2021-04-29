import React, { createContext } from 'react'
import i18n from '../../config/i18n'
import PropTypes from 'prop-types'

const LocaleContext = createContext()

export const LocaleProvider = ({ children, locale }) => {
  return (
    <LocaleContext.Provider value={{ locale, i18n }}>
      {children}
    </LocaleContext.Provider>
  )
}

LocaleProvider.propTypes = {
  children: PropTypes.any,
  locale: PropTypes.string,
}

export default LocaleContext
