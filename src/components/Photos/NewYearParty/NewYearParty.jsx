import React, { useEffect, useState } from 'react'
import { faHouse, faArrowRight, faArrowLeft, faXmark, faAward, faFolderOpen, faEnvelope, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faWhatsapp, faPinterest, faReddit, faDelicious, } from '@fortawesome/free-brands-svg-icons';
import mainPhoto from "../../../assets/Photos/pho/15.webp"
import img3 from "../../../assets/Photos/gellary/newYearParty/3.webp"
import img4 from "../../../assets/Photos/gellary/newYearParty/4.webp"
import img5 from "../../../assets/Photos/gellary/newYearParty/5.webp"
import img6 from "../../../assets/Photos/gellary/newYearParty/6.webp"
import img7 from "../../../assets/Photos/gellary/newYearParty/7.webp"
import img8 from "../../../assets/Photos/gellary/newYearParty/8.webp"
import img9 from "../../../assets/Photos/gellary/newYearParty/9.webp"
import img10 from "../../../assets/Photos/gellary/newYearParty/10.webp"
import img11 from "../../../assets/Photos/gellary/newYearParty/11.webp"
import img12 from "../../../assets/Photos/gellary/newYearParty/12.webp"
import img13 from "../../../assets/Photos/gellary/newYearParty/13.webp"
import img14 from "../../../assets/Photos/gellary/newYearParty/14.webp"
import img15 from "../../../assets/Photos/gellary/newYearParty/15.webp"
import { Link, Links } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModeContext } from '../../../context/modeContext';
import { useLanguageContext } from '../../../context/langContext';
import Footer from '../../Footer/Footer';

export default function NewYearParty() {

    // page title
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("New Year’s Party 2025")
    // darkMode
    const { darkMode } = useModeContext();
    // Language
    const { t, currentLang } = useLanguageContext();


    const [openImage, setOpenImage] = useState(null);
    const images = [

        { src: img15, colSpan: 4 },
        { src: img3, colSpan: 4 },
        { src: img14, colSpan: 4 },
        { src: img13, colSpan: 4 },
        { src: img12, colSpan: 4 },
        { src: img11, colSpan: 4 },
        { src: img10, colSpan: 4 },
        { src: img4, colSpan: 4 },
        { src: img5, colSpan: 4 },
        { src: img6, colSpan: 4 },
        { src: img7, colSpan: 4 },
        { src: img8, colSpan: 4 },
        { src: img11, colSpan: 4 },
        { src: img12, colSpan: 4 },
        { src: img9, colSpan: 4 },
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
        <div className={` photosPage  ${darkMode ? "bg-[#030712]" : "bg-white "}  transition-all duration-500 ease-in-out`}>
            {/* heading section */}
            <section className={` relative w-full overflowHidden  h-[500px] transition-all duration-500 ease-in-out  ${darkMode ? "bg-[#030712]" : "bg-white "}
                        md:h-[700px]
                        xl:h-[515px] `}>
                <img src={mainPhoto} alt="mainPhoto" className="mainPhoto absolute  w-full object-contain h-[550px] 
                            md:h-[800px]
                            xl:object-cover xl:h-[515px] xl:object-top"/>
                {/* Heading */}
                <div
                    className="relative z-11 flex flex-col justify-center items-center text-center top-57
                                md:top-80
                                lg:top-70">
                    <h1
                        className="font-almarai font-bold text-3xl rtl:text-4xl mb-7 text-[#f4af0f]
                                    sm:text-5xl rtl:sm:text-5xl
                                    lg:text-5xl rtl:lg:text-6xl
                                    xl:text-6xl rtl:xl:text-7xl
                                ">
                        {t("partyTitle")}
                    </h1>
                    <div className="Breadcrumb text-white text-[12px] sm:text-xl flex justify-center  ">
                        <Link to={"/"}><FontAwesomeIcon icon={faHouse} className=' my-auto ' /></Link>
                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}

                        <Link to={"/gallery"} className='font-almarai font-bold my-auto'>  {t("galleryTitle")} </Link>

                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}

                        <Link to={"/gallery/photos"} className='font-almarai font-bold my-auto'>  {t("photosTitle")} </Link>

                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faArrowRight} className='font-light my-auto mx-3' />) :
                            (<FontAwesomeIcon icon={faArrowLeft} className='font-light my-auto mx-3' />)}

                        <h3 className='font-almarai font-bold my-auto'>  {t("partyTitle")} </h3>
                    </div>
                </div>
            </section>

            <section className={`relative  transition-all duration-500 ease-in-out`}>
                <div className="container pb-10  mx-auto p-0  inset-0  z-20 relative mb-20
                                                                lg:px-5
                                                                xl:px-15
                                                                ">

                    {/* gallery */}
                    <div className=" mx-auto   relative  gap-3   ">
                        <div className="gallery">
                            <div className=" p-10 ">
                                <div className="grid grid-cols-12  gap-4 w-full  mx-auto 
                        lg:grid-cols-12  lg:gap-4 lg:w-full
                        ">
                                    {images.map((image, index) => (
                                        <div className={` relative group col-span-12
                                    md:col-span-6  
                                    lg:col-span-${image.colSpan} `}>
                                            <div
                                                onClick={() => setOpenImage(image.src)}
                                                key={index}
                                            >
                                                <img className="h-full w-full object-cover rounded-lg" src={image.src} alt="" />
                                                <Overlay />
                                            </div>
                                        </div>

                                    ))}


                                    {openImage && (
                                        <FullscreenOverlay src={openImage} onClose={() => setOpenImage(null)} />
                                    )}
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-3 p-10">
                            <div className="folder ">
                                <div className={`lampImg w-15 h-13 flex justify-center items-center rounded-lg p-2
                                                ${darkMode ? "bg-[#091048]" : "bg-[#2b2873]"}
                                            `}>
                                    <FontAwesomeIcon icon={faFolderOpen} className={`${darkMode ? "text-[#f4af0f]" : "text-[#ffcc00]"}`} />
                                </div>
                            </div>
                            <div className={`p-3.5 bg-[#f4f4f8] rounded-lg  ${darkMode ? "hover:bg-[#f4af0f]" : "hover:bg-[#ffcc00]"} transition-all duration-500 ease-in-out`}>
                                <Link to={"/gallery/photos"} className={`
                                        
                                        `}> {t("photosTitle")} </Link>
                            </div>
                        </div>

                        {/* share */}
                        <div className="px-10 mb-3 w-full">
                            <div
                                className={`p-5  font-tajawal  font-bold transition-all duration-500 ease-in-out
                                            ${darkMode ? "bg-[#091048] text-[#f4af0f]" : "bg-[#2b2873] text-[#ffcc00] "}`}
                            >
                                <h2 className="flex justify-between items-center">
                                    {t("share")}
                                </h2>
                            </div>


                            <div
                                className={`w-full bg-white text-[16px] font-tajawal font-bold  border-2 border-black  transition-all duration-500   ease-in-out`}
                            >
                                <div className="shareSocials p-3   flex flex-wrap  justify-around items-center  ">

                                    <div className="faceBook flex justify-center items-center ">
                                        <a href="https://facebook.com/share.php?u=https://tantaroyalschools.edu.eg/gallery/new-years-party-2025/&title=New Year’s Party 2025" target='_blank'><FontAwesomeIcon icon={faFacebookF} className={` text-[#9290b7] text-2xl  font-tajawal font-bold  rounded-lg  transition-all duration-500 px-15 py-3  ease-in-out hover:bg-[#3b5998] hover:text-white  `} />
                                        </a>
                                    </div>

                                    <div className="X flex justify-center items-center ">
                                        <a href="https://x.com/intent/tweet?text=New Year’s Party 2025+https://tantaroyalschools.edu.eg/gallery/new-years-party-2025/" target='_blank'><FontAwesomeIcon icon={faXTwitter} className={` text-[#9290b7] text-2xl  font-tajawal font-bold  rounded-lg  transition-all duration-500 px-15 py-3  ease-in-out hover:bg-black hover:text-white  `} />
                                        </a>
                                    </div>
                                    <div className="Pinterest flex justify-center items-center ">
                                        <a href="https://pinterest.com/pin/create/bookmarklet/?media=https://tantaroyalschools.edu.eg/wp-content/uploads/2025/02/glary-v-4.webp&url=https://tantaroyalschools.edu.eg/gallery/new-years-party-2025/&is_video=false&description=New Year’s Party 2025" target='_blank'><FontAwesomeIcon icon={faPinterest} className={` text-[#9290b7] text-2xl  font-tajawal font-bold  rounded-lg  transition-all duration-500 px-15 py-3  ease-in-out hover:bg-[#cb2027] hover:text-white  `} />
                                        </a>
                                    </div>
                                    <div className="Reddit flex justify-center items-center ">
                                        <a href="https://reddit.com/submit?url=https://tantaroyalschools.edu.eg/gallery/new-years-party-2025/&title=New Year’s Party 2025" target='_blank'><FontAwesomeIcon icon={faReddit} className={` text-[#9290b7] text-2xl  font-tajawal font-bold  rounded-lg  transition-all duration-500 px-15 py-3  ease-in-out hover:bg-[#FF5700] hover:text-white  `} />
                                        </a>
                                    </div>
                                    <div className="Delicious flex justify-center items-center ">
                                        <a href="https://del.icio.us/post?url=https://tantaroyalschools.edu.eg/gallery/new-years-party-2025/&title=New Year’s Party 2025&notes=" target='_blank'><FontAwesomeIcon icon={faDelicious} className={` text-[#9290b7] text-2xl  font-tajawal font-bold  rounded-lg  transition-all duration-500 px-15 py-3  ease-in-out hover:bg-[#0078f0] hover:text-white  `} />
                                        </a>
                                    </div>
                                    <div className="Whatsapp flex justify-center items-center ">
                                        <a href="whatsapp://send?text=New Year’s Party 2025 https://tantaroyalschools.edu.eg/gallery/new-years-party-2025/" target='_blank'><FontAwesomeIcon icon={faWhatsapp} className={` text-[#9290b7] text-2xl  font-tajawal font-bold  rounded-lg  transition-all duration-500 px-15 py-3  ease-in-out hover:bg-[#25D366] hover:text-white  `} />
                                        </a>
                                    </div>
                                    <div className="Email flex justify-center items-center ">
                                        <a href="mailto:?body=New Year’s Party 2025 https://tantaroyalschools.edu.eg/gallery/new-years-party-2025/" target='_blank'><FontAwesomeIcon icon={faEnvelope} className={` text-[#9290b7] text-2xl  font-tajawal font-bold  rounded-lg  transition-all duration-500 px-15 py-3  ease-in-out hover:bg-[#ea4335] hover:text-white  `} />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="px-10 mb-3 w-full">
                            <div
                                className={`p-10 font-tajawal flex  justify-end items-center font-bold transition-all duration-500 ease-in-out
                                            ${darkMode ? "bg-[#091048] " : "bg-[#2b2873] "}`}
                            >
                                <Link to={"/gallery/videos"} className='flex items-center'>

                                    <div className="flex flex-col justify-center mx-5">
                                        <h3 className="flex justify-end items-center text-sm text-[#9290b7]"> {t("next")}  </h3>
                                        <h2 className="flex justify-end items-center text-white">
                                            {t("partyVideo")}
                                        </h2>
                                    </div>
                                    <div className="icon h-15 p-5 md:px-3 md:py-5  rounded-lg bg-white flex justify-center items-center hover:bg-[#f4af0f]  transition-all duration-500 ease-in-out ">
                                        {currentLang === 'en' ? (<FontAwesomeIcon icon={faAngleRight} size='xl' className='font-light my-0 md:mx-3' />) :
                                            (<FontAwesomeIcon icon={faAngleLeft} size='xl' className='font-light  md:mx-3' />)}
                                    </div>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}
