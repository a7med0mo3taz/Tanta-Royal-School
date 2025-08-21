import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import blogImg1 from "../../../assets/Photos/pho/7.webp";
import blogImg2 from "../../../assets/Photos/pho/blig-v-3.webp";
import blogImg3 from "../../../assets/Photos/pho/blig-v-2.webp";
import blogImg4 from "../../../assets/Photos/pho/blig-v-1.webp";
import { useLanguageContext } from "../../../context/langContext";
import { useModeContext } from "../../../context/modeContext";

export default function NewsSlider() {
    const { darkMode } = useModeContext();
    const { t } = useLanguageContext();

    const blogData = [
        { img: blogImg1, title: t("news1") },
        { img: blogImg2, title: t("news2") },
        { img: blogImg3, title: t("news3") },
        { img: blogImg4, title: t("news4") },
    ];

    return (
        <div className="w-full px-4 md:px-10 mx-auto">
            <Swiper
                dir="rtl" 
                modules={[Autoplay]}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                    1536: { slidesPerView: 3 },
                    1280: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                    768: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                }}
            >

                {blogData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <article className="flex justify-center items-center pb-20 lg:pb-0 p-2">
                            <div className="flex flex-col justify-center items-center overflow-hidden">
                                {/* Blog Image */}
                                <div className="w-full">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-auto object-cover rounded-xl hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Blog Title */}
                                <div
                                    className={`blogTitle p-7 mx-auto text-center rounded-2xl shadow-xl font-tajawal font-bold transition-all duration-500 -translate-y-7 lg:w-[360px] ${darkMode
                                        ? "bg-[#091048] text-white hover:bg-[#f4af0f] hover:text-[#091048]"
                                        : "bg-[#ffcc00] text-[#2b2873] hover:bg-[#2b2873] hover:text-[#ffcc00]"
                                        }`}
                                >
                                    <h3 className="text-lg">{item.title}</h3>
                                </div>

                                {/* Date */}
                                <time
                                    dateTime="2025-02-25"
                                    className="text-[#aaaaaa] text-center px-4 mt-2 font-tajawal text-sm"
                                >
                                    25 {t("FEBRUARY")}.2025
                                </time>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
