import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortadaTitle = () => {
  return (
    <div className='portada_title'>
      <h1 className='flex flex-col gap-6 font-medium text-[2.75rem] md:text-5xl lg:text-6xl'>
        <span>Arquitectura</span>
        <span> Modular</span>
        <span>Comercial</span>
      </h1>
      <div className='md:absolute mt-20 bottom-20 px-4 py-2 transition-colors hover:bg-[rgba(0,0,0,0.2)]'>
        <Link to='#proyectos'>Ver proyectos </Link>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  )
}

export default PortadaTitle
