import "./hero.scss"

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import hero1 from "../../assets/img/hero-phone.png"
import hero2 from "../../assets/svg/hero-phone-text.svg"


function Hero() {
    return (
        <section className="section-hero">
            <div className="container">
                <div className="hero-box">
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide><div className="imges-div"><img src={hero2} alt="error" /> <img className="hero2" src={hero1} alt="error" /></div></SwiperSlide>
                        <SwiperSlide><div className="imges-div"><img src={hero2} alt="error" /> <img className="hero2" src={hero1} alt="error" /></div></SwiperSlide>
                        <SwiperSlide><div className="imges-div"><img src={hero2} alt="error" /> <img className="hero2" src={hero1} alt="error" /></div></SwiperSlide>
                        <SwiperSlide><div className="imges-div"><img src={hero2} alt="error" /> <img className="hero2" src={hero1} alt="error" /></div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Hero