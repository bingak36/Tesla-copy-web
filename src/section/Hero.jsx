import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Styles/Hero.scss';
import { heroData } from '../Util/Hero';

const Hero = () => {
  const models = heroData.model;

  return (
    <div className="hero">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        className='hero-swiper'
      >
        {models.map((item) => (
          <SwiperSlide 
            key={item.id} 
            style={{ backgroundImage: `url(${item.src})` }}
            className='swiper-slide'
          >
            <div className='back-color'/>
            <ul className='swiper-wrap'>
              <li>{item.company}</li>
              <li className='tag-1'>{item.tag01}</li>
              <li className='tag-2'>{item.tag02}</li>
              <li className='tag-3'>
                <span>{item.button}</span>
              </li>
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;