import React, { useEffect, useRef, useState } from 'react'
import { faHouse, faArrowRight, faArrowLeft, faEnvelope, faPhoneVolume, } from '@fortawesome/free-solid-svg-icons';
import mainPhoto from "../../assets/Photos/pho/15.webp"
import tag from "../../assets/Photos/pho/svg.webp"
import school from "../../assets/Photos/pho/16.webp"
import NationalVideo from "../../assets/Photos/Vedios/home.mp4"
import { useModeContext } from '../../context/modeContext';
import { useLanguageContext } from '../../context/langContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function National() {
    // page title
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("National")

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

    const NationalBenefits = [
        { key: "nationalP0" },
        { key: "nationalP1" },
        { key: "nationalP2" },
        { key: "nationalP3" },
        { key: "nationalP4" },
        { key: "nationalP5" },
        { key: "nationalP6" },
        { key: "nationalP7" },
        { key: "nationalP8" },
        { key: "nationalP9" },
        { key: "nationalP10" },
        { key: "nationalP11" },
        { key: "nationalP12" },
        { key: "nationalP13" },
        { key: "nationalP14" },
        { key: "nationalP15" },
        { key: "nationalP16" },
        { key: "nationalP17" },
        { key: "nationalP18" },
        { key: "nationalP19" },
        { key: "nationalP20" },
        { key: "nationalP21" },
        { key: "nationalP22" },
        { key: "nationalP23" },
        { key: "nationalP24" },
        { key: "nationalP25" },
        { key: "nationalP26" },
        { key: "nationalP27" },
        { key: "nationalP28" },
        { key: "nationalP29" },
        { key: "nationalP30" },
        { key: "nationalP31" },
        { key: "nationalP32" },
        { key: "nationalP33" },
        { key: "nationalP34" },
        { key: "nationalP35" },
        { key: "nationalP36" },
        { key: "nationalP37" },
        { key: "nationalP38" },
        { key: "nationalP39" },
        { key: "nationalP40" },
        { key: "nationalP41" },
        { key: "nationalP42" },
        { key: "nationalP43" },
        { key: "nationalP44" },
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
        <div className='National Page'>
            {/* heading section */}
            <section id='headSection' className={`relative w-full overflowHidden  h-[500px] transition-all duration-500 ease-in-out  ${darkMode ? "bg-[#030712]" : "bg-white "}
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
                        {t("NationalTitle")}
                    </h1>
                    <div className="Breadcrumb text-[#aaaaaa] text-lg flex justify-center  ">
                        <Link to={"/"}><FontAwesomeIcon icon={faHouse} className=' my-auto ' /></Link>
                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}
                        <span className='font-almarai font-bold my-auto'>  {t("NationalTitle")} </span>
                    </div>
                </div>


            </section>

            {/* section 1 */}
            <section className={` relative overflow-hidden min-h-[1050px] transition-all duration-500 ease-in-out
                md:min-h-[900px] 
                lg:min-h-[600px]
                ${darkMode ? "bg-[#030712]" : "bg-white "}
                `}>
                <div className="container grid max-h-[500px] mx-auto p-3  inset-0  z-20 absolute
                    lg:grid-cols-12 lg:p-5
                    xl:py-15 xl:px-30
                    ">
                    <div className="Left col-span-12 mb-10
                        lg:col-span-6 lg:m-0 lg:my-auto
                        xl:col-span-5
                        ">
                        <div className="imgDiv flex justify-center items-center lg:justify-start  h-20">
                            <img src={tag} alt="School selection tag" className='w-18' loading='lazy' />
                        </div>

                        <div className=" flex flex-col gap-3 px-3 lg:p-0">
                            <h2 className={` text-[38px] text-center font-tajawal font-bold transition-all duration-500 ease-in-out
                                lg:text-start
                                ${darkMode ? "text-white" : "text-black "}
                                `}> {t("NationalSchools")}  <span className={` font-tajawal font-bold transition-all duration-500 ease-in-out
                                ${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "}
                                `}> {t("inEgypt")} </span> </h2>
                        </div>

                        <div className="">
                            <p className='text-[#aaaaaa] text-center font-tajawal font-bold w-full 
                                lg:text-start
                                '> {t("NationalP1")} </p>
                        </div>

                    </div>
                    <div className="right mx-auto col-span-12  relative max-w-[640px] gap-5 flex flex-col  justify-center items-center 
                        lg:col-span-7 lg:items-start">
                        <div className={` w-full h-[400px] rounded-lg absolute top-8  right-8 rtl:top-8 rtl:-right-5 transition-all duration-500 ease-in-out
                        md:top-15 md:right-10 rtl:md:top-17 rtl:md:-right-10
                        lg:top-10 lg:rounded-2xl  rtl:lg:top-7  rtl:lg:-right-10 
                        ${darkMode ? "bg-[#f4af0f]" : " bg-[#ffcc00] "}
                        `}></div>
                        <div onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ perspective: "1000px" }}>
                            <img src={school} style={style} alt="international" className="w-full h-full object-cover rounded-xl border" loading='lazy' />
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
                        {NationalBenefits.map((item) => (
                            <div key={item.key} className="flex flex-col gap-1 w-full  ">
                                <p
                                    className="text-[#aaaaaa] text-lg text-center px-10 font-tajawal font-bold
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
                    <div className="NationalVideo" ref={videoRef}>
                        {isVisible && (
                            <video
                                className="w-full h-full object-contain rounded-2xl xl:object-cover"
                                playsInline
                                controls
                                controlsList="nodownload"
                                src={NationalVideo}
                                type="video/mp4"
                            ></video>
                        )}
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <section
                className={`py-10 transition-all duration-500 ease-in-out ${darkMode ? "bg-[#69686f]" : "bg-[#e8e7f0]"
                    }`}
                aria-labelledby="contact-section-heading"
            >
                <div
                    className="container grid mx-auto p-3 inset-0 z-20 
                            lg:grid-cols-12 lg:p-5
                            2xl:py-15 2xl:px-20"
                >
                    {/* Icon */}
                    <div
                        className={`msgIcon max-h-[120px] mx-auto flex justify-center items-center text-[20px] p-5 transition-all duration-500 ease-in-out rounded-2xl
                    lg:col-span-1 lg:m-0
                    xl:col-span-1 xl:m-0
                    2xl:col-span-1
                    ${darkMode
                                ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]"
                                : "text-[#091048] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"
                            }`}
                        aria-hidden="true"
                    >
                        <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                    </div>

                    {/* Text Content */}
                    <div
                        className="left mx-auto max-w-[640px] gap-5 flex flex-col justify-center items-center
                            lg:col-span-8
                            xl:col-span-7
                            2xl:col-span-6 2xl:items-start 2xl:flex-wrap"
                    >
                        <div className="flex flex-col gap-1">
                            <h2
                                id="contact-section-heading"
                                className="text-black text-[40px] text-center font-tajawal font-bold lg:text-start"
                            >
                                {t("contactUs")}{" "}
                                <span
                                    className={`font-tajawal font-bold transition-all duration-500 ease-in-out ${darkMode ? "text-[#24246d]" : "text-[#333399]"
                                        }`}
                                >
                                    {t("info")}
                                </span>
                            </h2>
                        </div>

                        <div className="mb-5">
                            <p
                                className="text-black text-center font-tajawal font-bold w-full lg:text-start"
                                aria-label={t("contactP")}
                            >
                                {t("contactP")}
                            </p>
                        </div>
                    </div>

                    {/* Contact Button */}
                    <div
                        className="right m-5 mx-auto 
                            lg:col-span-3 lg:m-0 lg:my-auto lg:mx-auto
                            xl:col-span-4 xl:mx-auto
                            2xl:col-span-5 2xl:mx-auto"
                    >
                        <div className="contactBtn">
                            <Link
                                to="contact-us"
                                className={`p-5 font-tajawal font-bold rounded-xl transition-all duration-500 ease-in-out
                        ${darkMode
                                        ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]"
                                        : "text-[#091048] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"
                                    }`}
                                aria-label={`${t("contctBtn")} - ${t("contactUs")}`}
                            >
                                <FontAwesomeIcon
                                    icon={faPhoneVolume}
                                    className="pr-3 rtl:pl-2"
                                    aria-hidden="true"
                                />
                                {t("contctBtn")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />


        </div>
    )
}
