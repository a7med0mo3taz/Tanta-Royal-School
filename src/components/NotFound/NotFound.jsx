import React, { useEffect } from 'react'
import "./NotFound.css"
import { useModeContext } from '../../context/modeContext';
import { useLanguageContext } from '../../context/langContext';
import mainPhoto from "../../assets/Photos/pho/15.webp"
import { faArrowLeft, faArrowRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function NotFound() {
    // page title
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Not Found Page")

    // darkMode
    const { darkMode } = useModeContext();
    // Language
    const { t, currentLang } = useLanguageContext();




    return (
        <div className={`PolicyPage h-full ${darkMode ? "bg-[#030712]" : "bg-white "}  transition-all duration-500 ease-in-out`}>
            {/* heading section */}
            <section id='headSection' className={`relative w-full overflowHidden  h-[500px] transition-all duration-500 ease-in-out  ${darkMode ? "bg-[#030712]" : "bg-white "}
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
                        md:text-4xl rtl:md:text-5xl
                        lg:text-5xl rtl:lg:text-6xl
                        xl:text-6xl rtl:xl:text-7xl
                    ">
                        {t("notFoundTitle")}
                    </h1>
                    <div className="Breadcrumb text-white text-lg flex justify-center  ">
                        <Link to={"/"}><FontAwesomeIcon icon={faHouse} className=' my-auto ' /></Link>
                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}
                        <span className='font-almarai font-bold my-auto'>  {t("notFoundTitle")} </span>
                    </div>
                </div>
            </section>

            <section className={`transition-all pb-30 duration-500 ease-in-out  ${darkMode ? "bg-[#030712]" : "bg-white "}`}>
                <div className="container w-full flex justify-center items-center mx-auto  xl:px-30">
                    <h1 class="flex flex-col justify-center items-center">
                        <h2
                            className="font-almarai font-bold errorNum mb-5 text-[200px] sm:text-[200px] md:text-[300px] lg:text-[400px] transition-all duration-500 ease-in-out"
                            style={{
                                backgroundImage: darkMode
                                    ? "linear-gradient(#ffcc00 0%, transparent 75%)"
                                    : "linear-gradient(#6a67ce 0%, transparent 75%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                color: "transparent"
                            }}
                        >
                            404
                        </h2>

                        <p className={`errorMsg ${darkMode ? "text-white" : "text-black"} transition-all duration-500 ease-in-out`}> {t("PageNotFound")} </p>
                        <Link to={"/"} className={`transition-all duration-500 ease-in-out p-5 rounded-xl mt-7 font-tajawal font-bold
                                ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048] " :
                                "text-[#2b2873] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"}`}>
                            {t("homeBtn")}
                        </Link>
                    </h1>
                </div>
            </section>

            <Footer />

        </div>
    )
}


