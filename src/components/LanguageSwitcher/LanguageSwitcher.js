import React from 'react'
import { Link } from 'gatsby'
import LocaleContext from '../../context/LocaleProvider'
import PropTypes from 'prop-types'
import { LanguageSwitcherContainer } from './styles'

const LocaleComponent = ({ location }) => {
  console.log(location)
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]
  return (
    <LanguageSwitcherContainer>
      {i18n.locale === 'en-us' ? (
        <>
          <p className="Header__LanguageSwitcher-button current">EN </p>
          <Link
            to={`/fr${location.pathname}`}
            className="Header__LanguageSwitcher-button"
          >
            <p>
              <span style={{ paddingRight: '5px', paddingLeft: '5px' }}>/</span>
              FR
            </p>
          </Link>
        </>
      ) : i18n.locale === 'fr-fr' ? (
        <>
          <Link
            to={`${
              location.pathname.includes('/fr')
                ? location.pathname.replace('/fr', '')
                : location.pathname
            }`}
            className="Header__LanguageSwitcher-button"
          >
            <p>EN</p>
          </Link>

          <p className="Header__LanguageSwitcher-button current">
            <span style={{ paddingLeft: '5px', fontWeight: 'initial' }}>/</span>{' '}
            FR
          </p>
        </>
      ) : (
        ''
      )}
    </LanguageSwitcherContainer>
  )
}

LocaleComponent.propTypes = {
  location: PropTypes.object,
  customStyle: PropTypes.any,
  className: PropTypes.string,
}
export default LocaleComponent
