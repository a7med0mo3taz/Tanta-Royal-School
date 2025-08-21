import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import 'flowbite/dist/flowbite.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faLanguage, faUpRightFromSquare, faQuestion, faPeopleGroup, faHeadset, faEllipsis, faXmark, faPhoneVolume, faMoon, faSun, faSearch, faChevronUp, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import logo from "../../assets/Photos/pho/Logo.webp"
import BRLogo from "../../assets/Photos/pho/UK.webp"
import USALogo from "../../assets/Photos/pho/USA.webp"
import NATLogo from "../../assets/Photos/pho/national.webp"
import Ar from "../../assets/Photos/pho/ar.png"
import En from "../../assets/Photos/pho/en_US.png"


import { Link, Links, NavLink } from 'react-router-dom'
import { useLanguageContext } from '../../context/langContext';
import { useModeContext } from '../../context/modeContext';
import Switch from './Switch';
export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false)
    const [openLearn, setOpenLearn] = useState(false)
    const [openGallery, setOpenGallery] = useState(false)
    const [openBlog, setOpenBlog] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);


    // language
    const { currentLang, isArabic, changeLanguage, openLang, t, setOpenLang } = useLanguageContext();

    // dark mode
    const { darkMode, toggleTheme } = useModeContext();


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);


        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    // no scrolling when side nav opened 
    useEffect(() => {
    const isSmallScreen = window.innerWidth < 1024; 

    if (openNav && isSmallScreen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return () => {
        document.body.style.overflow = "auto";
    };
}, [openNav]);


    // scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // small navbar animation

    return (
        <>
            <div className="custom-navbar mx-auto z-10
            lg:ml-15 lg:mt-4 lg:translate-y-20px lg:right-0 lg:left-0 
            xl:ml-20
            2xl:ml-52
            ">
                <div className={`topNav  lg:rounded-l-full  py-7  grid grid-cols-8 rtl:grid-cols-8 items-center transition-all duration-500 ease-in-out
                ${darkMode ? "bg-[#f4af0f] lg:bg-[#091048] " : "bg-[#ffcc00] lg:bg-[#2b2873]"}
                `}>
                    <div className="leftNav1 hidden gap-4 ml-10 rtl:ml-0 
                    md:hidden
                    lg:flex lg:justify-center   lg:col-span-3    rtl:lg:justify-center   rtl:lg:col-span-4 lg:items-center
                    rtl:2xl:col-end-5 xl: 2xl:col-span-3   ">
                        <Link to={""}>
                            <img loading='lazy' src={logo} alt="schoolLogo" className='w-58 h-22 mb-3' />
                        </Link>
                        <div className='Lang flex justify-center items-center lg:gap-7'>
                            <div onClick={() => changeLanguage('en')} className={` p-2  rounded-lg transition-all duration-500 ease-in-out
                            cursor-pointer flex justify-center items-center gap-2
                            ${currentLang === 'en' ? 'text-black ' : 'text-white bg-transparent'}
                            ${currentLang && darkMode ? "bg-[#f4af0f]" : "bg-[#ffcc00]"}
                            `}>
                                <img loading='lazy' src={En} alt="englishLan" />
                                <span >English</span>
                            </div>
                            <div onClick={() => changeLanguage('ar')} className={` p-2 rounded-lg transition-all duration-500 ease-in-out
                            cursor-pointer flex justify-center items-center gap-2
                            ${currentLang === 'ar' ? 'text-black ' : 'text-white bg-transparent'}
                            ${currentLang && darkMode ? "bg-[#f4af0f]" : "bg-[#ffcc00]"}
                            `}>
                                <img loading='lazy' src={Ar} alt="arabicLan" />
                                <span >العربية</span>
                            </div>
                        </div>
                    </div>
                    <div className="rightNav1  col-span-8 md:col-span-8 lg:col-span-5 xl:grid-cols-4 rtl:xl:col-end-10  2xl:col-span-4 flex justify-center items-center md:gap-10">
                        <Link to={"british"}>
                            <img src={BRLogo} alt="britishLogo" loading='lazy' className='w-30 h-11 sm:w-40 sm:h-13 ' />
                        </Link>
                        <Link to={"american-systems"}>
                            <img src={USALogo} alt="schoolLogo" loading='lazy' className='w-30 h-11 sm:w-40 sm:h-13' />
                        </Link>
                        <Link to={"national"}>
                            <img src={NATLogo} alt="schoolLogo" loading='lazy' className='w-30 h-11 sm:w-40 sm:h-13' />
                        </Link>
                    </div>
                </div>
            </div>



            <nav className={`bottomNav z-10 transition-all duration-500 ease-in-out border-b border-white 
                            
                            lg:mr-15 lg:rounded-r-full lg:top-42 lg:right-0 lg:left-0 lg:mt-3 lg:border-0
                            xl:mr-10
                            2xl:mr-38
                            ${darkMode ? "bg-[#091048] lg:bg-[#f4af0f]" : "bg-[#2b2873] lg:bg-[#ffcc00]"}
                            ${isScrolled ? "fixed top-0 left-0 right-0  lg:absolute" : "absolute top-25 lg:top-42"}`}>
                <div className="max-w-screen-2xl mx-auto
                lg:flex lg:items-center lg:gap-2 lg:justify-around lg:pl-2  lg:py-1 lg:ml-28 rtl:lg:ml-0
                xl:gap-5 xl:py-1 xl:justify-center rtl:xl:gap-3 rtl:xl:ml-25
                2xl:justify-center  2xl:gap-5  2xl:pl-20 rtl:2xl:pl-72  rtl:2xl:gap-10  2xl:py-2 py-3  rtl:2xl:ml-0">
                    {/* social */}

                    <div className='socials hidden lg:flex md:justify-center md:items-center gap-4'>
                        <a href="https://www.facebook.com/trs2030/" target='_blank'><FontAwesomeIcon icon={faFacebookF} size="xl" className='FBIcon' /></a>
                        <a href="https://www.linkedin.com/company/tanta-royal-international-schools/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} size="xl" className='LIIcon' /></a>
                        <a href="https://www.facebook.com/trs2030/" target='_blank'><FontAwesomeIcon icon={faInstagram} size="xl" className='INIcon' /></a>
                        <a href="https://api.whatsapp.com/send/?phone=201090196772&text&type=phone_number&app_absent=0" target='_blank'><FontAwesomeIcon icon={faWhatsapp} size="xl" className='WAIcon' /></a>
                    </div>
                    <div className="flex items-center justify-center md:gap-100 gap-19 sm:gap-65 py-2 sm:py-1 md:order-2">
                        <div className="logo lg:hidden">
                            <Link to={""}>
                                <img src={logo} alt="schoolLogo" loading='lazy' className='w-full h-10  sm:h-14 mb-2' />
                            </Link>
                        </div>
                        <div className="icons relative flex items-center">
                            {/* White/Dark mode small */}
                            <div onClick={toggleTheme} className='toggle  pr-2 cursor-pointer 
                            lg:hidden lg:pr-2
                            '>
                                {darkMode ? (
                                    <FontAwesomeIcon icon={faSun} className='text-[#f4af0f] text-lg sm:text-3xl ' />
                                ) : (
                                    <FontAwesomeIcon icon={faMoon} className='text-blue-400  text-lg sm:text-3xl ' />
                                )}
                            </div>
                            {/* Language */}
                            <button
                                type='button'
                                onClick={() => setOpenLang(prev => !prev)}
                                className="lg:hidden text-[#ffcc00] cursor-pointer text-sm p-2.5 me-1"
                            >
                                <FontAwesomeIcon icon={faLanguage} className='text-xl sm:text-3xl ' />
                            </button>
                            {openLang && (
                                <div
                                    className={`lg:hidden flex justify-center items-center fixed top-0 left-0 w-full h-full
                                        ${darkMode ? "bg-[#091048]  " : "bg-[#2b2873] "}
                                        z-50 transition-all duration-500 ease-in-out`}
                                >
                                    <div
                                        onClick={() => setOpenLang(prev => !prev)}
                                        className="lg:hidden text-4xl absolute top-4 right-4 cursor-pointer"
                                    >
                                        <FontAwesomeIcon icon={faXmark} className='text-white' />
                                    </div>
                                    <div className='Lang flex flex-col gap-4 justify-center items-center'>
                                        <div onClick={() => {
                                            changeLanguage('en');
                                            setOpenLang(prev => !prev);
                                        }} className={` hover:text-white p-2 rounded-lg transition-all duration-500 ease-in-out
                            cursor-pointer flex justify-center items-center gap-2 sm:text-3xl sm:p-4
                            ${currentLang === 'en' ? 'text-black bg-[#ffcc00]' : 'text-white bg-transparent'} 
                            ${currentLang && darkMode ? "bg-[#f4af0f] " : "bg-[#ffcc00]"}
                            `}>
                                            <img src={En} alt="englishLan w-full" loading='lazy' />
                                            <span >English</span>
                                        </div>
                                        <div onClick={() => {
                                            changeLanguage('ar');
                                            setOpenLang(prev => !prev);
                                        }} className={` hover:text-white p-2  rounded-lg transition-all duration-500 ease-in-out 
                            cursor-pointer flex justify-center items-center gap-2 sm:text-3xl sm:p-4
                            ${currentLang === 'ar' ? 'text-black ' : 'text-white bg-transparent'} 
                            ${currentLang && darkMode ? "bg-[#f4af0f] " : "bg-[#ffcc00]"}`}>
                                            <img src={Ar} alt="arabicLan w-full" loading='lazy' />
                                            <span >العربية</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* search */}
                            <button type="button" onClick={() => setShowSearch(!showSearch)} data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className=" lg:text-black  text-[#ffcc00] cursor-pointer text-sm p-2.5 me-1">
                                <FontAwesomeIcon icon={faSearch} className='text-lg sm:text-3xl lg:text-lg ' />
                                <span className="sr-only">Search</span>
                            </button>
                            {showSearch && (
                                <div
                                    className={`mt-10 top-4 flex justify-center items-center gap-2 px-4 py-2 rounded-lg shadow-sm w-64 absolute
                                    ${isArabic ? 'arSearchBar' : 'searchBar'}`}
                                >

                                    <input
                                        type="text"
                                        className="p-2 w-full sm:w-auto flex-1 ring ring-[#2b2873] focus:ring-amber-300 outline-none rounded-lg"
                                        placeholder={t("search")}
                                    />
                                    <FontAwesomeIcon icon={faSearch} className='px-1 text-lg sm:text-3xl lg:text-lg ' />
                                </div>
                            )}
                            {/* White/Dark mode */}
                            <div onClick={toggleTheme} className='toggle hidden  cursor-pointer
                            lg:block lg:pr-2
                            '>
                                {darkMode ? (
                                    <FontAwesomeIcon icon={faSun} className='text-yellow-700 text-lg sm:text-3xl lg:text-lg' />
                                ) : (
                                    <FontAwesomeIcon icon={faMoon} className='text-blue-400 text-lg sm:text-3xl lg:text-lg' />
                                )}
                            </div>
                            {/* side nav btn */}
                            <button type="button" onClick={() => setOpenNav(prev => !prev)} className="inline-flex cursor-pointer items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden text-[#ffcc00]"
                            >                                <span className="sr-only">Open main menu</span>
                                <FontAwesomeIcon icon={faBars} className='text-lg sm:text-3xl lg:text-lg' />
                            </button>
                        </div>
                    </div>
                    {/* overlay */}
                    {openNav && (
                        <div
                            onClick={() => setOpenNav(false)}
                            className=" lg:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50 z-49 transition-opacity duration-500 ease-in-out"
                        />
                    )}
                    {/* SideNav & nav links */}
                    <div className={`fixed top-0 h-screen flex flex-col border-0 gap-70 z-50 transform transition-all duration-500 ease-in-out lg:bg-transparent
                        lg:static lg:translate-x-0 lg:opacity-100 lg:pointer-events-auto lg:w-auto lg:h-auto lg:flex lg:items-center
                        ${darkMode ? "bg-[#091048]" : "bg-[#2b2873]"} 
                        ${openNav ? "translate-x-0 opacity-100 pointer-events-auto" : `${isArabic ? "-translate-x-full" : "translate-x-full"} opacity-0 pointer-events-none`} 
                        ${isArabic
                            ? "left-0 w-70 sm:w-90 lg:static lg:right-auto lg:left-0 lg:w-auto lg:h-auto"
                            : "right-0 w-70 sm:w-90 lg:static lg:left-auto lg:right-0 lg:w-auto lg:h-auto"}`}
                    >

                        {/* nav links */}
                        <div className={`lg:hidden text-3xl  absolute  ${isArabic ? 'arExitBtn' : 'exitBtn'}`}><FontAwesomeIcon icon={faXmark} className='cursor-pointer text-white' onClick={() => { setOpenNav(prev => !prev) }} />
                        </div>
                        <ul className="flex  flex-col mt-0 font-medium 
                        lg:flex-row  lg:border-0 lg:items-center lg:justify-center lg:bg-transparent lg:space-x-8 
                        xl:gap-0 xl:py-0 rtl:xl:py-0
                        ">
                            {/* home */}
                            <li className=' text-white home
                            lg:mr-3 rtl:lg:mr-0
                            xl:mr-5  rtl:xl:ml-5
                            '>
                                <NavLink to={""} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className={({ isActive }) =>
                                    `block border-b py-2.5 px-5 w-full hover:pl-6 transition-all duration-300 ease-in-out  
                                    lg:flex lg:items-center lg:px-0 lg:text-black lg:hover:pl-0 lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 
                                    xl:flex xl:items-center xl:px-0 xl:text-black xl:hover:pl-0 xl:hover:bg-transparent xl:hover:text-[#3c397e] xl:border-b-0 xl:hover:border-b-2
                                        ${darkMode
                                        ? "bg-[#091048] border-b-[#43417d] hover:text-[#f4af0f] hover:bg-[#3c397e95] lg:bg-transparent"
                                        : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00] hover:bg-[#3c397e95] lg:bg-transparent"}
                                        ${isActive
                                        ? `${darkMode ? "text-[#f4af0f] bg-[#3c397e95]" : "text-yellow-400 bg-[#3c397e95]"} lg:bg-transparent lg:text-black lg:border-b-2 lg:border-[#3c397e] xl:border-b-2 `
                                        : ""}`
                                }
                                    aria-current="page"><FontAwesomeIcon icon={faHouse} className='lg:mr-2 rtl:lg:ml-2' /> {t("home")} </NavLink>
                            </li>
                            {/* about */}
                            <li className='text-white 
                            lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 lg:hover:pr-0 lg:hover:pl-0
                            lg:mr-3 rtl:lg:mr-0 
                            xl:mr-5 rtl:xl:ml-5
                            '>
                                <div className='flex flex-col justify-center items-center'>
                                    <NavLink to={"about-us"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className={({ isActive }) =>
                                        ` py-2.5 px-5 border-b  flex justify-between items-center  w-full  hover:pl-6   transition-all duration-300 ease-out
                                        lg:flex lg:items-center lg:px-0 lg:text-black lg:hover:pl-0 lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 
                                        xl:flex xl:items-center xl:px-0 xl:text-black xl:hover:pl-0 xl:hover:bg-transparent xl:hover:text-[#3c397e] xl:border-b-0 xl:hover:border-b-2 
                                ${darkMode ? "bg-[#091048] border-b-[#43417d] hover:text-[#f4af0f] hover:bg-[#3c397e95] lg:bg-transparent " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:bg-transparent"}
                                ${isActive ? ' text-yellow-400 bg-[#3c397e] lg:text-[#3c397e] lg:bg-transparent lg:border-b-2 lg:border-[#3c397e] xl:border-b-2' : ''}
                                ${isActive && darkMode ? 'text-[#f4af0f]' : ''}`
                                    }>{t("about")}
                                        <FontAwesomeIcon onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpenDropdown(!openDropdown) ;setOpenLearn(false) ; setOpenGallery(false) ; setOpenBlog(false) }} className=""
                                            icon={openDropdown ? faChevronUp : faChevronDown} size="lg" />
                                    </NavLink>

                                    {/* Dropdown menu */}
                                    <ul className={`w-full  transition-all duration-500
                                        lg:text-sm  lg:absolute lg:py-1 lg:max-w-40 lg:rounded-lg 
                                        ${darkMode ? "bg-[#3c397e95] border-b-[#43417d] hover:text-[#f4af0f]  lg:bg-[#f4af0f] " :
                                            "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:text-yellow-400 lg:bg-[#ffcc00]"}
                                        ${openDropdown ? ' max-h-[500px] opacity-100 lg:top-14 ' : 'max-h-0 opacity-0 hiDDen lg:hidden'}`}>
                                        <li className='text-white opacity-50 p-2 pl-5 border-b text-sm  cursor-pointer hover:opacity-100 
                                            lg:border-b-0 lg:p-2'>
                                            <Link to={"/about-us#aboutContent"} onClick={() => setOpenNav(prev => !prev)} className="lg:block lg:px-4 lg:py-1 lg:text-black">{t("vision")}</Link>
                                        </li>
                                        <li className='text-white opacity-50 p-2 pl-5 border-b text-sm  cursor-pointer hover:opacity-100 
                                            lg:border-b-0 lg:p-2'>
                                            <Link to={"/about-us#aboutContent"} onClick={() => setOpenNav(prev => !prev)} className="lg:block lg:px-4 lg:py-1 lg:text-black ">{t("mission")}</Link>
                                        </li>
                                        <li className='text-white opacity-50 p-2 pl-5 border-b text-sm  cursor-pointer hover:opacity-100
                                            lg:border-b-0 lg:p-2'>
                                            <Link to={"/about-us#aboutContent"} onClick={() => setOpenNav(prev => !prev)} className="lg:block lg:px-4 lg:py-1 lg:text-black ">{t("values")}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* admission */}
                            <li className=' Admission  text-white hover:text-[#ffcc00]  hover:pl-2 transition-all duration-300 ease-out 
                            lg:flex lg:items-center lg:justify-center lg:px-0 lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 lg:hover:pr-0 lg:hover:pl-0
                            lg:mr-3 rtl:lg:mr-0 xl:px-0 
                            xl:mr-5 rtl:xl:ml-5
                            '>
                                <a href="https://sms.tantaroyalschools.edu.eg/admission_webform" target='_blank'
                                    className={`block py-2.5 px-5 border-b border-b-[#43417d] 
                                    lg:text-black lg:border-b-0 lg:px-0  rtl:lg:gap-2
                                    xl:flex xl:items-center xl:px-0 xl:text-black xl:hover:pl-0 xl:hover:bg-transparent xl:hover:text-[#3c397e] xl:border-b-0 xl:hover:border-b-2
                                    ${darkMode ? "bg-[#091048] border-b-[#43417d] hover:text-[#f4af0f] hover:bg-[#3c397e95] lg:bg-transparent " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:bg-transparent"}
                                    `}>
                                    <FontAwesomeIcon icon={faUpRightFromSquare} className='lg:mr-2 rtl:lg:ml-2' /> {t("admission")} </a>
                            </li>

                            {/* faqs */}
                            <li className=' text-white faq 
                            lg:mr-3 rtl:lg:mr-0 
                            xl:mr-5 rtl:xl:ml-5
                            '>
                                <NavLink to={"faq"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className={({ isActive }) =>
                                    ` block border-b  py-2.5 px-5 w-full   hover:pl-6  transition-all duration-300 ease-in-out  
                                lg:flex lg:items-center lg:px-0 lg:text-black lg:hover:pl-0 lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 
                                xl:flex xl:items-center xl:px-0 xl:text-black xl:hover:pl-0 xl:hover:bg-transparent xl:hover:text-[#3c397e] xl:border-b-0 xl:hover:border-b-2
                                ${darkMode ? "bg-[#091048] border-b-[#43417d] hover:text-[#f4af0f] hover:bg-[#3c397e95] lg:bg-transparent " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:bg-transparent"} 
                                ${isActive ? ' text-yellow-400 bg-[#3c397e] lg:text-[#3c397e] lg:bg-transparent lg:border-b-2 lg:border-[#3c397e] xl:border-b-2' : ''}
                                ${isActive && darkMode ? 'text-[#f4af0f]' : ''}
                                `
                                } aria-current="page"><FontAwesomeIcon icon={faQuestion} className='lg:mr-2 rtl:lg:ml-2' /> {t("faq")} </NavLink>
                            </li>

                            {/* learning  */}
                            <li className='text-white 
                            lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 lg:hover:pr-0 lg:hover:pl-0
                            lg:mr-3
                            rtl:lg:mr-0                             
                            xl:mr-5 rtl:xl:ml-5
                            '>
                                <div className='flex flex-col justify-center items-center'>
                                    <NavLink onClick={() => { setOpenLearn(!openLearn)}}
                                    className={` py-2.5 px-5 border-b  flex justify-between items-center  w-full  hover:pl-6   transition-all duration-300 ease-out
                                        lg:flex lg:items-center lg:px-0 lg:text-black lg:hover:pl-0 lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 
                                        xl:flex xl:items-center xl:px-0 xl:text-black xl:hover:pl-0 xl:hover:bg-transparent xl:hover:text-[#3c397e] xl:border-b-0 xl:hover:border-b-2 
                                ${darkMode ? "bg-[#091048] border-b-[#43417d] hover:text-[#f4af0f] hover:bg-[#3c397e95] lg:bg-transparent " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:bg-transparent"}
                                `
                                    }>{t("learning")}
                                        <FontAwesomeIcon onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpenLearn(!openLearn); setOpenDropdown(false) ; setOpenGallery(false) ; setOpenBlog(false)  }} className=""
                                            icon={openLearn ? faChevronUp : faChevronDown} size="lg" />
                                    </NavLink>
                                    {/* Dropdown menu */}
                                    <div id="dropdownLearning" className={` lg:py-0 lg:text-sm lg:text-yellow-400 w-full transition-all duration-500 `}>
                                        <ul className={`w-full  transition-all duration-500
                                        lg:text-sm  lg:absolute lg:py-1 lg:max-w-40 lg:rounded-lg 
                                        ${darkMode ? "bg-[#3c397e95] border-b-[#43417d] hover:text-[#f4af0f]  lg:bg-[#f4af0f] " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:text-yellow-400 lg:bg-[#ffcc00]"}
                                        ${openLearn ? 'lg:top-14 max-h-[500px] opacity-100 ' : 'max-h-0 opacity-0 hiDDen lg:hidden'}`}>
                                            <li className='text-white opacity-50 p-2 pl-5 border-b text-sm  cursor-pointer hover:opacity-100 
                                            lg:border-b-0 lg:p-2'>
                                                <a className="lg:block lg:px-4 lg:py-2 lg:text-black" href="https://lms.tantaroyalschools.edu.eg/login/index.php" target='_blank'  >LMS</a>
                                            </li>
                                            <li className='text-white opacity-50 p-2 pl-5 border-b text-sm  cursor-pointer hover:opacity-100 
                                            lg:border-b-0 lg:p-2'>
                                                <a className="lg:block lg:px-4 lg:py-2 lg:text-black" href="https://sms.tantaroyalschools.edu.eg/admission_webform" target='_blank'  >SMS</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            {/* gallery */}
                            <li className='text-white 
                            lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 lg:hover:pr-0 lg:hover:pl-0
                            lg:mr-3
                            rtl:lg:mr-0                             
                            xl:mr-5 rtl:xl:ml-5
                            '>
                                <div className='flex flex-col justify-center items-center'>
                                    <NavLink to={"gallery"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className={({ isActive }) =>
                                        ` py-2.5 px-5 border-b  flex justify-between items-center  w-full  hover:pl-6   transition-all duration-300 ease-out
                                        lg:flex lg:items-center lg:px-0 lg:text-black lg:hover:pl-0 lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 
                                        xl:flex xl:items-center xl:px-0 xl:text-black xl:hover:pl-0 xl:hover:bg-transparent xl:hover:text-[#3c397e] xl:border-b-0 xl:hover:border-b-2 
                                ${darkMode ? "bg-[#091048] border-b-[#43417d] hover:text-[#f4af0f] hover:bg-[#3c397e95] lg:bg-transparent " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:bg-transparent"}
                                ${isActive ? ' text-yellow-400 bg-[#3c397e] lg:text-[#3c397e] lg:bg-transparent lg:border-b-2 lg:border-[#3c397e] xl:border-b-2' : ''}
                                ${isActive && darkMode ? 'text-[#f4af0f]' : ''}`
                                    }>{t("gallery")} <FontAwesomeIcon onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpenGallery(!openGallery) ; setOpenDropdown(false) ;setOpenLearn(false)  ; setOpenBlog(false) }} className=""
                                        icon={openGallery ? faChevronUp : faChevronDown} size="lg" /></NavLink>
                                    {/* Dropdown menu */}
                                    <div className={`lg:py-0 lg:text-sm lg:text-yellow-400 w-full  transition-all duration-500 ${openGallery ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 hiDDen lg:hidden'
                                        }`}>

                                        <ul className={`w-full  transition-all duration-500
                                        lg:text-sm  lg:absolute lg:py-1 lg:max-w-40 lg:rounded-lg 
                                        ${darkMode ? "bg-[#3c397e95] border-b-[#43417d] hover:text-[#f4af0f]  lg:bg-[#f4af0f] " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:text-yellow-400 lg:bg-[#ffcc00]"}
                                        ${openGallery ? 'lg:top-14 max-h-[500px] opacity-100 ' : 'max-h-0 opacity-0 hiDDen lg:hidden'}`}>
                                            <li className='text-white opacity-50 p-2 pl-5 border-b text-sm  cursor-pointer hover:opacity-100 
                                            lg:border-b-0 lg:p-2 '>
                                                <NavLink to={"/gallery/photos"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className="lg:block  lg:px-4 lg:py-2 lg:text-black ">{t("Photos")}</NavLink>
                                            </li>
                                            <li className='text-white opacity-50 p-2 pl-5 border-b text-sm  cursor-pointer hover:opacity-100 
                                            lg:border-b-0 lg:p-2'>
                                                <NavLink to={"/gallery/videos"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className="lg:block lg:px-4 lg:py-2 lg:text-black ">{t("Videos")}</NavLink>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </li>

                            {/* careers */}
                            <li className=' text-white careers
                            lg:mr-3 rtl:lg:mr-0
                            xl:mr-5 rtl:xl:ml-5
                            '>
                                <NavLink to={"careers"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className={({ isActive }) =>
                                    ` block border-b  py-2.5 px-5 w-full   hover:pl-6  transition-all duration-300 ease-in-out  
                                lg:flex lg:items-center lg:px-0 lg:text-black lg:hover:pl-0 lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 
                                xl:flex xl:items-center xl:px-0 xl:text-black xl:hover:pl-0 xl:hover:bg-transparent xl:hover:text-[#3c397e] xl:border-b-0 xl:hover:border-b-2
                                ${darkMode ? "bg-[#091048] border-b-[#43417d] hover:text-[#f4af0f] hover:bg-[#3c397e95] lg:bg-transparent " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:bg-transparent"} 
                                ${isActive ? ' text-yellow-400 bg-[#3c397e] lg:text-[#3c397e] lg:bg-transparent lg:border-b-2 lg:border-[#3c397e] xl:border-b-2' : ''}
                                ${isActive && darkMode ? 'text-[#f4af0f]' : ''}
                                `} aria-current="page">{t("Careers")}</NavLink>
                            </li>

                            <div className='xl:hidden hidden lg:block  '>
                                <button id="dropdownPointsLink" data-dropdown-toggle="dropdownPoints" className="flex cursor-pointer   text-black items-center  justify-between w-full py-2.5 px-5 border-b border-b-[#43417d]  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto  "><FontAwesomeIcon icon={faEllipsis} /></button>
                                {/* Dropdown menu */}
                                <div id="dropdownPoints" className={`z-10 hidden p-5 font-normal  divide-y divide-gray-100 rounded-lg shadow-sm w-44 
                                ${darkMode ? "lg:bg-[#f4af0f]" : "lg:bg-yellow-400"}
                                `}>
                                    <ul className="py-2 text-sm text-yellow-400 ">
                                        <li>
                                            <div>
                                                <NavLink to={"blog"} onClick={() => scrollToTop()} id="dropdownBlogLink" data-dropdown-toggle="dropdownBlog"
                                                    className="flex cursor-pointer hover:border-b-blue-800 text-black items-center justify-between w-full py-2.5 px-5 border-b border-b-[#43417d] rounded-sm 
                                                    lg:py-1  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto  "
                                                >{t("Blog")} <svg onClick={(e) => { e.preventDefault(); setOpenBlog(!openBlog); scrollToTop() }} className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                                    </svg></NavLink>
                                                {/* Dropdown menu */}
                                                <div id="dropdownBlog" className={`z-10 hidden transition-all duration-500 
                                                lg:py-0 lg:text-sm  
                                                ${darkMode ? "lg:bg-[#f4af0f]" : "lg:bg-yellow-400"}
                                                `}>
                                                    <ul className={`py-2 text-sm text-yellow-400 
                                                    lg:absolute  lg:rounded-lg lg:w-35 lg:-top-13 
                                                    ${isArabic ? 'lg:left-25' : 'lg:right-25'}
                                                    ${darkMode ? "lg:bg-[#f4af0f]" : "lg:bg-yellow-400"}
                                                    xl:hidden`}
                                                    >
                                                        <li>
                                                            <NavLink to={"blog/articles"} onClick={() => scrollToTop()} className="block px-4 py-2 text-black ">{t("Articles")}</NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"blog/news"} onClick={() => scrollToTop()} className="block px-4 py-2 text-black ">{t("News & Event")}</NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <NavLink to={"uniform"} onClick={() => scrollToTop()} className="block lg:py-1 px-4   rounded-sm md:bg-transparent md:text-black md:p-0"><FontAwesomeIcon icon={faPeopleGroup} /> {t("Uniform")} </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"contact-us"} onClick={() => scrollToTop()} className="block lg:py-1 px-4   rounded-sm md:bg-transparent md:text-black md:p-0"><FontAwesomeIcon icon={faHeadset} /> {t("contact")} </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* blog */}
                            <li className='text-white 
                            lg:hidden lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 lg:hover:pr-0 lg:hover:pl-0
                            lg:mr-3 rtl:lg:mr-0 
                            xl:mr-5 xl:block rtl:xl:ml-5
                            '>
                                <div className='flex flex-col justify-center items-center'>
                                    <NavLink to={"blog"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className={({ isActive }) =>
                                        ` py-2.5 px-5 border-b  flex justify-between items-center  w-full  hover:pl-6   transition-all duration-300 ease-out
                                        lg:flex lg:items-center lg:px-0 lg:text-black lg:hover:pl-0 lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 
                                        xl:flex xl:items-center xl:px-0 xl:text-black xl:hover:pl-0 xl:hover:bg-transparent xl:hover:text-[#3c397e] xl:border-b-0 xl:hover:border-b-2 
                                ${darkMode ? "bg-[#091048] border-b-[#43417d] hover:text-[#f4af0f] hover:bg-[#3c397e95] lg:bg-transparent " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:bg-transparent"}
                                ${isActive ? 'text-yellow-400 bg-[#3c397e] lg:text-[#3c397e] lg:bg-transparent lg:border-b-2 lg:border-[#3c397e] xl:border-b-2' : ''}
                                ${isActive && darkMode ? 'text-[#f4af0f]' : ''}`
                                    }>{t("Blog")}
                                        <FontAwesomeIcon onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpenBlog(!openBlog) ; setOpenDropdown(false) ;setOpenLearn(false) ; setOpenGallery(false)  }} className=""
                                            icon={openBlog ? faChevronUp : faChevronDown} size="lg" />
                                    </NavLink>
                                    {/* Dropdown menu */}
                                    <div className={`w-full  transition-all duration-500
                                    xl:py-0 xl:text-sm xl:text-yellow-400
                                    ${openBlog ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 hiDDen lg:hidden'
                                        }`}>
                                        <ul className={`w-full  transition-all duration-500
                                        lg:text-sm  lg:absolute lg:py-1 lg:max-w-40 lg:rounded-lg 
                                        ${darkMode ? "bg-[#3c397e95] border-b-[#43417d] hover:text-[#f4af0f]  lg:bg-[#f4af0f] " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:text-yellow-400 lg:bg-[#ffcc00]"}
                                        ${openBlog ? 'lg:top-14 max-h-[500px] opacity-100 ' : 'max-h-0 opacity-0 hiDDen lg:hidden'}`}>
                                            <li className='text-white opacity-50 p-2 pl-5 border-b text-sm  cursor-pointer hover:opacity-100 
                                            xl:border-b-0 xl:p-2 '>
                                                <NavLink to={"blog/articles"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className="xl:block xl:px-4 xl:py-2 xl:text-black xl:hover:text[#3c397e] ">{t("Articles")}</NavLink>
                                            </li>
                                            <li className='text-white opacity-50 p-2 pl-5 border-b text-sm  cursor-pointer hover:opacity-100 
                                            xl:border-b-0 xl:p-2 '>
                                                <NavLink to={"blog/news"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className="xl:block xl:px-4 xl:py-2 xl:text-black ">{t("News & Event")}</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/* uniform */}
                            <li className=' lg:hidden xl:block text-white uniform 
                            lg:mr-3
                            rtl:lg:mr-0                             
                            xl:mr-5 rtl:xl:ml-5
                            '>
                                <NavLink to={"uniform"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className={({ isActive }) =>
                                    ` block border-b  py-2.5 px-5 w-full   hover:pl-6  transition-all duration-300 ease-in-out  
                                lg:flex lg:items-center lg:px-0 lg:text-black lg:hover:pl-0 lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 
                                xl:flex xl:items-center xl:px-0 xl:text-black xl:hover:pl-0 xl:hover:bg-transparent xl:hover:text-[#3c397e] xl:border-b-0 xl:hover:border-b-2
                                ${darkMode ? "bg-[#091048] border-b-[#43417d] hover:text-[#f4af0f] hover:bg-[#3c397e95] lg:bg-transparent " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:bg-transparent"} 
                                ${isActive ? ' text-yellow-400 bg-[#3c397e] lg:text-[#3c397e] lg:bg-transparent lg:border-b-2 lg:border-[#3c397e] xl:border-b-2' : ''}
                                ${isActive && darkMode ? 'text-[#f4af0f]' : ''}
                                `} aria-current="page"><FontAwesomeIcon icon={faPeopleGroup} className='lg:mr-2' /> {t("Uniform")}</NavLink>
                            </li>

                            <div className='hidden xl:block xl:mr-0  rtl:xl:ml-5'>
                                <button id="dropdownPointLink" data-dropdown-toggle="dropdownPoint" className="flex cursor-pointer  hover:border-b-blue-800 text-black items-center justify-between w-full py-2.5 px-5 border-b border-b-[#43417d]  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto  "><FontAwesomeIcon icon={faEllipsis} /></button>
                                {/* Dropdown menu */}
                                <div id="dropdownPoint" className={`z-10 hidden p-5 font-normal  divide-y divide-gray-100 rounded-lg shadow-sm w-44 
                                ${darkMode ? "lg:bg-[#f4af0f]" : "lg:bg-yellow-400"}`}>
                                    <ul className={` py-2 text-sm text-yellow-400 `}>
                                        <li>
                                            <NavLink to={"contact-us"} className={({ isActive }) =>
                                                ` block border-b border-b-[#43417d] py-2.5 px-5 w-full hover:text-[#ffcc00]   hover:pl-6  transition-all duration-300 ease-in-out 
                                lg:flex lg:items-center lg:px-1 lg:text-black lg:hover:pl-1 lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0
                                ${isActive ? 'text-[#ffcc00] bg-[#3c397e] lg:text-[#3c397e] lg:bg-transparent ' : ''}`}>
                                                <FontAwesomeIcon icon={faHeadset} className='mr-2' /> {t("contact")} </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* contact */}
                            <li className='2xl:hidden lg:hidden  text-white contact
                            '>
                                <NavLink to={"contact-us"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className={({ isActive }) =>
                                    ` block border-b  py-2.5 px-5 w-full   hover:pl-6  transition-all duration-300 ease-in-out  
                                lg:flex lg:items-center lg:px-0 lg:text-black lg:hover:pl-0 lg:hover:bg-transparent lg:hover:text-[#3c397e] lg:border-b-0 lg:hover:border-b-2 
                                xl:flex xl:items-center xl:px-0 xl:text-black xl:hover:pl-0 xl:hover:bg-transparent xl:hover:text-[#3c397e] xl:border-b-0 xl:hover:border-b-2
                                ${darkMode ? "bg-[#091048] border-b-[#43417d] hover:text-[#f4af0f] hover:bg-[#3c397e95] lg:bg-transparent " : "bg-[#2b2873] border-b-[#43417d] hover:text-[#ffcc00]  lg:bg-transparent"} 
                                ${isActive ? ' text-yellow-400 bg-[#3c397e] lg:text-[#3c397e] lg:bg-transparent lg:border-b-2 lg:border-[#3c397e]' : ''}
                                ${isActive && darkMode ? 'text-[#f4af0f]' : ''}
                                `} aria-current="page"><FontAwesomeIcon icon={faHeadset} className='lg:mr-2' /> {t("contact")} </NavLink>
                            </li>
                        </ul>
                            {/* socials */}
                            <li className='mt-30 pt-7.5 sm:mt-100 md:mt-100 lg:hidden flex flex-col justify-center items-center translate-y-120  absolute sideSocials'>
                                <div className=' text-center mb-2 lg:hidden flex justify-center items-center gap-2'>
                                    <a className='bg-[#3c397e] p-3 text-white rounded-lg FBSIcon' href="https://www.facebook.com/trs2030/" target='_blank'><FontAwesomeIcon icon={faFacebookF} size="xl" className='FBIcon2' /></a>
                                    <a className='bg-[#3c397e] p-3 text-white rounded-lg LISIcon' href="https://www.linkedin.com/company/tanta-royal-international-schools/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} size="xl" className='LIIcon2' /></a>
                                    <a className='bg-[#3c397e] p-3 text-white rounded-lg INSIcon' href="https://www.facebook.com/trs2030/" target='_blank'><FontAwesomeIcon icon={faInstagram} size="xl" className='INIcon2' /></a>
                                    <a className='bg-[#3c397e] p-3 text-white rounded-lg WASIcon' href="https://api.whatsapp.com/send/?phone=201090196772&text&type=phone_number&app_absent=0" target='_blank'><FontAwesomeIcon icon={faWhatsapp} size="xl" className='WAIcon2' /></a>
                                </div>
                                <p className=' text-[10px] px-5 sm:px-15  text- text-white'> {t("footer")} </p>
                                <Link to={"/privacy-policy"} onClick={() => { setOpenNav(prev => !prev); scrollToTop() }} className={`text-white ${darkMode ? "hover:text-[#f4af0f]" : "hover:text-[#ffcc00]"} transition-all duration-500 ease-in-out`} > {t("policy")} </Link>
                            </li>
                    </div>
                </div >
            </nav >


            <div className={`fixed flex bottom-0  border-t border-white left-0 z-8 w-full justify-start items-center  overflow-hidden h-22 bg-[#2b2873] lg:hidden  transition-all duration-500 ease-in-out
            ${darkMode ? "bg-[#091048] " : "bg-[##2b2873]"}
            `}>
                <div className=" flex justify-center items-center  sm:gap-10 md:gap-18 w-full overflow-hidden h-22 font-medium ">
                    <NavLink to={""} onClick={() => scrollToTop()} className={({ isActive }) =>
                        `inline-flex flex-col items-center  justify-center h-full px-3.75 py-7 group transition-colors duration-500
                        ${isActive ? `${darkMode ? "text-[#f4af0f] " : "text-[#ffcc00] "}`
                            : `text-white hover:text-[#ffcc00] ${darkMode ? "hover:text-[#f4af0f]" : "hover:text-[#ffcc00]"}`
                        }`
                    }>
                        <FontAwesomeIcon icon={faHouse} className="text-lg sm:text-2xl  w-5 h-5 mb-2 text-current transition-colors duration-500" />

                        <span className="text-[12px] sm:text-lg  text-current transition-colors duration-500">{t("home")}</span>
                    </NavLink>

                    <a href="https://sms.tantaroyalschools.edu.eg/admission_webform" target='_blank'
                        className={`inline-flex px-3.75 py-7 flex-col items-center justify-center    
                    ${darkMode ? "text-white hover:text-[#f4af0f] " : "text-white hover:text-[#ffcc00] "}
                    `}>
                        <FontAwesomeIcon icon={faUpRightFromSquare} className="text-lg sm:text-2xl  w-5 h-5 mb-2  transition-colors duration-500" />
                        <span className="text-[12px] sm:text-lg  text-current transition-colors duration-500"> {t("admission")}</span>
                    </a>

                    <NavLink to={"faq"} onClick={() => scrollToTop()} className={({ isActive }) =>
                        `inline-flex flex-col items-center justify-center h-full px-3.75 py-7 group transition-colors duration-500
                        ${isActive ? `${darkMode ? "text-[#f4af0f] " : "text-[#ffcc00] "}`
                            : `text-white hover:text-[#ffcc00] ${darkMode ? "hover:text-[#f4af0f]" : "hover:text-[#ffcc00]"}`
                        }`
                    }>
                        <FontAwesomeIcon icon={faQuestion} className="text-lg sm:text-2xl  w-5 h-5 mb-2 text-current transition-colors duration-500" />
                        <span className="text-[12px] sm:text-lg  text-current transition-colors duration-500">{t("faq2")}</span>
                    </NavLink>
                    <a href="tel:17418" target='_blank'
                        className={`inline-flex flex-col items-center justify-center px-3.75 py-7 
                    ${darkMode ? "text-white hover:text-[#f4af0f] " : "text-white hover:text-[#ffcc00] "}
                    `}>
                        <FontAwesomeIcon icon={faPhoneVolume} className="text-lg sm:text-2xl  w-5 h-5 mb-2  transition-colors duration-500" />
                        <span className="text-[12px] sm:text-lg  text-current transition-colors duration-500"> {t("call")} </span>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=201090196772&text&type=phone_number&app_absent=0" target='_blank'
                        className={`inline-flex flex-col items-center justify-center px-3.75 py-7 
                    ${darkMode ? "text-white hover:text-[#f4af0f]" : "text-white hover:text-[#ffcc00] "}
                    `}>
                        <FontAwesomeIcon icon={faWhatsapp} className="text-lg sm:text-2xl  w-5 h-5 mb-2  transition-colors duration-300" />
                        <span className="text-[12px] sm:text-lg  text-current transition-colors duration-300">{t("whatsapp")}</span>
                    </a>
                </div>
            </div >


        </>
    )
}