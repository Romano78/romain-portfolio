import React, { useContext } from 'react'
import { Link } from 'gatsby'
import LocaleContext from '../../context/LocaleProvider'
import PropTypes from 'prop-types'
import { LanguageSwitcherContainer, SwitcherP } from './styles'
import NavContext from '../../context/NavContext'

const LocaleComponent = ({ location }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]
  const navContext = useContext(NavContext)

  return (
    <LanguageSwitcherContainer>
      {i18n.locale === 'en-us' ? (
        <>
          <SwitcherP className="Header__LanguageSwitcher-button current" open={navContext.toggleDrawer}>EN </SwitcherP>
          <Link
            to={`/fr${location.pathname}`}
            className="Header__LanguageSwitcher-button"
          >
            <SwitcherP open={navContext.toggleDrawer}>
              <span style={{ paddingRight: '5px', paddingLeft: '5px' }}>/</span>
              FR
            </SwitcherP>
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
            <SwitcherP open={navContext.toggleDrawer}>EN</SwitcherP>
          </Link>

          <SwitcherP className="Header__LanguageSwitcher-button current" open={navContext.toggleDrawer}>
            <span style={{ paddingLeft: '5px', fontWeight: 'initial' }}>/</span>{' '}
            FR
          </SwitcherP>
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
