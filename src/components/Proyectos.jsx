import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import HeadSection from './HeadSection'
import Proyecto from './Proyecto'

const Proyectos = ({ setInfoRecolected }) => {
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
    <div className='relative w-full pt-20' id='proyectos'>
      <HeadSection title='Proyectos' />
      <div className='mt-20 w-full grid md:grid-cols-3'>
        {proyectos.map(proyecto => (
          <Proyecto img={proyecto.img} title={proyecto.title} description={proyecto.description} key={proyecto.title} setInfoRecolected={setInfoRecolected} />
        ))}
      </div>
      <div className='flex items-center justify-center mt-5'>
        <Link
          to='/gallery'
          className='bg-greenmodular text-black px-5 py-2'
        >
          Ver más
        </Link>
      </div>
      <div className='relative h-[300px]'>
        <HeadSection title='Nuevo' />
        <div className=' flex items-center justify-center pt-56'>
          <button className='relative flex flex-row gap-4 items-center justify-center bg-greenmodular text-black px-10 py-2 transition-transform hover:scale-125'>
            <span className='absolute rounded-2xl text-white text-xs -top-2 -right-5 p-2 bg-red-600 '>
              Nuevo
            </span>
            <FontAwesomeIcon
              icon={faFacebook}
              className='text-blue-600 fa-2x'
            />
            &nbsp; Ver nuevos proyectos
          </button>
        </div>
      </div>
    </div>
  )
}

export default Proyectos
