import React, { useEffect, useState } from 'react';
import './Home.css';
import "./animations.css"
import { motion } from "framer-motion";
import { faPlus, faPlay, faXmark, faAward, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { useInView } from 'react-intersection-observer';
import brain from "../../assets/Photos/pho/18.png"
import learn from "../../assets/Photos/pho/19.svg"
import edu from "../../assets/Photos/pho/20.svg"
import sport from "../../assets/Photos/pho/21.svg"
import ved from "../../assets/Photos/Vedios/Tanta-Royal-Schools-v2.mp4"
import tag from "../../assets/Photos/pho/svg.webp"
import stu from "../../assets/Photos/pho/22.webp"
import frontPH from "../../assets/Photos/pho/17.webp"
import aboutVed from "../../assets/Photos/Vedios/home.mp4"
import founder from "../../assets/Photos/pho/Founder.webp"
import img1 from "../../assets/Photos/pho/1.webp"
import img2 from "../../assets/Photos/pho/2.webp"
import img3 from "../../assets/Photos/pho/3.webp"
import img4 from "../../assets/Photos/pho/4.webp"
import img5 from "../../assets/Photos/pho/5.webp"
import img6 from "../../assets/Photos/pho/6.webp"
import img7 from "../../assets/Photos/pho/7.webp"
import img8 from "../../assets/Photos/pho/8.webp"
import img9 from "../../assets/Photos/pho/9.webp"
import img10 from "../../assets/Photos/pho/10.webp"
import img11 from "../../assets/Photos/pho/11.webp"
import img12 from "../../assets/Photos/pho/12.webp"

import Footer from '../Footer/Footer';
import { useModeContext } from '../../context/modeContext';
import { useLanguageContext } from '../../context/langContext';
import CountUp from 'react-countup';
import { Link, Links } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SliderComp from './Slider/SliderComp';
import NewsSlider from './Slider/NewsSlider';

export default function Home() {
    // page title

    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Tanta Royal Schools")

    // darkMode
    const { darkMode } = useModeContext();
    // Language
    const { t } = useLanguageContext();

    // scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // counter
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    }
    );
    // video player
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    // section 2
    const features = [
        {
            key: "Curriculum",
            img: brain,
            paragraph: "CurriculumP",
            lgClasses: "lg:mx-5 lg:mt-5 lg:mb-0",
            prClass: "lg:pr-6"
        },
        {
            key: "Educators",
            img: edu,
            paragraph: "EducatorsP",
            lgClasses: "lg:mx-20 lg:mt-12 lg:mb-0",
            prClass: "lg:pr-7"
        },
        {
            key: "Activities",
            img: sport,
            paragraph: "ActivitiesP",
            lgClasses: "lg:mx-5 lg:mt-5 lg:mb-0",
            prClass: "lg:pr-1"
        },
        {
            key: "Learning",
            img: learn,
            paragraph: "LearningP",
            lgClasses: "lg:mx-20 lg:mt-12 lg:mb-0",
            prClass: "lg:pr-10"
        }
    ];

    // photos player

    const [openImage, setOpenImage] = useState(null);
    const images = [
        { src: img1, colSpan: 4, rowSpan: 2 },
        { src: img2, colSpan: 2, rowSpan: 1 },
        { src: img3, colSpan: 2, rowSpan: 1 },
        { src: img4, colSpan: 2, rowSpan: 1 },
        { src: img5, colSpan: 2, rowSpan: 1 },
        { src: img6, colSpan: 2, rowSpan: 1 },
        { src: img7, colSpan: 2, rowSpan: 1 },
        { src: img8, colSpan: 4, rowSpan: 2 },
        { src: img11, colSpan: 2, rowSpan: 1 },
        { src: img12, colSpan: 2, rowSpan: 1 },
        { src: img9, colSpan: 2, rowSpan: 1 },
        { src: img10, colSpan: 2, rowSpan: 1 },
    ];
    const FullscreenOverlay = ({ src, onClose }) => (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="absolute inset-0" onClick={onClose}></div>
            <div className="absolute top-20 right-10 lg:right-30 cursor-pointer" onClick={onClose}>
                <FontAwesomeIcon icon={faXmark} size="2xl" className="text-white" />
            </div>
            <div className="relative z-10 w-full max-w-xl p-4">
                <img className="h-full w-full object-cover rounded-lg" src={src} alt="" />
            </div>
        </div>
    );

    // photo overlay
    const Overlay = () => (
        <div className="bg-overlay bg-black/0 translate-y-5 rounded-lg h-full absolute inset-0 transition-all duration-500 ease-in-out flex justify-center items-center group-hover:translate-y-0 group-hover:bg-black/50">
            <FontAwesomeIcon icon={faAward} size="2xl" className="text-white/0 group-hover:text-white transition-all duration-500 ease-in-out" />
        </div>
    );



    return (
        <div className="home-page">
            {/* section 1 */}
            <section className='relative w-full overflow-hidden h-[600px]
            md:h-[800px]
            xl:h-screen '>
                <video
                    className="mainVideo  w-full h-full object-contain
                    xl:object-cover
                    "
                    title='homeVideo'
                    preload='none'
                    autoPlay loop muted playsInline src={ved} type="video/mp4"
                ></video>
                {/* Overlay */}
                <div className="absolute top-0 left mx-auto-0 w-full h-full bg-black opacity-50 z-10 transition-opacity duration-500 ease-in-out"></div>

                {/* Heading */}

                <motion.div
                    className="relative z-11 flex flex-col justify-center items-center text-center top-62
                    md:top-80
                    lg:top-70
                    "
                >
                    <motion.h1
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="font-almarai font-bold text-3xl rtl:text-3xl mb-15 text-white
                        
                        sm:text-5xl rtl:sm:text-5xl
                        lg:text-5xl rtl:lg:text-6xl
                        xl:text-6xl rtl:xl:text-7xl
                    ">
                        {t("title1")}
                    </motion.h1>

                    <motion.p
                        initial={{ x: 1100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`font-tajawal font-bold text-xl  mb-7 transition-all duration-500 ease-in-out
                            sm:text-3xl
                            lg:text-4xl
                            xl:text-5xl
                            ${darkMode ? "text-[#f4af0f]" : "text-[#ffcc00]"}`}
                    >
                        {t("title2")}
                    </motion.p>

                    <motion.p
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="hidden text-[#ececeb] leading-9 mt-7 mb-7 
                        
                        lg:text-lg lg:block
                        xl:text-xl
                        ">
                        {t("p1")}
                        <br />
                        {t("p2")}
                        <br />
                        {t("p3")}
                    </motion.p>

                    <motion.a
                        initial={{ x: 1100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        href="https://sms.tantaroyalschools.edu.eg/admission_webform"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={`transition-all duration-500 ease-in-out p-5 rounded-xl mt-7 font-tajawal font-bold
                                ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048] " :
                                "text-[#2b2873] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"}`}
                    >
                        {t("adBtn")}
                    </motion.a>
                </motion.div>

            </section>


            {/* section 2 */}
            <section className={`transition-all duration-500 ease-in-out
            lg:pt-10
            ${darkMode ? "bg-[#091048]" : "bg-[#2b2873] "}
            `}>
                <div className={` mx-auto  w-full transition-all duration-500 ease-in-out
                
                lg:px-4 lg:grid lg:grid-cols-12
                
                `}>
                    <div className={`left flex flex-col justify-center items-center  transition-all duration-500 ease-in-out p-10 rtl:px-0
                        md:w-full
                        lg:relative lg:-top-30 lg:z-20  lg:h-[612px] lg:col-span-3 lg:p-4 rtl:lg:h-[580px] 
                        rtl:xl:p-17 
                        2xl:col-span-4  2xl:ml-26 2xl:w-[397px] 2xl:p-13 rtl:2xl:mr-26
                        ${darkMode ? "bg-[#f4af0f]" : " bg-[#ffcc00] "}
                        `}>
                        <span className={`${darkMode ? "text-[#091048]" : "text-[#2b2873] "} text-xl font-tajawal font-bold mb-9 text-center px-1 rtl:text-2xl rtl:px-0
                            lg:px-0 lg:text-start lg:text-lg
                            xl:px-0 xl:text-start
                            `}> {t("title1")} </span>
                        <div className="key flex flex-col justify-center items-center  relative mb-5 text-center px-5 rtl:px-20
                            lg:text-start lg:px-0 rtl:lg:px-0
                            ">
                            <span className={`font-almarai font-bold  text-4xl mb-4 
                                lg:mb-8 
                                lg:text-3xl  
                                xl:text-4xl  
                                ${darkMode ? "text-[#091048]" : "text-[#2b2873] "}
                                `}>
                                {t("key")}
                            </span>
                            <span className={`  w-[70px] h-[4px] 
                                    lg:top-24 lg:left-0 lg:absolute
                                    lg:rtl:right-0 lg:rtl:top-28
                                    ${darkMode ? "bg-[#091048]" : "bg-[#2b2873] "}
                                    `}></span>
                        </div>
                        <p className='text-center px-5 text-[#666666] text-xl font-tajawal leading-8 font-bold rtl:px-12
                                md:px-30 rtl:md:px-30
                                lg:text-start lg:px-0 lg:leading-8 lg:text-[20px] rtl:lg:px-0
                                xl:text-start xl:px-0 xl:leading-12
                                '> {t("belive")} </p>
                    </div>

                    <div className="right transition-all duration-500 ease-in-out 
                    lg:grid lg:grid-cols-12 lg:col-span-9 
                    xl:col-span-8
                    ">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className={`${item.key} flex flex-col justify-center items-center gap-5 p-10
                lg:flex lg:flex-wrap lg:justify-between ${item.lgClasses} lg:w-[395px] lg:h-[161px] lg:col-span-5`}
                            >
                                <img
                                    className="w-20 h-20 lg:mr-7  transition-all duration-500 ease-in-out"
                                    src={item.img}
                                    alt={item.key}
                                    loading='lazy'
                                />
                                <div className="content px-1">
                                    <h2
                                        className={`font-tajawal font-bold text-center text-3xl border-b-2 pb-4 mb-4 border-[#4b4888] text-white transition-all duration-500 ease-in-out
                    lg:text-2xl lg:max-w-[233px]
                    ${darkMode ? "hover:text-[#f4af0f] hover:border-[#f4af0f]" : "hover:text-[#ffcc00] hover:border-[#ffcc00]"}`}
                                    >
                                        {t(item.key)}
                                    </h2>

                                    <p
                                        className={`text-[#c0bfd5] text-center font-tajawal font-bold leading-8 
                    lg:text-[16px] ${item.prClass} lg:max-w-[255px]
                    rtl:pr-0 xl:pr-0`}
                                    >
                                        {t(item.paragraph)}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* section 3 */}
            <section
                className={`py-20 px-2.5 transition-all duration-500 ease-in-out
                      ${darkMode ? "bg-[#030712]" : "bg-white "}`}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img
                            src={tag}
                            alt="Why choose our school"
                            className="w-[135px] h-[81px]"
                            loading='lazy'
                        />

                        {/* Main heading */}
                        <h2
                            className={`text-3xl font-bold mt-6  px-3 text-center flex flex-wrap gap-3 rtl:gap-0 leading-relaxed transition-all duration-500 ease-in-out
                                                      sm:mx-auto  
                                                      md:px-0
                                                      ${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "}`}
                        >
                            <span className="flex justify-center items-center gap-2 mx-auto">
                                <span className=" ">
                                    {t("why")}
                                </span>
                                <span
                                    className={`block relative w-30 h-12.5 rtl:w-23 rtl:h-13 overflow-hidden m-0  rtl:ml-2 transition-all duration-500 ease-in-out 
                                                                  md:w-30 md:rtl:w-25
                                                                  ${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "}`}
                                >
                                    <span className="animate animation-1">{t("SELECT")}</span>
                                    <span className="animate animation-2">{t("CHOOSE")}</span>
                                    <span className="animate animation-3">{t("PREFER")}</span>
                                </span>
                            </span>
                            <span className="mx-auto">{t("schools")}</span>
                        </h2>

                        {/* Paragraph */}
                        <p
                            className=" text-[#848484] px-4 text-center
                          sm:text-lg sm:px-3
                          md:px-17.5
                          lg:px-37.5">
                            {t("p-1")}
                            <span className={`${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "} text-[16px] font-tajawal mx-1 font-bold transition-all duration-500 ease-in-out`}>
                                {t("title1")}
                            </span>
                            {t("p-2")}
                            <span className={`${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "} text-[16px] font-tajawal mx-1 font-bold transition-all duration-500 ease-in-out`}>
                                {t("mark-1")}
                            </span>
                            {t("p-3")}
                            <span className={`${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "} text-[16px] font-tajawal mx-1 font-bold transition-all duration-500 ease-in-out`}>
                                {t("mark-2")}
                            </span>
                            {t("p-4")}
                            <span className={`${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "} text-[16px] font-tajawal mx-1 font-bold transition-all duration-500 ease-in-out`}>
                                {t("mark-3")}
                            </span>
                            {t("p-5")}
                            <span className={`${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "} text-[16px] font-tajawal mx-1 font-bold transition-all duration-500 ease-in-out`}>
                                {t("mark-4")}
                            </span>
                            {t("p-6")}
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section
                className={`py-10 transition-all duration-500 ease-in-out ${darkMode ? "bg-[#f4af0f]" : "bg-[#ffcc00]"
                    }`}
            >
                <div ref={ref} className="container mx-auto grid md:grid-cols-8 lg:grid-cols-10">

                    {/* Years of Experience */}
                    <div

                        className="flex flex-col gap-3 justify-center items-center 
                            md:col-span-4 md:border-r md:border-[#2B287321] md:rtl:border-l md:rtl:border-r-0
                            lg:col-span-2 lg:border-r lg:border-[#2B287321] lg:rtl:border-l"
                    >
                        <h3 className="sr-only">{t("yearsOfExperienceHeading")}</h3>
                        <div
                            className="counter flex flex-row justify-center items-center font-tajawal font-light"
                            aria-label={`${t("yearsOfExperienceLabel")}: 5+`}
                        >
                            {inView && (
                                <CountUp
                                    className={`text-[70px] transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048]" : "text-[#2b2873]"
                                        }`}
                                    start={0}
                                    end={5}
                                    duration={5}
                                />
                            )}
                            <span
                                className={`text-[56px] transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048]" : "text-[#2b2873]"
                                    }`}
                            >
                                +
                            </span>
                        </div>
                        <h2
                            className={`font-tajawal font-bold p-3 rounded-lg transition-all duration-500 ease-in-out ${darkMode
                                ? "text-[#091048] hover:text-[#f4af0f] hover:bg-[#091048]"
                                : "text-[#2b2873] hover:text-[#ffcc00] hover:bg-[#2b2873]"
                                }`}
                        >
                            {t("years")}
                        </h2>
                    </div>

                    {/* Graduated Students */}
                    <div

                        className="flex flex-col gap-3 justify-center items-center 
                        md:col-span-4 lg:col-span-2 lg:border-r lg:border-[#2B287321] lg:rtl:border-l"
                    >
                        <h3 className="sr-only">{t("graduatedStudentsHeading")}</h3>
                        <div
                            className="counter flex flex-row justify-center items-baseline font-tajawal font-light"
                            aria-label={`${t("graduatedStudentsLabel")}: 2000+`}
                        >
                            {inView && (
                                <CountUp
                                    className={`text-[70px] px-2 transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048]" : "text-[#2b2873]"
                                        }`}
                                    start={0}
                                    end={2}
                                    duration={5}
                                />
                            )}
                            <span
                                className={`text-[56px] transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048]" : "text-[#2b2873] "
                                    }`}
                            >
                                {t("alf")}
                            </span>
                        </div>
                        <h2
                            className={`font-tajawal font-bold p-3 rounded-lg transition-all duration-500 ease-in-out ${darkMode
                                ? "text-[#091048] hover:text-[#f4af0f] hover:bg-[#091048]"
                                : "text-[#2b2873] hover:text-[#ffcc00] hover:bg-[#2b2873]"
                                }`}
                        >
                            {t("Graduated")}
                        </h2>
                    </div>

                    {/* Educational Awards */}
                    <div

                        className="flex flex-col gap-3 justify-center items-center 
                        md:col-span-4 md:border-r md:border-[#2B287321] md:rtl:border-l md:rtl:border-r-0
                        lg:col-span-2 lg:border-r lg:border-[#2B287321] lg:rtl:border-l"
                    >
                        <h3 className="sr-only">{t("educationalAwardsHeading")}</h3>
                        <div
                            className="counter flex flex-row justify-center items-center font-tajawal font-light"
                            aria-label={`${t("educationalAwardsLabel")}: 5+`}
                        >
                            {inView && (
                                <CountUp
                                    className={`text-[70px] transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048]" : "text-[#2b2873]"
                                        }`}
                                    start={0}
                                    end={5}
                                    duration={5}
                                />
                            )}
                            <span
                                className={`text-[56px] transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048]" : "text-[#2b2873] "
                                    }`}
                            >
                                +
                            </span>
                        </div>
                        <h2
                            className={`font-tajawal font-bold p-3 rounded-lg transition-all duration-500 ease-in-out ${darkMode
                                ? "text-[#091048] hover:text-[#f4af0f] hover:bg-[#091048]"
                                : "text-[#2b2873] hover:text-[#ffcc00] hover:bg-[#2b2873]"
                                }`}
                        >
                            {t("Awards")}
                        </h2>
                    </div>

                    {/* Qualified Teachers */}
                    <div

                        className="flex flex-col gap-3 justify-center items-center border-r 
                            md:col-span-4 md:border-r-0 md:border-[#2B287321] md:rtl:border-l-0
                            lg:col-span-2 lg:border-r lg:border-[#2B287321] lg:rtl:border-l"
                    >
                        <h3 className="sr-only">{t("qualifiedTeachersHeading")}</h3>
                        <div
                            className="counter flex flex-row justify-center items-center font-tajawal font-light"
                            aria-label={`${t("qualifiedTeachersLabel")}: 300+`}
                        >
                            {inView && (
                                <CountUp
                                    className={`text-[70px] transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048]" : "text-[#2b2873]"
                                        }`}
                                    start={0}
                                    end={300}
                                    duration={5}
                                />
                            )}
                            <span
                                className={`text-[56px] transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048]" : "text-[#2b2873] "
                                    }`}
                            >
                                +
                            </span>
                        </div>
                        <h2
                            className={`font-tajawal font-bold p-3 rounded-lg transition-all duration-500 ease-in-out ${darkMode
                                ? "text-[#091048] hover:text-[#f4af0f] hover:bg-[#091048]"
                                : "text-[#2b2873] hover:text-[#ffcc00] hover:bg-[#2b2873]"
                                }`}
                        >
                            {t("Teachers")}
                        </h2>
                    </div>

                    {/* Academic Programs */}
                    <div

                        className="flex flex-col gap-3 justify-center items-center
                                    md:col-span-8 lg:col-span-2"
                    >
                        <h3 className="sr-only">{t("academicProgramsHeading")}</h3>
                        <div
                            className="counter flex flex-row justify-center items-center font-tajawal font-light"
                            aria-label={`${t("academicProgramsLabel")}: 3+`}
                        >
                            {inView && (
                                <CountUp
                                    className={`text-[70px] transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048]" : "text-[#2b2873]"
                                        }`}
                                    start={0}
                                    end={3}
                                    duration={5}
                                />
                            )}
                            <span
                                className={`text-[56px] transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048]" : "text-[#2b2873] "
                                    }`}
                            >
                                +
                            </span>
                        </div>
                        <h2
                            className={`font-tajawal font-bold p-3 rounded-lg transition-all duration-500 ease-in-out ${darkMode
                                ? "text-[#091048] hover:text-[#f4af0f] hover:bg-[#091048]"
                                : "text-[#2b2873] hover:text-[#ffcc00] hover:bg-[#2b2873]"
                                }`}
                        >
                            {t("Programs")}
                        </h2>
                    </div>

                </div>
            </section>

            {/* Section 5 */}
            <section
                className="relative overflow-hidden min-h-[850px] lg:min-h-[616px]"
                aria-labelledby="guide-section-heading"
            >
                <img
                    className="stuImg lg:h-[616px]"
                    src={stu}
                    alt={t("studentsImageAlt")}
                    loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85 z-10"></div>

                <div className="container grid mx-auto p-3 inset-0 z-20 absolute lg:grid-cols-12 lg:p-5 xl:p-15">
                    {/* Left  */}
                    <div className="left mx-auto max-w-[640px] gap-5 flex flex-col justify-center items-center lg:col-span-6 lg:items-start">

                        {/* Tag Image */}
                        <div className="imgDiv h-20">
                            <img src={tag} alt="School selection tag" className="w-18" loading="lazy" />
                        </div>

                        {/* Titles */}
                        <div className="guideTitle flex flex-col gap-1">
                            <h3 className="text-white text-lg text-center px-10 font-tajawal font-bold lg:px-0 lg:text-start">
                                {t("Guide")}
                            </h3>
                            <h2
                                id="guide-section-heading"
                                className="text-white text-[40px] text-center font-tajawal font-bold lg:text-start"
                            >
                                {t("aboutTanta")}

                                <span
                                    className={`font-tajawal font-bold transition-all duration-500 ease-in-out ${darkMode ? "text-[#f4af0f]" : "text-[#ffcc00]"
                                        }`}
                                >
                                    {t("schoolName")}
                                </span>
                            </h2>
                        </div>

                        {/* Paragraph */}
                        <div className="guideP max-w-[623px] mb-5">
                            <p className="text-[#aaaaaa] text-center font-tajawal font-bold w-full lg:text-start">
                                {t("guideP")}
                            </p>
                        </div>

                        {/* More Button */}
                        <div className="moreBtn">
                            <Link
                                to={"/about-us"}
                                onClick={() => scrollToTop()}
                                rel="noopener noreferrer"
                                className={`p-5 rounded-xl font-tajawal font-bold transition-all duration-500 ease-in-out ${darkMode
                                    ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]"
                                    : "text-[#2b2873] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faPlus} size="lg" /> {t("more")}
                            </Link>
                        </div>
                    </div>

                    {/* Right  */}
                    <div className="right m-5 mx-auto lg:col-span-6 lg:m-0 lg:my-auto xl:col-span-5">
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="relative w-full max-w-lg mx-auto cursor-pointer"
                            aria-label={t("playVideoLabel")}
                        >
                            <img
                                className="rounded-lg"
                                src={frontPH}
                                alt={t("videoThumbnailAlt")}
                                loading="lazy"
                            />
                            <div className="playIcon absolute inset-0 flex items-center justify-center">
                                <div className="bg-white p-7 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faPlay} size="lg" className="text-black" />
                                </div>
                            </div>
                        </button>

                        {isVideoOpen && (
                            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                                <div
                                    className="absolute inset-0"
                                    onClick={() => setIsVideoOpen(false)}
                                ></div>
                                <div
                                    className="absolute top-20 right-10 lg:right-30 cursor-pointer"
                                    onClick={() => setIsVideoOpen(false)}
                                >
                                    <FontAwesomeIcon icon={faXmark} size="2xl" className="text-white" />
                                </div>
                                <div className="relative z-10 w-full max-w-3xl p-4">
                                    <video
                                        src={aboutVed}
                                        controls
                                        controlsList="nodownload"
                                        autoPlay
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Section 6 */}
            <section
                className={`pt-10 px-2.5 transition-all duration-500 ease-in-out ${darkMode ? "bg-[#030712]" : "bg-white"
                    }`}
                aria-labelledby="founder-message-heading"
            >
                <div className="container grid mx-auto px-5 pt-5 lg:grid-cols-12 lg:px-5 lg:pt-5 lg:p-0 xl:px-15 xl:pt-5">

                    {/* Left  */}
                    <div className="left mx-auto max-w-[640px] gap-5 flex flex-col justify-center items-center relative lg:col-span-6 lg:items-start">

                        {/* Tag Image */}
                        <div className="imgDiv h-20">
                            <img
                                src={tag}
                                alt={t("schoolTagAlt")}
                                className="w-18"
                                loading="lazy"
                            />
                        </div>

                        {/* Titles */}
                        <div className="flex flex-col gap-1">
                            <h3
                                className={` text-xl sm:text-2xl font-tajawal font-bold mx-auto transition-all duration-500 ease-in-out lg:text-2xl lg:mx-0 ${darkMode ? "text-white" : "text-black"}`}
                            >
                                {t("eng")}
                                <span className={`${darkMode ? "text-[#f4af0f]" : "text-[#2b2873]"} text-xl text-center mx-auto font-tajawal font-bold lg:px-0 lg:text-2xl`}>
                                    {t("founderName")}
                                </span>
                            </h3>

                            <h2
                                id="founder-message-heading"
                                className={`text-[40px] text-center font-tajawal font-bold lg:text-[44px] ${darkMode ? "text-white" : "text-black"}`}
                            >
                                {t("Msg")}{" "}
                                <span
                                    className={`text-[44px] font-tajawal font-bold transition-all duration-500 ease-in-out lg:text-[44px] ${darkMode ? "text-[#f4af0f]" : "text-[#2b2873]"
                                        }`}
                                >
                                    {t("founder")}
                                </span>
                            </h2>
                        </div>

                        {/* Paragraph */}
                        <div className="founderP max-w-[623px] mb-5">
                            <p className="text-[#aaaaaa] sm:text-lg  text-center font-tajawal font-bold w-full lg:text-start">
                                {t("founderMsg")}
                            </p>
                        </div>
                    </div>

                    {/* Right  */}
                    <div className="right mt-5 mx-auto lg:col-span-6 lg:m-0 lg:my-auto xl:col-span-6">
                        <img
                            src={founder}
                            alt={t("founderImageAlt")}
                            loading="lazy"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>


            {/* section 7 */}
            <section
                className={`overflow-hidden pt-10 transition-all duration-500 ease-in-out
    ${darkMode ? "bg-[#091048]" : "bg-[#2b2873] "}`}
                aria-labelledby="gallery-section-heading"
            >
                <div className="container flex flex-col justify-center items-center mx-auto p-3 lg:p-5 xl:p-15">
                    <div className="mx-auto max-w-[640px] gap-5 flex flex-col justify-center items-center">
                        <div className="imgDiv h-20">
                            <img src={tag} alt={t("schoolSelectionTagAlt")} className='w-18' loading="lazy" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 id="gallery-section-heading" className='text-white text-lg text-center px-10 font-tajawal font-bold lg:px-0'>
                                {t("ourGallery")}
                            </h3>
                            <h2 className='text-white text-[40px] text-center font-tajawal font-bold'>
                                {t("moments")}
                                <span className={`font-tajawal font-bold transition-all duration-500 ease-in-out ${darkMode ? "text-[#f4af0f]" : "text-[#ffcc00]"}`}>
                                    {t("inspire")}
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="p-10">
                        <div className="grid grid-cols-12 grid-rows-6 gap-4 w-full max-w-6xl mx-auto lg:grid-cols-12 lg:grid-rows-1">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`relative group col-span-12 md:col-span-6 lg:col-span-${image.colSpan} lg:row-span-${image.rowSpan}`}
                                >
                                    <button
                                        onClick={() => setOpenImage(image.src)}
                                        aria-label={t("openImageInFullscreen")}
                                        className="w-full h-full cursor-pointer"
                                    >
                                        <img className="h-full w-full object-cover rounded-lg" src={image.src} alt={t(`galleryImageAlt${index + 1}`)} loading="lazy" />
                                        <Overlay />
                                    </button>
                                </div>
                            ))}

                            {openImage && <FullscreenOverlay src={openImage} onClose={() => setOpenImage(null)} />}
                        </div>
                    </div>

                    {/* View More */}
                    <div className="mx-auto max-w-[640px] gap-5 flex flex-col justify-center items-center">
                        <h3 className='text-[#aaaaaa] text-lg text-center px-10 font-tajawal font-bold lg:px-0'>{t("ViewMore")}</h3>
                        <div className='relative flex justify-center items-center gap-5'>
                            <Link
                                to={"/gallery/photos"}
                                onClick={() => scrollToTop()}
                                className={`photos font-tajawal font-bold px-5 py-4 rounded-lg transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:bg-[#ffcc00]" : "text-[#2b2873] bg-[#ffcc00] hover:bg-[#f4af0f]"}`}
                            >
                                {t("photo")}
                            </Link>
                            <Link
                                to={"/gallery/videos"}
                                onClick={() => scrollToTop()}
                                className={`photos font-tajawal font-bold px-5 py-4 rounded-lg transition-all duration-500 ease-in-out ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:bg-[#ffcc00]" : "text-[#2b2873] bg-[#ffcc00] hover:bg-[#f4af0f]"}`}
                            >
                                {t("video")}
                            </Link>
                            <div className="& absolute rounded-full bg-white px-4 py-3">
                                &
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8 */}
            <section
                className={`py-10 transition-all duration-500 ease-in-out ${darkMode ? "bg-[#f4af0f]" : "bg-[#ffcc00]"
                    }`}
                aria-labelledby="partners-section-heading"
            >
                <div className="mx-auto">
                    <h2 id="partners-section-heading" className="sr-only">
                        {t("ourPartners")}
                    </h2>
                    <SliderComp />
                </div>
            </section>


            {/* Section 9 */}
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
                                {t("contactUs")}
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
                                to={"/contact-us"}
                                onClick={() => scrollToTop()}
                                className={`p-5 font-tajawal font-bold rounded-xl transition-all duration-500 ease-in-out
            ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]"
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


            {/* section 10 */}
            <section
                className={`py-20 px-2.5 transition-all duration-500 ease-in-out ${darkMode ? "bg-[#030712]" : "bg-white"
                    }`}
                aria-labelledby="latest-updates-heading"
            >
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center gap-5">
                        {/* Decorative Tag Image */}
                        <img
                            src={tag}
                            alt=""
                            aria-hidden="true"
                            className="w-[135px] h-[81px]"
                        />

                        {/* Heading & Subtitle */}
                        <div className="flex flex-col gap-1 text-center">
                            <p
                                className={`${darkMode ? "text-white" : "text-black"} text-lg px-10 font-tajawal font-bold lg:px-0 transition-all duration-500 ease-in-out`}
                                id="latest-updates-subtitle"
                            >
                                {t("check")}
                            </p>
                            <h2
                                id="latest-updates-heading"
                                className={`text-[40px] font-tajawal font-bold transition-all duration-500 ease-in-out ${darkMode ? "text-[#f4af0f]" : "text-[#2b2873]"
                                    }`}
                            >
                                {t("latest")}{" "}
                                <span
                                    className={`font-tajawal font-bold ${darkMode ? "text-white" : "text-black"} transition-all duration-500 ease-in-out`}
                                >
                                    {t("Updates")}
                                </span>
                            </h2>
                        </div>

                        {/* Slider */}
                        <NewsSlider />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
