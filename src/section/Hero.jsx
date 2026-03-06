import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Styles/Hero.scss';
import { heroData } from '../Util/Hero';


const Hero = () => {
  const model = heroData.model

  return (
    <div className="hero">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        className='hero-swiper'
      >
        {model.map((model)=>(
          <SwiperSlide key={model.id} className='swiper-slide'>
              <img src={model.src} alt={model.label} />
              <div className='swiper-wrap'>
                <h2>{model.company}</h2>
                <p id='tag-1'>{model.tag01}</p>
                <p id='tag-2'>{model.tag02}</p>
                <p id='tag-3'>{model.button}</p>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
