import React from 'react'
import { motion } from 'framer-motion'
const Caracteristica = ({ nombre, description, img }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-center justify-center'
    >
      <img src={img} alt='' width='150px' />
      <h3 className='text-xl'>{nombre}</h3>
      <p className='text-xs font-thin mt-2 '>{description}</p>
    </motion.div>
  )
}

export default Caracteristica
