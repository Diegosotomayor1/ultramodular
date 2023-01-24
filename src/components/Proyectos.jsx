import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HeadSection from './HeadSection'

const Proyectos = () => {
  const proyectos = [
    {
      title: 'Proyecto X',
      img: 'proyectos1.jpg',
      description: ''
    },
    {
      title: 'Proyecto X2',
      img: 'proyectos2.jpg',
      description: ''
    },
    {
      title: 'Proyecto X3',
      img: 'proyectos3.jpg',
      description: ''
    },
    {
      title: 'Proyecto X4',
      img: 'proyectos4.jpg',
      description: ''
    },
    {
      title: 'Proyecto X5',
      img: 'proyectos5.jpg',
      description: ''
    },
    {
      title: 'Proyecto X6',
      img: 'proyectos1.jpg',
      description: ''
    }
  ]
  return (
    <div className='relative w-full pt-20'>
      <HeadSection title='Proyectos' />
      <div className='mt-20 w-full grid md:grid-cols-3'>
        {proyectos.map(proyecto => (
          <div
            className='relative flex flex-col justify-end  bg-center bg-cover h-[300px]'
            style={{ backgroundImage: `url(${proyecto.img})` }}
            key={proyecto.title}
          >
            <div className='bg-[rgba(0,0,0,0.8)] p-5 flex justify-between items-center'>
              <h3 className='text-white text-xl'>{proyecto.title}</h3>
              <button className='text-white text-xs font-thin'>
                Ver proyecto &nbsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center mt-5'>
        <button className='bg-greenmodular text-black px-5 py-2'>
          Ver más
        </button>
      </div>
      <div className='relative h-[300px]'>
        <HeadSection title='Nuevo' />
        <div className=' flex items-center justify-center pt-44'>
          <button className='relative bg-greenmodular text-black px-10 py-2'>
            <span className='absolute rounded-2xl text-white text-xs -top-2 -right-5 p-2 bg-red-600 '>
              Nuevo
            </span>
            <FontAwesomeIcon
              icon={faFacebook}
              className='text-blue-600 fa-2x'
            />{' '}
            &nbsp; Ver nuevos proyectos
          </button>
        </div>
      </div>
    </div>
  )
}

export default Proyectos
