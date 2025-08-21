import React, { useEffect, useState } from 'react'
import "./Settings.css"
import { faArrowUp, faGear, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModeContext } from '../../context/modeContext';
import Ar from "../../assets/Photos/pho/ar.png"
import En from "../../assets/Photos/pho/en_US.png"
import { useLanguageContext } from '../../context/langContext';
import Switch from '../NavBar/Switch';
export default function Settings() {

    // darkMode
    const { darkMode, toggleTheme } = useModeContext();

    // language
    const { currentLang, changeLanguage } = useLanguageContext();


    // open settings
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)


    // showed icons
    const [isVisible, setIsVisible] = useState(false)

    // scroll to top 
    useEffect(() => {
        const showedIcons = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', showedIcons);
        return () => window.removeEventListener('scroll', showedIcons);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    if (!isVisible) return null;



    return (
        <div className="fixed flex flex-col items-center gap-3 z-50 bottom-24 left-2 rtl:right-2
        lg:bottom-2 lg:left-6  rtl:lg:right-6  ">

            {isSettingsOpen && (
                <>
                    {/* Dark mode toggle */}
                    <div onClick={toggleTheme} className='toggle animate-slide-up px-3.5 py-2.5 rounded-full transition-all duration-500 ease-in-out bg-white cursor-pointer
                    lg:px-4 lg:py-3  '>
                        {darkMode ? (
                            <FontAwesomeIcon icon={faSun} size="lg" className='text-[#f4af0f] '/> 
                        ): (
                            <FontAwesomeIcon icon={faMoon} size="lg" className='text-blue-400' /> 
                        )}
                    </div>

                    {/* Language toggle */}

                    <div className=" animate-slide-up px-3 py-4 rounded-full transition-all duration-500 ease-in-out bg-white cursor-pointer
                    lg:px-4 lg:py-5
                    ">
                        {currentLang === 'en' ? (
                            <div onClick={() => changeLanguage('ar')}>
                                <img src={Ar} alt="englishLan" />
                            </div>
                        ) : (
                            <div onClick={() => changeLanguage('en')}>
                                <img src={En} alt="englishLan" />
                            </div>
                        )}
                    </div>
                </>
            )}
            {/* Settings  */}
            <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className={`px-3 py-2.5 rounded-full cursor-pointer transition-all duration-500 ease-in-out
                    lg:px-5 lg:py-4
                    ${darkMode ? "text-[#f4af0f] bg-[#091048] hover:text-[#091048] hover:bg-[#f4af0f] " :
                        "text-[#ffcc00] bg-[#2b2873] hover:text-[#2b2873] hover:bg-[#ffcc00]"}
                    `}
                aria-label="Settings"
            >
                <FontAwesomeIcon icon={faGear} size='lg' className={`${isSettingsOpen ? "rotate-180" : ""} transition-all duration-500`} />
            </button>




            {/* Scroll to Top */}
            <button
                onClick={scrollToTop}
                className={`px-3 py-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out
                    lg:px-5 lg:py-4
                            ${darkMode ? "text-[#f4af0f] bg-[#091048] hover:text-[#091048] hover:bg-[#f4af0f] " :
                        "text-[#ffcc00] bg-[#2b2873] hover:text-[#2b2873] hover:bg-[#ffcc00]"}`}
                aria-label="Scroll to Top"
            >
                <FontAwesomeIcon icon={faArrowUp} size='lg' />
            </button>




        </div>
    )
}
