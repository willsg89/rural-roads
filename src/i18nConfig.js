import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import enJson from 'locales/en.json'
import ptJson from 'locales/pt.json'

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enJson
      },
      pt: {
        translation: ptJson
      }
    },
    // lng: "en",
    fallbackLng: "en",
    keySeparator: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
