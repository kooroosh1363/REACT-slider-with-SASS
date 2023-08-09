import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ProImageSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';

const ImageSliderPro = props => {
  // const [activeThumb, setActiveThumb] = useState();


  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        // thumbs={{swiper:activeThumb}}
        className='pro-img-slide'
      >
        {
          props.images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="pro-img" />

            </SwiperSlide>
          ))
        }
      </Swiper>

      <Swiper
        // onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className='pro-img-slide-thumbs'
      >
        {
          props.images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="pro-img-slide-thumbs-wrapper">
                <img src={item} alt="pro-img" />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

ImageSliderPro.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageSliderPro;