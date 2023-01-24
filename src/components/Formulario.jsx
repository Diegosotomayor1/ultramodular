import React from 'react'

const Formulario = () => {
  return (
    <div className='bg-[rgba(0,0,0,0.5)] hidden md:flex flex-col p-8 px-10 '>
      <h3 className=' font-normal text-3xl text-greenmodular mb-2'>
        Contáctanos
      </h3>
      <p className='text-sm font-thin'>Pide una cotización</p>
      <form action='' id='formulario' className='flex flex-col mt-5 gap-4'>
        <input
          type='text'
          placeholder='Nombres'
          className='border-2 border-greenmodular bg-transparent text-white px-8 py-3 rounded-3xl placeholder:text-white'
          name='nombres'
        />
        <input
          type='text'
          placeholder='Correo'
          className='border-2 border-greenmodular bg-transparent text-white px-8 py-3 rounded-3xl placeholder:text-white '
          name='correo'
        />
        <textarea
          placeholder='Mensaje'
          className='border-2 border-greenmodular bg-transparent text-white px-8 py-3 rounded-3xl placeholder:text-white '
          name='mensaje'
          rows='5'
        />
      </form>
      <button
        form='formulario'
        type='submit'
        className='bg-greenmodular text-black w-fit px-5 py-2 mt-4 transition-colors hover:bg-white '
      >
        Enviar
      </button>
    </div>
  )
}

export default Formulario
