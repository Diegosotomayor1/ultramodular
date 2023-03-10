import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
const Header = () => {
  const [scroll, setScroll] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    // Agregando un event listener para el evento de scroll
    window.addEventListener('scroll', handleScroll)
    // Removiendo el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // Manejador del evento de clic del botón
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleScroll = () => {
    setScroll(window.pageYOffset)
  }
  const navbarStyle = {
    backgroundColor: scroll > 50 ? '#0A0A0A' : 'transparent'
  }
  return (
    <BrowserRouter>
      <motion.nav
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className='fixed mx-auto w-full  py-2.5 px-5 rounded z-10'
        style={navbarStyle}
      >
        <div className='relative container w-full md:w-5/6 flex  items-center justify-between mx-auto'>
          <a href='/' className='flex items-center'>
            <img
              src='logo.png'
              className=' w-32 mr-3'
              alt='Logo Ultramodular'
            />
          </a>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            onClick={handleClick}
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden '
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <div
            className={
              isOpen
                ? 'absolute top-10 bg-[rgba(0,0,0,0.8)] w-full md:block md:w-auto '
                : 'hidden w-full md:block md:w-auto !bg-transparent'
            }
            id='navbar-default'
          >
            <ul className='md:flex flex-col p-4 mt-4 border !bg-transparent border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:!bg-transparent md:text-white md:p-0 dark:text-white'
                  aria-current='page'
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href='#nosotros'
                  className='block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href='#servicios'
                  className='block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  to='#'
                  className='block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Moviliario
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </BrowserRouter>
  )
}

export default Header
