import React, { useState } from 'react'
import collectionData from '../util/collection'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './style/Collection.scss'
const Collection = () => {

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className='inner collection-inner'>

      <div className="t-wrap">
        <h2 className="tit">
          TOCOBO COLLECTION
        </h2>
        <p className="txt">
          Shop By Category
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          type: 'progressbar'
        }}
        navigation={{ prevEl, nextEl }}
        modules={[Pagination, Navigation]}
        className="collection-slider"
      >
        {collectionData.map((sl, i) => (
          <SwiperSlide key={i}>
            <a href="#">
              <div className="info-wrap">
                <div className="info-tit">
                  {sl.title}
                </div>
                <div className="name">
                  {sl.name}
                </div>
                <div className="k-name">
                  {sl.kname}
                </div>
              </div>
              <div className="img-wrap">
                <img src={sl.image} alt={sl.name} />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <a href="#" 
      className='prev'
      onClick={(e)=>e.preventDefault()} 
      ref={setPrevEl}>prev</a>
      <a 
      href="#" 
      onClick={(e)=>e.preventDefault()} 
      className='next' 
      ref={setNextEl}>next</a>

    </div>
  )
}

export default Collection