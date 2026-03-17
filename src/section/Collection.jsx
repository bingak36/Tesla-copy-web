import React from 'react'
import './Styles/Collection.scss'
import { collectionData } from '../Util/Collection'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Collection = () => {
  return (
    <div className='inner Collection'>
      <div className='text-wrap'>
        <h1>TESLA COLLECTION</h1>
        <p>Experience the Future with Tesla</p>
      </div>
      <Swiper
        className='collection-swiper'
        modules={[Navigation]}
        navigation={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          960: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {collectionData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='collection-card'>
              <div className='text-box'>
                <p>{item.title}</p>
                <h3>{item.name}</h3>
              <div className='img-box'>
                <img src={item.image} alt={item.name} />
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Collection