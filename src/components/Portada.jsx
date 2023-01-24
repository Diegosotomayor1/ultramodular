import Formulario from '../components/Formulario'
import PortadaTitle from '../components/PortadaTitle'
import LayoutInner from './templates/LayoutInner'
const Portada = () => {
  return (
    <div
      className=' w-full h-screen bg-cover bg-center'
      style={{ backgroundImage: "url('portada-01.jpg')" }}
    >
      <div className='overlay_opacity bg-[rgba(0,0,0,0.84)] flex w-full h-full  p-5'>
        <LayoutInner>
          <PortadaTitle />
          <Formulario />
        </LayoutInner>
      </div>
    </div>
  )
}

export default Portada
