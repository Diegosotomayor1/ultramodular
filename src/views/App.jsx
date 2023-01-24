import Portada from '../components/Portada'
import Nosotros from '../components/Nosotros'
import Servicios from '../components/Servicios'
import Proyectos from '../components/Proyectos'
import Marcas from '../components/Marcas'
const App = () => {
  return (
    <div className='bg-[#0A0A0A]'>
      <Portada />
      <Nosotros />
      <Servicios />
      <Proyectos />
      <Marcas />
    </div>
  )
}

export default App
