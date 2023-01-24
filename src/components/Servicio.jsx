import { useState } from 'react'

const Servicio = ({ title, descripcion, img, setInfoRecolected }) => {
  const [serviceHover, setServiceHover] = useState(false)
  return (
    <div
      onMouseEnter={() => { setServiceHover(true) }}
      onMouseLeave={() => { setServiceHover(false) }}
      className='relative w-[300px] h-[60vh] xl:w-[380px] xl:h-[70vh] 3xl:w-[450px] flex flex-col justify-end bg-cover bg-center mx-auto'
      style={{ backgroundImage: 'url(' + img + ')' }}
    >
      <h3 className='absolute bottom-10 w-full py-4 px-5 bg-[#0a0a0a] text-white'>
        {title}
      </h3>
      <div className={serviceHover ? 'flex flex-col justify-center items-center gap-8 absolute top-0 w-full h-full bg-[rgba(0,0,0,0.8)] transition-all' : 'flex flex-col justify-center items-center gap-8 hidden absolute top-0 w-full h-full bg-black transition-all'}>
        <p onClick={() => setInfoRecolected({ title, description: descripcion, images: [img] })} className='p-5 flex items-center justify-center rounded-full border-2 border-white cursor-pointer hover:bg-[rgba(255,255,255,0.2)] text-white'>Ver más + </p>
      </div>
    </div>
  )
}

export default Servicio
