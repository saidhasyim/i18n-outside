module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },
    /** To avoid issues when deploying to some paas (vercel...) */
  /*localePath:
  typeof window === 'undefined'
    ? require('path').resolve('./public/locales')
    : '/locales',
*/
}
