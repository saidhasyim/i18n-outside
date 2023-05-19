import { appWithTranslation } from 'next-i18next'



// Template for every page
export function App({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
  )
}

export default appWithTranslation(App)
