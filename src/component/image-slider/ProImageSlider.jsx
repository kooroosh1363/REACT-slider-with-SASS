import React from 'react'
import PropTypes from 'prop-types'
import './ProImageSlider.scss';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Thumbs} from 'swiper/modules';

const ImageSliderPro = props => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
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
    </>
  )
}

ImageSliderPro.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageSliderPro;