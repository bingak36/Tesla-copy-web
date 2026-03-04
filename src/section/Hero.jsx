import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Styles/Hero.scss';


const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true} // 무한 반복
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <div className="slide-content">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-content">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-content">Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
