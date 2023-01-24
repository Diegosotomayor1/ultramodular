import React from 'react'
import HeadSection
  from '../components/HeadSection'
import Proyecto from '../components/Proyecto'
const Gallery = () => {
  const proyectos = [
    {
      title: 'Proyecto X',
      img: 'proyectos1.jpg',
      description: 'Este proyecto X resultó un exito en su ejecución.'
    },
    {
      title: 'Proyecto X2',
      img: 'proyectos2.jpg',
      description: 'Este proyecto X resultó un exito en su ejecución.'
    },
    {
      title: 'Proyecto X3',
      img: 'proyectos3.jpg',
      description: 'Este proyecto X resultó un exito en su ejecución.'
    },
    {
      title: 'Proyecto X4',
      img: 'proyectos4.jpg',
      description: 'Este proyecto X resultó un exito en su ejecución.'
    },
    {
      title: 'Proyecto X5',
      img: 'proyectos5.jpg',
      description: 'Este proyecto X resultó un exito en su ejecución.'
    },
    {
      title: 'Proyecto X6',
      img: 'proyectos1.jpg',
      description: 'Este proyecto X resultó un exito en su ejecución.'
    }
  ]
  return (
    <div className='bg-[#0A0A0A] py-20'>
      <HeadSection title='Proyectos' />
      <div className='mt-20 w-full grid md:grid-cols-3'>
        {proyectos.map(proyecto => (
          <Proyecto img={proyecto.img} title={proyecto.title} description={proyecto.description} key={proyecto.title} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
