import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import com1 from "../../../assets/Photos/company/Cognia.png";
import com2 from "../../../assets/Photos/company/DP-4.png";
import com3 from "../../../assets/Photos/company/IB-World-School-1.png";
import com4 from "../../../assets/Photos/company/MYP-3.png";
import com5 from "../../../assets/Photos/company/GSP.png";
import com6 from "../../../assets/Photos/company/NESA.png";
import com7 from "../../../assets/Photos/company/PYP-2.png";

// Import Swiper styles
import "swiper/css";

export default function SliderComp() {
    const companyImg = [
        { src: com1, alt: "Cognia Logo", width: "252px", height: "76px" },
        { src: com2, alt: "DP-4 Logo", width: "252px", height: "76px" },
        { src: com3, alt: "IB World School Logo", width: "252px", height: "76px" },
        { src: com4, alt: "MYP-3 Logo", width: "252px", height: "76px" },
        { src: com5, alt: "GSP Logo", width: "252px", height: "76px" },
        { src: com6, alt: "NESA Logo", width: "252px", height: "76px" },
        { src: com7, alt: "PYP-2 Logo", width: "252px", height: "76px" },
    ];

    return (
        <div className="w-full px-4 md:px-10 overflow-hidden">
            <Swiper
                dir="rtl"
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className="pb-6"
            >
                {companyImg.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-3">
                            <img
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                className="object-contain rounded-lg shadow-md mx-auto"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
