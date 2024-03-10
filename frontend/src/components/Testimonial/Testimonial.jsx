import React from 'react'
import { pagination } from '/node_modules/.vite/deps/swiper.js?v=2bd4c67d';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import patienAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'


const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper
        modules={[pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}>
        <swiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex item-center gap-[13px]'>
              <img src={patienAvatar} alt="" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Muhibur Rahman
                </h4>
                <div className='flex items-center gap-[2px]'>
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              I have taken medicins form them servaral times.Good Service. Good Doctors.
            </p>
          </div>

        </swiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex item-center gap-[13px]'>
              <img src={patienAvatar} alt="" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Muhibur Rahman
                </h4>
                <div className='flex items-center gap-[2px]'>
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              I have taken medicins form them servaral times.Good Service. Good Doctors.
            </p>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex item-center gap-[13px]'>
              <img src={patienAvatar} alt="" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Muhibur Rahman
                </h4>
                <div className='flex items-center gap-[2px]'>
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              I have taken medicins form them servaral times.Good Service. Good Doctors.
            </p>
          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial