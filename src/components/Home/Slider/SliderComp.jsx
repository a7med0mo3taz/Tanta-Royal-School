import React, { useRef } from "react";
import Slider from "react-slick";
import com1 from "../../../assets/Photos/company/Cognia.png";
import com2 from "../../../assets/Photos/company/DP-4.png";
import com3 from "../../../assets/Photos/company/IB-World-School-1.png";
import com4 from "../../../assets/Photos/company/MYP-3.png";
import com5 from "../../../assets/Photos/company/GSP.png";
import com6 from "../../../assets/Photos/company/NESA.png";
import com7 from "../../../assets/Photos/company/PYP-2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderComp() {
    const sliderRef = useRef(null);

    const companyImg = [
        { src: com1, alt: "Cognia Logo", width: "252px", height: "76px" },
        { src: com2, alt: "DP-4 Logo", width: "252px", height: "76px" },
        { src: com3, alt: "IB World School Logo", width: "252px", height: "76px" },
        { src: com4, alt: "MYP-3 Logo", width: "252px", height: "76px" },
        { src: com5, alt: "GSP Logo", width: "252px", height: "76px" },
        { src: com6, alt: "NESA Logo", width: "252px", height: "76px" },
        { src: com7, alt: "PYP-2 Logo", width: "252px", height: "76px" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        ],
    };

    return (
        <div className="w-full px-10 overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
                {companyImg.map((image, index) => (
                    <div key={index} className="p-3">
                        <img
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="object-contain rounded-lg shadow-md"
                            loading="lazy"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
