import { useState } from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
const Proyecto = ({ title, description, img, setInfoRecolected }) => {
  const [proyectoHover, setProyectoHover] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='relative flex flex-col justify-end  bg-center bg-cover h-[300px]'
      style={{ backgroundImage: `url(${img})` }}
      onMouseEnter={() => { setProyectoHover(true) }}
      onMouseLeave={() => { setProyectoHover(false) }}
    >
      <div className='bg-[rgba(0,0,0,0.8)] p-5 flex justify-between items-center'>
        <h3 className='text-white text-xl'>{title}</h3>
        <button
          className='text-white text-xs font-thin' onClick={() => setInfoRecolected({ title, description, images: [img] })}
        >
          Ver proyecto &nbsp;
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <div className={proyectoHover ? 'flex flex-col justify-center items-center gap-8 absolute top-0 w-full h-full bg-greenmodular bg-opacity-70 transition-all' : 'hidden flex flex-col justify-center items-center gap-8  absolute top-0 w-full h-full bg-black transition-all'} onClick={() => setInfoRecolected({ title, description, images: [img] })}>
        <p className='p-5 flex items-center justify-center rounded-full border-2 border-white cursor-pointer text-white hover:bg-[rgba(255,255,255,0.2)]'>Ver proyecto </p>
      </div>
    </motion.div>
  )
}

export default Proyecto
