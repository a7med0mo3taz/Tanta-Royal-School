import React, { useEffect, useState } from 'react'

import { faHouse, faArrowRight, faArrowLeft, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import mainPhoto from "../../assets/Photos/pho/15.webp"
import faq from "../../assets/Photos/pho/Faq.jpg"
import tag from "../../assets/Photos/pho/svg.webp"
import msg from "../../assets/Photos/pho/chat.png"
import lamp from "../../assets/Photos/pho/lamp.png"
import { useModeContext } from '../../context/modeContext';
import * as Yup from "yup"
import { useFormik } from 'formik'
import { useLanguageContext } from '../../context/langContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function FAQS() {
    // page title
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Frequently Asked Questions")


    // darkMode
    const { darkMode } = useModeContext();
    // Language
    const { t, currentLang } = useLanguageContext();

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

    // open card
    const [openCard, setOpenCard] = useState(null);
    const cardsData = [
        { key: "q1", content: "q1P" },
        { key: "q2", content: "q2P" },
        { key: "q3", content: ["q3P1", "q3P2"] },
        { key: "q4", content: "q4P" },
        { key: "q5", content: "q5P" },
        { key: "q6", content: ["q6P1", "q6P2", "q6P3"] },
        { key: "q7", content: "q7P" },
        { key: "q8", content: ["q8P", "q8P1", "q8P2"] },
        { key: "q9", content: "q9P" },
        { key: "q10", content: ["q10P", "q10P1", "q10P2"] },
        { key: "q11", content: "q11P" },
        { key: "q12", content: "q12P" },
        { key: "q13", content: "q13P" },
        { key: "q14", content: "q14P" },
        { key: "q15", content: ["q15P", "q15P1"] },
        { key: "q16", content: "q16P" },
        { key: "q17", content: "q17P" },
        { key: "q18", content: "q18P" },
        { key: "q19", content: "q19P" },
        { key: "q20", content: "q20P" },
        { key: "q21", content: "q21P" },
        { key: "q22", content: "q22P" },
        { key: "q23", content: "q23P" },
        { key: "q24", content: ["q24P", "q24P1", "q24P2", "q24P3", "q24P4", "q24P5", "q24P6", "q24P7", "q24P8", "q24P9", "q24P10", "q24P11"] },
    ];



    // form
    const yupSchema = Yup.object().shape({
        name: Yup.string().required().min(5).max(15),
        email: Yup.string().email().required().matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, "Email is not valid"),
        Phone: Yup.string().required().matches(/^(010|011|012|015)[0-9]{8}$/, "Phone number is not valid"),
    });


    const formic = useFormik({
        initialValues: {
            name: "",
            email: "",
            Phone: "",
        },
        validationSchema: yupSchema,

    })

    const maxChar = 180;
    const [text, setText] = useState("");
    const numOfChar = text.length
    const remainingChars = maxChar;



    return (
        <div className={`FAQ'S page h-full ${darkMode ? "bg-[#030712]" : "bg-white "}  transition-all duration-500 ease-in-out`}>
            {/* heading section */}
            <section className={`relative w-full overflowHidden  h-[500px] transition-all duration-500 ease-in-out  ${darkMode ? "bg-[#030712]" : "bg-white "}
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
                        {t("FAQTitle")}
                    </h1>
                    <div className="Breadcrumb text-[#aaaaaa] text-lg flex justify-center  ">
                        <Link to={"/"}><FontAwesomeIcon icon={faHouse} className=' my-auto ' /></Link>
                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}
                        <span className='font-almarai font-bold my-auto'>  {t("FAQTitle")} </span>
                    </div>
                </div>


            </section>

            {/* FAQ section  */}
            <section className={`relative min-h-screen  transition-all duration-500 ease-in-out`}>
                <div className="container grid  mx-auto p-15  inset-0  z-20 relative
                            lg:grid-cols-12  lg:px-5
                            xl:px-15
                            ">
                    <div className="left mx-auto col-span-12 max-w-[853px] relative  gap-3 flex flex-col  justify-center items-center 
                                    lg:col-span-6 lg:row-span-1 lg:items-start rtl:lg:col-span-6
                                    xl:col-span-6 
                                    2xl:col-span-8 
                                    ">
                        <div className="imgDiv flex justify-center items-center lg:justify-start  h-20">
                            <img src={tag} alt="School selection tag" className='w-18' />
                        </div>
                        {/* first */}
                        <div className=" flex flex-col gap-3 px-3 lg:p-0">
                            <span className='text-[#666666] text-lg  text-center px-10 font-tajawal font-bold
                                                lg:px-0 lg:text-start
                                                '> {t("freeContact")} </span>
                            <span className={` text-[38px] text-center font-tajawal font-bold transition-all duration-500 ease-in-out
                                            lg:text-start
                                            ${darkMode ? "text-white" : "text-black "}
                                            `}> {t("question")}  <span className={` font-tajawal font-bold transition-all duration-500 ease-in-out
                                            ${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "}
                                            `}> {t("questions")} </span> </span>
                        </div>
                        <div className="WhoP  mb-5">
                            <p className='text-[#666666] text-center font-tajawal font-bold w-full 
                                            lg:text-start
                                            '> {t("questionP")} </p>
                        </div>

                        {/* second */}
                        <div className="flex flex-col justify-center items-center gap-3
                    lg:flex-row
                    ">
                            <div className={`lampImg w-18 h-20 flex justify-center items-center rounded-2xl p-2
                            ${darkMode ? "bg-[#091048]" : "bg-[#2b2873]"}
                            `}>
                                <img src={lamp} alt="lamp" className='w-9' />
                            </div>
                            <div className=" flex flex-col   px-3 lg:p-0">
                                <span className={` text-[38px] text-center font-tajawal font-bold transition-all duration-500 ease-in-out
                                            lg:text-start
                                            ${darkMode ? "text-white" : "text-black "}
                                            `}> {t("FAQ")}  </span>
                                <div className="WhoP  mb-5">
                                    <p className='text-[#666666] text-center font-tajawal font-bold w-full 
                                            lg:text-start
                                            '> {t("FAQSubT")} </p>
                                </div>
                            </div>
                        </div>

                        {/* Third */}
                        {cardsData.map(({ key, content }) => {
                            const isOpen = openCard === key;

                            return (
                                <div key={key} className="mb-3 w-full">

                                    <div
                                        className={`p-5  font-tajawal  font-bold transition-all duration-500 ease-in-out
                                    ${darkMode ? "bg-[#091048] text-[#f4af0f]" : "bg-[#2b2873] text-white"}
                                `}
                                    >
                                        <h2 className="flex justify-between items-center">
                                            {t(key)}
                                            <FontAwesomeIcon className="cursor-pointer" icon={isOpen ? faChevronUp : faChevronDown} size="xl"
                                                onClick={() =>
                                                    setOpenCard(isOpen ? null : key)
                                                }
                                            />
                                        </h2>
                                    </div>

                                    <div
                                        className={`w-full overflow-hidden transition-all duration-500
                                    ${isOpen
                                                ? "p-5 text-[16px] font-tajawal font-bold  border-2 border-black max-h-screen opacity-100"
                                                : "max-h-0 opacity-0"
                                            }
                                    ${isOpen && darkMode
                                                ? "p-5 bg-[#69686f] text-[#f4af0f] text-[16px] font-tajawal font-bold  border-2 border-black max-h-screen opacity-100"
                                                : " bg-white max-h-0 opacity-0"
                                            }
                                `}
                                    >
                                        {Array.isArray(content) ? (
                                            content.map((paragraph, idx) => (
                                                <h3 key={idx} className="p-3 w-full">
                                                    {t(paragraph)}
                                                </h3>
                                            ))
                                        ) : (
                                            <h3 className="p-3 w-full">{t(content)}</h3>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    <div className="right m-5 col-span-12  relative mb-10 top-0   rtl:mx-auto
                                    lg:col-span-6  lg:m-0 lg:mt-20  rtl:lg:col-span-6 lg:mx-auto 
                                    xl:col-span-6 xl:mx-auto 
                                    2xl:col-span-4  ">
                        <div className={` w-[280px] rtl:w-[325px] h-[340px] rtl:h-[380px] rounded-lg absolute  top-5 left-5 rtl:right-3 transition-all duration-500 ease-in-out lg:mb-10
                                    md:w-[406px] md:h-[500px] rtl:md:w-[380px] rtl:md:h-[500px] md:top-7 md:left-30 rtl:md:top-7 rtl:md:right-10
                                    lg:top-5 lg:left-5 lg:rounded-2xl  rtl:lg:top-5  rtl:lg:right-10
                                    xl:left-5 
                                    2xl:left-5 
                                    ${darkMode ? "bg-[#f4af0f]" : " bg-[#ffcc00] "}
                                    `}></div>
                        <div onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ perspective: "1000px" }}
                            className="schoolImg   mx-auto ">
                            <img src={faq} style={style} alt="school" className={`w-[395px] mx-auto h-full object-cover rounded-xl border-5 
                                ${darkMode ? "border-[#091048]" : "border-[#2b2873]"}
                                `} />
                        </div>

                        {/* second */}
                        <div className="flex flex-col justify-center items-center gap-3 mt-20
                    lg:flex-row lg:justify-start
                    ">
                            <div className={`lampImg w-18 h-20 flex justify-center items-center rounded-2xl p-2
                            ${darkMode ? "bg-[#091048]" : "bg-[#2b2873]"}
                            `}>
                                <img src={msg} alt="lamp" className='w-9' />
                            </div>
                            <div className=" flex flex-col   px-3 lg:p-0">
                                <span className={` text-[38px] text-center font-tajawal font-bold transition-all duration-500 ease-in-out
                                            lg:text-start
                                            ${darkMode ? "text-white" : "text-black "}
                                            `}> {t("ask")}  </span>
                                <div className="WhoP  mb-5">
                                    <p className='text-[#666666] text-center font-tajawal font-bold w-full 
                                            lg:text-start
                                            '> {t("quick")} </p>
                                </div>
                            </div>
                        </div>



                        <section className={`${darkMode ? "text-white" : "text-black "} mb-10`}>
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <form action="#" className="space-y-8">
                                    {/* name */}
                                    <div className="relative z-0 w-full mb-5 group ">
                                        <label htmlFor="name" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}> {t("name")} </label>
                                        <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.name} type="text" name="name" id="name" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg max-w-4xl block w-full p-2.5" placeholder={` ${t("namePlace")} `} required />
                                        {
                                            formic.errors.name && (
                                                <div className={`p-4 mb-4 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                                                    {formic.errors.name}</div>
                                            )}
                                    </div>

                                    {/* email */}
                                    <div className="relative z-0 w-full mb-5 group">
                                        <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}>{t("email")}</label>
                                        <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full max-w-4xl p-2.5" placeholder={` ${t("emailPlace")} `} required />
                                    </div>
                                    {
                                        formic.errors.email &&
                                        <div className={`p-4 mb-4 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                                            {formic.errors.email}
                                        </div>
                                    }

                                    {/* Phone number */}
                                    <div className="relative z-0 w-full mb-5 group">
                                        <label htmlFor="Phone" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}>{t("phone")}</label>
                                        <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.Phone} type="text" name="Phone" id="Phone" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg  max-w-4xl block w-full p-2.5"  required />
                                    </div>

                                    {/* textarea */}
                                    <label htmlFor="message" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}>{t("msg")}</label>
                                    <textarea
                                        maxLength={maxChar}
                                        className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg h-30  max-w-4xl block w-full p-2.5"
                                        placeholder={` ${t("msgPlace")} `}
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                    ></textarea>

                                    <div className="number-of-char flex justify-end items-center gap-1">
                                        <span className={`${darkMode ? "text-white" : "text-black "} font-tajawal font-bold transition-all duration-500 ease-in-out`}> {numOfChar} /</span>
                                        <span className={`${darkMode ? "text-white" : "text-black "} font-tajawal font-bold transition-all duration-500 ease-in-out`}> {remainingChars}</span>
                                    </div>
                                    <div className="formBtn ">
                                        <button type='submit' className={` p-5  cursor-pointer rounded-xl transition-all duration-500 ease-in-out
                                                ${darkMode ? "text-[#f4af0f] bg-[#091048] hover:text-[#091048] hover:bg-[#f4af0f] " :
                                                "text-[#ffcc00] bg-[#2b2873] hover:text-[#2b2873] hover:bg-[#ffcc00]"}
                            `} >  {t("send")} </button>
                                    </div>
                                </form>
                            </div>
                        </section>



                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}
