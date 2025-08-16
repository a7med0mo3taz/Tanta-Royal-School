import React, { useEffect, useRef, useState } from 'react'
import { faHouse, faArrowRight, faArrowLeft, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import mainPhoto from "../../assets/Photos/pho/15.webp"
import tag from "../../assets/Photos/pho/svg.webp"
import international1 from "../../assets/Photos/pho/British-and-American-img-1.webp"
import international2 from "../../assets/Photos/pho/British-and-American-img-2.webp"
import internationalVideo from "../../assets/Photos/Vedios/British-American-tanta-2025.mp4"
import { useModeContext } from '../../context/modeContext';
import { useLanguageContext } from '../../context/langContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function American() {
    // page title
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("American")

    // img animation
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;


        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * -10;

        setStyle({
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
            transition: "transform 0.1s ease",
        });
    };
    const handleMouseLeave = () => {
        setStyle({
            transform: "rotateX(0deg) rotateY(0deg) scale(1)",
            transition: "transform 0.5s ease",
        });
    };

    // darkMode
    const { darkMode } = useModeContext();
    // Language
    const { t, currentLang } = useLanguageContext();

    const americanBenefits = [
        { key: "americanP0" },
        { key: "americanP1" },
        { key: "americanP2" },
        { key: "americanP3" },
        { key: "americanP4" },
        { key: "americanP5" },
        { key: "americanP6" },
    ];

    // lazy Loading
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
        return () => observer.disconnect();
    }, []);
    return (
        <div className='american Page'>
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
                        {t("AmericanTitle")}
                    </h1>
                    <div className="Breadcrumb text-white text-lg flex justify-center  ">
                        <Link to={"/"}><FontAwesomeIcon icon={faHouse} className=' my-auto ' /></Link>
                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}
                        <span className='font-almarai font-bold my-auto'>  {t("AmericanTitle")} </span>
                    </div>
                </div>


            </section>

            {/* section 1 */}
            <section className={` relative overflow-hidden min-h-[850px] transition-all duration-500 ease-in-out
                md:min-h-[800px] 
                lg:min-h-[616px]
                ${darkMode ? "bg-[#030712]" : "bg-white "}
                `}>
                <div className="container grid  mx-auto p-3  inset-0  z-20 absolute
                    lg:grid-cols-12 lg:p-5
                    xl:p-15
                    ">
                    <div className="Left col-span-12 
                        lg:col-span-6 lg:m-0 lg:my-auto
                        xl:col-span-5
                        ">
                        <div className="imgDiv flex justify-center items-center lg:justify-start  h-20">
                            <img src={tag} alt="School selection tag" className='w-18' loading='lazy' />
                        </div>

                        <div className=" flex flex-col gap-3 px-3 lg:p-0">
                            <h2 className={`mb-3 text-2xl text-center font-tajawal font-bold transition-all duration-500 ease-in-out
                                lg:text-start lg:text-[38px]
                                ${darkMode ? "text-white" : "text-black "}
                                `}> {t("AmericanEducation")}  <span className={` font-tajawal font-bold transition-all duration-500 ease-in-out
                                ${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "}
                                `}> {t("inEgypt")} </span> </h2>
                        </div>

                        <div className="mb-3">
                            <p className='text-[#aaaaaa] text-center font-tajawal font-bold w-full 
                                lg:text-start
                                '> {t("AmericanP1")} </p>
                        </div>
                        <div className="">
                            <p className='text-[#aaaaaa] text-center font-tajawal font-bold w-full 
                                lg:text-start
                                '> {t("AmericanP2")} </p>
                        </div>

                    </div>
                    <div className="right mx-auto col-span-12  relative max-w-[640px] gap-5 flex flex-col  justify-center items-center 
                        lg:col-span-7 lg:items-start">
                        <div className={` w-[250px]  h-[260px] top-10 left-5  rtl:w-[250px] rtl:h-[265px] rtl:top-15 rtl:right-7 rounded-lg absolute  transition-all duration-500 ease-in-out 
                                    sm:left-5 sm:top-17  rtl:sm:top-17
                                    md:w-[356px] md:h-[340px] rtl:md:w-[380px] rtl:md:h-[350px] md:top-23 md:right-10 rtl:md:top-25 rtl:md:right-5                                    lg:top-5 lg:left-5 lg:rounded-2xl  rtl:lg:top-5  rtl:lg:right-10 lg:mb-10
                                    xl:left-5 
                                    2xl:left-5 
                                    ${darkMode ? "bg-[#f4af0f]" : " bg-[#ffcc00] "}
                                    `}></div>
                        <div onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ perspective: "1000px" }}>
                            <img src={international2} style={style} alt="international" className="w-[250px] md:w-[350px] mx-auto h-full object-cover rounded-xl border" loading='lazy' />
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <section className={`transition-all duration-500 ease-in-out
            lg:py-20
            ${darkMode ? "bg-[#091048]" : "bg-[#2b2873] "}
            `}>
                <div className="container w-full  mx-auto  p-3    
                        lg:p-5
                        xl:px-30
                        ">
                    <div className="gap-5 flex flex-col justify-center items-center py-20 lg:py-0 lg:items-start ">
                        {americanBenefits.map((item) => (
                            <div key={item.key} className="flex flex-col gap-1 w-full  lg:px-5">
                                <p
                                    className="text-white text-lg text-center px-10 font-tajawal font-bold
                                    lg:px-0 lg:text-start"
                                >
                                    {t(item.key)}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>

            </section>

            {/* video section */}
            <section className={`${darkMode ? "bg-[#f4af0f]" : "bg-[#ffcc00] "} transition-all duration-500 ease-in-out`}>
                <div className="container mx-auto  p-7 md:p-10 xl:p-15">
                    <div className="internationalVideo" ref={videoRef}>
                        {isVisible && (
                            <video
                                className="w-full h-full object-contain rounded-2xl xl:object-cover"
                                playsInline
                                controls
                                controlsList="nodownload"
                                src={internationalVideo}
                                type="video/mp4"
                            ></video>
                        )}
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <section className={` relative mb-10 overflow-hidden min-h-[1050px] transition-all duration-500 ease-in-out
                                  lg:min-h-[616px]
                                  ${darkMode ? "bg-[#030712]" : "bg-white "}
                                  `}>
                <div className="container grid  mx-auto p-3  inset-0  z-20 absolute
                                      lg:grid-cols-12 lg:p-5
                                      xl:p-15
                                      ">
                    <div className="left my-20 mx-auto col-span-12  relative max-w-[640px] gap-5 flex flex-col  justify-center items-center 
                                          lg:col-span-6 lg:items-start
                                      ">
                        <div className={` w-[250px]  h-[260px] top-10 left-5  rtl:w-[250px] rtl:h-[265px] rtl:top-15 rtl:right-7 rounded-lg absolute  transition-all duration-500 ease-in-out 
                                                sm:left-5 sm:top-17  rtl:sm:top-17
                                                md:w-[356px] md:h-[340px] rtl:md:w-[380px] rtl:md:h-[350px] md:top-23 md:right-10 rtl:md:top-25 rtl:md:right-5                                    lg:top-5 lg:left-5 lg:rounded-2xl  rtl:lg:top-5  rtl:lg:right-10 lg:mb-10
                                                xl:left-5 
                                                2xl:left-5 
                                                ${darkMode ? "bg-[#f4af0f]" : " bg-[#ffcc00] "}
                                                `}></div>
                        <div onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ perspective: "1000px" }}
                            className="schoolImg   mx-auto ">
                            <img src={international1} style={style} alt="school" className="w-[250px] md:w-[350px] mx-auto h-full object-cover rounded-xl " loading='lazy' />
                        </div>

                    </div>
                    <div className="right m-5 col-span-12 
                                          lg:col-span-6 lg:m-0 lg:my-auto
                                          xl:col-span-5
                                          ">
                        <div className="imgDiv flex justify-center items-center lg:justify-start  h-20">
                            <img src={tag} alt="School selection tag" className='w-18' loading='lazy' />
                        </div>

                        <div className=" flex flex-col gap-3 px-3 lg:p-0">

                            <h3 className={` text-4xl text-center mb-5 font-tajawal font-bold transition-all duration-500 ease-in-out
                                                  lg:text-start
                                                  ${darkMode ? "text-white" : "text-black "}
                                                  `}>{t("Comparison")}  <span className={` font-tajawal font-bold transition-all duration-500 ease-in-out
                                                  ${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "}
                                                  `}>{t("EducationSystems")} </span> </h3>
                        </div>

                        <div className="  mb-5">
                            <p className={`${darkMode ? "text-white" : "text-black "} text-center font-tajawal font-bold w-full 
                                                  lg:text-start`}>
                                {t("Introduction")}
                            </p>
                        </div>
                        <div className="  mb-5">
                            <p className='text-[#aaaaaa] text-center font-tajawal font-bold w-full 
                                                  lg:text-start
                                                  '> {t("IntroductionP")} </p>
                        </div>

                    </div>
                </div>

            </section>

            {/* section 5 */}
            <section className={`transition-all duration-500 ease-in-out
                        lg:py-20
                        ${darkMode ? "bg-[#091048]" : "bg-[#2b2873] "}
                        `}>
                <div className="container grid  mx-auto p-3  inset-0  z-20 
                                      lg:grid-cols-12 lg:p-5
                                      xl:p-15
                                      ">
                    {/* left */}
                    <div className="left mb-20 mx-auto col-span-12  relative max-w-[640px] gap-5 flex flex-col  justify-center items-center 
                                          lg:col-span-6 lg:items-start
                                      ">
                        <div className="imgDiv flex justify-center items-center lg:justify-start  h-20">
                            <img src={tag} alt="School selection tag" className='w-18' loading='lazy' />
                        </div>

                        <div className=" flex flex-col gap-3 px-3 lg:p-0">

                            <h2 className={` text-white text-4xl text-center font-tajawal font-bold transition-all duration-500 ease-in-out
                                          lg:text-start`}>
                                {t("Affects")}
                            </h2>
                        </div>

                        {/* British System */}
                        <div className="  mb-1">
                            <h3 className='text-white text-2xl text-center font-tajawal font-bold w-full 
                                                  lg:text-start'>
                                {t("BritishSystem")}
                            </h3>
                        </div>
                        <div className="BritishSystem">
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal  w-full 
                                                  lg:text-start
                                                  '> {t("BritishSystem1P1")} </p>
                            </div>
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal  w-full 
                                                  lg:text-start
                                                  '> {t("BritishSystem1P2")} </p>
                            </div>
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal  w-full 
                                                  lg:text-start
                                                  '> {t("BritishSystem1P3")} </p>
                            </div>
                        </div>
                        {/* American System */}
                        <div className="  mb-1">
                            <h3 className='text-white text-2xl text-center font-tajawal font-bold w-full 
                                                  lg:text-start'>
                                {t("AmericanSystem")}
                            </h3>
                        </div>
                        <div className="AmericanSystem">
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal  w-full 
                                                  lg:text-start'>
                                    {t("AmericanSystem1P1")}
                                </p>
                            </div>
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal  w-full 
                                                  lg:text-start'>
                                    {t("AmericanSystem1P2")}
                                </p>
                            </div>
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal  w-full 
                                                  lg:text-start'>
                                    {t("AmericanSystem1P3")}
                                </p>
                            </div>
                        </div>



                    </div>
                    {/* Right */}
                    <div className="right m-5 col-span-12 
                                          lg:col-span-6 lg:m-0 lg:my-auto
                                          xl:col-span-5">
                        <div className="imgDiv flex justify-center items-center lg:justify-start  h-20">
                            <img src={tag} alt="School selection tag" className='w-18' loading='lazy' />
                        </div>

                        <div className=" flex flex-col gap-3 px-3 lg:p-0">

                            <h2 className={` text-white text-4xl text-center font-tajawal font-bold transition-all duration-500 ease-in-out
                                                  lg:text-start`}>
                                {t("CurriculumOverview")}
                            </h2>
                        </div>

                        {/* British System */}
                        <div className="  my-5">
                            <h3 className='text-white text-2xl text-center font-tajawal font-bold w-full 
                                                  lg:text-start'>
                                {t("BritishSystem")}
                            </h3>
                        </div>
                        <div className="BritishSystem">
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal  w-full 
                                                  lg:text-start'>
                                    {t("BritishSystem2P1")}
                                </p>
                            </div>
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal  w-full 
                                                  lg:text-start'>
                                    {t("BritishSystem2P2")}
                                </p>
                            </div>
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal  w-full 
                                                  lg:text-start'>
                                    {t("BritishSystem2P3")}
                                </p>
                            </div>
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal  w-full 
                                                  lg:text-start'>
                                    {t("BritishSystem2P4")}
                                </p>
                            </div>
                        </div>
                        {/* American System */}
                        <div className="  mb-5">
                            <h3 className='text-white text-2xl text-center font-tajawal font-bold w-full 
                                                  lg:text-start'>
                                {t("AmericanSystem")}
                            </h3>
                        </div>
                        <div className="AmericanSystem">
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal w-full 
                                                  lg:text-start'>
                                    {t("AmericanSystem2P1")}
                                </p>
                            </div>
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal w-full 
                                                  lg:text-start'>
                                    {t("AmericanSystem2P2")}
                                </p>
                            </div>
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal w-full 
                                                  lg:text-start'>
                                    {t("AmericanSystem2P3")}
                                </p>
                            </div>
                            <div className="  mb-5">
                                <p className='text-white text-center font-tajawal w-full 
                                                  lg:text-start'>
                                    {t("AmericanSystem2P4")}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* section 6 */}
            <section>
                <section className={`pb-40 lg:pb-10  transition-all duration-500 ease-in-out  
                                ${darkMode ? "bg-[#69686f]" : "bg-[#e8e7f0] "}
                                `}>
                    <div className="container grid grid-cols-12 items-center mx-auto p-3  inset-0  z-20 
                                    lg:grid-cols-12 lg:p-5
                                    2xl:py-15 2xl:px-20
                                    
                                    ">
                        <div className="icon flex justify-center mx-auto  items-center col-span-12 mt-10 lg:col-span-1 lg:mt-0">
                            <div className={`msgIcon max-h-[120px]   mx-auto flex justify-center items-center text-[20px] p-5 transition-all duration-500 ease-in-out rounded-2xl
                                                lg:col-span-1 lg:m-0
                                                xl:col-span-1 xl:m-0
                                                2xl:col-span-1
                                                ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048] " :
                                    "text-[#091048] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"}
                                                `}>
                                <FontAwesomeIcon icon={faRectangleList} size="2xl" />
                            </div>
                        </div>
                        <div className="left mx-auto  col-span-12 gap-1 flex flex-col  justify-center items-center
                                        lg:col-span-8
                                        xl:col-span-7
                                        2xl:col-span-11 2xl:items-start 2xl:flex-wrap
                                    ">
                            <div className="flex flex-col gap-1">
                                <h2 className='text-black text-[40px] text-center font-tajawal font-bold
                                                lg:text-start
                                                '> {t("Choosing")}
                                    <span className={` font-tajawal font-bold transition-all duration-500 ease-in-out
                                                ${darkMode ? "text-[#24246d]" : " text-[#333399] "}
                                                `}> {t("RightSystem")} </span> </h2>
                            </div>

                            <div className="mb-1">
                                <p className='text-black text-center font-tajawal font-bold w-full 
                                                lg:text-start'>
                                    {t("RightSystemP1")}
                                </p>
                            </div>
                            <div className="mb-1">
                                <p className='text-black text-center font-tajawal font-bold w-full 
                                                lg:text-start'>
                                    {t("RightSystemP2")}
                                </p>
                            </div>
                            <div className="mb-1">
                                <p className='text-black text-center font-tajawal font-bold w-full 
                                                lg:text-start'>
                                    {t("RightSystemP3")}
                                </p>
                            </div>
                            <div className="mb-1">
                                <p className='text-black text-center font-tajawal font-bold w-full 
                                                lg:text-start'>
                                    {t("RightSystemP4")}
                                </p>
                            </div>
                            <div className="mb-1">
                                <p className='text-black text-center font-tajawal font-bold w-full 
                                                lg:text-start'>
                                    {t("RightSystemP5")}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />


        </div>
    )
}
