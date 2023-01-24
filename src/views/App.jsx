import Portada from '../components/Portada'
import Nosotros from '../components/Nosotros'
import Servicios from '../components/Servicios'
import Proyectos from '../components/Proyectos'
import Marcas from '../components/Marcas'
import PopupPost from '../components/PopupPost'
import { useState } from 'react'
const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const [popupInfo, setPopupInfo] = useState({
    title: '',
    description: '',
    images: []
  })
  const setInfoRecolected = ({ title, description, images }) => {
    setOpenModal(true)
    setPopupInfo({
      title,
      description,
      images
    })
  }
  return (
    <div className='bg-[#0A0A0A]'>
      <Portada />
      <Nosotros />
      <Servicios setInfoRecolected={setInfoRecolected} />
      <Proyectos setInfoRecolected={setInfoRecolected} />
      <Marcas />
      <PopupPost open={openModal} setOpen={setOpenModal} popupInfo={popupInfo} />
    </div>
  )
}

export default App
