const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  webpack: config => {
    // Unset client-side javascript that only works server-side. Using this will fix the module 'fs' npt found when using the serversidetranslation
    config.resolve.fallback = { fs: false, module: false }
    return config
  },
  i18n
};
