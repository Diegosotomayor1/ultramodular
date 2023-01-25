import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { send } from '@emailjs/browser'

const Formulario = () => {
  const [form, setForm] = useState({
    nombres: '',
    correo: '',
    mensaje: ''
  })
  const [statusForm, setStatusForm] = useState({
    message: '',
    type: ''
  })
  const emailAPI = async (e) => {
    e.preventDefault()
    try {
      await send('service_m3spmqa', 'template_alzs9q4', form, 'G_Xcl3JLPpudcMZah')
      setStatusForm({
        message: 'Se envió correctamente',
        type: 'green'
      })
    } catch (error) {
      setStatusForm({
        message: 'Hubo un problema, envialo nuevamente en unos momentos',
        type: 'red'
      })
    }
    setForm({
      nombres: '',
      correo: '',
      mensaje: ''
    })
    setTimeout(() => {
      setStatusForm({
        message: '',
        type: ''
      })
    }, 2500)
  }
  return (
    <motion.div
      className='bg-[rgba(0,0,0,0.5)] hidden md:flex flex-col p-8 px-10 '
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1 }}
    >
      <h3 className=' font-normal text-3xl text-greenmodular mb-2'>
        Contáctanos
      </h3>
      <p className='text-sm font-thin'>Pide una cotización</p>
      <form
        action=''
        onSubmit={emailAPI}
        id='formulario'
        className='flex flex-col mt-5 gap-4'
      >
        <input
          type='text'
          value={form.nombres}
          placeholder='Nombres'
          className='border-2 border-greenmodular bg-transparent text-white px-8 py-3 rounded-3xl placeholder:text-white'
          name='nombres'
          onChange={(e) => {
            setForm({
              ...form,
              nombres: e.target.value
            })
          }}
        />
        <input
          type='text'
          placeholder='Correo'
          value={form.correo}
          className='border-2 border-greenmodular bg-transparent text-white px-8 py-3 rounded-3xl placeholder:text-white '
          name='correo'
          onChange={(e) => setForm({
            ...form,
            correo: e.target.value
          })}
        />
        <textarea
          placeholder='Mensaje'
          className='border-2 border-greenmodular bg-transparent text-white px-8 py-3 rounded-3xl placeholder:text-white '
          name='mensaje'
          value={form.mensaje}
          rows='5'
          onChange={(e) => setForm({
            ...form,
            mensaje: e.target.value
          })}
        />
      </form>
      <button
        form='formulario'
        type='submit'
        className='bg-greenmodular text-black w-fit px-5 py-2 mt-4 transition-colors hover:bg-white '
      >
        Enviar
      </button>
      {statusForm.message && (
        <div className='mt-5  text-center p-2 text-xs' style={{ backgroundColor: statusForm.type }}>
          {statusForm.message}
        </div>
      )}
    </motion.div>
  )
}

export default Formulario
