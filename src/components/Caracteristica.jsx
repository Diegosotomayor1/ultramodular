import React from 'react'

const Caracteristica = ({ nombre, description, img }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={img} alt='' width='150px' />
      <h3 className='text-xl'>{nombre}</h3>
      <p className='text-xs font-thin mt-2 '>{description}</p>
    </div>
  )
}

export default Caracteristica
