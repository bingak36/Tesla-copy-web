import React from 'react'
import './Styles/Introduction.scss'
import { introData } from '../Util/Introduction'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Introduction = () => {

  const text = introData.text
  const img = introData.image

  return (
    <div className='inner intro'>
      <div className='wrapper'>
        <div className='text-wrap'>
          <div className='title'>
            {text.title}
          </div>
          <div className='text'>
            {text.text}
          </div>
          <button>{text.button}</button>
        </div>
        <div className='img-wrap'>
          <Swiper
            className="introduction-swiper"
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src={img.src1} alt={img.alt} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img.src2} alt={img.alt} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img.src1} alt={img.alt} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img.src2} alt={img.alt} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Introduction