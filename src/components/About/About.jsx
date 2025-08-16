import React, { useEffect, useState } from 'react'
import { faHouse, faArrowRight, faArrowLeft, faEnvelope, faPhoneVolume, faEye, faGem, faBullseye, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import mainPhoto from "../../assets/Photos/pho/15.webp"
import tag from "../../assets/Photos/pho/svg.webp"
import founder from "../../assets/Photos/pho/Founder.webp"
import school from "../../assets/Photos/pho/16.webp"
import { useModeContext } from '../../context/modeContext';
import { useLanguageContext } from '../../context/langContext';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import CountUp from 'react-countup';
import Footer from '../Footer/Footer';
import Progress from './Progres/Progress';
export default function About() {
  // page title
  const usePageTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  usePageTitle("About Us")

  // open card
  const [openCard, setOpenCard] = useState(null);
  const cardsData = [
    { key: "Curricula", content: "CurriculaP" },
    { key: "Engaging", content: "EngagingP" },
    { key: "Qualified", content: "QualifiedP" },
    { key: "Comprehensive", content: "ComprehensiveP" },
    { key: "Supportive", content: "SupportiveP" },
  ];
// scroll to top
const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

  // scroll to section
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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

  // counter
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  }
  );


  return (
    <div className='About Page'>
      {/* heading section */}
      <section className={`relative w-full overflowHidden  h-[500px] transition-all duration-500 ease-in-out  ${darkMode ? "bg-[#030712]" : "bg-white "}
            md:h-[700px]
            xl:h-[515px] `}>
        <img src={mainPhoto} alt="International School Main Building" className="mainPhoto absolute w-full object-contain h-[550px] md:h-[800px] xl:object-cover xl:h-[515px]" loading="lazy" />



        {/* Heading */}

        <div
          className="relative z-11 flex flex-col justify-center items-center text-center top-60
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
            {t("aboutTitle")}
          </h1>
          <div className="Breadcrumb text-white text-lg flex justify-center  ">
            <Link to={"/"}><FontAwesomeIcon icon={faHouse} className=' my-auto ' /></Link>
            {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
              (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}
            <span className='font-almarai font-bold my-auto'>  {t("aboutTitle")} </span>
          </div>
        </div>


      </section>

      {/* section 1 */}
      <section className={` relative overflow-hidden min-h-[1050px] transition-all duration-500 ease-in-out
                  sm:min-h-[850px]
                  lg:min-h-[600px]
                  ${darkMode ? "bg-[#030712]" : "bg-white "}
                  `}>
        <div className="container grid  mx-auto p-3  inset-0  z-20 absolute
                      lg:grid-cols-12 lg:p-5
                      xl:p-15
                      ">
          <div className="left mx-auto col-span-12  relative max-w-[640px] gap-5 flex flex-col  justify-center items-center 
                          lg:col-span-6 lg:items-start
                      ">
            <div className={` w-full h-[300px] rounded-lg absolute top-13 right-5 rtl:top-23 transition-all duration-500 ease-in-out
                          sm:top-20 rtl:sm:top-25
                          md:top-25 md:right-10 rtl:md:top-30
                          lg:top-30 lg:rounded-2xl  rtl:lg:top-30  rtl:lg:-right-10 
                          ${darkMode ? "bg-[#f4af0f]" : " bg-[#ffcc00] "}
                          `}></div>
            <div onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: "1000px" }}
              className="schoolImg   mx-auto ">
              <img src={school} style={style} alt="school" className="w-[300px] h-full object-cover rounded-xl " loading="lazy" />
            </div>

          </div>
          <div className="right m-5 col-span-12 
                          lg:col-span-6 lg:m-0 lg:my-auto
                          xl:col-span-5
                          ">
            <div className="imgDiv flex justify-center items-center lg:justify-start  h-20">
              <img src={tag} alt="School selection tag" className='w-18' loading="lazy" />
            </div>

            <div className=" flex flex-col gap-3 px-3 lg:p-0">
              <h3 className={`${darkMode ? "text-white " : "text-black"} text-lg  text-center px-10 font-tajawal font-bold transition-all duration-500 ease-in-out
                                  lg:px-0 lg:text-start`}>
                {t("Who")}
              </h3>
              <h2 className={`text-3xl  text-center font-tajawal font-bold transition-all duration-500 ease-in-out
                                  lg:text-start lg:text-[38px]
                                  ${darkMode ? "text-white" : "text-black "}
                                  `}> {t("building")}  <span className={` font-tajawal font-bold transition-all duration-500 ease-in-out
                                  ${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "}
                                  `}> {t("Student")} </span> </h2>
            </div>

            <div className="WhoP  mb-5">
              <p className='text-[#aaaaaa] text-center font-tajawal font-bold w-full 
                                  lg:text-start
                                  '> {t("WhoP")}
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* section 2 */}
      <section id='aboutContent' className={`transition-all duration-500 ease-in-out
            lg:pt-10
            ${darkMode ? "bg-[#091048]" : "bg-[#2b2873] "}
            `}>
        <div className="container w-full  mx-auto  p-3  inset-0  z-20 
                        lg:p-5
                        xl:p-20
                        ">
          <div className=" gap-5 flex flex-col  justify-center items-center
                            lg:items-start
                        ">
            <div className="imgDiv flex justify-center items-center lg:justify-start   h-20">
              <img src={tag} alt="School selection tag" className='w-18' loading='lazy' />
            </div>

            <div className=" flex flex-col gap-1 w-full
                                ">
              <span className='text-white text-lg  text-center px-10 font-tajawal font-bold
                                    lg:px-0 lg:text-start
                                    '> {t("who2")} </span>
              <span className='text-white  text-3xl text-center font-tajawal font-bold
                                    lg:text-start lg:text-[40px]
                                    '> {t("core")}  <span className={` font-tajawal font-bold transition-all duration-500 ease-in-out
                                    ${darkMode ? "text-[#f4af0f]" : " text-[#ffcc00] "}
                                    `}> {t("Pillars")} </span> ! </span>
            </div>

            <div className=" mb-5">
              <p className='text-[#aaaaaa] text-center font-tajawal font-bold w-full 
                                    lg:text-start
                                    '> {t("whoP2")} </p>
            </div>

            <div className="aboutContent">
              <div className=" flex flex-col justify-center items-center gap-5  my-5
                                lg:flex-row lg:justify-between lg:gap-0 ">
                <FontAwesomeIcon icon={faEye} size="2xl" title="Vision"
                  className={`w-20 h-20  py-6 rtl:ml-0   border-2 rounded-full  transition-all duration-500 ease-in-out
                            lg:mr-7 lg:mb-20 lg:px-5 lg:py-6 rtl:lg:ml-7 rtl:lg:py-7
                            ${darkMode ? "text-[#f4af0f] border-[#f4af0f]" : " text-[#ffcc00] border-[#ffcc00] "}
                            `} />
                <div className='content px-1 flex flex-col justify-start '>
                  <h2 className={`font-tajawal text-center text-3xl font-bold border-b-2 pb-4 mb-4 border-[#4b4888]  text-white transition-all duration-500 ease-in-out
                                                                  lg:text-2xl lg:max-w-[233px] lg:text-start
                                                                  ${darkMode ? "hover:text-[#f4af0f] hover:border-[#f4af0f]" : " hover:text-[#ffcc00] hover:border-[#ffcc00] "}
                                                                  `} > {t("visionTitle")} </h2>

                  <p className={` text-[#c0bfd5] text-center font-tajawal font-bold leading-8 
                                                                      lg:text-start
                                                                      `}> {t("visionP")} </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center gap-5  my-5
                                lg:flex-row lg:justify-between lg:gap-0 ">
                <FontAwesomeIcon icon={faBullseye} size="2xl" title='Mission'
                  className={`w-20 h-20  py-6 rtl:ml-0   border-2 rounded-full  transition-all duration-500 ease-in-out
                            lg:mr-7 lg:mb-20 lg:px-6 lg:py-6 rtl:lg:ml-7 rtl:lg:py-7
                            ${darkMode ? "text-[#f4af0f] border-[#f4af0f]" : " text-[#ffcc00] border-[#ffcc00] "}
                            `} />
                <div className='content px-1 flex flex-col justify-start '>
                  <h2 className={`font-tajawal text-center text-3xl font-bold border-b-2 pb-4 mb-4 border-[#4b4888]  text-white transition-all duration-500 ease-in-out
                                                                  lg:text-2xl lg:max-w-[233px] lg:text-start
                                                                  ${darkMode ? "hover:text-[#f4af0f] hover:border-[#f4af0f]" : " hover:text-[#ffcc00] hover:border-[#ffcc00] "}
                                                                  `} > {t("missionTitle")} </h2>

                  <p className={` text-[#c0bfd5] text-center font-tajawal font-bold leading-8 
                                                                      lg:text-start
                                                                      `}> {t("missionP")} </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center gap-5  my-5
                                lg:flex-row lg:justify-between lg:gap-0 ">
                <FontAwesomeIcon icon={faGem} size="2xl" title='Values'
                  className={`w-20 h-20  py-6 rtl:ml-0  border-2 rounded-full  transition-all duration-500 ease-in-out
                            lg:mr-7 lg:mb-20 lg:px-6 lg:py-6 rtl:lg:ml-7 rtl:lg:py-7
                            ${darkMode ? "text-[#f4af0f] border-[#f4af0f]" : " text-[#ffcc00] border-[#ffcc00] "}
                            `} />
                <div className='content px-1 flex flex-col justify-start '>
                  <h2 className={`font-tajawal text-center text-3xl font-bold border-b-2 pb-4 mb-4 border-[#4b4888]  text-white transition-all duration-500 ease-in-out
                                                                  lg:text-2xl lg:max-w-[233px] lg:text-start
                                                                  ${darkMode ? "hover:text-[#f4af0f] hover:border-[#f4af0f]" : " hover:text-[#ffcc00] hover:border-[#ffcc00] "}
                                                                  `} > {t("valuesTitle")} </h2>

                  <p className={` text-[#c0bfd5] text-center font-tajawal font-bold leading-8 mb-7.5 
                      lg:text-start
                    `}> {t("valuesP")} </p>
                  <p className={` text-[#c0bfd5] text-center font-tajawal font-bold leading-8 
                      lg:text-start
                    `}> {t("PillarsP")} </p>
                </div>
              </div>


            </div>
          </div>

        </div>

      </section>

      {/* section 3 */}
      <section className={`py-20  transition-all duration-500 ease-in-out  
                  ${darkMode ? "bg-[#69686f]" : "bg-[#e8e7f0] "}
                  `}>
        <div className="container grid  mx-auto px-5 pt-5  inset-0  z-20 
                            lg:grid-cols-12 lg:px-5 lg:pt-5 lg:p-0
                            xl:px-15 xl:pt-5
                            ">
          <div className="left mx-auto max-w-[660px] gap-3 flex flex-col  justify-center items-center relative
                                lg:col-span-6 lg:items-start
                            ">
            <div className="imgDiv  h-20">
              <img src={tag} alt="School selection tag" className='w-18' loading='lazy' />
            </div>

            <div className=" flex flex-col gap-3 px-3 lg:p-0">
              <span className={`${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "} text-lg  text-center px-10 font-tajawal font-bold transition-all duration-500 ease-in-out
                                  lg:px-0 lg:text-start`}> {t("lead")} </span>
              <span className={` text-[38px] text-center font-tajawal font-bold transition-all duration-500 ease-in-out
                                  lg:text-start
                                  text-black
                                  `}> +25  <span className={` font-tajawal font-bold transition-all duration-500 ease-in-out
                                  ${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "}`}>
                  {t("Excellence")}
                </span>
              </span>
            </div>

            <div className="w-full mb-5">
              <Progress />
            </div>
          </div>
          <div className="right mt-5 mx-auto
                                lg:col-span-6 lg:m-0 lg:my-auto
                                xl:col-span-6
                                ">
            {cardsData.map(({ key, content }) => {
              const isOpen = openCard === key;

              return (
                <div key={key} className="mb-3">

                  <div
                    onClick={() =>
                      setOpenCard(isOpen ? null : key)
                    }
                    className={`p-5  font-tajawal cursor-pointer font-bold transition-all duration-500 ease-in-out
                                    ${darkMode ? "bg-[#091048] text-[#f4af0f]" : "bg-[#2b2873] text-white"}
                                `}
                  >
                    <h2 className="flex text-sm sm:text-xl justify-between items-center">
                      {t(key)}
                      <FontAwesomeIcon className="" icon={isOpen ? faChevronUp : faChevronDown} size="xl"
                      />
                    </h2>
                  </div>
                  <div
                    className={`w-full overflow-hidden transition-all duration-500
                ${isOpen
                        ? "p-5 text-sm sm:text-xl font-tajawal font-bold bg-[#e8e7f0] text-[#2b2873] border-2 border-black max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                      }
              `}
                  >
                    <h3 className="p-3 w-full">{t(content)}</h3>
                  </div>
                </div>
              );
            })}



          </div>

        </div>

      </section>


      {/* section 4 */}
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
              className="text-[16px] text-[#848484] px-3 text-center
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

      {/* section 5 */}
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

      {/* section 6 */}
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
                className={` text-xl font-tajawal font-bold mx-auto transition-all duration-500 ease-in-out lg:text-2xl lg:mx-0 ${darkMode ? "text-white" : "text-black"}`}
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
              <p className="text-[#aaaaaa] text-center font-tajawal font-bold w-full lg:text-start">
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

      {/* Section 7 */}
      <section
        className={`py-20 lg:py-10 transition-all duration-500 ease-in-out ${darkMode ? "bg-[#69686f]" : "bg-[#e8e7f0]"
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

      <Footer />


    </div>
  )
}
