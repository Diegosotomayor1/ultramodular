import React from 'react'
import { Autoplay, Navigation, Pagination, Zoom } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import HeadSection from './HeadSection'

const Marcas = () => {
  const marcas = [
    'marcas-08.png',
    'marcas-09.png',
    'marcas-10.png',
    'marcas-11.png',
    'marcas-12.png',
    'marcas-13.png',
    'marcas-14.png',
    'marcas-15.png'
  ]
  return (
    <div className='flex relative min-h-[500px] pt-44'>
      <HeadSection title='Marcas' />
      <div className='w-5/6 mx-auto  flex md:flex-row items-center justify-center gap-8'>
        <Swiper
          navigation
          zoom
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay, Zoom]}
          slidesPerView={window.innerWidth > 720 ? 4 : 1}
        >
          {marcas.map(marca => (
            <SwiperSlide key={marca}>
              <img src={marca} alt='' className='w-[300px] bg-contain' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Marcas
