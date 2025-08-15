import React from 'react'
import "../../i18n"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMinus } from '@fortawesome/free-solid-svg-icons';
import { useLanguageContext } from '../../context/langContext'
import { useModeContext } from '../../context/modeContext';
import { Link } from 'react-router-dom';

export default function Footer() {
    const { t } = useLanguageContext();
    const { darkMode } = useModeContext();

    return (


        <footer className={`hidden lg:pt-7  lg:bottom-0 text-white text-sm left-0  w-full p-4  shadow-sm 
        lg:border-t-10  lg:flex lg:items-center lg:justify-around lg:p-8 transition-all duration-500 ease-in-out
        ${darkMode ? " lg:bg-[#091048] lg:border-[#f4af0f] " : " lg:bg-[#2b2873] lg:border-[#ffcc00]"}  `}>
            <h2 className={`
            text-sm  sm:text-center 
            `}>
                {t("Footer")}
            </h2>
            <Link to={"/privacy-policy"} className={` ${darkMode ? "lg:hover:text-[#f4af0f]" : "lg:hover:text-[#ffcc00]"} transition-all duration-500 ease-in-out`} ><FontAwesomeIcon icon={faMinus} /> {t("policy")} </Link>
        </footer>


    )
}
