import React from 'react'
import './Styles/TopScroll.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { topBanner } from '../Util/TopScroll'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'


const TopScroll = ({ showTopBanner, setShowTopBanner }) => {
  const tbData = topBanner.topBanner.items
  const closebtn = topBanner.button
  return (
    <div className={`TopScroll-inner ${!showTopBanner ? 'hidden' : ''}`}>
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
    
    <button className='top-close-btn' onClick={() => setShowTopBanner(false)}>
      <img src={closebtn.src} alt={closebtn.alt} />
    </button>


    </div>
  )

}

export default TopScroll