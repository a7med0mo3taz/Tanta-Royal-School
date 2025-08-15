import React, { createContext, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [openLang, setOpenLang] = useState(false);
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const isArabic = i18n.language === 'ar';

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <LanguageContext.Provider
            value={{
                openLang,
                t,
                setOpenLang,
                currentLang,
                isArabic,
                changeLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => useContext(LanguageContext);
