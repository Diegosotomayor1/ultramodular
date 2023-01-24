import React from 'react'

const Servicio = ({ title, descripcion, img }) => {
  return (
    <div
      className='relative w-[300px] h-[60vh] xl:w-[380px] xl:h-[70vh] 3xl:w-[450px] flex flex-col justify-end bg-cover bg-center mx-auto'
      style={{ backgroundImage: 'url(' + img + ')' }}
    >
      <h3 className='absolute bottom-10 w-full py-4 px-5 bg-[#0a0a0a] text-white'>
        {title}
      </h3>
    </div>
  )
}

export default Servicio
