import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// navbar
import enTranslation from "./locales/en/transilation.json";
import arTranslation from "./locales/ar/transilation.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
