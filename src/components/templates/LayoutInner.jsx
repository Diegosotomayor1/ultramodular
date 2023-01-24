const LayoutInner = ({ children }) => {
  return (
    <div className='relative text-white flex flex-col md:flex-row justify-around items-center mt-10 w-full gap-10'>
      {children}
    </div>
  )
}

export default LayoutInner
