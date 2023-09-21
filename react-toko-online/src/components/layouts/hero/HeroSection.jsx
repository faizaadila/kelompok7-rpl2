import React from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const HeroSection = () => {
   return (
      <Swiper 
      className="mb-5 mt-5
      "
      // install Swiper modules
      style={{width: '80%'}}
      EffectFade 
      
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <img src=" https://www.static-src.com/siva/asset/09_2023/desktop-12sep-unilever-car2.jpg" alt=""/></SwiperSlide>
      <SwiperSlide > <img src="https://www.static-src.com/siva/asset/09_2023/desktop-12sep-nescafe-car11.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.static-src.com/siva/asset/09_2023/hypermart-99-blm-aug23-carousel-2000x500.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.static-src.com/siva/asset/09_2023/desktop-12sep-kawanlama-car10.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.postimg.cc/CMrmzwFv/Klik-Hoki-Template-Homepage.jpg
" alt="" /></SwiperSlide>
      
    </Swiper>
)
}
export default HeroSection