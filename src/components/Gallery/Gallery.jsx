import React, { useEffect } from 'react'
import { faHouse, faArrowRight, faArrowLeft, } from '@fortawesome/free-solid-svg-icons';
import mainPhoto from "../../assets/Photos/pho/15.webp"
import newYearParty from "../../assets/Photos/gellary/New-Year-party-video-1-768x768.webp"
import partyPhotos from "../../assets/Photos/gellary/glary-v-4-768x768.webp"
import { useModeContext } from '../../context/modeContext';
import { useLanguageContext } from '../../context/langContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Footer from '../Footer/Footer';

export default function Gallery() {
    // page title
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Gallery")
    // darkMode
    const { darkMode } = useModeContext();
    // Language
    const { t, currentLang } = useLanguageContext();

    return (
        <div className={` GalleryPage  ${darkMode ? "bg-[#030712]" : "bg-white "}  transition-all duration-500 ease-in-out`}>
            {/* heading section */}
            <section className={`relative w-full overflowHidden  h-[500px] transition-all duration-500 ease-in-out  ${darkMode ? "bg-[#030712]" : "bg-white "}
            md:h-[700px]
            xl:h-[515px] `}>
                <img src={mainPhoto} alt="International School Main Building" className="mainPhoto absolute w-full object-contain h-[550px] md:h-[800px] xl:object-cover xl:h-[515px]" loading="lazy" />



                {/* Heading */}

                <div
                    className="relative z-11 flex flex-col justify-center items-center text-center top-62
                    md:top-80
                    lg:top-70
                    "
                >
                    <h1
                        className="font-almarai font-bold text-3xl rtl:text-4xl mb-7 text-[#f4af0f]
                        sm:text-5xl rtl:sm:text-5xl
                        lg:text-5xl rtl:lg:text-6xl
                        xl:text-6xl rtl:xl:text-7xl
                    ">
                        {t("galleryTitle")}
                    </h1>
                    <div className="Breadcrumb text-white text-lg flex justify-center  ">
                        <Link to={"/"}><FontAwesomeIcon icon={faHouse} className=' my-auto ' /></Link>
                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}
                        <h3 className='font-almarai font-bold my-auto'>  {t("galleryTitle")} </h3>
                    </div>
                </div>
            </section>



            <section className={`relative   transition-all duration-500 ease-in-out`}>
                <div className="container grid  mx-auto p-5  inset-0  z-20 relative mb-20
                                        lg:px-5
                                        xl:px-15
                                        ">
                    <div className="  mx-auto  max-w-[853px] relative  gap-3   ">
                        <div className="flex flex-col">
                            <div className="photos flex flex-col justify-center items-center gap-5 mb-10">
                                <Link to={"/gallery/photos"}
                                    className="font-almarai font-bold text-3xl rtl:text-4xl mb-7 text-[#f4af0f]
                            sm:text-5xl rtl:sm:text-5xl
                            md:text-5xl rtl:md:text-4xl
                            xl:text-4xl rtl:xl:text-5xl
                    ">
                                    {t("photosTitle")}
                                </Link>
                                <div className="photosImg flex justify-center items-center gap-5" >
                                    <Link to={"/gallery/photos/new-years-party-2025"}
                                        className="relative group  col-span-12 lg:col-span-6 mx-auto ">
                                        <img src={partyPhotos} alt="newYearParty" className={`w-[395px] mx-auto h-full object-cover rounded-xl border-5 
                                ${darkMode ? "border-[#f4af0f]" : "border-[#2b2873]"}`} />
                                        <div className="bg-overlay flex flex-col justify-center items-center gap-20  bg-[#2b2873]/0 translate-y-5 rounded-lg h-full absolute inset-0 transition-all duration-500 ease-in-out  group-hover:translate-y-0 group-hover:bg-[#2b2873]/80">
                                            <h3 className='text-[#f4af0f]/0 group-hover:text-white text-xl font-almarai font-bold transition-all duration-500 ease-in-out'>  {t("partyPhotos")} </h3>
                                            {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className="text-[#f4af0f]/0 text-3xl group-hover:text-[#f4af0f] transition-all duration-500 ease-in-out" />) :
                                                (<FontAwesomeIcon icon={faArrowLeft} className="text-[#f4af0f]/0 text-3xl group-hover:text-[#f4af0f] transition-all duration-500 ease-in-out" />)}
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="videos photos flex flex-col justify-center items-center gap-5">
                                <Link to={"/gallery/videos"}
                                    className="font-almarai font-bold text-3xl rtl:text-4xl mb-7 text-[#f4af0f]
                                    sm:text-5xl rtl:sm:text-5xl
                                    md:text-5xl rtl:md:text-4xl
                                    xl:text-4xl rtl:xl:text-5xl
                    ">
                                    {t("videoTitle")}
                                </Link>
                                <div className="videosImg flex justify-center items-center gap-5">
                                    <Link to={""}
                                        className="relative group col-span-12 lg:col-span-6  mx-auto ">
                                        <img src={newYearParty} alt="newYearParty" className={`w-[395px] mx-auto h-full object-cover rounded-xl border-5 
                                ${darkMode ? "border-[#f4af0f]" : "border-[#2b2873]"}`} />
                                        <div className="bg-overlay flex flex-col justify-center items-center gap-20  bg-[#2b2873]/0 translate-y-5 rounded-lg h-full absolute inset-0 transition-all duration-500 ease-in-out  group-hover:translate-y-0 group-hover:bg-[#2b2873]/80">
                                            <h3 className='text-[#f4af0f]/0 group-hover:text-white text-xl font-almarai font-bold transition-all duration-500 ease-in-out'>  {t("partyVideo")} </h3>
                                            {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className="text-[#f4af0f]/0 text-3xl group-hover:text-[#f4af0f] transition-all duration-500 ease-in-out" />) :
                                                (<FontAwesomeIcon icon={faArrowLeft} className="text-[#f4af0f]/0 text-3xl group-hover:text-[#f4af0f] transition-all duration-500 ease-in-out" />)}
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </section>



            <Footer />
        </div>
    )
}
