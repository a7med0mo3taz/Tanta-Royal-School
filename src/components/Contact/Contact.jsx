import React, { useEffect, useState } from 'react'
import { useModeContext } from '../../context/modeContext';
import { useLanguageContext } from '../../context/langContext';
import { faHouse, faArrowRight, faArrowLeft, faEnvelope,  faLocationDot, faPhoneVolume, } from '@fortawesome/free-solid-svg-icons';
import mainPhoto from "../../assets/Photos/pho/15.webp"
import tag from "../../assets/Photos/pho/svg.webp"
import * as Yup from "yup"
import { useFormik } from 'formik'
import { Link, Links } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer';

export default function Contact() {

    // page title
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Contact Us")
    // darkMode
    const { darkMode } = useModeContext();
    // Language
    const { t, currentLang } = useLanguageContext();

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
        <div className={` photosPage  ${darkMode ? "bg-[#030712]" : "bg-white "}  transition-all duration-500 ease-in-out`}>
            {/* heading section */}
            <section className={` relative w-full overflowHidden  h-[500px] transition-all duration-500 ease-in-out  ${darkMode ? "bg-[#030712]" : "bg-white "}
                        md:h-[700px]
                        xl:h-[515px] `}>
                <img src={mainPhoto} loading='lazy' alt="mainPhoto" className="mainPhoto absolute  w-full object-contain h-[550px] 
                            md:h-[800px]
                            xl:object-cover xl:h-[515px] xl:object-top"/>
                {/* Heading */}
                <div
                    className="relative z-11 flex flex-col justify-center items-center text-center top-58
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
                        {t("contactTitle")}
                    </h1>
                    <div className="Breadcrumb text-white text-lg flex justify-center  ">
                        <Link to={"/"}><FontAwesomeIcon icon={faHouse} className=' my-auto ' /></Link>
                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}

                        <h2 className='font-almarai font-bold my-auto'>  {t("contactTitle")} </h2>
                    </div>
                </div>
            </section>

            <section className={`relative  transition-all duration-500 ease-in-out`}>
                <div className="container   mx-auto p-5  inset-0  z-20 relative mb-20
                                                                lg:px-5
                                                                xl:px-15
                                                                ">
                    {/* first  */}
                    <div className="  grid grid-cols-12 relative gap-3   ">

                        {/* Admissions Email */}
                        <div className={`Admissions  col-span-12 lg:col-span-4 p-5 rounded-2xl border-2  ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]   border-[#091048] "
                            : " hover:text-[#ffcc00] hover:bg-[#2b2873] bg-[#ffcc00] text-[#2b2873] border-[#2b2873] "} transition-all duration-500 ease-in-out `}>
                            <div className={`msgIcon  mx-auto flex justify-center items-center text-[20px] p-5 transition-all duration-500 ease-in-out rounded-2xl
                                                                    lg:col-span-1 lg:m-0 
                                                                    xl:col-span-1 xl:m-0 xl:mt-3
                                                                    2xl:col-span-1 2xl:mt-0
                                                                    `}>
                                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                            </div>
                            <div className="flex flex-col justify-center items-center ">
                                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl'> {t("Admissions")} </h2>
                                <a href="mailto:studentaffairsdepartment@tantaroyalschools.edu.eg" className='p-2 text-[12px] sm:text-[16px]  md:text-2xl lg:text-[15px] '> studentaffairsdepartment@tantaroyalschools.edu.eg </a>
                            </div>


                        </div>
                        {/* Support Email */}
                        <div className={`Admissions  col-span-12 lg:col-span-4 p-5 rounded-2xl border-2  ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]  border-[#091048] "
                            : " hover:text-[#ffcc00] hover:bg-[#2b2873] bg-[#ffcc00] text-[#2b2873] border-[#2b2873] "} transition-all duration-500 ease-in-out `}>
                            <div className={`msgIcon  mx-auto flex justify-center items-center text-[20px] p-5 transition-all duration-500 ease-in-out rounded-2xl
                                                                    lg:col-span-1 lg:m-0 
                                                                    xl:col-span-1 xl:m-0 xl:mt-3
                                                                    2xl:col-span-1 2xl:mt-0
                                                                    `}>
                                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                            </div>
                            <div className="flex flex-col justify-center items-center ">
                                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl '> {t("Support")} </h2>
                                <a href="mailto:pr@tantaroyalschools.edu.eg" className='p-2 text-sm sm:text-[16px]  md:text-2xl lg:text-[15px]'> pr@tantaroyalschools.edu.eg </a>
                            </div>


                        </div>
                        {/* Info Email */}
                        <div className={`Admissions  col-span-12 lg:col-span-4 p-5 rounded-2xl border-2  ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]  border-[#091048] "
                            : " hover:text-[#ffcc00] hover:bg-[#2b2873] bg-[#ffcc00] text-[#2b2873] border-[#2b2873] "} transition-all duration-500 ease-in-out `}>
                            <div className={`msgIcon  mx-auto flex justify-center items-center text-[20px] p-5 transition-all duration-500 ease-in-out rounded-2xl
                                                                    lg:col-span-1 lg:m-0 
                                                                    xl:col-span-1 xl:m-0 xl:mt-3
                                                                    2xl:col-span-1 2xl:mt-0
                                                                    `}>
                                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                            </div>
                            <div className="flex flex-col justify-center items-center ">
                                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl'> {t("InfoEmail")} </h2>
                                <a href="mailto:info@tantaroyalschools.edu.eg%20" className='p-2 text-sm sm:text-[16px]  md:text-2xl lg:text-[15px]'> info@tantaroyalschools.edu.eg%20 </a>
                            </div>


                        </div>
                    </div>

                    {/* Second */}
                    <div className="grid grid-cols-12 relative gap-3  my-10">
                        {/* left */}
                        <div className={` flex flex-col  justify-center  col-span-12 lg:col-span-6 p-5 rounded-2xl border-2  ${darkMode ? " bg-[#091048] " : " bg-[#2b2873]"} transition-all duration-500 ease-in-out `}>
                            <div className="imgDiv flex flex-row justify-center lg:justify-start items-center lg:items-center  h-20">
                                <img src={tag} alt="School selection tag" className='w-18' loading='lazy' />
                            </div>
                            {/* first */}
                            <div className=" flex flex-col  gap-3 px-3 lg:p-0">
                                <span className='text-white text-lg  text-center px-10 font-tajawal font-bold
                                                                                lg:px-0 lg:text-start 
                                                                                '> {t("freeContact")} </span>
                                <span className={` text-[38px] text-white text-center font-tajawal font-bold transition-all duration-500 ease-in-out
                                                                            lg:text-start
                                                                            `}> {t("Keep")}  <span className={` font-tajawal font-bold transition-all duration-500 ease-in-out
                                                                            ${darkMode ? "text-[#f4af0f]" : "text-[#ffcc00] "}
                                                                            `}> {t("WithUs")} </span> </span>
                            </div>
                            <div className="  mb-5">
                                <p className='text-[#aaaaaa] text-center font-tajawal font-bold w-full mb-3
                                                                            lg:text-start
                                                                            '> {t("contactPageP")} </p>
                                <p className={`  font-tajawal font-bold text-center lg:text-start  transition-all duration-500 ease-in-out text-[#aaaaaa] `}> 📌 {t("contactPagePin")} </p>
                            </div>

                        </div>

                        {/* Right */}
                        <div className={`col-span-12 lg:col-span-6 p-5 rounded-2xl border-2  ${darkMode ? " bg-[#f4af0f] " : " bg-[#ffcc00]"} transition-all duration-500 ease-in-out `}>
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
                                <h2 className={`text-3xl font-tajawal font-bold  mb-6 ${darkMode ? " text-[#091048] " : " text-[#2b2873]"}`}>
                                    {t("ComplaintsAndProposals")}
                                </h2>
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
                                        <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.Phone} type="text" name="Phone" id="Phone" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg  max-w-4xl block w-full p-2.5" required />
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
                                        <button type='submit' className={` p-5 font-tajawal font-bold cursor-pointer rounded-xl transition-all duration-500 ease-in-out
                                                ${darkMode ? "text-[#f4af0f] bg-[#091048]  " :
                                                "text-[#ffcc00] bg-[#2b2873] "}
                            `} >  {t("send")} </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    {/* Third */}
                    <div className="grid grid-cols-12 relative gap-3 ">
                        {/* hotLine */}
                        <div className={`  col-span-12 lg:col-span-6 p-5 rounded-2xl border-2  ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]   border-[#091048] "
                            : " hover:text-[#ffcc00] hover:bg-[#2b2873] bg-[#ffcc00] text-[#2b2873] border-[#2b2873] "} transition-all duration-500 ease-in-out `}>
                            <div className={`msgIcon  mx-auto flex justify-center items-center text-[20px] p-5 transition-all duration-500 ease-in-out rounded-2xl
                                                                    lg:col-span-1 lg:m-0 
                                                                    xl:col-span-1 xl:m-0 xl:mt-3
                                                                    2xl:col-span-1 2xl:mt-0
                                                                    `}>
                                <FontAwesomeIcon icon={faPhoneVolume} size="2xl" />
                            </div>
                            <div className="flex flex-col justify-center items-center ">
                                <a href="tel:19" target='_blank' className='p-2 text-sm lg:text-[16px] font-almarai font-bold '> {t("hotline")} </a>
                                <p className='font-almarai font-bold'>17418</p>
                            </div>
                        </div>
                        {/* location */}
                        <div className={`  col-span-12 lg:col-span-6 p-5 rounded-2xl border-2 ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]   border-[#091048] "
                            : " hover:text-[#ffcc00] hover:bg-[#2b2873] bg-[#ffcc00] text-[#2b2873] border-[#2b2873] "} transition-all duration-500 ease-in-out `}>
                            <div className={`msgIcon  mx-auto flex  justify-center items-center text-[20px] p-5 transition-all duration-500 ease-in-out rounded-2xl
                                                                    lg:col-span-1 lg:m-0 
                                                                    xl:col-span-1 xl:m-0 xl:mt-3
                                                                    2xl:col-span-1 2xl:mt-0
                                                                    `}>
                                <FontAwesomeIcon icon={faLocationDot} size="2xl" />
                            </div>
                            <div className="flex flex-col justify-center items-center ">
                                <a href="https://maps.app.goo.gl/gHBC8f1FLKZKHC5EA" target='_blank' className='p-2 text-sm lg:text-[16px] font-almarai font-bold '> {t("OfficeAddress")} </a>
                            </div>
                        </div>
                    {/* map */}
                    <div className="map col-span-12 mt-5 ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7300.4093962072275!2d30.985869!3d30.800193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7cb771388b987%3A0x264d5576a6d5071a!2z2YXYr9in2LHYsyDYsdmI2YrYp9mEINi32YbYt9inINin2YTYrtin2LXYqSDZhNmE2LrYp9iq!5e1!3m2!1sar!2seg!4v1755109070096!5m2!1sar!2seg" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full rounded-2xl' />
                    </div>
                    </div>


                </div>
            </section>
            <Footer />

        </div>
    )
}
