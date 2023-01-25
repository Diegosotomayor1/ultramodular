import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
const PortadaTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1 }}
      className='portada_title'
    >
      <h1 className='flex flex-col gap-6 font-medium text-[2.75rem] md:text-5xl lg:text-6xl'>
        <span>Arquitectura</span>
        <span> Modular</span>
        <span>Comercial</span>
      </h1>
      <motion.div
        className='md:absolute mt-20 bottom-20 px-4 py-2 transition-colors hover:bg-[rgba(0,0,0,0.2)]'
        initial={{ scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <a href='#proyectos'>Ver proyectos </a>
        <FontAwesomeIcon icon={faArrowRight} />
      </motion.div>
    </motion.div>
  )
}

export default PortadaTitle
