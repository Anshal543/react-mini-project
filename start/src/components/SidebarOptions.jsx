import React from 'react'

const SidebarOptions = ({Img,title}) => {
  return (
    <div className='w-[90%] my-2  py-2 hover:bg-gray-400 transition rounded-md cursor-pointer'>
       
       <Img className='text-white mx-auto' size={30} />
       <h2 className='text-center text-white'> {title} </h2>
    </div>
  )
}

export default SidebarOptions