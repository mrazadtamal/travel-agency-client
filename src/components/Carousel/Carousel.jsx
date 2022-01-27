import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import './carousel.css'

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper'

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay])

export default function Carousel() {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            src='https://res.cloudinary.com/abidazad/image/upload/v1643176636/travel/pexels-petr-ganaj-4129949_1_mtpzf2.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://res.cloudinary.com/abidazad/image/upload/v1643176196/travel/pexels-rhiannon-stone-572740_1_t37bvr.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://res.cloudinary.com/abidazad/image/upload/v1643176636/travel/pexels-robin-rodriguez-4652070_1_k4gpyt.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://res.cloudinary.com/abidazad/image/upload/v1643177037/travel/pexels-simon-berger-698275_1_sac0pv.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://res.cloudinary.com/abidazad/image/upload/v1643176639/travel/pexels-iva-prime-2028177_1_rzwh5c.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://res.cloudinary.com/abidazad/image/upload/v1643176638/travel/pexels-tural-sadigli-1212060_1_k0vxcv.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://res.cloudinary.com/abidazad/image/upload/v1643176634/travel/pexels-antonio-filigno-2976684_1_tajjvq.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://res.cloudinary.com/abidazad/image/upload/v1643176636/travel/pexels-chris-janda-62600_1_h4eows.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://res.cloudinary.com/abidazad/image/upload/v1643176636/travel/pexels-donatello-trisolino-10415591_rl4dqp.jpg'
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
