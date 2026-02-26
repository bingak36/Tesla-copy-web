import React from 'react'
import './style/TopBanner.scss'
import { headerData } from '../util/header'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const TopBanner = ({ onClose }) => {

  const tbData = headerData.topBanner.items
  const closeBtn = headerData.topBanner.closeIcon
  return (
    <div className='TopBanner'>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{delay:3000}}
        direction={'vertical'}
        modules={[Autoplay]}
        >

        {tbData.map((t) => (
          <SwiperSlide key={t.id}>
            <a href={t.href}>
              {t.text}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="closeBtn" onClick={onClose}>
        <img src={closeBtn} alt="close btn" />
      </div>
    </div>
  )
}

export default TopBanner