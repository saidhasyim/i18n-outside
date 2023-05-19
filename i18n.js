import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-http-backend";
//import LanguageDetector from 'i18next-browser-languagedetector';//to try this once i can get it working

i18n
  .use(initReactI18next)
  .use(Backend)
  //.use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    fallbackNS: 'common',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    }
 });  
  

export default i18n;
