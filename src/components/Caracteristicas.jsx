import React from 'react'
import Caracteristica from './Caracteristica'

const Caracteristicas = () => {
  const caracteristicas = [
    {
      nombre: 'Sistema modular',
      img: 'iconos-04.png',
      description:
        'Sistemas modulares de diseño para optimizar costos y tiempos de instalación.'
    },
    {
      nombre: 'ESPECIALIZADOS',
      img: 'iconos-05.png',
      description:
        'Staff de arquitectos especializados en arquitectura comercial.'
    },
    {
      nombre: 'asesoría',
      img: 'iconos-06.png',
      description:
        'Staff de arquitectos especializados en arquitectura comercial.'
    },
    {
      nombre: 'post venta',
      img: 'iconos-07.png',
      description:
        'Servicio post venta con informes y conclusiones del proyecto realizado.'
    }
  ]
  return (
    <div className='grid grid-cols-2 gap-8'>
      {caracteristicas.map(caracteristica => (
        <Caracteristica
          key={caracteristica.nombre}
          nombre={caracteristica.nombre}
          description={caracteristica.description}
          img={caracteristica.img}
        />
      ))}
    </div>
  )
}

export default Caracteristicas
