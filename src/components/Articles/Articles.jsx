import React, { useEffect, useState } from 'react'

import { faHouse, faArrowRight, faArrowLeft, faLink } from '@fortawesome/free-solid-svg-icons';
import mainPhoto from "../../assets/Photos/pho/15.webp"
import blogImg2 from "../../assets/Photos/pho/blig-v-3.webp"
import blogImg3 from "../../assets/Photos/pho/blig-v-2.webp"
import blogImg4 from "../../assets/Photos/pho/blig-v-1.webp"
import { useModeContext } from '../../context/modeContext';
import { useLanguageContext } from '../../context/langContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function Articles() {
    // page title
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Articles")


    // darkMode
    const { darkMode } = useModeContext();
    // Language
    const { t, currentLang } = useLanguageContext();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    // blogs Details
    const blogs = [

        {
            img: blogImg2,
            titleKey: "blog2Title",
            textKey: "blog2P",
            date: "February 25, 2025",
            link: "",
        },
        {
            img: blogImg3,
            titleKey: "blog3Title",
            textKey: "blog3P",
            date: "February 25, 2025",
            link: "",
        },
        {
            img: blogImg4,
            titleKey: "blog4Title",
            textKey: "blog4P",
            date: "February 25, 2025",
            link: "",
        },
    ];


    return (
        <div className={`ArticlesPage h-full ${darkMode ? "bg-[#030712]" : "bg-white "}  transition-all duration-500 ease-in-out`}>
            {/* heading section */}
            <section id='mainSection' className={`relative w-full overflowHidden  h-[500px] transition-all duration-500 ease-in-out  ${darkMode ? "bg-[#030712]" : "bg-white "}
            md:h-[700px]
            xl:h-[515px] `}>
                <img src={mainPhoto} alt="International School Main Building" className="mainPhoto absolute w-full object-contain h-[600px] md:h-[800px] xl:object-cover xl:h-[515px]" loading="lazy" />



                {/* Heading */}

                <div
                    className="relative z-11 flex flex-col justify-center items-center text-center top-62
                    md:top-80
                    lg:top-70
                    "
                >
                    <h1
                        className="font-almarai font-bold text-3xl rtl:text-4xl mb-7 text-[#f4af0f]
                        md:text-4xl rtl:md:text-5xl
                        lg:text-5xl rtl:lg:text-6xl
                        xl:text-6xl rtl:xl:text-7xl
                    ">
                        {t("Articles")}
                    </h1>
                    <div className="Breadcrumb text-[#aaaaaa] text-lg flex justify-center  ">
                        <Link to={"/"}><FontAwesomeIcon icon={faHouse} className=' my-auto ' /></Link>
                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}

                        <Link to={"/blog"} className='font-almarai font-bold my-auto'>  {t("BlogTitle")} </Link>

                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}

                        <span className='font-almarai font-bold my-auto'>  {t("Articles")} </span>
                    </div>
                </div>


            </section>

            <section className={`relative min-h-screen  transition-all duration-500 ease-in-out`}>
                <div className="container grid  mx-auto p-5  inset-0  z-20 relative
                            lg:grid-cols-12  lg:px-5
                            xl:px-15
                            ">
                    <div className="left mx-auto col-span-12  relative  gap-3 flex flex-col  justify-center items-center 
                                    lg:col-span-6 lg:row-span-1 lg:items-start rtl:lg:col-span-6
                                    xl:col-span-6 
                                    2xl:col-span-7 
                                    ">

                        <div className={`blogCategory ${darkMode ? "text-[#f4af0f] bg-[#606060] " : "text-[#2b2873] bg-[#fcfcfc]"}  text-[32px] font-tajawal font-bold  border border-[#f1f1f1] mb-10  p-10 w-full  transition-all duration-500 ease-in-out  `}>
                            {t("Articles")}
                        </div>

                        {blogs.map((blog, index) => (
                            <div key={index} className={`blog${index + 1} mb-10 border-b border-[#e4e4e4]`}>


                                <div className="flex justify-center items-center">
                                    <Link to={blog.link} className="relative group mb-5 mx-auto">
                                        <img
                                            src={blog.img}
                                            alt="blogImg"
                                            className={`w-[840px] mx-auto h-[324px] object-cover rounded-xl border-5 
                        lg:h-[524px]
                        ${darkMode ? "border-[#f4af0f]" : "border-[#2b2873]"}`}
                                        />
                                        <div className="bg-overlay flex flex-col justify-center items-center gap-20 bg-[#2b2873]/0 translate-y-5 rounded-lg h-full absolute inset-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:bg-[#2b2873]/80">
                                            <FontAwesomeIcon
                                                icon={faLink}
                                                className="text-[#f4af0f]/0 text-3xl group-hover:bg-[#f4af0f] group-hover:text-[#091048] group-hover:p-5 group-hover:rounded-2xl transition-all duration-500 ease-in-out"
                                            />
                                        </div>
                                    </Link>
                                </div>


                                <h1 className={`${darkMode ? "text-[#f4af0f]" : "text-[#2b2873]"} mb-5 text-[32px] font-tajawal font-bold transition-all duration-500 ease-in-out text-center lg:text-start`}>
                                    {t(blog.titleKey)}
                                </h1>


                                <div className={`${darkMode ? "bg-[#f4af0f] text-[#091048]" : "bg-[#ffcc00] text-[#2b2873]"} mb-5 text-sm w-fit font-tajawal p-3 rounded-2xl transition-all duration-500 ease-in-out mx-auto lg:mx-0`}>
                                    {blog.date}
                                </div>


                                <p className={`text-[#606060] text-[18px] font-tajawal mb-5 transition-all duration-500 ease-in-out max-w-[826px] text-center lg:text-start`}>
                                    {t(blog.textKey)}
                                </p>


                                <Link to={blog.link} className={`mb-10 w-fit mx-auto lg:mx-0 bg-[#eeeef4] p-3 rounded-2xl flex ${darkMode ? "hover:bg-[#f4af0f]" : "hover:bg-[#2b2873]"} hover:text-white transition-all duration-500 ease-in-out`}>
                                    <h2 className='transition-all duration-500 ease-in-out hover:pr-3 rtl:hover:pl-3 rtl:hover:pr-0'>
                                        {t("readMoreBtn")}
                                    </h2>
                                    <p>
                                        {currentLang === 'en' ? (
                                            <FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />
                                        ) : (
                                            <FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />
                                        )}
                                    </p>
                                </Link>
                            </div>
                        ))}

                    </div>

                    <div className="right my-5 col-span-12 relative mb-10 top-0 rtl:mx-auto
    lg:col-span-6 lg:m-0 lg:mt-20 rtl:lg:col-span-6 lg:mx-auto 
    xl:col-span-6 xl:mx-auto 
    2xl:col-span-5">

                        <div className="font-tajawal font-bold border rounded-2xl mb-10 bg-white w-full ">

                            {/* search */}
                            <div className="search flex flex-wrap justify-center items-center p-5 sm:p-10 gap-3">
                                <input
                                    type="text"
                                    className="p-3 w-full sm:w-auto flex-1 ring ring-[#2b2873] focus:ring-amber-300 outline-none rounded-lg"
                                    placeholder={t("search")}
                                />
                                <div className={`searchBtn ${darkMode ?
                                    "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]" :
                                    "text-[#091048] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"} 
                p-4 cursor-pointer rounded-2xl transition-all duration-500 ease-in-out`}>
                                    {t("searchBtn")}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className={`${darkMode ? "text-[#f4af0f] bg-[#091048]" :
                                "text-[#ffcc00] bg-[#2b2873]"} w-full p-5 sm:p-7 transition-all duration-500 ease-in-out`}>
                                {t("Categories")}
                            </div>

                            {/* list */}
                            <ul className="py-10 px-3 text-sm decoration-dotted">
                                <li className='decoration-dotted'>
                                    <Link to={"/blog/articles"} onClick={() => scrollToTop()} className="block font-tajawal font-bold border-b border-[#e4e4e4] px-4 py-2 text-black">
                                        {t("blogArticles")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/blog/news"} onClick={() => scrollToTop()} className="block font-tajawal font-bold px-4 border-b border-[#e4e4e4] py-2 text-black">
                                        {t("blogNews")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/blog/tutorials"} onClick={() => scrollToTop()} className="block font-tajawal font-bold px-4 py-2 text-black">
                                        {t("blogTutorials")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </section>
            <Footer />
        </div>
    )
}
