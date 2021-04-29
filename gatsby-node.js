const locales = require('./config/i18n')
const path = require('path')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

const {
  replaceTrailing,
  replaceBoth,
  wrapper,
} = require('./src/utils/gatsby-node-helpers')


// Take the pages from src/pages and generate pages for all locales, e.g. /index and /en/index
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // First delete the pages so we can re-create them
  deletePage(page)

  Object.keys(locales).map((lang) => {
    // Remove the trailing slash from the path, e.g. --> /categories
    page.path = replaceTrailing(page.path)

    // Remove the leading AND traling slash from path, e.g. --> categories
    const name = replaceBoth(page.path)

    // Create the "slugs" for the pages. Unless default language, add prefix àla "/en"
    const localizedPath =
      locales[lang] && locales[lang].default
        ? page.path
        : `${locales[lang].path}${page.path}`

    return createPage({
      ...page,
      path: localizedPath,
      context: {
        locale: lang,
        name,
      },
    })
  })
}
