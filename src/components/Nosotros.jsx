import HeadSection from '../components/HeadSection'
import LayoutInner from '../components/templates/LayoutInner'
import Caracteristicas from './Caracteristicas'
const Nosotros = () => {
  return (
    <div className='relative flex items-center min-h-screen'>
      <img
        src='plano.png'
        alt=''
        className='w-full absolute top-40 opacity-25 h-[80vh] object-cover'
      />
      <HeadSection title='Nosotros' />
      <LayoutInner>
        <div className='flex flex-col gap-6 md:w-1/3 mt-20 p-5'>
          <h5 className='text-greenmodular text-lg'>Nosotros</h5>
          <h2 className='text-3xl '>Arquitectura creativa y modular</h2>
          <p className='text-xs font-thin  leading-8'>
            Somos ULTRAMODULAR E.I.R.L, una empresa especializada en servicios
            de arquitectura comercial, con enfoque en el desarrollo modular de
            los espacios y elementos con el objetivo de brindar un producto
            eficiente.
          </p>
          <div className='years_experience flex flex-row items-center gap-4'>
            <h4 className='text-8xl font-light p-5 border-8 border-greenmodular'>
              6
            </h4>
            <h5 className='text-2xl font-normal'>
              Años <br />
              de experiencia
            </h5>
          </div>
        </div>
        <div className='md:w-1/3 md:mt-20 p-5'>
          <Caracteristicas />
        </div>
      </LayoutInner>
    </div>
  )
}

export default Nosotros
