import React, { useEffect } from 'react'
import { useModeContext } from '../../context/modeContext';
import { useLanguageContext } from '../../context/langContext';
import mainPhoto from "../../assets/Photos/pho/15.webp"
import { faArrowLeft, faArrowRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function Policy() {
  // page title
  const usePageTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  usePageTitle("Privacy Policy")

  // darkMode
  const { darkMode } = useModeContext();
  // Language
  const { t, currentLang } = useLanguageContext();

  const PolicyData = [
        { key: "IntroductionT", content: "IntroductionPolicyP" },
        { key: "infoCollect", content: ["infoCollectP", "infoCollectP1" ,"infoCollectP2" , "infoCollectP3"] },
        { key: "howUseInfo", content: ["howUseInfoP", "howUseInfoP1" ,"howUseInfoP2" ,"howUseInfoP3" , "howUseInfoP4"] },
        { key: "infoSharing", content: ["infoSharingP" ,"infoSharingP1","infoSharingP2"] },
        { key: "DataProtection", content: ["DataProtectionP", "DataProtectionP1","DataProtectionP2","DataProtectionP3"] },
        { key: "CookiesPolicy", content: ["CookiesPolicyP", "CookiesPolicyP1", "CookiesPolicyP2" ,"CookiesPolicyP3"] },
        { key: "UserRights", content: ["UserRightsP", "UserRightsP1", "UserRightsP2" ,"UserRightsP3","UserRightsP4"] },
        { key: "PrivacyPolicyUpdates", content: "PrivacyPolicyUpdatesP" },
        ];


  return (
    <div className={`PolicyPage h-full ${darkMode ? "bg-[#030712]" : "bg-white "}  transition-all duration-500 ease-in-out`}>
      {/* heading section */}
      <section id='headSection' className={`relative w-full overflowHidden  h-[500px] transition-all duration-500 ease-in-out  ${darkMode ? "bg-[#030712]" : "bg-white "}
            md:h-[700px]
            xl:h-[515px] `}>
        <img src={mainPhoto} alt="International School Main Building" className="mainPhoto absolute w-full object-contain h-[550px] md:h-[800px] xl:object-cover xl:h-[515px]" loading="lazy" />



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
            {t("policyTitle")}
          </h1>
          <div className="Breadcrumb text-white text-lg flex justify-center  ">
            <Link to={"/"}><FontAwesomeIcon icon={faHouse} className=' my-auto ' /></Link>
            {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
              (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}
            <span className='font-almarai font-bold my-auto'>  {t("policyTitle")} </span>
          </div>
        </div>
      </section>

      <section className={`transition-all duration-500 ease-in-out lg:py-20 ${darkMode ? "bg-[#030712]" : "bg-white "}`}>
        <div className="container w-full mx-auto p-3 lg:p-5 xl:px-30">
          <div className="gap-5 flex flex-col justify-center items-center pb-18.5 lg:py-0 lg:items-start">
            {PolicyData.map((item) => (
              <div key={item.key} className="flex flex-col gap-2 w-full lg:px-5">
                
                <h1 className={`${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "} text-2xl text-center px-10 font-tajawal font-bold lg:px-0 lg:text-start transition-all duration-500 ease-in-out`}>
                  {t(item.key)}
                </h1>

                {Array.isArray(item.content) ? (
                  item.content.map((c, idx) => (
                    <p key={idx} className={`${darkMode ? "text-white" : "text-black "} transition-all duration-500 ease-in-out text-base text-center px-10 lg:px-0 lg:text-start`}>
                      {t(c)}
                    </p>
                  ))
                ) : (
                  <p className={`${darkMode ? "text-white" : "text-black "} text-base text-center px-10 lg:px-0 lg:text-start transition-all duration-500 ease-in-out`}>
                    {t(item.content)}
                  </p>
                )}
                <div className={`border ${darkMode ? "border-[#f4af0f]" : "border-[#2b2873] "} transition-all duration-500 ease-in-out`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>

    </div>
  )
}


