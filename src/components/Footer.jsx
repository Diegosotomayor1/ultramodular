import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between md:flex-row bg-[#0A0A0A] text-white py-20 px-5 md:px-20'>
      <div className='w-1/3 flex flex-col gap-4'>
        <h3 className='text-sm'>Contacto:</h3>
        <p className='text-xs'>Dirección: Avenida Diagonal 550 Dpto. C - Miraflores</p>
        <p className='text-xs'>Teléfono: (01) 602 3093 / (01) 602 3095</p>
        <p className='text-xs'>Email: comunicacion@ultramodularperu.com</p>
      </div>
      <div className='w-1/3 flex items-center justify-center '>
        <img src='logo.png' alt='' className='bg-contain p-5 w-64' />
      </div>
      <div className='w-1/3 flex flex-col gap-4 text-greenmodular text-right'>
        <a className='text-xs' href='#'>Inicio</a>
        <a className='text-xs' href='#nosotros'>Nosotros</a>
        <a className='text-xs' href='#servicios'>Servicios</a>
        <a className='text-xs' href='#proyectos'>Proyectos</a>
      </div>
    </div>
  )
}

export default Footer
