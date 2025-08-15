import React, { useEffect, useState } from 'react'

import { faHouse, faArrowRight, faArrowLeft, faChevronUp, faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import mainPhoto from "../../assets/Photos/pho/15.webp"
import uniform from "../../assets/Photos/pho/uniform.webp";
import msg from "../../assets/Photos/pho/chat.png"
import lamp from "../../assets/Photos/pho/lamp.png"
import { useModeContext } from '../../context/modeContext';
import * as Yup from "yup"
import { useFormik } from 'formik'
import { useLanguageContext } from '../../context/langContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function Uniform() {
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


    // form
    const yupSchema = Yup.object().shape({
        name: Yup.string().required(t("require")).min(5).max(15),
        ID: Yup.number().required(t("require")).min(14),
        email: Yup.string().email().required(t("require")).matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, "Email is not valid"),
        Phone: Yup.string().required(t("require")).matches(/^(010|011|012|015)[0-9]{8}$/, "Phone number is not valid"),
    });


    const formic = useFormik({
        initialValues: {
            name: "",
            ID: "",
            email: "",
            Phone: "",
        },
        validationSchema: yupSchema,

    })




    return (
        <div className={`UniformPage h-full ${darkMode ? "bg-[#030712]" : "bg-white "}  transition-all duration-500 ease-in-out`}>
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
                        {t("uniformTitle")}
                    </h1>
                    <div className="Breadcrumb text-[#aaaaaa] text-lg flex justify-center  ">
                        <Link to={"/"}><FontAwesomeIcon icon={faHouse} className=' my-auto ' /></Link>
                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}
                        <span className='font-almarai font-bold my-auto'>  {t("uniformTitle")} </span>
                    </div>
                </div>


            </section>

            {/* Uniform section  */}
            <section className={`relative min-h-screen  transition-all duration-500 ease-in-out`}>
                <div className="container grid  mx-auto p-15  inset-0  z-20 relative
                            lg:grid-cols-12  lg:px-5
                            xl:px-15
                            ">
                    <div className="left mb-20 col-span-12  relative  gap-3 flex flex-col  justify-center items-center 
                                    lg:col-span-6 lg:flex-row lg:items-start rtl:lg:col-span-6
                                    xl:col-span-6 xl:top-10
                                    2xl:col-span-8 
                                    ">
                        <div className={`msgIcon max-h-[120px] mx-auto flex justify-center items-center text-[20px] p-5 transition-all duration-500 ease-in-out rounded-2xl
                                        lg:col-span-1 lg:m-0 
                                        xl:col-span-1 xl:m-0 xl:mt-3
                                        2xl:col-span-1 2xl:mt-0
                                        ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048] " :
                                "text-[#091048] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"}`}>
                            <FontAwesomeIcon icon={faUser} size="2xl" />
                        </div>
                        <div className="left  gap-5 
                                        lg:col-span-8
                                        xl:col-span-7 
                                        2xl:col-span-6 2xl:items-start 2xl:flex-wrap
                                        ">
                            <div className="mb-5">
                                <p className='text-[#666666] text-center max-w-[740px] font-tajawal font-bold w-full 
                                                lg:text-start
                                                '><span className='text-3xl'>👕</span> {t("uniformP")} </p>
                            </div>


                            {/* second */}

                            <div className={` p-5  rounded-2xl ${darkMode ? "bg-[#f4af0f]" : "bg-[#ffcc00]"} transition-all duration-500 ease-in-out`} >
                                <ol className="flex items-center justify-center w-full mb-4 sm:mb-5">
                                    <li className={`flex w-full items-center  after:content-[''] after:w-full after:h-1 after:border-b after:border-[#666666] after:border-4 after:inline-block `}>
                                        <li className={`flex w-full items-center ${darkMode ? "after:border-[#091048]" : "after:border-[#2b2873]"} after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block `}> </li>

                                        <div className={`flex items-center justify-center w-5 h-5 ${darkMode ? "bg-[#091048]" : "bg-[#2b2873]"} rounded-full lg:h-5 lg:w-5  shrink-0`}>

                                        </div>
                                    </li>
                                    <li className={`flex w-full items-center  after:content-[''] after:w-full after:h-1 after:border-b after:border-[#666666] after:border-4 after:inline-block `}>
                                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-[#666666] after:border-4 after:inline-block "> </li>

                                        <div className="flex items-center justify-center w-5 h-5 bg-[#666666] rounded-full lg:h-5 lg:w-5  shrink-0">

                                        </div>
                                    </li>
                                    <li className={`flex w-full items-center  after:content-[''] after:w-full after:h-1 after:border-b after:border-[#666666] after:border-4 after:inline-block `}>
                                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-[#666666] after:border-4 after:inline-block "> </li>

                                        <div className="flex items-center justify-center w-5 h-5 bg-[#666666] rounded-full lg:h-5 lg:w-5  shrink-0">

                                        </div>
                                    </li>

                                </ol>
                                <div className="flex flex-col justify-start items-start ">
                                    <h2 className={` text-[45px] font-tajawal  transition-all duration-500 ease-in-out 
                                    ${darkMode ? "text-[#091048] " : "text-[#091048]"} `}>
                                        {t("stuInfo")} </h2>
                                    <p className={`  font-tajawal  transition-all duration-500 ease-in-out 
                                    ${darkMode ? "text-[#091048] " : "text-[#091048]"} `}> 📌 {t("fill")} </p>
                                </div>

                                <form action="#" className="space-y-8 mt-5">
                                    {/* name */}
                                    <div className="relative z-0 w-full mb-5 group ">
                                        <label htmlFor="name" className={`block mb-2 text-[12px] font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}> {t("StudentName")} <span className='text-red-500'>* </span> </label>
                                        <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.name} type="text" name="name" id="name" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg max-w-4xl block w-full p-2.5" placeholder={` ${t("StudentNamePlace")} `} required />
                                        {
                                            formic.errors.name && (
                                                <div className={`p-4 mb-4 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                                                    {formic.errors.name}</div>
                                            )}
                                    </div>

                                    {/* ID */}
                                    <div className="relative z-0 w-full mb-5 group ">
                                        <label htmlFor="ID" className={`block mb-2 text-[12px] font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}> {t("stuId")} <span className='text-red-500'>* </span> </label>
                                        <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.ID} type="number" name="ID" id="ID" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg max-w-4xl block w-full p-2.5" placeholder={` ${t("stuId")} `} required />
                                        {
                                            formic.errors.name && (
                                                <div className={`p-4 mb-4 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                                                    {formic.errors.ID}</div>
                                            )}
                                    </div>

                                    {/* email */}
                                    <div className="relative z-0 w-full mb-5 group">
                                        <label htmlFor="email" className={`block mb-2 text-[12px] font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}>{t("Parent’sEmail")} <span className='text-red-500'>* </span></label>
                                        <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full max-w-4xl p-2.5" placeholder={` ${t("Parent’sEmailPlace")} `} required />
                                    </div>
                                    {
                                        formic.errors.email &&
                                        <div className={`p-4 mb-4 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                                            {formic.errors.email}
                                        </div>
                                    }

                                    {/* Phone number */}
                                    <div className="relative z-0 w-full mb-5 group">
                                        <label htmlFor="Phone" className={`block mb-2 text-[12px] font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}>{t("Parent’sPhoneNumber")} <span className='text-red-500'>* </span></label>
                                        <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.Phone} type="text" name="Phone" id="Phone" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg  max-w-4xl block w-full p-2.5" placeholder={` ${t("Parent’sPhoneNumberPlace")} `} required />
                                        {
                                            formic.errors.name && (
                                                <div className={`p-4 mb-4 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                                                    {formic.errors.Phone}</div>
                                            )}
                                    </div>




                                    <div className="formBtn flex justify-end items-end ">
                                        <button type='submit' className={` px-8 py-3  cursor-pointer rounded-xl transition-all duration-500 ease-in-out
                                                ${darkMode ? "text-[#f4af0f] bg-[#091048] hover:text-[#ffcc00] hover:bg-[#2b2873] " :
                                                "text-[#ffcc00] bg-[#2b2873] hover:text-[#f4af0f] hover:bg-[#091048]"}
                            `} >  {t("next")} </button>
                                    </div>
                                </form>
                            </div>
                        </div>






                    </div>


                    <div className="right mb-20 m-5 col-span-12  relative  top-0   rtl:mx-auto
                                    lg:col-span-6  lg:m-0   rtl:lg:col-span-6 lg:mx-auto 
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
                            className=" mx-auto ">
                            <img src={uniform} style={style} alt="school" className={`w-[395px] mx-auto h-full object-cover rounded-xl border-5 
                                ${darkMode ? "border-[#091048]" : "border-[#2b2873]"}
                                `} />
                        </div>

                        {/* second */}






                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}
