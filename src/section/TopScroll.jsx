import React from 'react'
import './Styles/TopScroll.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { topBanner } from '../Util/TopScroll'
import { Autoplay } from 'swiper/modules'


const TopScroll = () => {
  const tbData = topBanner.topBanner.items
  return (
    <div className='inner TopScroll-inner'>
    <Swiper
      className='top-swiper'
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      loop={true}
      direction='vertical'
      >

        {tbData.map((t)=>(
          <SwiperSlide key={t.id}>
            <a href={t.href}>
              {t.text}
            </a>
          </SwiperSlide>
        ))}
    </Swiper>
    
    <button className='top-close-btn' />


    </div>
  )
}

export default TopScroll