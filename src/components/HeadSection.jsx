import React from 'react'

const HeadSection = ({ title }) => {
  return (
    <div className='absolute top-0 w-full'>
      <div className='headsection w-full flex justify-end mt-20'>
        <div className='w-full md:w-1/2 bg-greenmodular  flex justify-start'>
          <h3 className='w-full px-5  md:w-4/5 flex items-center justify-end font-normal text-2xl text-black'>
            {title}
          </h3>
        </div>
      </div>
      <hr className='w-full h-1 border-none bg-greenmodular' />
    </div>
  )
}

export default HeadSection
