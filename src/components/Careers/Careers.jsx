import React, { useEffect, useState } from 'react'
import { useModeContext } from '../../context/modeContext';
import { useLanguageContext } from '../../context/langContext';
import tag from "../../assets/Photos/pho/svg.webp"
import { faPhoneVolume, faUser } from '@fortawesome/free-solid-svg-icons';
import mainPhoto from "../../assets/Photos/pho/Carreers.webp"
import * as Yup from "yup"
import { useFormik } from 'formik'
import { Link, Links } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer';

export default function Photos() {

  // page title
  const usePageTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  usePageTitle("Careers")
  // darkMode
  const { darkMode } = useModeContext();
  // Language
  const { t, } = useLanguageContext();

 // scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


  const [personalPhotoName, setPersonalPhotoName] = useState(t("ChooseFile"));
  const [cvName, setCvName] = useState(t("ChooseFile"));
  // form
  const yupSchema = Yup.object().shape({
    name: Yup.string().required(t("require")).min(5).max(15),
    email: Yup.string().email().required(t("require")).matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, "Email is not valid"),
    Phone: Yup.string().required(t("require")).matches(/^(010|011|012|015)[0-9]{8}$/, "Phone number is not valid"),
    Address: Yup.string().required(t("require")).min(5).max(15),
    Qualification: Yup.string().required(t("require")).min(5).max(15),
    GPA: Yup.number().required(t("require")).min(0).max(4),
  });


  const formic = useFormik({
    initialValues: {
      name: "",
      email: "",
      Phone: "",
      Address: "",
      Qualification: "",
      GPA: "",
    },
    validationSchema: yupSchema,
  })

  return (
    <div className={` CareersPage  ${darkMode ? "bg-[#030712]" : "bg-white "}  transition-all duration-500 ease-in-out`}>
      {/* heading section */}
      <section className={`relative w-full overflow-hidden h-[400px] transition-all duration-500 ease-in-out ${darkMode ? "bg-[#030712]" : "bg-white "}
    md:h-[600px] xl:h-[650px]`}>
    
    <img src={mainPhoto} loading='lazy' alt="mainPhoto" className="mainPhoto absolute w-full object-contain h-[550px] md:h-[700px] xl:object-cover xl:h-full "/>

    {/* Heading */}
    <div className="relative z-11 flex flex-col justify-center items-center text-center top-48 sm:top-50 lg:top-70">
        <div className="container mx-auto xl:px-15">
            <div className="mx-auto flex flex-col justify-center items-center">
                <div className="imgDiv flex justify-center items-center h-10">
                    <img loading='lazy' src={tag} alt="School selection tag" className='w-10 sm:w-15 mb-5' />
                </div>

                <div className="flex flex-col gap-1">
                    <span className='text-white text-[10px] md:text-lg text-center px-10 font-tajawal font-bold lg:px-0 '>
                        {t("join")}
                    </span>
                    <span className='text-white text-lg sm:text-[30px] md:text-[40px] text-center font-tajawal font-bold'>
                        {t("carer")}
                        <span className={`font-tajawal font-bold transition-all duration-500 ease-in-out ${darkMode ? "text-[#f4af0f]" : "text-[#ffcc00]"}`}>
                            {t("Opportunities")}
                        </span>
                    </span>
                </div>

                <div className="mb-5">
                    <p className='text-white text-[10px] sm:text-sm md:text-lg text-center font-tajawal px-3 w-full'>
                        {t("carerP")}
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>



      {/* careers Section */}

      <section className=' py-20'>
        <div className="container  mx-auto p-5 
                            lg:px-5
                            xl:px-15
                            ">
          {/* Personal Information : */}
          <div className="form1  ">
            <div className="sectionTitle">
              <h2 className={`font-almarai font-black text-4xl text-center md:text-start  mb-5
              ${darkMode ? "text-white" : "text-black"}
              `}> {t("form1T")} </h2>
              <div className={`border ${darkMode ? "border-[#f4af0f] " : "border-[#2b2873] "}`}></div>
            </div>
            <div className="py-8 lg:py-16   ">
              <form action="#" className="space-y-8 grid grid-cols-12 ">
                {/* name */}
                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4 ">
                  <label htmlFor="name" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}> {t("name")} <span className='text-red-500'>* </span> </label>
                  <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.name} type="text" name="name" id="name" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg max-w-4xl block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]  focus:border-[#ffcc00]" placeholder={` ${t("namePlace")} `} required />
                  {
                    formic.errors.name && (
                      <div className={`p-4 mb-4 mt-5 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                        {formic.errors.name}</div>
                    )}
                </div>

                {/* Phone number */}
                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4">
                  <label htmlFor="Phone" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}>{t("phone")}  <span className='text-red-500'>* </span> </label>
                  <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.Phone} type="text" name="Phone" id="Phone" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg  max-w-4xl block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]  focus:border-[#ffcc00]" placeholder={` ${t("phonePlace")} `} required />
                  {
                    formic.errors.email &&
                    <div className={`p-4 mb-4 mt-5 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                      {formic.errors.Phone}
                    </div>
                  }
                </div>

                {/* email */}
                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4">
                  <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}>{t("email")} <span className='text-red-500'>* </span></label>
                  <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full max-w-4xl p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]  focus:border-[#ffcc00]" placeholder={` ${t("emailPlace")} `} required />
                  {
                    formic.errors.email &&
                    <div className={`p-4 mb-4 mt-5 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                      {formic.errors.email}
                    </div>
                  }
                </div>

                {/* Address */}
                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4">

                  <label for="street-address" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}>{t("Address")} <span className='text-red-500'>* </span></label>
                  <input type="text" id="street-address" name="street-address" autocomplete="street-address" enterkeyhint="next" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full max-w-4xl p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]  focus:border-[#ffcc00]" placeholder={` ${t("emailPlace")} `} required />

                  {
                    formic.errors.email &&
                    <div className={`p-4 mb-4 mt-5 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                      {formic.errors.email}
                    </div>
                  }
                </div>

                {/* select gender */}
                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4">
                  <div>
                    <label htmlFor="Gender" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}>{t("Gender")} <span className='text-red-500'>* </span></label>
                    <select id="Gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full max-w-4xl p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]  focus:border-[#ffcc00]">
                      <option selected className=''> {t("Gender")} </option>
                      <option >{t("Male")}</option>
                      <option >{t("Female")}</option>
                    </select>
                  </div>
                </div>

                {/* date of birth */}

                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4">
                  <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `} htmlFor="dob">
                    {t("DateOfBirth")} <span className='text-red-500'>* </span>
                  </label>
                  <div className="mt-1">
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full placeholder-gray-400 max-w-4xl p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]  focus:border-[#ffcc00]" required type="date" name="dob" id="dob" />
                  </div>
                </div>

              </form>
            </div>
          </div>

          {/* Academic Information: */}
          <div className="form2  ">
            <div className="sectionTitle">
              <h2 className={`font-almarai font-black text-4xl text-center md:text-start  mb-5
              ${darkMode ? "text-white" : "text-black"}
              `}> {t("form2T")} </h2>
              <div className={`border ${darkMode ? "border-[#f4af0f] " : "border-[#2b2873] "}`}></div>
            </div>
            <div className="py-8 lg:py-16   ">
              <form action="#" className="space-y-8 grid grid-cols-12 ">
                {/* Qualification */}
                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4 ">
                  <label htmlFor="Qualification" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}> {t("Qualification")} <span className='text-red-500'>* </span> </label>
                  <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.Qualification} type="text" name="Qualification" id="Qualification" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg max-w-4xl block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]  focus:border-[#ffcc00]" placeholder={` ${t("Qualification")} `} required />
                  {
                    formic.errors.name && (
                      <div className={`p-4 mb-4 mt-5 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                        {formic.errors.Qualification}</div>
                    )}
                </div>

                {/* GPA */}
                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4">
                  <label htmlFor="GPA" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}>{t("GPA")}  <span className='text-red-500'>* </span> </label>
                  <input onChange={formic.handleChange} onBlur={formic.handleBlur} value={formic.values.GPA} type="text" name="GPA" id="GPA" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg  max-w-4xl block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]  focus:border-[#ffcc00]" placeholder={` ${t("GPA")} `} required />
                  {
                    formic.errors.email &&
                    <div className={`p-4 mb-4 mt-5 text-sm text-center ${darkMode ? "bg-white text-red-800" : "bg-gray-800 text-red-400"}  rounded-lg   transition-all duration-500 ease-in-out `} role="alert">
                      {t("require")}
                    </div>
                  }
                </div>





              </form>
            </div>
          </div>

          {/* Job Details */}
          <div className="form3  ">
            <div className="sectionTitle">
              <h2 className={`font-almarai font-black text-4xl text-center md:text-start  mb-5
              ${darkMode ? "text-white" : "text-black"}
              `}> {t("form3T")} </h2>
              <div className={`border ${darkMode ? "border-[#f4af0f] " : "border-[#2b2873] "}`}></div>
            </div>
            <div className="py-8 lg:py-16   ">
              <form action="#" className="space-y-8 grid grid-cols-12 ">

                {/* Graduation Date */}
                <div className="relative z-0 w-full mb-5 group col-span-12  px-4">
                  <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `} htmlFor="dob">
                    {t("GraduationDate")} <span className='text-red-500'>* </span>
                  </label>
                  <div className="mt-1 w-full">
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full placeholder-gray-400  p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]  focus:border-[#ffcc00]" required type="date" name="dob" id="dob" />
                  </div>
                </div>

                {/* Applying For Position */}
                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4 ">
                  <label htmlFor="Qualification" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}> {t("ApplyingForPosition")}  </label>
                  <input onChange={formic.handleChange} onBlur={formic.handleBlur} type="text" name="Qualification" id="Qualification" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg max-w-4xl block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]  focus:border-[#ffcc00]" placeholder={` ${t("optional")} `} required />

                </div>

                {/* Previous Salary */}
                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4">
                  <label htmlFor="GPA" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `}>{t("PreviousSalary")}  </label>
                  <input onChange={formic.handleChange} onBlur={formic.handleBlur} type="text" name="GPA" id="GPA" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg  max-w-4xl block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]  focus:border-[#ffcc00]" placeholder={` ${t("optional")} `} required />
                </div>
              </form>
            </div>
          </div>


          {/* Skills & Experience */}
          <div className="form4  ">
            <div className="sectionTitle">
              <h2 className={`font-almarai font-black text-4xl text-center md:text-start  mb-5
              ${darkMode ? "text-white" : "text-black"}
              `}> {t("form4T")} </h2>
              <div className={`border ${darkMode ? "border-[#f4af0f] " : "border-[#2b2873] "}`}></div>
            </div>
            <div className="py-8 lg:py-16   ">
              <form action="#" className="space-y-8 grid grid-cols-12 ">

                {/* Training Courses/Computer Skills */}
                <div className="relative z-0 w-full mb-5 group col-span-12  px-4">
                  <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `} htmlFor="dob">
                    {t("TrainingCourses/ComputerSkills")} <span className='text-red-500'>* </span>
                  </label>
                  <div className="mt-1 w-full">
                    <textarea
                      className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg h-30   block w-full p-2.5"
                      placeholder={` ${t("TrainingCourses/ComputerSkills")} `}
                    ></textarea>                  </div>
                </div>

                {/* Languages/ProficiencyLevel*/}
                <div className="relative z-0 w-full mb-5 group col-span-12  px-4">
                  <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `} htmlFor="dob">
                    {t("Languages/ProficiencyLevel")} <span className='text-red-500'>* </span>
                  </label>
                  <div className="mt-1 w-full">
                    <textarea
                      className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg h-30   block w-full p-2.5"
                      placeholder={` ${t("Languages/ProficiencyLevel")} `}
                    ></textarea>                  </div>
                </div>

                {/* Languages/PreviousExperience*/}
                <div className="relative z-0 w-full mb-5 group col-span-12  px-4">
                  <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}  transition-all duration-500 ease-in-out `} htmlFor="dob">
                    {t("Languages/PreviousExperience")}
                  </label>
                  <div className="mt-1 w-full">
                    <textarea
                      className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg h-30   block w-full p-2.5"
                      placeholder={` ${t("Languages/PreviousExperience")} `}
                    ></textarea>                  </div>
                </div>
              </form>
            </div>
          </div>

          {/*Documents */}
          <div className="form5  ">
            <div className="sectionTitle">
              <h2 className={`font-almarai font-black text-4xl text-center md:text-start  mb-5
              ${darkMode ? "text-white" : "text-black"}
              `}> {t("form5T")} </h2>
              <div className={`border ${darkMode ? "border-[#f4af0f] " : "border-[#2b2873] "}`}></div>
            </div>
            <div className="py-8 lg:py-16   ">
              <form action="#" className="space-y-8 grid grid-cols-12 ">

                {/* PersonalPhoto */}
                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4">
                  <div>
                    <label
                      className={`block mb-10 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"
                        } transition-all duration-500 ease-in-out`}
                      htmlFor="personal_photo_input"
                    >
                      {t("PersonalPhoto")}
                    </label>

                    <label
                      className={`transition-all cursor-pointer duration-500 ease-in-out p-5 rounded-xl font-tajawal font-bold
        ${darkMode
                          ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]"
                          : "text-[#2b2873] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"
                        }`}
                    >
                      {personalPhotoName}
                      <input
                        id="personal_photo_input"
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                          setPersonalPhotoName(
                            e.target.files.length > 0
                              ? e.target.files[0].name
                              : t("ChooseFile")
                          )
                        }
                      />
                    </label>
                  </div>
                </div>

                {/* CV */}
                <div className="relative z-0 w-full mb-5 group col-span-12 lg:col-span-6 px-4">
                  <div>
                    <label
                      className={`block mb-10 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"
                        } transition-all duration-500 ease-in-out`}
                      htmlFor="cv_input"
                    >
                      {t("CV(CurriculumVitae)")}
                    </label>

                    <label
                      className={`transition-all cursor-pointer duration-500 ease-in-out p-5 rounded-xl font-tajawal font-bold
        ${darkMode
                          ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048]"
                          : "text-[#2b2873] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"
                        }`}
                    >
                      {cvName}
                      <input
                        id="cv_input"
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                          setCvName(
                            e.target.files.length > 0 ? e.target.files[0].name : t("ChooseFile")
                          )
                        }
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="submit ">
            <button type='submit' className={` p-5 font-tajawal font-bold cursor-pointer rounded-xl Submit transition-all duration-500 ease-in-out 
                                            ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048] " :
                "text-[#2b2873] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"}
                                            `} >  {t("Submit")} </button>
          </div>
        </div>

      </section>


      <section className={`pb-20 lg:pb-10 transition-all duration-500 ease-in-out  
                  ${darkMode ? "bg-[#69686f]" : "bg-[#e8e7f0] "}
                  `}>
        <div className="container grid  mx-auto p-3  inset-0  z-20 
                      lg:grid-cols-12 lg:p-5
                      2xl:py-15 2xl:px-20
                      
                      ">
          <div className={`msgIcon max-h-[120px] mx-auto flex justify-center items-center text-[20px] p-5 transition-all duration-500 ease-in-out rounded-2xl
                                  lg:col-span-1 lg:m-0
                                  xl:col-span-1 xl:m-0
                                  2xl:col-span-1
                                  ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048] " :
              "text-[#091048] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"}
                                  `}>
            <FontAwesomeIcon icon={faUser} size="2xl" />
          </div>
          <div className="left mx-auto max-w-[640px] gap-5 flex flex-col  justify-center items-center
                          lg:col-span-8
                          xl:col-span-7
                          2xl:col-span-6 2xl:items-start 2xl:flex-wrap
                      ">


            <div className="flex flex-col gap-1">
              <h2 className='text-black text-[36px] text-center font-tajawal font-bold
                                  lg:text-start
                                  '> {t("hiring")}
                <h2 className={` font-tajawal font-bold transition-all duration-500 ease-in-out
                                  ${darkMode ? "text-[#24246d]" : " text-[#333399] "}
                                  `}> {t("joinTeam")} </h2> </h2>
            </div>

            <div className="mb-5">
              <p className='text-black text-center font-tajawal font-bold w-full 
                                  lg:text-start
                                  '>📌 {t("explore")} </p>
            </div>


          </div>
          <div className="right m-5 mx-auto 
                          lg:col-span-3 lg:m-0 lg:my-auto lg:mx-auto
                          xl:col-span-4 xl:mx-auto
                          2xl:col-span-5 2xl:mx-auto
                          ">
            <div className="contactBtn ">
              <Link to={"/contact-us"} onClick={() => scrollToTop()} className={` p-5 font-tajawal font-bold rounded-xl transition-all duration-500 ease-in-out
                                  ${darkMode ? "text-[#091048] bg-[#f4af0f] hover:text-[#f4af0f] hover:bg-[#091048] " :
                  "text-[#091048] bg-[#ffcc00] hover:text-[#ffcc00] hover:bg-[#2b2873]"}
                                  `} > <FontAwesomeIcon icon={faPhoneVolume} className='pr-3 rtl:pl-2' /> {t("contctBtn")} </Link>
            </div>
          </div>
        </div>
      </section>


      <Footer />

    </div>
  )
}
