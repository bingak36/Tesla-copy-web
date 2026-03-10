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
              <div className='back-color'/>
              <ul className='swiper-wrap'>
                <li>{model.company}</li>
                <li className='tag-1'>{model.tag01}</li>
                <li className='tag-2'>{model.tag02}</li>
                <li className='tag-3'>
                <span>
                  {model.button}
                  </span>
                  </li>
              </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
