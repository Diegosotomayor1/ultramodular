import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
const PopupPost = ({ open, setOpen, popupInfo }) => {
  const toggleModal = () => setOpen(!open)
  return (
    <div className='fixed top-0 left-0 z-10 w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,.8)]' style={{ display: open ? 'flex' : 'none' }}>
      <div className='relative bg-white w-5/6 h-[80vh] '>
        <div className='relativew-full h-full'>
          <img src={popupInfo.images[0]} alt='' className='object-cover w-full h-full' />
          <div className='absolute bottom-0 left-0 bg-[rgba(0,0,0,0.8)] flex flex-col gap-4 text-white p-5'>
            <h3 className='text-2xl'>{popupInfo.title}</h3>
            <p className='text-sm'>{popupInfo.description}</p>
          </div>
          <div onClick={toggleModal} className='absolute top-0 right-0 bg-red-600 h-10 w-10 flex items-center justify-center text-white cursor-pointer hover:bg-black'>X</div>
          {popupInfo.images.length > 1 && (
            <div>
              <div className='absolute  bg-black text-white rounded-full text-2xl w-12 h-12 flex items-center justify-center top-[50%] left-5 transition-colors hover:text-black hover:bg-greenmodular cursor-pointer'>
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
              <div className='absolute  bg-black text-white rounded-full text-2xl w-12 h-12 flex items-center justify-center top-[50%] right-5 transition-colors hover:text-black hover:bg-greenmodular cursor-pointer'>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default PopupPost
